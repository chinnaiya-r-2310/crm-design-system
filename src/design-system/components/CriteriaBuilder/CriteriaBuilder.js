import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './CriteriaBuilder.css';
import { Dropdown } from '../Dropdown/Dropdown';
import { Input } from '../Input/Input';
import { DateTimeInput } from '../Input/DateTimeInput';
import { MessageBox } from '../MessageBox/MessageBox';
import {
  CriteriaMinus,
  CriteriaPlus,
  HelpCircle,
  Check,
  CloseSmall,
} from '../../foundations/icons/Icons';

const CRITERIA_LIMIT = 25;

/**
 * Builds the criteria pattern expression from the current rows.
 * Wraps sub-expressions in parentheses whenever the connector type changes,
 * matching standard boolean precedence grouping (e.g. AND before OR).
 *
 * Examples:
 *   [AND, AND]       → "1 and 2 and 3"
 *   [AND, OR, AND]   → "( ( 1 and 2 ) or 3 ) and 4"
 */
function generatePattern(rows) {
  if (rows.length === 0) return '';
  if (rows.length === 1) return '1';

  let expr = '1';
  for (let i = 1; i < rows.length; i++) {
    const conn = rows[i - 1].connector.toLowerCase();
    expr = `( ${expr} ${conn} ${i + 1} )`;
  }
  return expr;
}

/** Sentinel values displayed when operator is "is empty" / "is not empty". */
const EMPTY_VALUE    = '${EMPTY}';
const NOTEMPTY_VALUE = '${NOTEMPTY}';

/**
 * Parses a criteria pattern such as "1 and ( 2 OR 3 )".
 * Returns normalised text, the highest criterion number, and the connector that
 * follows each criterion number (index 0 = between 1 and 2), or an error message.
 */
function parsePattern(text) {
  const tokens = text.toLowerCase().match(/\d+|and|or|\(|\)|\S+/g) ?? [];
  if (tokens.length === 0) return { error: 'Enter a criteria pattern' };
  const bad = tokens.find(t => !/^(\d+|and|or|\(|\))$/.test(t));
  if (bad) return { error: `"${bad}" is not allowed. Use numbers, and, or, ( )` };
  let depth = 0;
  for (const t of tokens) {
    if (t === '(') depth += 1;
    if (t === ')') depth -= 1;
    if (depth < 0) return { error: 'Brackets do not match' };
  }
  if (depth !== 0) return { error: 'Brackets do not match' };
  const flat = tokens.filter(t => t !== '(' && t !== ')');
  for (let i = 0; i < flat.length; i++) {
    const isNumber = /^\d+$/.test(flat[i]);
    if (isNumber !== (i % 2 === 0)) return { error: 'Use "and" / "or" between each number' };
  }
  if (flat.length % 2 === 0) return { error: 'The pattern must end with a number' };
  const numbers = flat.filter((_, i) => i % 2 === 0).map(Number);
  if (numbers.some(n => n < 1)) return { error: 'Numbers start from 1' };
  const max = Math.max(...numbers);
  const missing = Array.from({ length: max }, (_, i) => i + 1).find(n => !numbers.includes(n));
  if (missing) return { error: `Criterion ${missing} is missing from the pattern` };
  if (max > CRITERIA_LIMIT) return { error: `Use at most ${CRITERIA_LIMIT} criteria` };
  const connectors = {};
  for (let i = 0; i < flat.length - 1; i += 2) connectors[Number(flat[i])] = flat[i + 1].toUpperCase();
  return { text: tokens.join(' '), max, connectors };
}

const isPlaceholderOp = (op) => op === 'is_empty' || op === 'is_not_empty';

/** Derives the CriteriaRow type from field type + operator. */
function getRowType(fieldType, operator) {
  if (fieldType === 'date') {
    return (operator === 'between' || operator === 'not_between') ? 'date-range' : 'date';
  }
  return 'text';
}

export function CriteriaBuilder({
  rows,
  pattern,
  fieldOptions = [],
  operatorOptions = [],
  getOperatorOptions,
  getDefaultOperator,
  onChange,
  onPatternChange,
  placeholder = 'None',
  /** Placeholder for the field picker; falls back to `placeholder`. */
  fieldPlaceholder,
  /** Optional module picker shown before the field (e.g. cross-module criteria). Omit for the standard row. */
  moduleOptions,
  /** Fixed module name shown as plain text before the field (instead of a module picker). */
  moduleLabel,
  /** Width of the value column; defaults to the standard 390px. */
  valueWidth = 390,
}) {
  const [editingPattern, setEditingPattern] = useState(false);
  const [patternDraft, setPatternDraft] = useState(pattern);
  const [showLimitToast, setShowLimitToast] = useState(false);
  const [patternError, setPatternError] = useState('');

  const updateRow = (id, updates) =>
    onChange(rows.map(r => (r.id === id ? { ...r, ...updates } : r)));

  const removeRow = (id) => onChange(rows.filter(r => r.id !== id));

  const newRow = (suffix = '') => ({
    id: `row-${Date.now()}${suffix}`, field: '', operator: '', value: '', type: 'text', connector: 'AND',
    ...(moduleOptions?.length ? { module: moduleOptions[0].value } : {}),
  });

  const addRow = () => {
    if (rows.length >= CRITERIA_LIMIT) {
      setShowLimitToast(true);
      return;
    }
    onChange([...rows, newRow()]);
  };

  // Auto-dismiss the limit toast after 3 seconds
  useEffect(() => {
    if (!showLimitToast) return;
    const t = setTimeout(() => setShowLimitToast(false), 3000);
    return () => clearTimeout(t);
  }, [showLimitToast]);

  // Re-generate the pattern whenever rows are added, removed, or a connector changes.
  // Skip the first render so a saved/loaded pattern is not overwritten on mount.
  // Also skip the update caused by saving an edited pattern, so the typed pattern is kept.
  const isFirstRender = useRef(true);
  const skipRegenerate = useRef(false);
  const connectorKey = rows.map(r => r.connector).join(',');
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    if (skipRegenerate.current) { skipRegenerate.current = false; return; }
    if (!editingPattern) onPatternChange(generatePattern(rows));
  }, [rows.length, connectorKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleConnector = (id) => {
    const row = rows.find(r => r.id === id);
    if (row) updateRow(id, { connector: row.connector === 'AND' ? 'OR' : 'AND' });
  };

  /** Saving applies the pattern back to the rows: the highest number sets the row count
   *  (adding empty rows or dropping trailing ones) and each and/or sets that row's connector. */
  const savePattern = () => {
    const parsed = parsePattern(patternDraft);
    if (parsed.error) { setPatternError(parsed.error); return; }
    const sized = parsed.max > rows.length
      ? [...rows, ...Array.from({ length: parsed.max - rows.length }, (_, i) => newRow(`-${i}`))]
      : rows.slice(0, parsed.max);
    const nextRows = sized.map((r, i) => ({ ...r, connector: parsed.connectors[i + 1] ?? r.connector }));
    const nextKey = nextRows.map(r => r.connector).join(',');
    if (nextRows.length !== rows.length || nextKey !== connectorKey) {
      skipRegenerate.current = true;
      onChange(nextRows);
    }
    onPatternChange(parsed.text);
    setPatternError('');
    setEditingPattern(false);
  };

  const cancelPattern = () => {
    setPatternDraft(pattern);
    setPatternError('');
    setEditingPattern(false);
  };

  return (
    <div className='criteria-builder-root'>
      {rows.map((row, index) => (
        <div key={row.id}>
          {/* ── Row ───────────────────────────────────────────────────────── */}
          <div className='criteria-builder-row'>
            {/* Circle number + connecting lines */}
            {/* AND / OR sits right under the circle (top-aligned), so a tall row
                such as date-range doesn't push it down next to the following row. */}
            <div className={`criteria-builder-circle-col${index < rows.length - 1 ? ' criteria-builder-circle-col--has-conn' : ''}`}>
              {index === 0
                ? <div className='criteria-builder-circle-top-spacer' />
                : <div className='criteria-builder-circle-top-line' />
              }
              <div className='criteria-builder-circle'>{index + 1}</div>
              {index < rows.length - 1 && (
                <>
                  <div className='criteria-builder-conn-lead' />
                  <button
                    className='criteria-builder-conn-btn'
                    onClick={() => toggleConnector(row.id)}
                    aria-label={`Toggle connector, currently ${row.connector}`}
                  >
                    {row.connector}
                  </button>
                  <div className='criteria-builder-circle-conn-line' />
                </>
              )}
            </div>

            {/* Fields */}
            <div className='criteria-builder-fields'>
              {/* Fixed module name — plain text, when moduleLabel is provided */}
              {moduleLabel && !moduleOptions?.length && (
                <span className='criteria-builder-module-label'>{moduleLabel}</span>
              )}

              {/* Module — 150px, only when moduleOptions is provided */}
              {moduleOptions?.length > 0 && (
                <Dropdown
                  layout="vertical"
                  width={150}
                  placeholder={placeholder}
                  value={row.module ?? ''}
                  options={moduleOptions}
                  onChange={v => updateRow(row.id, { module: v })}
                />
              )}

              {/* Field — 200px */}
              <Dropdown
                layout="vertical"
                width={200}
                placeholder={fieldPlaceholder ?? placeholder}
                value={row.field}
                options={fieldOptions}
                error={!!row.errors?.field}
                helperText={row.errors?.field}
                onChange={v => {
                  const ft = fieldOptions.find(f => f.value === v)?.fieldType ?? 'text';
                  const defaultOp = getDefaultOperator?.(ft) ?? '';
                  updateRow(row.id, {
                    field: v,
                    operator: defaultOp,
                    type: getRowType(ft, defaultOp),
                    value: '', valueTime: '', valueTo: '', valueToTime: '',
                  });
                }}
              />

              {/* Operator — 150px */}
              {(() => {
                const ft = fieldOptions.find(f => f.value === row.field)?.fieldType ?? '';
                const rowOperatorOptions = getOperatorOptions ? getOperatorOptions(ft) : operatorOptions;
                return (
                  <Dropdown
                    layout="vertical"
                    width={150}
                    placeholder={placeholder}
                    value={row.operator}
                    options={rowOperatorOptions}
                    disabled={!row.field}
                    error={!!row.errors?.operator}
                    helperText={row.errors?.operator}
                    onChange={v => {
                      const newType = getRowType(ft, v);
                      const newValue =
                        v === 'is_empty'     ? EMPTY_VALUE :
                        v === 'is_not_empty' ? NOTEMPTY_VALUE :
                        isPlaceholderOp(row.operator) ? '' :
                        row.value;
                      updateRow(row.id, {
                        operator: v,
                        type: newType,
                        value: newValue,
                        ...(newType !== 'date-range' ? { valueTo: '', valueToTime: '' } : {}),
                      });
                    }}
                  />
                );
              })()}

              {/* Value — 390px total */}
              {row.type === 'text' && (
                isPlaceholderOp(row.operator) ? (
                  <div className='criteria-builder-empty-value-wrap'>
                    <Input
                      layout="vertical"
                      width={valueWidth}
                      value={row.value}
                      disabled
                    />
                  </div>
                ) : (
                  <Input
                    layout="vertical"
                    width={valueWidth}
                    value={row.value}
                    disabled={!row.operator}
                    error={!!row.errors?.value}
                    helperText={row.errors?.value}
                    onChange={e => updateRow(row.id, { value: e.target.value })}
                  />
                )
              )}

              {row.type === 'date' && (
                isPlaceholderOp(row.operator) ? (
                  <div className='criteria-builder-empty-value-wrap'>
                    <Input
                      layout="vertical"
                      width={valueWidth}
                      value={row.value}
                      disabled
                    />
                  </div>
                ) : (
                  <DateTimeInput
                    width={valueWidth}
                    dateValue={row.value}
                    timeValue={row.valueTime ?? ''}
                    onDateChange={v => updateRow(row.id, { value: v })}
                    onTimeChange={v => updateRow(row.id, { valueTime: v })}
                    error={!!row.errors?.value}
                    helperText={row.errors?.value}
                  />
                )
              )}

              {row.type === 'date-range' && (
                <div className='criteria-builder-date-rows'>
                  <DateTimeInput
                    width={valueWidth}
                    dateValue={row.value}
                    timeValue={row.valueTime ?? ''}
                    onDateChange={v => updateRow(row.id, { value: v })}
                    onTimeChange={v => updateRow(row.id, { valueTime: v })}
                    error={!!row.errors?.value}
                    helperText={row.errors?.value}
                  />
                  <DateTimeInput
                    width={valueWidth}
                    dateValue={row.valueTo ?? ''}
                    timeValue={row.valueToTime ?? ''}
                    onDateChange={v => updateRow(row.id, { valueTo: v })}
                    onTimeChange={v => updateRow(row.id, { valueToTime: v })}
                    error={!!row.errors?.valueTo}
                    helperText={row.errors?.valueTo}
                  />
                </div>
              )}

              {/* Action buttons */}
              <div className='criteria-builder-actions'>
                {rows.length > 1 && (
                  <button
                    className='criteria-builder-remove-btn'
                    onClick={() => removeRow(row.id)}
                    aria-label="Remove row"
                  >
                    <CriteriaMinus />
                  </button>
                )}
                {index === rows.length - 1 && (
                  <button
                    className='criteria-builder-add-btn'
                    onClick={addRow}
                    aria-label="Add row"
                  >
                    <CriteriaPlus />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ── Connector (AND / OR) ─────────────────────────────────────── */}
          {index < rows.length - 1 && (
            /* Spacer only — the AND / OR button and its line live in the row's circle column above. */
            <div className='criteria-builder-connector' aria-hidden='true' />
          )}
        </div>
      ))}

      {/* ── Criteria limit toast (portal, fixed 100px from top, centered) ──── */}
      {showLimitToast && createPortal(
        <div className='criteria-builder-limit-toast'>
          <MessageBox
            variant="info"
            message="Criteria limit exceeded"
            onClose={() => setShowLimitToast(false)}
          />
        </div>,
        document.body
      )}

      {/* ── Criteria Pattern — only shown when 2 or more rows exist ────────── */}
      {rows.length >= 2 && <div className='criteria-builder-pattern'>
        <div className='criteria-builder-pattern-header'>
          <span className='criteria-builder-pattern-label'>Criteria Pattern</span>
          <HelpCircle className='criteria-builder-help-icon' aria-hidden="true" />
        </div>

        {editingPattern ? (
          <div className='criteria-builder-pattern-edit'>
            <div className='criteria-builder-pattern-input-wrap'>
              <Input
                layout="vertical"
                width="100%"
                value={patternDraft}
                error={!!patternError}
                helperText={patternError || undefined}
                aria-label="Criteria pattern"
                onChange={e => { setPatternDraft(e.target.value); setPatternError(''); }}
                onKeyDown={e => {
                  if (e.key === 'Enter') savePattern();
                  if (e.key === 'Escape') cancelPattern();
                }}
                autoFocus
              />
            </div>
            <button className='criteria-builder-pattern-save-btn' onClick={savePattern} aria-label="Save pattern">
              <Check />
            </button>
            <button className='criteria-builder-pattern-cancel-btn' onClick={cancelPattern} aria-label="Cancel">
              <CloseSmall />
            </button>
          </div>
        ) : (
          <div className='criteria-builder-pattern-view'>
            <span className='criteria-builder-pattern-text'>{pattern || '—'}</span>
            <button
              className='criteria-builder-edit-pattern-btn'
              onClick={() => { setPatternDraft(pattern); setEditingPattern(true); }}
            >
              Edit Pattern
            </button>
          </div>
        )}
      </div>}
    </div>
  );
}

export default CriteriaBuilder;
