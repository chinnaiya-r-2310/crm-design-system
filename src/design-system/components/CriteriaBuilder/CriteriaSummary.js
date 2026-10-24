import './CriteriaSummary.css';
import { Tooltip } from '../Tooltip/Tooltip';
import { Edit, Delete } from '../../foundations/icons/Icons';

/**
 * CriteriaSummary — read-only view of criteria built with CriteriaBuilder.
 * Figma: Pascal Stone node 79998-20593.
 *
 * Variants
 *   standard — numbered "Field OPERATOR Value" rows + Criteria Pattern.
 *   nested   — rows may be module relations ("Accounts WITH Deals") that hold
 *              their own numbered criteria and pattern, drawn under a guide line.
 *              Optional `sections` (e.g. Primary Module / Related Module) are
 *              joined by an AND / OR divider.
 *
 * Appearance
 *   card    — tinted background + border (default)
 *   outline — border only
 *   plain   — no frame
 *
 * Row shapes
 *   condition: { field, operator, value?, module?, valueModule?, keyword? }
 *   relation:  { module, relation: 'WITH' | 'WITHOUT', relatedModule, criteria: Row[], pattern? }
 *
 * Hover actions: pass `onEdit` and/or `onDelete` to show the floating
 * edit / delete pill in the top corner (card and outline appearances).
 */

const KEYWORD_VALUES = {
  '${EMPTY}': 'EMPTY',
  '${NOTEMPTY}': 'NOT EMPTY',
};

function Chip({ children }) {
  return <span className="criteria-summary__chip">{children}</span>;
}

function Pattern({ pattern, nested }) {
  if (!pattern) return null;
  return (
    <div className={`criteria-summary__pattern${nested ? ' criteria-summary__pattern--nested' : ''}`}>
      <span className="criteria-summary__pattern-label">Criteria Pattern</span>
      <span className="criteria-summary__pattern-value">{pattern}</span>
    </div>
  );
}

function ConditionContent({ row }) {
  const keyword = KEYWORD_VALUES[row.value];
  const valueIsKeyword = row.keyword || Boolean(keyword);
  const hasValue = row.value !== undefined && row.value !== null && row.value !== '';
  return (
    <span className="criteria-summary__content">
      {row.module && <Chip>{row.module}</Chip>}
      <span className="criteria-summary__field">{row.field}</span>
      <span className="criteria-summary__operator">{row.operator}</span>
      {row.valueModule && <Chip>{row.valueModule}</Chip>}
      {hasValue && (
        <span className={valueIsKeyword ? 'criteria-summary__operator' : 'criteria-summary__value'}>
          {keyword ?? row.value}
        </span>
      )}
    </span>
  );
}

function RelationRow({ row, index }) {
  return (
    <li className="criteria-summary__relation">
      <div className="criteria-summary__row criteria-summary__row--chips">
        <span className="criteria-summary__index">{index}</span>
        <span className="criteria-summary__content">
          <Chip>{row.module}</Chip>
          <span className="criteria-summary__operator">{row.relation}</span>
          <Chip>{row.relatedModule}</Chip>
        </span>
      </div>
      {row.criteria?.length > 0 && (
        <div className="criteria-summary__branch">
          <div className="criteria-summary__branch-body">
            <RowList rows={row.criteria} />
            <Pattern pattern={row.pattern} nested />
          </div>
        </div>
      )}
    </li>
  );
}

function RowList({ rows }) {
  return (
    <ol className="criteria-summary__list">
      {rows.map((row, i) =>
        row.relation ? (
          <RelationRow key={row.id ?? i} row={row} index={i + 1} />
        ) : (
          <li
            key={row.id ?? i}
            className={`criteria-summary__row${row.module || row.valueModule ? ' criteria-summary__row--chips' : ''}`}
          >
            <span className="criteria-summary__index">{i + 1}</span>
            <ConditionContent row={row} />
          </li>
        ),
      )}
    </ol>
  );
}

function Actions({ onEdit, onDelete }) {
  if (!onEdit && !onDelete) return null;
  return (
    <div className="criteria-summary__actions">
      {onEdit && (
        <Tooltip content="Edit" placement="top" followCursor>
          <button type="button" className="criteria-summary__action" aria-label="Edit criteria" onClick={onEdit}>
            <Edit aria-hidden="true" />
          </button>
        </Tooltip>
      )}
      {onDelete && (
        <Tooltip content="Delete" placement="top" followCursor>
          <button
            type="button"
            className="criteria-summary__action criteria-summary__action--delete"
            aria-label="Delete criteria"
            onClick={onDelete}
          >
            <Delete aria-hidden="true" />
          </button>
        </Tooltip>
      )}
    </div>
  );
}

export function CriteriaSummary({
  variant = 'standard',
  appearance = 'card',
  rows = [],
  pattern,
  sections,
  sectionConnector = 'AND',
  onEdit,
  onDelete,
  className = '',
  style,
}) {
  const classes = [
    'criteria-summary',
    `criteria-summary--${variant}`,
    `criteria-summary--${appearance}`,
    onEdit || onDelete ? 'criteria-summary--has-actions' : '',
    className,
  ].filter(Boolean).join(' ');

  const body = sections?.length ? (
    sections.map((section, i) => (
      <div key={section.title ?? i} className="criteria-summary__section-wrap">
        {i > 0 && (
          <div className="criteria-summary__divider" role="separator">
            <span className="criteria-summary__divider-label">{sectionConnector}</span>
          </div>
        )}
        <section className="criteria-summary__section">
          {section.title && <h4 className="criteria-summary__section-title">{section.title}</h4>}
          <div className="criteria-summary__section-body">
            <RowList rows={section.rows} />
            <Pattern pattern={section.pattern} />
          </div>
        </section>
      </div>
    ))
  ) : (
    <>
      <RowList rows={rows} />
      <Pattern pattern={pattern} />
    </>
  );

  return (
    <div className={classes} style={style}>
      {body}
      {appearance !== 'plain' && <Actions onEdit={onEdit} onDelete={onDelete} />}
    </div>
  );
}

export default CriteriaSummary;
