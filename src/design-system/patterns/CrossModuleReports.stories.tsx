import { Fragment, createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { Button } from '../components/Button/Button';
import { Checkbox } from '../components/Checkbox/Checkbox';
import { CriteriaBuilder } from '../components/CriteriaBuilder/CriteriaBuilder';
import { CriteriaSummary } from '../components/CriteriaBuilder/CriteriaSummary';
import type { CriteriaRow } from '../components/CriteriaBuilder/CriteriaBuilder';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Icon } from '../components/Icon/Icon';
import { CriteriaMinus } from '../foundations/icons/Icons';
import { Modal } from '../components/Modal/Modal';
import { MessageBox } from '../components/MessageBox/MessageBox';
import { Switch } from '../components/Switch/Switch';
import { NextGenLeftMenu } from '../components/NextGenLeftMenu/NextGenLeftMenu';
import { Tabs } from '../components/Tabs/Tabs';
import { Tags } from '../components/Tags/Tags';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { WMSBar } from '../components/WMSBar/WMSBar';
import {
  BASE_MODULE, BASE_MODULE_LABEL, BASE_MODULE_OPTIONS, FILTER_FIELDS, RELATED_CONDITIONS, RELATED_MODULES, NUMERIC_OPERATORS, OWNER_COLUMN, PANEL_TABS, REPORT_COLUMNS,
  REPORT_FOLDER, REPORT_GROUPS, REPORT_TITLE, TERRITORIES, TERRITORY_MODES, TEXT_OPERATORS,
} from './CrossModuleReports.data';
import type { ReportGroup, ReportRow, TerritoryOption } from './CrossModuleReports.data';
import './CrmFonts.css';
import './CrossModuleReports.css';

const PREVIEW_NOTE = 'Preview Shown with limited number of rows, Run the report to see actual aggregate values';
const currency = (value: number) => `$${value}`;
const groupTotal = (group: ReportGroup) => group.rows.reduce((sum, row) => sum + row.revenue, 0);

// ─── Header ──────────────────────────────────────────────────────────────────

/** Full-width back arrow from the Figma header ("icon/ back left arrow"). */
function BackArrow() {
  return (
    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6.75 2L0.75 8L6.75 14M1.25 8H15.25" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReportHeader({ onRun, onCancel }: { onRun: () => void; onCancel: () => void }) {
  return (
    <header className="cmr__header">
      <Tooltip content="Back to reports" variant="black" placement="top" followCursor wrapperClassName="cmr__back-wrap">
        <button type="button" className="cmr__back" aria-label="Back to reports" onClick={onCancel}>
          <BackArrow />
        </button>
      </Tooltip>
      <div className="cmr__title">
        <h1>{REPORT_TITLE}</h1>
        <p>{REPORT_FOLDER}</p>
      </div>
      <div className="cmr__actions">
        <Button variant="default" onClick={onCancel}>Cancel</Button>
        <Button variant="default" onClick={onRun}>Run</Button>
        <Button variant="primary" arrow>Save</Button>
        <Tooltip content="Help" variant="black" placement="top" followCursor>
          <button type="button" className="cmr__help" aria-label="Help">
            <Icon name="HelpCircle" size={16} />
          </button>
        </Tooltip>
      </div>
    </header>
  );
}

// ─── Add Filter modal ────────────────────────────────────────────────────────

/** Filter state is kept in a flat snapshot keyed by section (`base:rows`, `quick:pattern`, `territory:mode`, …).
 *  Each open seeds the sections from the last applied snapshot; Apply copies the live values out, Cancel drops them. */
type FilterSnapshot = Record<string, unknown>;
type FilterStoreValue = { initial: FilterSnapshot; write: (key: string, value: unknown) => void; clear: (key: string) => void };
const FilterStore = createContext<FilterStoreValue>({ initial: {}, write: () => {}, clear: () => {} });
function useFilterState<T>(key: string, init: () => T) {
  const store = useContext(FilterStore);
  const [value, setValue] = useState<T>(() => (key in store.initial ? (store.initial[key] as T) : init()));
  const { write, clear } = store;
  useEffect(() => {
    write(key, value);
    return () => clear(key);
  }, [write, clear, key, value]);
  return [value, setValue] as const;
}

const NUMERIC_TYPES = new Set(['number', 'currency', 'percentage', 'date']);
const operatorsFor = (fieldType: string) => (NUMERIC_TYPES.has(fieldType) ? NUMERIC_OPERATORS : TEXT_OPERATORS);
const defaultOperatorFor = (fieldType: string) => {
  if (NUMERIC_TYPES.has(fieldType)) return 'eq';
  return ['email', 'phone', 'lookup', 'picklist'].includes(fieldType) ? 'is' : 'contains';
};
const emptyCriteria = (id: string): CriteriaRow[] => [
  { id, field: '', operator: '', value: '', type: 'text', connector: 'AND' },
];

const FILTER_DESCRIPTIONS = {
  base: 'Records must match these criteria to appear in the report',
  quick: 'Criteria users can adjust while viewing the report',
  territory: 'Select territories to filter records',
};

/** Version 2 copy: modal title, tab names, sub-titles and the left-panel button. */
const V2_MODAL_TITLE = 'Filter Configuration';
const V2_CONFIGURE_LABEL = 'Configure Filters';
const V2_QUICK_DESC = 'Choose the filters to apply by default when viewing this report. Users can adjust them anytime.';
const V2_DESCRIPTIONS = {
  base: 'Define which records to include in the report using fields and related modules.',
  quick: V2_QUICK_DESC,
  territory: V2_QUICK_DESC,
};
const V2_TITLES: Record<'base' | 'quick' | 'territory', string> = { base: 'Report Filters', quick: 'Quick View', territory: 'Territory' };

type OptionalFilter = 'quick' | 'territory';
const OPTIONAL_FILTERS: { value: OptionalFilter; label: string }[] = [
  { value: 'quick', label: 'Quick Filter' },
  { value: 'territory', label: 'Territory Filter' },
];

function FilterHeading({ title, description, onRemove }: { title: string; description: string; onRemove?: () => void }) {
  return (
    <header className="cmr-filter__heading">
      <div className="cmr-filter__title-row">
        <h3>{title}</h3>
        {onRemove && (
          <Button variant="link-red" size="sm" aria-label={`Remove ${title}`} onClick={onRemove}>Remove</Button>
        )}
      </div>
      <p>{description}</p>
    </header>
  );
}

function CriteriaSection({ title, description, idPrefix, onRemove, showHeading = true }: { title: string; description: string; idPrefix: string; onRemove?: () => void; showHeading?: boolean }) {
  return (
    <section className="cmr-filter__section" aria-label={title}>
      {showHeading && <FilterHeading title={title} description={description} onRemove={onRemove} />}
      <CriteriaRows idPrefix={idPrefix} />
    </section>
  );
}

type ModuleCriteriaRow = CriteriaRow & { module?: string };
type RelatedRow = { id: string; condition: string; module: string; specify: boolean; connector: 'AND' | 'OR' };
/** Related rows (the first one and any added with Add Condition) start empty; the criteria part unlocks once a module is picked. */
const emptyRelatedRow = (id: string): RelatedRow => ({ id, condition: '', module: '', specify: false, connector: 'AND' });

/** Criteria builder with its own rows and pattern state. */
/** `onEmpty`: when given, the only row also gets a minus; removing it resets the rows and calls `onEmpty`. */
function CriteriaRows({ idPrefix, withModule = false, moduleLabel, valueWidth, onEmpty }: { idPrefix: string; withModule?: boolean; moduleLabel?: string; valueWidth?: number; onEmpty?: () => void }) {
  const initialRows = () => emptyCriteria(`${idPrefix}-1`).map((row) => (withModule ? { ...row, module: BASE_MODULE } : row));
  const [rows, setRows] = useFilterState<ModuleCriteriaRow[]>(`${idPrefix}:rows`, initialRows);
  const [pattern, setPattern] = useFilterState(`${idPrefix}:pattern`, () => '1');
  const handleRowsChange = (next: ModuleCriteriaRow[]) => {
    if (onEmpty && next.length === 0) {
      // Last criteria removed: start fresh next time and go back to the "Add criteria" button.
      setRows(initialRows());
      setPattern('1');
      onEmpty();
      return;
    }
    setRows(next);
  };
  return (
    <CriteriaBuilder
      rows={rows}
      pattern={pattern}
      fieldOptions={FILTER_FIELDS}
      getOperatorOptions={operatorsFor}
      getDefaultOperator={defaultOperatorFor}
      onChange={handleRowsChange}
      onPatternChange={setPattern}
      placeholder="Select"
      fieldPlaceholder="Select Field"
      moduleOptions={withModule ? BASE_MODULE_OPTIONS : undefined}
      moduleLabel={moduleLabel}
      valueWidth={valueWidth}
      allowRemoveLast={Boolean(onEmpty)}
    />
  );
}

/** Off state shows a one-line summary (reference image); on state shows the criteria. */
/** Cards without a toggle (Specify Criteria) are always open. */
function CriteriaCard({ title, offText, enabled = true, onToggle, onRemove, children }: { title: string; offText?: string; enabled?: boolean; onToggle?: (value: boolean) => void; onRemove?: () => void; children: ReactNode }) {
  return (
    <section className="cmr-filter__card" aria-label={title}>
      <div className="cmr-filter__card-title">
        <h4>{title}</h4>
        {onToggle && (
          <Switch
            aria-label={`Enable ${title}`}
            checked={enabled}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onToggle(event.target.checked)}
          />
        )}
        {onRemove && (
          <Button variant="link-red" size="sm" aria-label={`Remove ${title}`} onClick={onRemove}>Remove</Button>
        )}
      </div>
      {enabled ? children : <p className="cmr-filter__card-off">{offText}</p>}
    </section>
  );
}

function RelatedModuleRow({ row, index, isLast, onChange, onRemove }: { row: RelatedRow; index: number; isLast: boolean; onChange: (row: RelatedRow) => void; onRemove?: () => void }) {
  const moduleLabel = RELATED_MODULES.find((option) => option.value === row.module)?.label ?? '';
  return (
    <div className="cmr-filter__related" data-last={isLast || undefined}>
      <div className="cmr-filter__related-line">
        <span className="cmr-filter__circle">{index + 1}</span>
        <span className="cmr-filter__related-module">{BASE_MODULE_LABEL}</span>
        <Dropdown
          layout="vertical"
          width={150}
          triggerAriaLabel={`Related condition ${index + 1}`}
          options={RELATED_CONDITIONS}
          placeholder="Select"
          value={row.condition}
          onChange={(value: string) => onChange({ ...row, condition: value })}
        />
        <Dropdown
          layout="vertical"
          width={150}
          triggerAriaLabel={`Related module ${index + 1}`}
          options={RELATED_MODULES}
          placeholder="Select Module"
          value={row.module}
          onChange={(value: string) => onChange({ ...row, module: value })}
        />
        {onRemove && (
          <button type="button" className="cmr-filter__related-remove" aria-label={`Remove related module ${index + 1}`} onClick={onRemove}>
            <CriteriaMinus />
          </button>
        )}
      </div>
      <div className="cmr-filter__related-body">
        {/* Disabled until a module is picked; the label then names it. */}
        <Checkbox
          label={moduleLabel ? `Specify Criteria - ${moduleLabel}` : 'Specify Criteria'}
          checked={Boolean(row.module) && row.specify}
          disabled={!row.module}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange({ ...row, specify: event.target.checked })}
        />
        {row.module && row.specify && (
          <div className="cmr-filter__nested">
            <CriteriaRows key={row.module} idPrefix={`base:${row.id}`} />
          </div>
        )}
      </div>
    </div>
  );
}

/** Base Filter, laid out like the reference: primary-module criteria, AND, then related modules criteria. */
/** `layout`:
 *  - `cards` (Version 1): two cards joined by AND, related modules switched on/off.
 *  - `plain` (Version 1.1): one bordered card; related modules added with a ghost button, removed with "Remove".
 *  - `fields` (Version 2): one bordered card titled "Filter by Fields" / "Filter by Related Module"; no module picker or
 *    module label in Filter by Fields; related modules always shown, starting with just Add Condition, and every row (even the first) has a minus. */
type BaseLayout = 'cards' | 'plain' | 'fields';
function BaseFilterSection({ showHeading = true, layout = 'cards' }: { showHeading?: boolean; layout?: BaseLayout }) {
  const isFields = layout === 'fields';
  // Version 2: Filter by Fields opens with one criteria; removing the last one shows "Add criteria".
  const [fieldsOn, setFieldsOn] = useFilterState('base:fieldsOn', () => true);
  const [relatedOnState, setRelatedOn] = useFilterState('base:relatedOn', () => isFields);
  const relatedOn = isFields || relatedOnState;
  const [related, setRelated] = useFilterState<RelatedRow[]>('base:related', () => (isFields ? [] : [emptyRelatedRow('related-1')]));
  const updateRelated = (next: RelatedRow) => setRelated((current) => current.map((row) => (row.id === next.id ? next : row)));
  const removeRelated = (id: string) => setRelated((current) => current.filter((row) => row.id !== id));
  const relatedContent = (
    <>
      <div className="cmr-filter__related-list">
        {related.map((row, index) => (
          <Fragment key={row.id}>
            <RelatedModuleRow
              row={row}
              index={index}
              isLast={index === related.length - 1}
              onChange={updateRelated}
              onRemove={isFields || related.length > 1 ? () => removeRelated(row.id) : undefined}
            />
            {/* AND by default; click to switch to OR. No pattern for related modules. */}
            {index < related.length - 1 && (
              <div className="cmr-filter__related-conn">
                <button
                  type="button"
                  aria-label={`Toggle related connector ${index + 1}, currently ${row.connector}`}
                  onClick={() => updateRelated({ ...row, connector: row.connector === 'AND' ? 'OR' : 'AND' })}
                >
                  {row.connector}
                </button>
              </div>
            )}
          </Fragment>
        ))}
      </div>
      <div className="cmr-filter__add-condition">
        <Button variant="outline-blue" size="sm" onClick={() => setRelated((current) => [...current, emptyRelatedRow(`related-${Date.now()}`)])}>
          {isFields ? 'Add criteria' : 'Add Condition'}
        </Button>
      </div>
    </>
  );
  return (
    <section className={layout === 'cards' ? 'cmr-filter__section' : 'cmr-filter__section cmr-filter__section--plain'} aria-label="Base Filter">
      {showHeading && <FilterHeading title="Base Filter" description={FILTER_DESCRIPTIONS.base} />}
      {isFields ? (
        /* Version 2: one bordered card, both groups always shown. */
        <div className="cmr-filter__card cmr-filter__combined cmr-filter__combined--fields">
          <CriteriaCard title="Filter by Fields">
            {fieldsOn ? (
              <CriteriaRows idPrefix="base" onEmpty={() => setFieldsOn(false)} />
            ) : (
              <div className="cmr-filter__add-condition">
                <Button variant="outline-blue" size="sm" aria-label="Add criteria for fields" onClick={() => setFieldsOn(true)}>Add criteria</Button>
              </div>
            )}
          </CriteriaCard>
          <CriteriaCard title="Filter by Related Modules">
            {relatedContent}
          </CriteriaCard>
        </div>
      ) : layout === 'plain' ? (
        /* Version 1.1: Specify Criteria and Related Modules Criteria combined in one bordered card. */
        <div className="cmr-filter__card cmr-filter__combined">
          <CriteriaCard title="Specify Criteria">
            <CriteriaRows idPrefix="base" withModule valueWidth={360} />
          </CriteriaCard>
          {relatedOn ? (
            <CriteriaCard title="Related Modules Criteria" onRemove={() => setRelatedOn(false)}>
              {relatedContent}
            </CriteriaCard>
          ) : (
            <div className="cmr-filter__related-add">
              <Button variant="ghost-blue" size="md" onClick={() => setRelatedOn(true)}>Filter by Related Module</Button>
            </div>
          )}
        </div>
      ) : (
        <div className="cmr-filter__cards">
          <CriteriaCard title="Specify Criteria">
            <CriteriaRows idPrefix="base" withModule valueWidth={360} />
          </CriteriaCard>
          <div className="cmr-filter__and" aria-hidden="true"><span>AND</span></div>
          <CriteriaCard
            title="Related Modules Criteria"
            offText="It helps to filter record based on related module values."
            enabled={relatedOn}
            onToggle={setRelatedOn}
          >
            {relatedContent}
          </CriteriaCard>
        </div>
      )}
    </section>
  );
}

function TerritorySection({ onRemove, showHeading = true, clearable = false }: { onRemove?: () => void; showHeading?: boolean; clearable?: boolean }) {
  const [mode, setMode] = useFilterState('territory:mode', () => '');
  const [territories, setTerritories] = useFilterState<TerritoryOption[]>('territory:list', () => []);
  const [includeSub, setIncludeSub] = useFilterState('territory:includeSub', () => false);
  return (
    <section className="cmr-filter__section" aria-label="Territory Filter">
      {showHeading && <FilterHeading title="Territory Filter" description={FILTER_DESCRIPTIONS.territory} onRemove={onRemove} />}
      <Dropdown
        triggerAriaLabel="Territory filter type"
        layout="vertical"
        width={390}
        placeholder="Select"
        options={TERRITORY_MODES}
        value={mode}
        clearable={clearable}
        clearAriaLabel="Clear territory"
        onChange={(value: string) => setMode(value)}
      />
      {mode === 'custom' && (
        <div className="cmr-filter__custom">
          <Tags value={territories} options={TERRITORIES} onChange={setTerritories} placeholder="Select territories" width={390} />
          <Checkbox
            label="Include Sub-Territories"
            checked={includeSub}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setIncludeSub(event.target.checked)}
          />
        </div>
      )}
    </section>
  );
}

/** Base Filter is always shown; Quick and Territory are added from the Add Filter menu, in the order the user adds them, and can be removed. */
function FilterSections({ plain = false }: { plain?: boolean }) {
  const [added, setAdded] = useFilterState<OptionalFilter[]>('v1:added', () => []);
  const remove = (filter: OptionalFilter) => setAdded((current) => current.filter((item) => item !== filter));
  const available = OPTIONAL_FILTERS.filter((option) => !added.includes(option.value));
  return (
    <>
      <BaseFilterSection layout={plain ? 'plain' : 'cards'} />
      {added.map((filter) =>
        filter === 'quick' ? (
          <CriteriaSection key="quick" title="Quick Filter" description={FILTER_DESCRIPTIONS.quick} idPrefix="quick" onRemove={() => remove('quick')} />
        ) : (
          <TerritorySection key="territory" onRemove={() => remove('territory')} />
        ),
      )}
      {available.length > 0 && (
        <div className="cmr-filter__add">
          <Dropdown
            value=""
            placeholder="Add Filter"
            triggerAriaLabel="Add Filter"
            triggerButtonVariant="outline-blue"
            width="fit-content"
            options={available}
            panelStyle={{ minWidth: 160, width: 'max-content' }}
            onChange={(value: OptionalFilter) => setAdded((current) => [...current, value])}
          />
        </div>
      )}
    </>
  );
}

const FILTER_TABS = [
  { id: 'base', label: V2_TITLES.base },
  { id: 'quick', label: V2_TITLES.quick },
  { id: 'territory', label: V2_TITLES.territory },
] as const;
type FilterTabId = (typeof FILTER_TABS)[number]['id'];

/** Version 2: the three filters are primary tabs; the selected tab's description shows under the tab bar.
 *  Every panel stays mounted (hidden when inactive) so edits survive switching tabs. */
function FilterTabs({ initialTab = 'base' }: { initialTab?: FilterTabId }) {
  const [tab, setTab] = useState<FilterTabId>(initialTab);
  return (
    <div className="cmr-filter__v2">
      <div className="cmr-filter__tabs">
        <Tabs tabs={FILTER_TABS as unknown as { id: string; label: string }[]} activeTab={tab} onChange={(id: string) => setTab(id as FilterTabId)} variant="primary" />
      </div>
      <p className="cmr-filter__tab-desc">{V2_DESCRIPTIONS[tab]}</p>
      <div hidden={tab !== 'base'}><BaseFilterSection showHeading={false} layout="fields" /></div>
      <div hidden={tab !== 'quick'}><CriteriaSection title={V2_TITLES.quick} description={V2_DESCRIPTIONS.quick} idPrefix="quick" showHeading={false} /></div>
      <div hidden={tab !== 'territory'}><TerritorySection showHeading={false} clearable /></div>
    </div>
  );
}

/** 1 = stacked sections, 1.1 = stacked with borderless Base Filter and a ghost "Filter by Related Module" button, 2 = primary tabs. */
export type FilterVersion = 1 | 1.1 | 2;

/** Each open seeds the sections from the applied snapshot, so Cancel discards edits and Apply saves them. */
function AddFilterModal({ isOpen, onClose, onApply, version = 1, saved, focus = 'base' }: {
  isOpen: boolean; onClose: () => void; onApply: (snapshot: FilterSnapshot) => void; version?: FilterVersion; saved: FilterSnapshot; focus?: FilterTabId;
}) {
  const live = useRef<FilterSnapshot>({});
  const store = useMemo<FilterStoreValue>(() => ({
    initial: saved,
    write: (key, value) => { live.current[key] = value; },
    clear: (key) => { delete live.current[key]; },
  }), [saved]);
  return (
    <Modal
      isOpen={isOpen}
      title={version === 2 ? V2_MODAL_TITLE : 'Add Filter'}
      // 1080px fits the Base Filter module row (module + field + condition + value + minus/plus) inside the 30px side padding.
      width="min(1080px, 100vw)"
      className={version === 1 ? 'cmr-filter' : 'cmr-filter cmr-filter--v11'}
      cancelLabel="Cancel"
      saveLabel="Apply"
      onClose={onClose}
      onCancel={onClose}
      onSave={() => onApply({ ...live.current })}
    >
      <FilterStore.Provider value={store}>
        {isOpen && (version === 2 ? <FilterTabs initialTab={focus} /> : <FilterSections plain={version === 1.1} />)}
      </FilterStore.Provider>
    </Modal>
  );
}

// ─── Saved filter summary ────────────────────────────────────────────────────

const ALL_OPERATORS = [...TEXT_OPERATORS, ...NUMERIC_OPERATORS];
const labelOf = (options: { value: string; label: string }[], value?: string) => options.find((option) => option.value === value)?.label ?? value ?? '';

/** Same grouping as CriteriaBuilder: wraps the expression whenever another row is joined. */
const patternFor = (rows: CriteriaRow[]) =>
  rows.slice(1).reduce((expr, _row, i) => `( ${expr} ${rows[i].connector.toLowerCase()} ${i + 2} )`, rows.length ? '1' : '');

/** Complete rows only (field + condition picked) → CriteriaSummary rows and their pattern. */
function summarizeCriteria(snapshot: FilterSnapshot, prefix: string, withModule = false) {
  const rows = (snapshot[`${prefix}:rows`] as ModuleCriteriaRow[] | undefined) ?? [];
  const filled = rows.filter((row) => row.field && row.operator);
  if (!filled.length) return null;
  const savedPattern = snapshot[`${prefix}:pattern`] as string | undefined;
  return {
    rows: filled.map((row) => {
      const value = row.type === 'date-range'
        ? [row.value, row.valueTo].filter(Boolean).join(' – ')
        : [row.value, row.valueTime].filter(Boolean).join(' ');
      return {
        id: row.id,
        ...(withModule && row.module ? { module: labelOf(BASE_MODULE_OPTIONS, row.module) } : {}),
        field: labelOf(FILTER_FIELDS, row.field),
        operator: labelOf(ALL_OPERATORS, row.operator),
        value,
      };
    }),
    pattern: filled.length === rows.length && savedPattern ? savedPattern : patternFor(filled),
  };
}

type SavedFilterId = 'base' | 'quick' | 'territory';
type TerritorySentence = { lead: string; operator?: string; values?: string; suffix?: string };
type SavedFilter = { id: SavedFilterId; title: string; summary?: Record<string, unknown>; sentence?: TerritorySentence };

function buildSavedFilters(snapshot: FilterSnapshot, version: FilterVersion = 1): SavedFilter[] {
  const raw = buildSavedFiltersV1(snapshot);
  // Version 2 names the saved cards after its tabs.
  return version === 2 ? raw.map((filter) => ({ ...filter, title: V2_TITLES[filter.id] })) : raw;
}

function buildSavedFiltersV1(snapshot: FilterSnapshot): SavedFilter[] {
  const result: SavedFilter[] = [];

  // Base: primary-module criteria, plus related modules when that card is on.
  const primary = summarizeCriteria(snapshot, 'base', true);
  const relatedRows = snapshot['base:relatedOn'] ? ((snapshot['base:related'] as RelatedRow[] | undefined) ?? []).filter((row) => row.condition && row.module) : [];
  const relations = relatedRows.map((row) => {
    const sub = row.specify ? summarizeCriteria(snapshot, `base:${row.id}`) : null;
    return {
      id: row.id,
      module: BASE_MODULE_LABEL,
      relation: labelOf(RELATED_CONDITIONS, row.condition).toUpperCase(),
      relatedModule: labelOf(RELATED_MODULES, row.module),
      criteria: sub?.rows ?? [],
      pattern: sub?.pattern,
    };
  });
  const relatedPattern = relatedRows.length > 1 ? patternFor(relatedRows as unknown as CriteriaRow[]) : undefined;
  if (primary && relations.length) {
    result.push({ id: 'base', title: 'Base Filter', summary: { variant: 'nested', sections: [
      { title: 'Primary Module', rows: primary.rows, pattern: primary.pattern },
      { title: 'Related Module', rows: relations, pattern: relatedPattern },
    ] } });
  } else if (primary) {
    result.push({ id: 'base', title: 'Base Filter', summary: { variant: 'standard', rows: primary.rows, pattern: primary.rows.length > 1 ? primary.pattern : undefined } });
  } else if (relations.length) {
    result.push({ id: 'base', title: 'Base Filter', summary: { variant: 'nested', rows: relations, pattern: relatedPattern } });
  }

  const quick = summarizeCriteria(snapshot, 'quick');
  if (quick) result.push({ id: 'quick', title: 'Quick Filter', summary: { variant: 'standard', rows: quick.rows, pattern: quick.rows.length > 1 ? quick.pattern : undefined } });

  // Territory reads as one sentence: "All Territories" or "Territories IS Delhi, Tamilnadu including Sub-Territories".
  const mode = snapshot['territory:mode'] as string | undefined;
  if (mode === 'custom') {
    const list = (snapshot['territory:list'] as TerritoryOption[] | undefined) ?? [];
    if (list.length) {
      result.push({ id: 'territory', title: 'Territory Filter', sentence: {
        lead: 'Territories',
        operator: 'IS',
        values: list.map((item) => item.label).join(', '),
        suffix: snapshot['territory:includeSub'] ? 'including Sub-Territories' : undefined,
      } });
    }
  } else if (mode) {
    result.push({ id: 'territory', title: 'Territory Filter', sentence: { lead: labelOf(TERRITORY_MODES, mode) } });
  }
  return result;
}

// ─── Columns panel ───────────────────────────────────────────────────────────

/** Six-dot grip used as the column drag handle. */
function DragGrip() {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" aria-hidden="true">
      <circle cx="1.5" cy="1.5" r="1.25" /><circle cx="6.5" cy="1.5" r="1.25" />
      <circle cx="1.5" cy="6" r="1.25" /><circle cx="6.5" cy="6" r="1.25" />
      <circle cx="1.5" cy="10.5" r="1.25" /><circle cx="6.5" cy="10.5" r="1.25" />
    </svg>
  );
}

type ColumnGroupId = 'row' | 'column' | 'aggregate';
/** Each group is pre-filled with sample columns relevant to the report when it is added. */
const COLUMN_GROUPS: { value: ColumnGroupId; label: string; empty: string; sample: string[] }[] = [
  { value: 'row', label: 'Row Groups', empty: 'No Group Selected', sample: ['Potential Owner', 'Account Name'] },
  { value: 'column', label: 'Column Groups', empty: 'No Group Selected', sample: ['Created Time (Month)', 'Lead Source'] },
  { value: 'aggregate', label: 'Aggregate Columns', empty: 'No Column Selected', sample: ['Annual Revenue (Sum)', 'Potential Name (Count)'] },
];

function PanelEditButton({ label }: { label: string }) {
  return (
    <Tooltip content={`Edit ${label.toLowerCase()}`} variant="black" placement="top" followCursor>
      <button type="button" className="criteria-summary__action" aria-label={`Edit ${label}`}>
        <Icon name="Edit" size={12} />
      </button>
    </Tooltip>
  );
}

/** Draggable column list with a remove (✕) on hover. `minItems` keeps that many rows from being removed. */
function SortableColumnList({ items, onChange, minItems = 0 }: { items: string[]; onChange: (next: string[]) => void; minItems?: number }) {
  const [dragging, setDragging] = useState<number | null>(null);
  const move = (from: number, to: number) => {
    if (from === to) return;
    const next = [...items];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    onChange(next);
  };
  return (
    <ul className="cmr__column-list">
      {items.map((label, index) => (
        <li
          key={label}
          className={`cmr__column${dragging === index ? ' cmr__column--dragging' : ''}`}
          draggable
          onDragStart={(event) => { setDragging(index); event.dataTransfer.effectAllowed = 'move'; }}
          onDragOver={(event) => { event.preventDefault(); if (dragging !== null && dragging !== index) { move(dragging, index); setDragging(index); } }}
          onDragEnd={() => setDragging(null)}
        >
          <span className="cmr__column-grip" aria-hidden="true"><DragGrip /></span>
          <span className="cmr__column-label">{label}</span>
          {items.length > minItems && (
            <button
              type="button"
              className="cmr__column-remove"
              aria-label={`Remove ${label}`}
              onClick={() => onChange(items.filter((item) => item !== label))}
            >
              <Icon name="Close" size={10} />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}

function ColumnsPanel() {
  const [columns, setColumns] = useState(() => [OWNER_COLUMN, ...REPORT_COLUMNS].map((column) => column.label));
  // Insertion order = display order; each added group starts with its sample columns.
  const [groups, setGroups] = useState<{ id: ColumnGroupId; items: string[] }[]>([]);
  const available = COLUMN_GROUPS.filter((group) => !groups.some((added) => added.id === group.value));
  const addGroup = (id: ColumnGroupId) => {
    const sample = COLUMN_GROUPS.find((group) => group.value === id)?.sample ?? [];
    setGroups((current) => [...current, { id, items: [...sample] }]);
  };
  const setGroupItems = (id: ColumnGroupId, items: string[]) =>
    setGroups((current) => current.map((group) => (group.id === id ? { ...group, items } : group)));
  return (
    <section className="cmr__panel-body cmr__columns" aria-label="Columns">
      <section className="cmr__columns-group" aria-label="Columns list">
        <div className="cmr__panel-heading"><h2>Columns</h2><PanelEditButton label="Columns" /></div>
        <SortableColumnList items={columns} onChange={setColumns} minItems={1} />
      </section>
      {groups.map(({ id, items }) => {
        const meta = COLUMN_GROUPS.find((group) => group.value === id)!;
        return (
          <section key={id} className="cmr__columns-group" aria-label={meta.label}>
            <div className="cmr__panel-heading"><h2>{meta.label}</h2><PanelEditButton label={meta.label} /></div>
            {items.length
              ? <SortableColumnList items={items} onChange={(next) => setGroupItems(id, next)} />
              : <p className="cmr__columns-empty">{meta.empty}</p>}
          </section>
        );
      })}
      {available.length > 0 && (
        <div className="cmr__add-group">
          <Dropdown
            value=""
            placeholder="Add Group"
            triggerAriaLabel="Add Group"
            triggerButtonVariant="outline-blue"
            width="fit-content"
            options={available}
            panelStyle={{ minWidth: 180, width: 'max-content' }}
            onChange={(value: ColumnGroupId) => addGroup(value)}
          />
        </div>
      )}
    </section>
  );
}

// ─── Filters panel ───────────────────────────────────────────────────────────

function ConfigPanel({ initialTab, initialModalOpen = false, filterVersion = 1, initialSaved = {} }: {
  initialTab: string; initialModalOpen?: boolean; filterVersion?: FilterVersion; initialSaved?: FilterSnapshot;
}) {
  const [tab, setTab] = useState(initialTab);
  const [modalOpen, setModalOpen] = useState(initialModalOpen);
  const [saved, setSaved] = useState<FilterSnapshot>(initialSaved);
  const [focus, setFocus] = useState<FilterTabId>('base');
  const [toast, setToast] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const savedFilters = useMemo(() => buildSavedFilters(saved, filterVersion), [saved, filterVersion]);
  const openModal = (section: FilterTabId = 'base') => { setFocus(section); setModalOpen(true); };
  // The success alert hides itself after a few seconds (or on ✕).
  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(false), 4000);
    return () => window.clearTimeout(timer);
  }, [toast]);
  const hasFilters = savedFilters.length > 0;
  return (
    <aside className="cmr__panel" aria-label="Report configuration">
      <Tabs tabs={PANEL_TABS} activeTab={tab} onChange={setTab} variant="secondary" />
      {tab === 'filters' ? (
        <section className={`cmr__panel-body${hasFilters ? ' cmr__panel-body--saved' : ''}`} aria-label="Filters">
          <div className="cmr__panel-heading">
            <h2>Filters</h2>
            {hasFilters ? (
              // One shared Edit / Delete for all saved filters, in the same pill combo as Criteria Summary's hover actions.
              <div className="cmr__heading-actions">
                <Tooltip content="Edit filters" variant="black" placement="top" followCursor>
                  <button type="button" className="criteria-summary__action" aria-label="Edit filters" onClick={() => openModal()}>
                    <Icon name="Edit" size={12} />
                  </button>
                </Tooltip>
                {/* Version 2: Edit only, no Delete. */}
                {filterVersion !== 2 && (
                  <Tooltip content="Delete filters" variant="black" placement="top" followCursor>
                    <button type="button" className="criteria-summary__action criteria-summary__action--delete" aria-label="Delete filters" onClick={() => setConfirmDelete(true)}>
                      <Icon name="Delete" size={12} />
                    </button>
                  </Tooltip>
                )}
              </div>
            ) : null}
          </div>
          {hasFilters ? (
            savedFilters.map((filter) => (
              <section key={filter.id} className="cmr__saved" aria-label={`Saved ${filter.title}`}>
                <h3>{filter.title}</h3>
                {filter.sentence ? (
                  // Same card frame as Criteria Summary, but a plain sentence instead of numbered rows.
                  <p className="criteria-summary criteria-summary--card cmr__saved-summary cmr__saved-sentence">
                    <span>{filter.sentence.lead}</span>
                    {filter.sentence.operator && <> <span className="criteria-summary__operator">{filter.sentence.operator}</span></>}
                    {filter.sentence.values && <> <span className="criteria-summary__value">{filter.sentence.values}</span></>}
                    {filter.sentence.suffix && <> {filter.sentence.suffix}</>}
                  </p>
                ) : (
                  <CriteriaSummary {...filter.summary} appearance="card" className="cmr__saved-summary" />
                )}
              </section>
            ))
          ) : (
            // Empty state: prominent outline "Add Filter" call to action.
            <div className="cmr__empty">
              <p>No filters applied</p>
              <Button
                variant="outline-blue"
                size="sm"
                className="cmr__add-filter"
                onClick={() => openModal()}
              >
                {filterVersion === 2 ? V2_CONFIGURE_LABEL : 'Add Filter'}
              </Button>
            </div>
          )}
        </section>
      ) : (
        <ColumnsPanel />
      )}
      <AddFilterModal
        isOpen={modalOpen}
        saved={saved}
        focus={focus}
        version={filterVersion}
        onClose={() => setModalOpen(false)}
        onApply={(snapshot) => { setSaved(snapshot); setModalOpen(false); setToast(true); }}
      />
      <Modal
        type="alert"
        variant="error"
        isOpen={confirmDelete}
        title="Are you sure you want to delete filter?"
        confirmLabel="Delete"
        cancelLabel="Cancel"
        width={460}
        onClose={() => setConfirmDelete(false)}
        onSave={() => { setSaved({}); setConfirmDelete(false); }}
      />
      {/* Success notice: fixed, top-centre of the page, same as Record Authentication. */}
      {toast && (
        <MessageBox className="cmr__toast" variant="success" message="Filter applied successfully" onClose={() => setToast(false)} />
      )}
    </aside>
  );
}

// ─── Report preview ──────────────────────────────────────────────────────────

/** TODO: Missing component — SetupTable has no grouped rows or subtotal rows, so the grouped report grid is pattern-local. */
function ReportPreview({ groups, notice }: { groups: ReportGroup[]; notice: string }) {
  const columnCount = REPORT_COLUMNS.length + 1;
  return (
    <section className="cmr__preview" aria-label="Report preview">
      <p className="cmr__note" role="status"><Icon name="Info" size={16} />{notice}</p>
      <div className="cmr__table-wrap" tabIndex={0} aria-label="Report rows, scrollable">
        <table className="cmr__table">
          <colgroup>
            <col style={{ width: OWNER_COLUMN.width }} />
            {REPORT_COLUMNS.map(column => <col key={column.key} style={{ width: column.width }} />)}
          </colgroup>
          <thead>
            <tr>
              <th scope="col">{OWNER_COLUMN.label}</th>
              {REPORT_COLUMNS.map(column => <th key={column.key} scope="col">{column.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {groups.map(group => (
              <Fragment key={group.id}>
                {group.rows.map((row: ReportRow, index) => (
                  <tr key={row.id} data-first={index === 0 || undefined}>
                    {index === 0 && (
                      <th scope="rowgroup" rowSpan={group.rows.length} className="cmr__owner">
                        <span className="cmr__person">
                          <img src={group.avatar} alt="" />
                          {group.owner} ({group.rows.length})
                        </span>
                      </th>
                    )}
                    {REPORT_COLUMNS.map(column => (
                      <td key={column.key}>{column.key === 'revenue' ? currency(row.revenue) : row[column.key]}</td>
                    ))}
                  </tr>
                ))}
                <tr className="cmr__subtotal">
                  <th scope="row" colSpan={3}>
                    <span className="cmr__person">
                      <img src={group.avatar} alt="" />
                      {group.owner} ({group.rows.length})
                    </span>
                  </th>
                  <td>{currency(groupTotal(group))}</td>
                  <td colSpan={columnCount - 4} aria-hidden="true" />
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

function CrossModuleReportsPage({
  initialTab = 'filters', groups = REPORT_GROUPS, initialModalOpen = false, filterVersion = 1, initialSaved,
}: { initialTab?: string; groups?: ReportGroup[]; initialModalOpen?: boolean; filterVersion?: FilterVersion; initialSaved?: FilterSnapshot }) {
  const [notice, setNotice] = useState(PREVIEW_NOTE);
  return (
    <div className="cmr">
      <aside className="cmr__nav" aria-label="CRM navigation">
        <NextGenLeftMenu activeId="reports" />
      </aside>
      <div className="cmr__workspace">
        <ReportHeader
          onRun={() => setNotice('Report run with the current filters. Totals now reflect all matching rows.')}
          onCancel={() => setNotice(PREVIEW_NOTE)}
        />
        <main className="cmr__main">
          <ConfigPanel initialTab={initialTab} initialModalOpen={initialModalOpen} filterVersion={filterVersion} initialSaved={initialSaved} />
          <ReportPreview groups={groups} notice={notice} />
        </main>
      </div>
      <WMSBar />
    </div>
  );
}

/** Sample applied filters for the "saved" stories (same keys the modal writes on Apply). */
const SAMPLE_SAVED: FilterSnapshot = {
  'base:rows': [
    { id: 'base-1', module: 'contacts', field: 'lead_source', operator: 'is', value: 'Advertisement', type: 'text', connector: 'AND' },
    { id: 'base-2', module: 'contacts', field: 'annual_revenue', operator: 'gt', value: '5000', type: 'text', connector: 'AND' },
  ],
  'base:pattern': '( 1 and 2 )',
  'base:relatedOn': true,
  'base:related': [{ id: 'related-1', condition: 'with', module: 'deals', specify: true, connector: 'AND' }],
  'base:related-1:rows': [{ id: 'rs-1', field: 'stage', operator: 'is', value: 'Closed Won', type: 'text', connector: 'AND' }],
  'base:related-1:pattern': '1',
  'quick:rows': [{ id: 'quick-1', field: 'potential_owner', operator: 'is', value: 'Kevin McGuire', type: 'text', connector: 'AND' }],
  'quick:pattern': '1',
  'territory:mode': 'custom',
  'territory:list': [{ value: 'delhi', label: 'Delhi' }, { value: 'south_zone', label: 'South Zone' }],
  'territory:includeSub': true,
  'v1:added': ['quick', 'territory'],
};

const meta = {
  title: 'Design System/Patterns/Cross-module Reports',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Cross-module report editor from Figma node 79995:20707 (🗿 Pascal Stone). A Columns / Filters side panel sits next to a preview grid grouped by Potential Owner with revenue subtotals. The Filters tab shows "No filters applied". The plus button opens an Add Filter modal with Base Filter and Quick Filter criteria builders and a Territory Filter picklist. Version 1 stacks the sections (Quick and Territory are added from an Add Filter menu); Version 2 shows the three filters as primary tabs with the selected tab’s description. Static sample data; Save and Apply have no data effect.',
      },
    },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CrossModuleReportsPage />,
};

/** Interaction checks run only in the test runner (hidden from the sidebar), so the visible stories never click through on load. */
const TEST_ONLY = ['!dev', '!autodocs'];

export const DefaultChecks: Story = {
  name: 'Default · checks',
  tags: TEST_ONLY,
  render: () => <CrossModuleReportsPage />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('heading', { name: REPORT_TITLE })).toBeVisible();
    await expect(canvas.getByRole('tab', { name: 'Filters' })).toHaveAttribute('aria-selected', 'true');
    await expect(canvas.queryByText(/Do you want to join another report/)).toBeNull();
    await expect(canvas.getByText('No filters applied')).toBeVisible();
    await expect(canvas.queryByText('Filter By Fields')).toBeNull();
    const table = within(canvas.getByRole('table'));
    await expect(table.getByRole('columnheader', { name: 'Annual Revenue' })).toBeVisible();
    await expect(table.getByText('$3221')).toBeVisible();
    await expect(table.getByText('$1783')).toBeVisible();
    await expect(table.getByText('$1418')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Run' }));
    await expect(canvas.getByText(/^Report run with the current filters/)).toBeVisible();
    await userEvent.click(canvas.getByRole('tab', { name: 'Columns' }));
    await expect(canvas.getByRole('heading', { name: 'Columns' })).toBeVisible();
    await expect(canvas.queryByRole('heading', { name: 'Row Groups' })).toBeNull();
    await userEvent.click(canvas.getByRole('button', { name: 'Add Group' }));
    await userEvent.click(await within(document.body).findByRole('option', { name: 'Row Groups' }));
    await expect(canvas.getByRole('heading', { name: 'Row Groups' })).toBeVisible();
    const rowGroups = within(canvas.getByRole('region', { name: 'Row Groups' }));
    await expect(rowGroups.getByText('Potential Owner')).toBeVisible();
    await expect(rowGroups.getByText('Account Name')).toBeVisible();
    await userEvent.click(rowGroups.getByRole('button', { name: 'Remove Potential Owner' }));
    await userEvent.click(rowGroups.getByRole('button', { name: 'Remove Account Name' }));
    await expect(rowGroups.getByText('No Group Selected')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Add Group' }));
    await userEvent.click(await within(document.body).findByRole('option', { name: 'Aggregate Columns' }));
    await expect(within(canvas.getByRole('region', { name: 'Aggregate Columns' })).getByText('Annual Revenue (Sum)')).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Remove Email' }));
    await expect(canvas.queryByText('Email', { selector: '.cmr__column-label' })).toBeNull();
  },
};

export const ColumnsTab: Story = {
  name: 'Columns tab',
  render: () => <CrossModuleReportsPage initialTab="columns" />,
};

export const AddFilterModalOpen: Story = {
  name: 'Add Filter modal · Version 1',
  render: () => <CrossModuleReportsPage initialModalOpen filterVersion={1} />,
};

export const AddFilterModalOpenChecks: Story = {
  name: 'Add Filter modal · Version 1 · checks',
  tags: TEST_ONLY,
  render: () => <CrossModuleReportsPage initialModalOpen filterVersion={1} />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = within(await body.findByRole('dialog', { name: 'Add Filter' }));
    await waitFor(() => expect(dialog.getByRole('heading', { name: 'Base Filter' })).toBeVisible());
    await expect(dialog.getByRole('heading', { name: 'Specify Criteria' })).toBeVisible();
    await expect(dialog.queryByText(/- "Contact"/)).toBeNull();
    await expect(dialog.getAllByRole('button', { name: /Select Field/ }).length).toBeGreaterThan(0);
    await expect(dialog.queryByText('Territories')).toBeNull();

    // Specify Criteria has no switch; Related Modules Criteria starts off.
    await expect(dialog.queryByRole('switch', { name: 'Enable Specify Criteria' })).toBeNull();
    await expect(dialog.getByText('It helps to filter record based on related module values.')).toBeVisible();
    await userEvent.click(dialog.getByRole('switch', { name: 'Enable Related Modules Criteria' }));

    // Editing the pattern updates the rows' numbers and AND / OR.
    const base = within(dialog.getByRole('region', { name: 'Specify Criteria' }));
    await userEvent.click(base.getByRole('button', { name: 'Add row' }));
    await userEvent.click(base.getByRole('button', { name: 'Edit Pattern' }));
    const patternInput = base.getByRole('textbox', { name: 'Criteria pattern' });
    await userEvent.clear(patternInput);
    await userEvent.type(patternInput, '1 or ( 2 and 3 ){Enter}');
    await expect(base.getByText('3')).toBeVisible();
    await expect(base.getByRole('button', { name: 'Toggle connector, currently OR' })).toBeVisible();
    await expect(base.getByText('1 or ( 2 and 3 )')).toBeVisible();
    await expect(dialog.getByRole('heading', { name: 'Related Modules Criteria' })).toBeVisible();
    await expect(dialog.getByRole('button', { name: 'Related condition 1' })).toHaveTextContent('Select');
    await expect(dialog.getByRole('button', { name: 'Related module 1' })).toHaveTextContent('Select Module');
    await expect(dialog.getByRole('checkbox', { name: 'Specify Criteria' })).toBeDisabled();
    await expect(dialog.queryByRole('button', { name: /^Remove related module/ })).toBeNull();
    await userEvent.click(dialog.getByRole('button', { name: 'Add Condition' }));
    const connector = dialog.getByRole('button', { name: 'Toggle related connector 1, currently AND' });
    await userEvent.click(connector);
    await expect(dialog.getByRole('button', { name: 'Toggle related connector 1, currently OR' })).toHaveTextContent('OR');
    await expect(dialog.getAllByRole('button', { name: /^Remove related module/ })).toHaveLength(2);
    const relatedModule2 = dialog.getByRole('button', { name: 'Related module 2' });
    await expect(relatedModule2).toHaveTextContent('Select Module');
    await expect(dialog.getByRole('button', { name: 'Related condition 2' })).toHaveTextContent('Select');
    await expect(dialog.getAllByRole('checkbox', { name: 'Specify Criteria' })).toHaveLength(2);
    await userEvent.click(relatedModule2);
    await userEvent.click(await body.findByRole('option', { name: 'Deals' }));
    const dealsCheckbox = dialog.getByRole('checkbox', { name: 'Specify Criteria - Deals' });
    await expect(dealsCheckbox).toBeEnabled();
    await expect(dealsCheckbox).not.toBeChecked();
    await expect(dialog.queryByRole('heading', { name: 'Quick Filter' })).toBeNull();
    await expect(dialog.queryByRole('heading', { name: 'Territory Filter' })).toBeNull();
    await expect(dialog.queryByRole('button', { name: /^Remove (Quick|Territory)/ })).toBeNull();
    await expect(dialog.queryByText('None')).toBeNull();

    await userEvent.click(dialog.getByRole('button', { name: 'Add Filter' }));
    await userEvent.click(await body.findByRole('option', { name: 'Territory Filter' }));
    await expect(dialog.getByRole('heading', { name: 'Territory Filter' })).toBeVisible();
    await userEvent.click(dialog.getByRole('button', { name: 'Add Filter' }));
    await userEvent.click(await body.findByRole('option', { name: 'Quick Filter' }));
    await expect(dialog.getByRole('heading', { name: 'Quick Filter' })).toBeVisible();
    await expect(dialog.queryByRole('button', { name: 'Add Filter' })).toBeNull();
    const headings = dialog.getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);
    await expect(headings.indexOf('Territory Filter')).toBeLessThan(headings.indexOf('Quick Filter'));
    await expect(dialog.getByRole('button', { name: 'Territory filter type' })).toHaveTextContent('Select');
    await userEvent.click(dialog.getByRole('button', { name: 'Territory filter type' }));
    await userEvent.click(await body.findByRole('option', { name: 'Custom' }));
    await expect(dialog.getByRole('checkbox', { name: 'Include Sub-Territories' })).not.toBeChecked();
    await expect(dialog.queryByText('Delhi')).toBeNull();

    await userEvent.click(dialog.getByRole('button', { name: 'Remove Quick Filter' }));
    await expect(dialog.queryByRole('heading', { name: 'Quick Filter' })).toBeNull();
    await expect(dialog.getByRole('button', { name: 'Add Filter' })).toBeVisible();
    await expect(dialog.getByRole('button', { name: 'Apply' })).toBeVisible();
    await userEvent.click(dialog.getByRole('button', { name: 'Cancel' }));
  },
};

export const AddFilterModalV11: Story = {
  name: 'Add Filter modal · Version 1.1',
  // Opens only when the user clicks "Add Filter" in the Filters panel.
  render: () => <CrossModuleReportsPage filterVersion={1.1} />,
};

export const AddFilterModalV11Checks: Story = {
  name: 'Add Filter modal · Version 1.1 · checks',
  tags: TEST_ONLY,
  render: () => <CrossModuleReportsPage filterVersion={1.1} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    // The modal stays closed until the user clicks Add Filter.
    await expect(body.queryByRole('dialog', { name: 'Add Filter' })).toBeNull();
    await userEvent.click(canvas.getByRole('button', { name: 'Add Filter' }));
    const dialog = within(await body.findByRole('dialog', { name: 'Add Filter' }));
    await waitFor(() => expect(dialog.getByRole('heading', { name: 'Base Filter' })).toBeVisible());
    // No switch; related modules start hidden behind a ghost button.
    await expect(dialog.queryByRole('switch')).toBeNull();
    await expect(dialog.queryByRole('checkbox', { name: /Enable/ })).toBeNull();
    await expect(dialog.queryByRole('region', { name: 'Related Modules Criteria' })).toBeNull();
    await userEvent.click(dialog.getByRole('button', { name: 'Filter by Related Module' }));
    await expect(dialog.getByRole('region', { name: 'Related Modules Criteria' })).toBeVisible();
    await expect(dialog.queryByRole('button', { name: 'Filter by Related Module' })).toBeNull();
    // Remove near the title brings the ghost button back.
    await userEvent.click(dialog.getByRole('button', { name: 'Remove Related Modules Criteria' }));
    await expect(dialog.queryByRole('region', { name: 'Related Modules Criteria' })).toBeNull();
    await expect(dialog.getByRole('button', { name: 'Filter by Related Module' })).toBeVisible();
  },
};

export const SavedFiltersV1: Story = {
  name: 'Saved filters · Version 1',
  render: () => <CrossModuleReportsPage filterVersion={1} initialSaved={SAMPLE_SAVED} />,
};

export const SavedFiltersV1Checks: Story = {
  name: 'Saved filters · Version 1 · checks',
  tags: TEST_ONLY,
  render: () => <CrossModuleReportsPage filterVersion={1} initialSaved={SAMPLE_SAVED} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await expect(canvas.queryByText('No filters applied')).toBeNull();
    const base = within(canvas.getByRole('region', { name: 'Saved Base Filter' }));
    await expect(base.getByText('Primary Module')).toBeVisible();
    await expect(base.getByText('Advertisement')).toBeVisible();
    await expect(base.getByText('Deals')).toBeVisible();
    await expect(canvas.getByRole('region', { name: 'Saved Quick Filter' })).toBeVisible();
    await expect(within(canvas.getByRole('region', { name: 'Saved Territory Filter' })).getByText('Delhi, South Zone')).toBeVisible();
    await expect(canvas.getByRole('region', { name: 'Saved Territory Filter' })).toHaveTextContent('Territories IS Delhi, South Zone including Sub-Territories');

    // No per-card actions; one shared Edit / Delete replaces the plus.
    await expect(canvas.queryByRole('button', { name: 'Edit criteria' })).toBeNull();
    await expect(canvas.queryByRole('button', { name: 'Add Filter' })).toBeNull();

    // Edit reopens the modal pre-filled; Apply writes the summary back and confirms.
    await userEvent.click(canvas.getByRole('button', { name: 'Edit filters' }));
    const dialog = within(await body.findByRole('dialog', { name: 'Add Filter' }));
    await waitFor(() => expect(dialog.getByRole('heading', { name: 'Territory Filter' })).toBeVisible());
    await userEvent.click(dialog.getByRole('button', { name: 'Apply' }));
    await waitFor(() => expect(canvas.getByText('Filter applied successfully')).toBeVisible());
    await waitFor(() => expect(canvas.getByRole('region', { name: 'Saved Base Filter' })).toBeVisible());

    // Delete asks for confirmation first; Cancel keeps the filters.
    await userEvent.click(canvas.getByRole('button', { name: 'Delete filters' }));
    const confirm = within(await body.findByRole('alertdialog', { name: 'Are you sure you want to delete filter?' }));
    await userEvent.click(confirm.getByRole('button', { name: 'Cancel' }));
    await waitFor(() => expect(body.queryByRole('alertdialog')).toBeNull());
    await expect(canvas.getByRole('region', { name: 'Saved Base Filter' })).toBeVisible();
    // Confirming Delete clears every saved filter and brings the plus back.
    await userEvent.click(canvas.getByRole('button', { name: 'Delete filters' }));
    const confirmAgain = within(await body.findByRole('alertdialog', { name: 'Are you sure you want to delete filter?' }));
    await userEvent.click(confirmAgain.getByRole('button', { name: 'Delete' }));
    await expect(canvas.getByText('No filters applied')).toBeVisible();
    await expect(canvas.getByRole('button', { name: 'Add Filter' })).toBeVisible();
  },
};

export const SavedFiltersV2: Story = {
  name: 'Saved filters · Version 2',
  render: () => <CrossModuleReportsPage filterVersion={2} initialSaved={SAMPLE_SAVED} />,
};

export const SavedFiltersV2Checks: Story = {
  name: 'Saved filters · Version 2 · checks',
  tags: TEST_ONLY,
  render: () => <CrossModuleReportsPage filterVersion={2} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(canvas.getByRole('button', { name: 'Configure Filters' }));
    const dialog = within(await body.findByRole('dialog', { name: 'Filter Configuration' }));
    await waitFor(() => expect(dialog.getByRole('tab', { name: 'Territory' })).toBeVisible());
    await userEvent.click(dialog.getByRole('tab', { name: 'Territory' }));
    await userEvent.click(dialog.getByRole('button', { name: 'Territory filter type' }));
    await userEvent.click(await body.findByRole('option', { name: 'All Territories' }));
    await userEvent.click(dialog.getByRole('button', { name: 'Apply' }));
    const savedRegion = await canvas.findByRole('region', { name: 'Saved Territory' });
    await expect(within(savedRegion).getByText('All Territories')).toBeVisible();
    await expect(canvas.queryByText('No filters applied')).toBeNull();
    await waitFor(() => expect(canvas.getByText('Filter applied successfully')).toBeVisible());
    // Version 2 summary: Edit only, no Delete.
    await expect(canvas.queryByRole('button', { name: 'Delete filters' })).toBeNull();
    // Shared Edit reopens Version 2 with the applied values.
    await userEvent.click(canvas.getByRole('button', { name: 'Edit filters' }));
    const reopened = within(await body.findByRole('dialog', { name: 'Filter Configuration' }));
    await waitFor(() => expect(reopened.getByRole('tab', { name: 'Territory' })).toBeVisible());
    await userEvent.click(reopened.getByRole('tab', { name: 'Territory' }));
    await expect(reopened.getByRole('button', { name: 'Territory filter type' })).toHaveTextContent('All Territories');
    await userEvent.click(reopened.getByRole('button', { name: 'Cancel' }));
  },
};

export const AddFilterModalV2: Story = {
  name: 'Filter Configuration · Version 2',
  render: () => <CrossModuleReportsPage filterVersion={2} />,
};

export const AddFilterModalV2Checks: Story = {
  name: 'Add Filter modal · Version 2 · checks',
  tags: TEST_ONLY,
  render: () => <CrossModuleReportsPage filterVersion={2} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(canvasElement.ownerDocument.body);
    // Opens only on click.
    await expect(body.queryByRole('dialog', { name: 'Filter Configuration' })).toBeNull();
    await userEvent.click(canvas.getByRole('button', { name: 'Configure Filters' }));
    const dialog = within(await body.findByRole('dialog', { name: 'Filter Configuration' }));
    await waitFor(() => expect(dialog.getByRole('tab', { name: 'Report Filters' })).toHaveAttribute('aria-selected', 'true'));
    await waitFor(() => expect(dialog.getByText(V2_DESCRIPTIONS.base)).toBeVisible());
    // One combined card: Filter by Fields (no module picker or label) + Filter by Related Module.
    await expect(dialog.getByRole('heading', { name: 'Filter by Fields' })).toBeVisible();
    await expect(dialog.getByRole('heading', { name: 'Filter by Related Modules' })).toBeVisible();
    // Filter by Fields opens with one criteria that has a minus; Related Modules shows only "Add criteria".
    await expect(dialog.queryByRole('button', { name: 'Add criteria for fields' })).toBeNull();
    await expect(dialog.getAllByRole('button', { name: 'Add row' })).toHaveLength(1);
    await userEvent.click(dialog.getByRole('button', { name: 'Remove row' }));
    // Removing the last criteria brings the button back; clicking it reopens one criteria.
    await expect(await dialog.findByRole('button', { name: 'Add criteria for fields' })).toBeVisible();
    await expect(dialog.queryByRole('button', { name: 'Add row' })).toBeNull();
    await userEvent.click(dialog.getByRole('button', { name: 'Add criteria for fields' }));
    await expect(dialog.getAllByRole('button', { name: 'Add row' })).toHaveLength(1);
    await expect(dialog.getByRole('button', { name: 'Remove row' })).toBeVisible();
    await expect(dialog.queryByRole('button', { name: 'Add criteria for fields' })).toBeNull();
    await expect(dialog.queryByRole('heading', { name: 'Specify Criteria' })).toBeNull();
    await expect(dialog.queryByText('Contact', { selector: '.criteria-builder-module-label' })).toBeNull();
    await expect(dialog.queryByRole('button', { name: 'Filter by Related Module' })).toBeNull();
    await expect(dialog.queryByRole('button', { name: /^Remove Related/ })).toBeNull();
    // Related modules start with just Add Condition; the first row gets a minus.
    await expect(dialog.queryByRole('button', { name: 'Related module 1' })).toBeNull();
    await userEvent.click(dialog.getByRole('button', { name: 'Add criteria' }));
    await expect(dialog.getByRole('button', { name: 'Remove related module 1' })).toBeVisible();
    await userEvent.click(dialog.getByRole('button', { name: 'Remove related module 1' }));
    await expect(dialog.queryByRole('button', { name: 'Related module 1' })).toBeNull();
    await expect(dialog.queryByRole('button', { name: 'Add Filter' })).toBeNull();
    await expect(dialog.queryByRole('button', { name: 'Add Condition' })).toBeNull();
    await expect(dialog.queryByRole('button', { name: /^Remove (Quick|Territory)/ })).toBeNull();

    await userEvent.click(dialog.getByRole('tab', { name: 'Quick View' }));
    await expect(dialog.getByText(V2_DESCRIPTIONS.quick)).toBeVisible();
    await expect(dialog.queryByText(V2_DESCRIPTIONS.base)).toBeNull();
    await expect(dialog.queryByRole('heading', { name: 'Specify Criteria' })).toBeNull();

    await userEvent.click(dialog.getByRole('tab', { name: 'Territory' }));
    await expect(dialog.getByText(V2_DESCRIPTIONS.territory, { selector: '.cmr-filter__tab-desc' })).toBeVisible();
    await userEvent.click(dialog.getByRole('button', { name: 'Territory filter type' }));
    await userEvent.click(await body.findByRole('option', { name: 'Custom' }));
    await expect(dialog.getByText('Include Sub-Territories')).toBeVisible();

    // Edits survive switching tabs.
    await userEvent.click(dialog.getByRole('tab', { name: 'Report Filters' }));
    await userEvent.click(dialog.getByRole('tab', { name: 'Territory' }));
    await expect(dialog.getByRole('button', { name: 'Territory filter type' })).toHaveTextContent('Custom');
    // ✕ inside the Territory input clears it.
    await userEvent.click(dialog.getByRole('button', { name: 'Clear territory' }));
    await expect(dialog.getByRole('button', { name: 'Territory filter type' })).toHaveTextContent('Select');
    await expect(dialog.queryByRole('button', { name: 'Clear territory' })).toBeNull();
    await userEvent.click(dialog.getByRole('button', { name: 'Cancel' }));
  },
};
