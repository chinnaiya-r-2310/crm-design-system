import { useEffect, useId, useState } from 'react';
import { Button } from '../components/Button/Button';
import { Tabs } from '../components/Tabs/Tabs';
import { Switch } from '../components/Switch/Switch';
import { Icon } from '../components/Icon/Icon';
import {
  MODULE_NAME,
  LAYOUT_NAME,
  UNUSED_ITEMS_COUNT,
  VIEW_TABS,
  NEW_FIELDS,
  COMPONENTS,
  LEAD_INFO_LEFT,
  LEAD_INFO_RIGHT,
  ADDRESS_LEFT,
  ADDRESS_RIGHT,
  DESCRIPTION_FIELDS,
  QUICK_CREATE_FIELDS,
} from './CrmScreens.layoutEditor.data';
import './CrmScreensLayoutEditor.css';

// Layout Editor screen — Setup › Modules › Leads › Layouts › Standard.
// Composition only: Button, Tabs, Switch and Icon from the design system.

// ─────────────────────────────────────────────────────────────────────────────
// Top bar
// ─────────────────────────────────────────────────────────────────────────────

function TopBar() {
  return (
    <header className="layout-editor__topbar">
      <div className="layout-editor__topbar-start">
        <button type="button" className="layout-editor__icon-btn" aria-label="Back to Modules">
          <Icon name="LibArrowLeft" size={16} />
        </button>
        <span className="layout-editor__module">{MODULE_NAME}</span>
        <span className="layout-editor__topbar-divider" aria-hidden="true" />
        <button type="button" className="layout-editor__layout-switch" aria-haspopup="menu" aria-label={`Layout: ${LAYOUT_NAME}. Switch layout`}>
          {LAYOUT_NAME}
          <Icon name="ChevronDownFilled" size={12} />
        </button>
        <button type="button" className="layout-editor__icon-btn" aria-label="Layout settings">
          <Icon name="LibGear2" size={16} />
        </button>
      </div>
      <div className="layout-editor__topbar-end">
        <button type="button" className="layout-editor__icon-btn" aria-label="Layout rules">
          <Icon name="LibRules" size={16} />
        </button>
        <Button variant="default">Cancel</Button>
        <Button variant="default">Save and Close</Button>
        <Button variant="primary">Save</Button>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Left palette
// ─────────────────────────────────────────────────────────────────────────────

function PaletteTile({ item }) {
  const className = [
    'layout-editor__tile',
    item.wide && 'layout-editor__tile--wide',
  ].filter(Boolean).join(' ');

  return (
    <li className={className}>
      <button
        type="button"
        className="layout-editor__tile-btn"
        disabled={item.disabled}
        title={item.disabled ? 'Field limit reached' : undefined}
      >
        <Icon name={item.icon} size={16} />
        <span className="layout-editor__tile-label">{item.label}</span>
        {item.isNew && (
          <span className="layout-editor__tile-sparkle">
            <Icon name="LibSparkle4pt" size={12} aria-label="New" />
          </span>
        )}
        {item.warning && (
          <span className="layout-editor__tile-warning">
            <Icon name="LibWarning" size={14} aria-label="Limited availability" />
          </span>
        )}
      </button>
    </li>
  );
}

function PaletteGroup({ title, items }) {
  const [open, setOpen] = useState(true);
  const listId = useId();

  return (
    <section className="layout-editor__group">
      <button
        type="button"
        className="layout-editor__group-toggle"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen(current => !current)}
      >
        <span className={open ? 'layout-editor__chevron' : 'layout-editor__chevron layout-editor__chevron--collapsed'}>
          <Icon name="ChevronDownFilled" size={12} />
        </span>
        {title}
      </button>
      {open && (
        <ul id={listId} className="layout-editor__tiles">
          {items.map(item => <PaletteTile key={item.id} item={item} />)}
        </ul>
      )}
    </section>
  );
}

function Palette() {
  return (
    <aside className="layout-editor__palette" aria-label="Fields and components">
      <PaletteGroup title="New Fields" items={NEW_FIELDS} />
      <PaletteGroup title="Components" items={COMPONENTS} />
      <button type="button" className="layout-editor__unused">
        <span className="layout-editor__unused-label">
          Unused Items
          <Icon name="LibChevronRight" size={14} />
        </span>
        <span className="layout-editor__count" aria-label={`${UNUSED_ITEMS_COUNT} items`}>{UNUSED_ITEMS_COUNT}</span>
      </button>
    </aside>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Canvas
// ─────────────────────────────────────────────────────────────────────────────

function FieldRow({ field, showHiddenNote }) {
  const className = [
    'layout-editor__field',
    field.mandatory && 'layout-editor__field--mandatory',
  ].filter(Boolean).join(' ');

  return (
    <li className="layout-editor__field-item">
      <div className={className}>
        <Icon name={field.icon} size={16} />
        <span className="layout-editor__field-label">
          {field.label}
          {field.mandatory && <span className="layout-editor__visually-hidden"> (mandatory)</span>}
        </span>
        {field.hint && <span className="layout-editor__field-hint">{field.hint}</span>}
        <button type="button" className="layout-editor__more" aria-label={`More options for ${field.label}`}>
          <Icon name="LibMore" size={14} />
        </button>
      </div>
      {showHiddenNote && field.hidden && (
        <p className="layout-editor__hidden-note">
          <Icon name="LibInfo" size={12} />
          This field will be hidden during creation/editing.
        </p>
      )}
    </li>
  );
}

function FieldColumn({ fields, showHiddenNotes }) {
  return (
    <ul className="layout-editor__column">
      {fields.map(field => <FieldRow key={field.id} field={field} showHiddenNote={showHiddenNotes} />)}
    </ul>
  );
}

function CanvasSection({ title, columns, showHiddenNotes }) {
  const headingId = useId();
  return (
    <section className="layout-editor__section" aria-labelledby={headingId}>
      <h3 id={headingId} className="layout-editor__section-title">{title}</h3>
      <div className={columns.length > 1 ? 'layout-editor__columns' : 'layout-editor__columns layout-editor__columns--single'}>
        {columns.map((fields, index) => (
          <FieldColumn key={index} fields={fields} showHiddenNotes={showHiddenNotes} />
        ))}
      </div>
    </section>
  );
}

function LeadImageSection() {
  const [enabled, setEnabled] = useState(true);
  return (
    <section className="layout-editor__section" aria-label="Lead Image">
      <div className="layout-editor__image-header">
        <h3 className="layout-editor__section-title">Lead Image</h3>
        <Switch
          aria-label="Show lead image"
          checked={enabled}
          onChange={event => setEnabled(event.target.checked)}
        />
      </div>
      {enabled && (
        <div className="layout-editor__avatar">
          <Icon name="UserAvatar" size={64} />
          <button type="button" className="layout-editor__avatar-more" aria-label="Lead image options">
            <Icon name="LibMore" size={12} />
          </button>
        </div>
      )}
    </section>
  );
}

function CreateCanvas() {
  return (
    <>
      <div className="layout-editor__canvas-header">
        <h2 className="layout-editor__canvas-title">Create Lead</h2>
        <div className="layout-editor__canvas-actions">
          <div className="layout-editor__button-row">
            <Button variant="default">Cancel</Button>
            <Button variant="default">Slyte UI - Custom Button</Button>
            <Button variant="default">Save and New</Button>
            <Button variant="primary">Save</Button>
          </div>
          <Button variant="link-primary" frontIcon={<Icon name="LibSwap" size={14} />}>
            Manage Edit Page Buttons
          </Button>
        </div>
      </div>
      <LeadImageSection />
      <CanvasSection title="Lead Information" columns={[LEAD_INFO_LEFT, LEAD_INFO_RIGHT]} showHiddenNotes />
      <CanvasSection title="Address Information" columns={[ADDRESS_LEFT, ADDRESS_RIGHT]} showHiddenNotes />
      <CanvasSection title="Description Information" columns={[DESCRIPTION_FIELDS]} showHiddenNotes />
    </>
  );
}

function QuickCreateCanvas() {
  return (
    <>
      <div className="layout-editor__canvas-header">
        <h2 className="layout-editor__canvas-title">Quick Create: Lead</h2>
        <div className="layout-editor__button-row">
          <Button variant="default">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>
      <CanvasSection title="Lead Information" columns={[QUICK_CREATE_FIELDS]} />
    </>
  );
}

function DetailViewCanvas() {
  return (
    <>
      <div className="layout-editor__canvas-header">
        <h2 className="layout-editor__canvas-title">Lead Details</h2>
      </div>
      <LeadImageSection />
      <CanvasSection title="Lead Information" columns={[LEAD_INFO_LEFT, LEAD_INFO_RIGHT]} />
      <CanvasSection title="Address Information" columns={[ADDRESS_LEFT, ADDRESS_RIGHT]} />
      <CanvasSection title="Description Information" columns={[DESCRIPTION_FIELDS]} />
    </>
  );
}

const CANVASES = {
  create: CreateCanvas,
  quickCreate: QuickCreateCanvas,
  detailView: DetailViewCanvas,
};

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export function LayoutEditorPage({ initialView = 'create' }) {
  const [view, setView] = useState(initialView);
  useEffect(() => setView(initialView), [initialView]);

  const Canvas = CANVASES[view] ?? CreateCanvas;

  return (
    <div className="layout-editor">
      <TopBar />
      <div className="layout-editor__body">
        <Palette />
        <main className="layout-editor__main">
          <div className="layout-editor__view-bar">
            <Tabs tabs={VIEW_TABS} activeTab={view} onChange={setView} />
            <button type="button" className="layout-editor__preview" aria-label="Preview layout">
              <Icon name="LibPreviewEyeSeeShow" size={16} />
            </button>
          </div>
          <div className="layout-editor__scroll">
            <div className="layout-editor__canvas">
              <Canvas />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LayoutEditorPage;
