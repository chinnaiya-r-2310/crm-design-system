import { useRef, useState, type ChangeEvent } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { NextGenLeftMenu } from '../components/NextGenLeftMenu/NextGenLeftMenu';
import { NextGenTopBand } from '../components/NextGenTopBand/NextGenTopBand';
import { WMSBar } from '../components/WMSBar/WMSBar';
import { Button } from '../components/Button/Button';
import { Icon } from '../components/Icon/Icon';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { Tags } from '../components/Tags/Tags';
import { UserPicker } from '../components/UserPicker/UserPicker';
import { Input } from '../components/Input/Input';
import { Switch } from '../components/Switch/Switch';
import { Dragger } from '../components/Dragger/Dragger';
import { NestedCriteria } from '../components/CriteriaBuilder/NestedCriteria';
import { MessageBox } from '../components/MessageBox/MessageBox';
import { Tooltip } from '../components/Tooltip/Tooltip';
import {
  CriteriaPlus, CriteriaMinus, HelpCircle, Info, More, Search,
  ModuleHome, ModuleMyJobs, ModuleReports, ModuleAnalytics, ModuleCustom,
  ModuleLeads, ModuleContacts, ModuleDeals, ModuleSocial,
} from '../foundations/icons/Icons';
import '../components/CriteriaBuilder/NestedCriteria.css';
import './PortalUserInFilters.css';

const meta = {
  title: 'Work Items/Portal User in Filters',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const modules = [{ value: 'leads', label: 'Leads' }];
const fields = ['Modified By', 'Created By', 'Lead Owner'].map(label => ({ value: label, label }));
const operators = [
  { value: 'is', label: 'is' },
  { value: 'is_not', label: "isn't" },
  { value: 'is_empty', label: 'is empty' },
  { value: 'is_not_empty', label: 'is not empty' },
  { value: 'portal', label: 'belongs to Portal' },
  { value: 'not_portal', label: 'does not belongs to Portal' },
  { value: 'role', label: 'belongs to Role' },
  { value: 'not_role', label: 'does not belong to Role' },
];
const portals = ['Customer Portal', 'Partner Portal', 'Vendor Portal', 'Support Portal', 'Distributor Portal'].map(label => ({ value: label, label }));
const roles = ['Administrator', 'Sales Manager', 'Sales Representative'].map(label => ({ value: label, label }));
const users = [
  { id: 'ananya', name: 'Ananya Nair', subLabel: 'ananya.nair@zylker.com' },
  { id: 'arjun', name: 'Arjun Menon', subLabel: 'arjun.menon@zylker.com' },
  { id: 'meera', name: 'Meera Krishnan', subLabel: 'meera.krishnan@zylker.com' },
];
const initialSelected = ['Lead Name', 'Company', 'Email', 'Industry', 'City', 'Country', 'Annual Revenue'];
const allColumns = ['902323222', 'Aggregate Field 4', 'Aggregate Field 5', 'Aggregate Field 6', 'Aggregate Field 7', 'Auto-Number 1', 'Availability test', ...initialSelected];
const topNavItems = [
  { id: 'home', label: 'Home', icon: ModuleHome },
  { id: 'workqueue', label: 'Workqueue', icon: ModuleMyJobs },
  { id: 'reports', label: 'Reports', icon: ModuleReports },
  { id: 'dashboards', label: 'Dashboards', icon: ModuleAnalytics },
  { id: 'requests', label: 'My Requests', icon: ModuleMyJobs },
  { id: 'agents', label: 'Agents', icon: ModuleCustom },
  { id: 'vibe', label: 'Vibe ✨', icon: ModuleSocial },
  { id: 'mcp', label: 'MCP', icon: ModuleCustom },
];
const navigationModules = [
  { id: 'leads', label: 'Leads', icon: ModuleLeads },
  { id: 'contacts', label: 'Contact', icon: ModuleContacts },
  { id: 'deals', label: 'Deals', icon: ModuleDeals },
  ...['Live Camera Assistance', 'SalesInbox', 'Leads/Contacts', 'RL Test Modules', 'Google Ads', 'Prakashghf', 'Artist Page Detail', 'Dummy Module'].map(label => ({ id: label, label, icon: ModuleCustom })),
];
const newCriterion = (id: number) => ({ id, field: 'Modified By', operator: 'is', value: '', portalValues: [] as string[] });

function CustomView() {
  const [criteriaOn, setCriteriaOn] = useState(true);
  const [relatedOn, setRelatedOn] = useState(false);
  const [rows, setRows] = useState([newCriterion(1)]);
  const [selected, setSelected] = useState(initialSelected);
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);
  const update = (id: number, patch: Partial<ReturnType<typeof newCriterion>>) => {
    setMessage('');
    setRows(current => current.map(row => row.id === id ? { ...row, ...patch } : row));
  };
  const reset = () => {
    setRows([newCriterion(1)]);
    setCriteriaOn(true);
    setRelatedOn(false);
    setSelected([...initialSelected]);
    setQuery('');
    setMessage('Changes discarded.');
  };
  const save = () => {
    const incomplete = criteriaOn && rows.some(row =>
      ['portal', 'not_portal'].includes(row.operator)
        ? row.portalValues.length === 0
        : ['is', 'is_not', 'role', 'not_role'].includes(row.operator) && !row.value
    );
    setMessage(incomplete ? 'Select a user, portal, or role for each criterion before saving.' : 'Custom view “Kerala Leads” saved.');
    contentRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="puf-page">
      <div className="puf-shell">
        <NextGenLeftMenu width={235} activeId="leads" topNavItems={topNavItems} modules={navigationModules} />
        <main className="puf-main">
          <NextGenTopBand moduleLabel="Leads" searchPlaceholder="Search records" showTerritory={false} />
          <header className="puf-header">
            <Button variant="link-default" className="puf-back" aria-label="Back to Leads" onClick={reset}><Icon name="CrmArrowBack" size="var(--ds-line-height-h2)" /></Button>
            <h1>Kerala Leads</h1>
            <div className="puf-header-actions">
              <Tooltip content="Create a custom view using criteria and selected columns." variant="black" placement="top" followCursor>
                <Button variant="link-default" aria-label="Custom view information"><Info /></Button>
              </Tooltip>
              <Dropdown width={48} triggerIcon={<More />} triggerAriaLabel="More custom view actions" triggerButtonVariant="default" options={[{ value: 'reset', label: 'Reset changes' }]} onChange={reset} />
              <Button variant="default" onClick={reset}>Cancel</Button>
              <Button onClick={save}>Save</Button>
              <Tooltip content="Custom view help" variant="black" placement="top" followCursor>
                <Button variant="link-default" aria-label="Custom view help"><HelpCircle /></Button>
              </Tooltip>
            </div>
          </header>
          <div className="puf-canvas">
            <div className="puf-content" ref={contentRef}>
              {message && <MessageBox variant={message.startsWith('Select') ? 'error' : 'success'} message={message} onClose={() => setMessage('')} />}
              <div className="puf-criteria">
                <section className="nested-criteria__card" aria-label="Specify Criteria - Leads">
                  <div className="nested-criteria__card-title">
                    <h4>Specify Criteria - &quot;Leads&quot;</h4>
                    <Switch aria-label="Enable lead criteria" checked={criteriaOn} onChange={(event: ChangeEvent<HTMLInputElement>) => setCriteriaOn(event.target.checked)} />
                  </div>
                  {criteriaOn && rows.map((row, index) => (
                    <div key={row.id} className="puf-criterion-group">
                      <div className="puf-criterion">
                        <span className="nested-criteria__circle">{index + 1}</span>
                        <Dropdown layout="vertical" width={150} triggerAriaLabel={`Module ${index + 1}`} options={modules} value="leads" />
                        <Dropdown layout="vertical" width={200} triggerAriaLabel={`Field ${index + 1}`} options={fields} value={row.field} onChange={(value: string) => update(row.id, { field: value, value: '', portalValues: [] })} />
                        <Dropdown layout="vertical" width={150} panelStyle={{ minWidth: 218 }} triggerAriaLabel={`Operator ${index + 1}`} options={operators} value={row.operator} onChange={(value: string) => update(row.id, { operator: value, value: '', portalValues: [] })} />
                        {['is', 'is_not'].includes(row.operator) && <UserPicker layout="vertical" width={343} placeholder="Click to Select Users." users={users} value={row.value} onChange={(value: string) => update(row.id, { value })} />}
                        {['portal', 'not_portal'].includes(row.operator) && <Tags width={343} placeholder="Select Portal" options={portals} value={portals.filter(portal => row.portalValues.includes(portal.value))} onChange={(values: { value: string; label: string }[]) => update(row.id, { portalValues: values.map(portal => portal.value) })} />}
                        {['role', 'not_role'].includes(row.operator) && <Dropdown layout="vertical" width={343} triggerAriaLabel={`Role ${index + 1}`} placeholder="Select Role" options={roles} value={row.value} onChange={(value: string) => update(row.id, { value })} />}
                        {['is_empty', 'is_not_empty'].includes(row.operator) && <Input layout="vertical" width={343} aria-label={`Value ${index + 1}`} value="" disabled />}
                        {rows.length > 1 && <Button variant="link-red" className="puf-icon-action" aria-label={`Remove criterion ${index + 1}`} onClick={() => setRows(current => current.filter(item => item.id !== row.id))}><CriteriaMinus /></Button>}
                        {index === rows.length - 1 && <Button variant="link-default" className="puf-icon-action puf-add" aria-label="Add criterion" disabled={rows.length >= 25} onClick={() => setRows(current => [...current, newCriterion(Math.max(...current.map(item => item.id)) + 1)])}><CriteriaPlus /></Button>}
                      </div>
                      {index < rows.length - 1 && <div className="puf-row-connector"><span>AND</span></div>}
                    </div>
                  ))}
                </section>
                <div className="nested-criteria__and" aria-hidden="true"><span>AND</span></div>
                <section className="nested-criteria__card puf-related" aria-label="Related Modules Criteria">
                  <div className="nested-criteria__card-title">
                    <h4>Related Modules Criteria</h4>
                    <Switch aria-label="Enable related modules criteria" checked={relatedOn} onChange={(event: ChangeEvent<HTMLInputElement>) => setRelatedOn(event.target.checked)} />
                  </div>
                  {relatedOn ? <NestedCriteria moduleLabel="Leads" specifyTitle={'Specify Criteria - "Leads"'} moduleOptions={modules} fieldOptions={fields} operatorOptions={operators} relatedModules={[{ value: 'contacts', label: 'Contacts' }, { value: 'deals', label: 'Deals' }]} relatedConditions={[{ value: 'with', label: 'with' }, { value: 'without', label: 'without' }]} valueWidth={200} defaultRelatedOn /> : <p className="nested-criteria__card-off">It helps to filter record based on related module values.</p>}
                </section>
              </div>
              <section className="puf-columns" aria-labelledby="puf-columns-title">
                <h2 id="puf-columns-title">Choose Column for Default List View <Tooltip content="Choose the fields and drag selected columns to set their order. Lead Name is required." variant="black" placement="top" followCursor><Button variant="link-default" aria-label="Column selection information"><Info /></Button></Tooltip></h2>
                <div className="puf-column-lists">
                  <div>
                    <h3>Available</h3>
                    <div className="puf-list-box">
                      <Input layout="vertical" type="search" width="100%" aria-label="Search available columns" suffix={<Search />} value={query} onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} />
                      <div className="puf-available">
                        {allColumns.filter(label => !selected.includes(label) && label.toLowerCase().includes(query.toLowerCase())).map(label => <Button variant="link-default" key={label} onClick={() => setSelected(current => [...current, label])}>{label}</Button>)}
                        {!allColumns.some(label => !selected.includes(label) && label.toLowerCase().includes(query.toLowerCase())) && <p>No matching columns</p>}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>Selected</h3>
                    <div className="puf-list-box puf-selected">
                      <Dragger items={selected} onChange={setSelected} gripperOnHover renderItem={(label: string) => <Button variant="link-default" aria-label={label === 'Lead Name' ? 'Lead Name (required)' : `Remove ${label}`} aria-disabled={label === 'Lead Name'} onClick={() => label !== 'Lead Name' && setSelected(current => current.filter(item => item !== label))}>{label}{label === 'Lead Name' && <span className="puf-required"> *</span>}</Button>} />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      <WMSBar />
    </div>
  );
}

export const InCustomView: Story = { render: () => <CustomView /> };
