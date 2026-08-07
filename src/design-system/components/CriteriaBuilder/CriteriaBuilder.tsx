import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './CriteriaBuilder.module.css';
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
function generatePattern(rows: CriteriaRow[]): string {
  if (rows.length === 0) return '';
  if (rows.length === 1) return '1';

  let expr = '1';
  for (let i = 1; i < rows.length; i++) {
    const conn = rows[i - 1].connector.toLowerCase();
    expr = `( ${expr} ${conn} ${i + 1} )`;
  }
  return expr;
}

export interface CriteriaError {
  field?: string;
  operator?: string;
  value?: string;
  valueTo?: string;
}

export interface CriteriaRow {
  id: string;
  field: string;
  operator: string;
  /** Text value, or from-date for date / date-range types. */
  value: string;
  /** Time for the from-date (date / date-range types). */
  valueTime?: string;
  /** To-date string (date-range only). */
  valueTo?: string;
  /** Time for the to-date (date-range only). */
  valueToTime?: string;
  type: 'text' | 'date' | 'date-range';
  /** Connector between THIS row and the next. Ignored on the last row. */
  connector: 'AND' | 'OR';
  errors?: CriteriaError;
}

export interface SelectOption {
  value: string;
  label: string;
  /** For field options: the field's data type. Drives default operator and row type. */
  fieldType?: string;
}

/** Sentinel values displayed when operator is "is empty" / "is not empty". */
const EMPTY_VALUE    = '${EMPTY}';
const NOTEMPTY_VALUE = '${NOTEMPTY}';

const isPlaceholderOp = (op: string) => op === 'is_empty' || op === 'is_not_empty';

/** Derives the CriteriaRow type from field type + operator. */
function getRowType(fieldType: string, operator: string): CriteriaRow['type'] {
  if (fieldType === 'date') {
    return (operator === 'between' || operator === 'not_between') ? 'date-range' : 'date';
  }
  return 'text';
}

export interface CriteriaBuilderProps {
  rows: CriteriaRow[];
  pattern: string;
  fieldOptions?: SelectOption[];
  /** Fallback operator list when getOperatorOptions is not provided. */
  operatorOptions?: SelectOption[];
  /** Returns the operator list for a given field type. Takes precedence over operatorOptions. */
  getOperatorOptions?: (fieldType: string) => SelectOption[];
  /** Returns the default operator value for a given field type. */
  getDefaultOperator?: (fieldType: string) => string;
  onChange: (rows: CriteriaRow[]) => void;
  onPatternChange: (pattern: string) => void;
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
}: CriteriaBuilderProps) {
  const [editingPattern, setEditingPattern] = useState(false);
  const [patternDraft, setPatternDraft] = useState(pattern);
  const [showLimitToast, setShowLimitToast] = useState(false);

  const updateRow = (id: string, updates: Partial<CriteriaRow>) =>
    onChange(rows.map(r => (r.id === id ? { ...r, ...updates } : r)));

  const removeRow = (id: string) => onChange(rows.filter(r => r.id !== id));

  const addRow = () => {
    if (rows.length >= CRITERIA_LIMIT) {
      setShowLimitToast(true);
      return;
    }
    onChange([
      ...rows,
      { id: `row-${Date.now()}`, field: '', operator: '', value: '', type: 'text', connector: 'AND' },
    ]);
  };

  // Auto-dismiss the limit toast after 3 seconds
  useEffect(() => {
    if (!showLimitToast) return;
    const t = setTimeout(() => setShowLimitToast(false), 3000);
    return () => clearTimeout(t);
  }, [showLimitToast]);

  // Re-generate the pattern whenever rows are added, removed, or a connector changes.
  // Skip the first render so a saved/loaded pattern is not overwritten on mount.
  const isFirstRender = useRef(true);
  const connectorKey = rows.map(r => r.connector).join(',');
  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    if (!editingPattern) onPatternChange(generatePattern(rows));
  }, [rows.length, connectorKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleConnector = (id: string) => {
    const row = rows.find(r => r.id === id);
    if (row) updateRow(id, { connector: row.connector === 'AND' ? 'OR' : 'AND' });
  };

  const savePattern = () => {
    onPatternChange(patternDraft);
    setEditingPattern(false);
  };

  const cancelPattern = () => {
    setPatternDraft(pattern);
    setEditingPattern(false);
  };

  return (
    <div className={styles.root}>
      {rows.map((row, index) => (
        <div key={row.id}>
          {/* ── Row ───────────────────────────────────────────────────────── */}
          <div className={styles.row}>
            {/* Circle number + connecting lines */}
            <div className={styles.circleCol}>
              {index === 0
                ? <div className={styles.circleTopSpacer} />
                : <div className={styles.circleTopLine} />
              }
              <div className={styles.circle}>{index + 1}</div>
              {index < rows.length - 1 && (
                <div className={styles.circleConnLine} />
              )}
            </div>

            {/* Fields */}
            <div className={styles.fields}>
              {/* Field — 200px */}
              <Dropdown
                layout="vertical"
                width={200}
                placeholder="None"
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
                    placeholder="None"
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
                  <div className={styles.emptyValueWrap}>
                    <Input
                      layout="vertical"
                      width={390}
                      value={row.value}
                      disabled
                    />
                  </div>
                ) : (
                  <Input
                    layout="vertical"
                    width={390}
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
                  <div className={styles.emptyValueWrap}>
                    <Input
                      layout="vertical"
                      width={390}
                      value={row.value}
                      disabled
                    />
                  </div>
                ) : (
                  <DateTimeInput
                    width={390}
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
                <div className={styles.dateRows}>
                  <DateTimeInput
                    width={390}
                    dateValue={row.value}
                    timeValue={row.valueTime ?? ''}
                    onDateChange={v => updateRow(row.id, { value: v })}
                    onTimeChange={v => updateRow(row.id, { valueTime: v })}
                    error={!!row.errors?.value}
                    helperText={row.errors?.value}
                  />
                  <DateTimeInput
                    width={390}
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
              <div className={styles.actions}>
                {rows.length > 1 && (
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeRow(row.id)}
                    aria-label="Remove row"
                  >
                    <CriteriaMinus />
                  </button>
                )}
                {index === rows.length - 1 && (
                  <button
                    className={styles.addBtn}
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
            <div className={styles.connector}>
              <div className={styles.connectorCol}>
                <div className={styles.connLine} />
                <button
                  className={styles.connBtn}
                  onClick={() => toggleConnector(row.id)}
                  aria-label={`Toggle connector, currently ${row.connector}`}
                >
                  {row.connector}
                </button>
                <div className={styles.connLine} />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* ── Criteria limit toast (portal, fixed 100px from top, centered) ──── */}
      {showLimitToast && createPortal(
        <div className={styles.limitToast}>
          <MessageBox
            variant="info"
            message="Criteria limit exceeded"
            onClose={() => setShowLimitToast(false)}
          />
        </div>,
        document.body
      )}

      {/* ── Criteria Pattern — only shown when 2 or more rows exist ────────── */}
      {rows.length >= 2 && <div className={styles.pattern}>
        <div className={styles.patternHeader}>
          <span className={styles.patternLabel}>Criteria Pattern</span>
          <HelpCircle className={styles.helpIcon} aria-hidden="true" />
        </div>

        {editingPattern ? (
          <div className={styles.patternEdit}>
            <div className={styles.patternInputWrap}>
              <Input
                layout="vertical"
                width="100%"
                value={patternDraft}
                onChange={e => setPatternDraft(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') savePattern();
                  if (e.key === 'Escape') cancelPattern();
                }}
                autoFocus
              />
            </div>
            <button className={styles.patternSaveBtn} onClick={savePattern} aria-label="Save pattern">
              <Check />
            </button>
            <button className={styles.patternCancelBtn} onClick={cancelPattern} aria-label="Cancel">
              <CloseSmall />
            </button>
          </div>
        ) : (
          <div className={styles.patternView}>
            <span className={styles.patternText}>{pattern || '—'}</span>
            <button
              className={styles.editPatternBtn}
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
