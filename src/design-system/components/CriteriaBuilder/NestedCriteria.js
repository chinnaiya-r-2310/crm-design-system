import { Fragment, useState } from 'react';
import './NestedCriteria.css';
import { CriteriaBuilder } from './CriteriaBuilder';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { Dropdown } from '../Dropdown/Dropdown';
import { Switch } from '../Switch/Switch';
import { CriteriaMinus } from '../../foundations/icons/Icons';

/**
 * NestedCriteria — primary-module criteria, an AND connector, then
 * related-module criteria ("Contact with Accounts" + optional nested criteria).
 * UI from the Cross-module Reports Add Filter › Base Filter section.
 *
 * - Specify Criteria card: always open, one criteria row with a module picker.
 * - Related Modules Criteria card: switch (off by default) shows a summary line
 *   when off. Each related row: condition (with / without) + module pickers,
 *   a "Specify Criteria - <Module>" checkbox (disabled until a module is picked)
 *   that reveals a nested CriteriaBuilder. Rows are joined by a clickable
 *   AND / OR connector; minus removes a row (hidden on the last one).
 */

let uid = 0;
const nextId = (prefix) => `${prefix}-${Date.now()}-${(uid += 1)}`;

const emptyRow = (id, module) => ({
  id, field: '', operator: '', value: '', type: 'text', connector: 'AND',
  ...(module ? { module } : {}),
});
const emptyRelated = (id) => ({ id, condition: '', module: '', specify: false, connector: 'AND' });

function Rows({ builderProps, idPrefix, module, moduleOptions, valueWidth }) {
  const [rows, setRows] = useState(() => [emptyRow(`${idPrefix}-1`, module)]);
  const [pattern, setPattern] = useState('1');
  return (
    <CriteriaBuilder
      {...builderProps}
      rows={rows}
      pattern={pattern}
      onChange={setRows}
      onPatternChange={setPattern}
      moduleOptions={moduleOptions}
      valueWidth={valueWidth}
    />
  );
}

function Card({ title, offText, enabled = true, onToggle, children }) {
  return (
    <section className="nested-criteria__card" aria-label={title}>
      <div className="nested-criteria__card-title">
        <h4>{title}</h4>
        {onToggle && (
          <Switch aria-label={`Enable ${title}`} checked={enabled} onChange={(e) => onToggle(e.target.checked)} />
        )}
      </div>
      {enabled ? children : <p className="nested-criteria__card-off">{offText}</p>}
    </section>
  );
}

function RelatedRow({ row, index, isLast, moduleLabel, conditions, modules, builderProps, onChange, onRemove }) {
  const relatedLabel = modules.find((option) => option.value === row.module)?.label ?? '';
  return (
    <div className="nested-criteria__related" data-last={isLast || undefined}>
      <div className="nested-criteria__related-line">
        <span className="nested-criteria__circle">{index + 1}</span>
        <span className="nested-criteria__related-module">{moduleLabel}</span>
        <Dropdown
          layout="vertical"
          width={150}
          triggerAriaLabel={`Related condition ${index + 1}`}
          options={conditions}
          placeholder="Select"
          value={row.condition}
          onChange={(value) => onChange({ ...row, condition: value })}
        />
        <Dropdown
          layout="vertical"
          width={150}
          triggerAriaLabel={`Related module ${index + 1}`}
          options={modules}
          placeholder="Select Module"
          value={row.module}
          onChange={(value) => onChange({ ...row, module: value })}
        />
        {onRemove && (
          <button type="button" className="nested-criteria__related-remove" aria-label={`Remove related module ${index + 1}`} onClick={onRemove}>
            <CriteriaMinus />
          </button>
        )}
      </div>
      <div className="nested-criteria__related-body">
        <Checkbox
          label={relatedLabel ? `Specify Criteria - ${relatedLabel}` : 'Specify Criteria'}
          checked={Boolean(row.module) && row.specify}
          disabled={!row.module}
          onChange={(e) => onChange({ ...row, specify: e.target.checked })}
        />
        {row.module && row.specify && (
          <div className="nested-criteria__nested">
            <Rows key={row.module} builderProps={builderProps} idPrefix={`${row.id}-sub`} />
          </div>
        )}
      </div>
    </div>
  );
}

export function NestedCriteria({
  /** Primary module name shown in related rows, e.g. "Contact". */
  moduleLabel,
  /** Primary module picker options; the first one is preselected. */
  moduleOptions = [],
  /** with / without options. */
  relatedConditions = [],
  /** Related module options (Accounts, Deals…). */
  relatedModules = [],
  fieldOptions = [],
  operatorOptions,
  getOperatorOptions,
  getDefaultOperator,
  placeholder = 'Select',
  fieldPlaceholder = 'Select Field',
  /** Value width for the Specify Criteria row (the module picker makes it longer). */
  valueWidth = 360,
  specifyTitle = 'Specify Criteria',
  relatedTitle = 'Related Modules Criteria',
  relatedOffText = 'It helps to filter record based on related module values.',
  defaultRelatedOn = false,
  className = '',
}) {
  const [relatedOn, setRelatedOn] = useState(defaultRelatedOn);
  const [related, setRelated] = useState(() => [emptyRelated('related-1')]);
  const update = (next) => setRelated((current) => current.map((row) => (row.id === next.id ? next : row)));
  const remove = (id) => setRelated((current) => current.filter((row) => row.id !== id));

  const builderProps = { fieldOptions, operatorOptions, getOperatorOptions, getDefaultOperator, placeholder, fieldPlaceholder };

  return (
    <div className={`nested-criteria ${className}`.trim()}>
      <Card title={specifyTitle}>
        <Rows
          builderProps={builderProps}
          idPrefix="primary"
          module={moduleOptions[0]?.value}
          moduleOptions={moduleOptions.length ? moduleOptions : undefined}
          valueWidth={valueWidth}
        />
      </Card>
      <div className="nested-criteria__and" aria-hidden="true"><span>AND</span></div>
      <Card title={relatedTitle} offText={relatedOffText} enabled={relatedOn} onToggle={setRelatedOn}>
        <div className="nested-criteria__related-list">
          {related.map((row, index) => (
            <Fragment key={row.id}>
              <RelatedRow
                row={row}
                index={index}
                isLast={index === related.length - 1}
                moduleLabel={moduleLabel}
                conditions={relatedConditions}
                modules={relatedModules}
                builderProps={builderProps}
                onChange={update}
                onRemove={related.length > 1 ? () => remove(row.id) : undefined}
              />
              {index < related.length - 1 && (
                <div className="nested-criteria__related-conn">
                  <button
                    type="button"
                    aria-label={`Toggle related connector ${index + 1}, currently ${row.connector}`}
                    onClick={() => update({ ...row, connector: row.connector === 'AND' ? 'OR' : 'AND' })}
                  >
                    {row.connector}
                  </button>
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <div className="nested-criteria__add-condition">
          <Button variant="outline-blue" size="sm" onClick={() => setRelated((current) => [...current, emptyRelated(nextId('related'))])}>
            Add Condition
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default NestedCriteria;
