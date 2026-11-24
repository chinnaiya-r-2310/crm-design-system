import { useMemo, useRef, useState, useId } from 'react';
import './FormulaBuilder.css';
import { Icon } from '../Icon/Icon';
import { Button } from '../Button/Button';
import { Tabs } from '../Tabs/Tabs';
import { Input } from '../Input/Input';
import { Dropdown } from '../Dropdown/Dropdown';
import { Textarea } from '../Textarea/Textarea';
import { Tooltip } from '../Tooltip/Tooltip';

export const OPERATORS = [
  { symbol: '+', label: 'Add', insert: ' + ' },
  { symbol: '−', label: 'Subtract', insert: ' - ' },
  { symbol: '/', label: 'Divide', insert: ' / ' },
  { symbol: '%', label: 'Modulo', insert: ' % ' },
  { symbol: '*', label: 'Multiply', insert: ' * ' },
  { symbol: '^', label: 'Power', insert: ' ^ ' },
  { symbol: '(', label: 'Open parenthesis', insert: '(' },
  { symbol: ')', label: 'Close parenthesis', insert: ')' },
  { symbol: '!=', label: 'Not equal to', insert: ' != ' },
  { symbol: '==', label: 'Equal to', insert: ' == ' },
  { symbol: '<', label: 'Less than', insert: ' < ' },
  { symbol: '>', label: 'Greater than', insert: ' > ' },
  { symbol: '≤', label: 'Less than or equal to', insert: ' <= ' },
  { symbol: '≥', label: 'Greater than or equal to', insert: ' >= ' },
];

export const RETURN_TYPES = [
  { value: 'Decimal', label: 'Decimal' },
  { value: 'Number', label: 'Number' },
  { value: 'Currency', label: 'Currency' },
  { value: 'Percent', label: 'Percent' },
];

const DECIMAL_PLACES = [0, 1, 2, 3, 4, 5, 6].map(n => ({ value: String(n), label: String(n) }));

// Default checks: non-empty, balanced parentheses, no trailing operator.
// Pass a `validate` prop to replace them with server-side or richer checks.
export function validateFormula(formula) {
  const text = formula.trim();
  if (!text) return ['Formula cannot be empty.'];

  const errors = [];
  let depth = 0;
  for (const ch of text) {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (depth < 0) break;
  }
  if (depth !== 0) errors.push('Parentheses are not balanced.');

  if (/[+\-*/%^<>=!]$/.test(text)) errors.push('Formula cannot end with an operator.');
  return errors;
}

function ChevronIcon({ open }) {
  return (
    <span className={`fb-chevron${open ? ' fb-chevron-open' : ''}`} aria-hidden="true">
      <Icon name="ChevronDownFilled" size={8} />
    </span>
  );
}

function ItemList({ groups, query, onInsert }) {
  const [collapsed, setCollapsed] = useState({});
  const q = query.trim().toLowerCase();

  const visibleGroups = useMemo(
    () =>
      groups
        .map(group => ({
          ...group,
          items: group.items.filter(item => !q || item.label.toLowerCase().includes(q)),
        }))
        .filter(group => group.items.length > 0),
    [groups, q],
  );

  if (visibleGroups.length === 0) {
    return <p className="fb-empty">No matches found</p>;
  }

  return visibleGroups.map(group => {
    const isCollapsed = !!collapsed[group.name] && !q;
    const listId = `fb-group-${group.name.replace(/\W+/g, '-')}`;
    return (
      <div key={group.name} className="fb-group">
        <button
          type="button"
          className="fb-group-heading"
          aria-expanded={!isCollapsed}
          aria-controls={listId}
          onClick={() => setCollapsed(c => ({ ...c, [group.name]: !c[group.name] }))}
        >
          <ChevronIcon open={!isCollapsed} />
          {group.name}
        </button>
        {!isCollapsed && (
          <ul id={listId} className="fb-list">
            {group.items.map(item => (
              <li key={item.id} className="fb-item">
                <span className="fb-item-main">
                  {item.icon && <Icon name={item.icon} size={12} aria-hidden="true" />}
                  <span className="fb-item-label">{item.label}</span>
                  {item.description && (
                    <Tooltip content={item.description} placement="top" followCursor>
                      <span className="fb-item-info" tabIndex={0} aria-label={`About ${item.label}`}>
                        <Icon name="Info" size={12} />
                      </span>
                    </Tooltip>
                  )}
                </span>
                <button
                  type="button"
                  className="fb-insert"
                  aria-label={`Insert ${item.label}`}
                  onClick={() => onInsert(item)}
                >
                  Insert
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  });
}

export function FormulaBuilder({
  title = 'New Formula',
  defaultTab = 'fields',
  functions = [],
  fields = [],
  defaultFormula = '',
  defaultReturnType = 'Decimal',
  defaultDecimalPlaces = '2',
  validate = validateFormula,
  onCheckSyntax,
  onCancel,
  onDone,
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [query, setQuery] = useState('');
  const [panelCollapsed, setPanelCollapsed] = useState(false);
  const [formula, setFormula] = useState(defaultFormula);
  const [returnType, setReturnType] = useState(defaultReturnType);
  const [decimalPlaces, setDecimalPlaces] = useState(defaultDecimalPlaces);
  const [errors, setErrors] = useState([]);
  const selection = useRef({ start: null, end: null });
  const titleId = useId();

  const tabs = [
    { id: 'functions', label: 'Functions' },
    { id: 'fields', label: 'Fields' },
  ];

  const rememberSelection = e => {
    selection.current = { start: e.target.selectionStart, end: e.target.selectionEnd };
  };

  const insertText = text => {
    const { start, end } = selection.current;
    const at = start ?? formula.length;
    const stop = end ?? at;
    const next = formula.slice(0, at) + text + formula.slice(stop);
    const caret = at + text.length;
    setFormula(next);
    selection.current = { start: caret, end: caret };
    if (errors.length) setErrors([]);
  };

  const handleCheckSyntax = () => {
    const found = validate(formula);
    setErrors(found);
    onCheckSyntax?.(formula, found);
    return found;
  };

  const handleDone = () => {
    const found = handleCheckSyntax();
    if (found.length === 0) {
      onDone?.({ formula: formula.trim(), returnType, decimalPlaces: Number(decimalPlaces) });
    }
  };

  const listGroups = activeTab === 'functions' ? functions : fields;

  return (
    <section className="fb-root" aria-labelledby={titleId}>
      <h2 id={titleId} className="fb-title">{title}</h2>

      <div className="fb-panels">
        {/* ── Left: functions and fields ── */}
        <aside className={`fb-sidebar${panelCollapsed ? ' fb-sidebar-collapsed' : ''}`} aria-label="Formula elements">
          <div className="fb-sidebar-head">
            {!panelCollapsed && (
              <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} size="md" variant="primary" />
            )}
            <button
              type="button"
              className="fb-collapse-btn"
              aria-label={panelCollapsed ? 'Expand panel' : 'Collapse panel'}
              aria-expanded={!panelCollapsed}
              onClick={() => setPanelCollapsed(c => !c)}
            >
              <span className={`fb-collapse-icon${panelCollapsed ? ' fb-collapse-icon-flipped' : ''}`} aria-hidden="true">
                <Icon name="ChevronDownFilled" size={10} />
              </span>
            </button>
          </div>

          {!panelCollapsed && (
            <div className="fb-sidebar-body">
              <Input
                placeholder="Search"
                aria-label={`Search ${activeTab}`}
                value={query}
                onChange={e => setQuery(e.target.value)}
                width="100%"
                suffix={<Icon name="Search" size={14} />}
              />
              <div className="fb-lists">
                <ItemList
                  key={activeTab}
                  groups={listGroups}
                  query={query}
                  onInsert={item => insertText(item.insert ?? item.label)}
                />
              </div>
            </div>
          )}
        </aside>

        {/* ── Right: operators, editor, options, errors ── */}
        <div className="fb-editor">
          <div className="fb-operators">
            <span className="fb-operators-label">Operators</span>
            <div className="fb-operator-list" role="toolbar" aria-label="Operators">
              {OPERATORS.map(op => (
                <button
                  key={op.label}
                  type="button"
                  className="fb-operator"
                  aria-label={op.label}
                  title={op.label}
                  onClick={() => insertText(op.insert)}
                >
                  {op.symbol}
                </button>
              ))}
            </div>
            <button type="button" className="fb-check-btn" onClick={handleCheckSyntax}>
              Check syntax
            </button>
          </div>

          <div className="fb-formula">
            <Textarea
              aria-label="Formula"
              placeholder="Type your formula here"
              value={formula}
              onChange={e => { setFormula(e.target.value); selection.current = { start: e.target.selectionStart, end: e.target.selectionEnd }; }}
              onSelect={rememberSelection}
              onKeyUp={rememberSelection}
              onClick={rememberSelection}
              width="100%"
              minHeight={220}
              error={errors.length > 0}
              className="fb-formula-input"
            />
          </div>

          <div className="fb-options">
            <Dropdown
              label="Formula Return Type"
              options={RETURN_TYPES}
              value={returnType}
              onChange={setReturnType}
              width={340}
              layout="horizontal"
            />
            <Dropdown
              label="Decimal Places"
              options={DECIMAL_PLACES}
              value={decimalPlaces}
              onChange={setDecimalPlaces}
              width={240}
              layout="horizontal"
            />
          </div>

          <div className="fb-errors" aria-live="polite">
            <h3 className="fb-errors-heading">Errors</h3>
            <div className="fb-errors-body">
              {errors.length === 0 ? (
                <p className="fb-errors-empty">No Results Found</p>
              ) : (
                <ul className="fb-errors-list">
                  {errors.map(msg => <li key={msg}>{msg}</li>)}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="fb-footer">
        <Button variant="default" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" onClick={handleDone}>Done</Button>
      </div>
    </section>
  );
}

export default FormulaBuilder;
