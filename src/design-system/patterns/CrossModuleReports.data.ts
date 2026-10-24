/** Sample data for the Cross-module Reports pattern (Figma node 79995:20707). */

export interface ReportColumn {
  key: keyof ReportRow;
  label: string;
  width: number;
}

export interface ReportRow {
  id: string;
  account: string;
  potential: string;
  revenue: number;
  email: string;
  created: string;
}

export interface ReportGroup {
  id: string;
  owner: string;
  avatar: string;
  rows: ReportRow[];
}

export const REPORT_TITLE = 'Social Media Engagement Report';
export const REPORT_FOLDER = 'Email Analytics';

export const OWNER_COLUMN = { label: 'Potential Owner', width: 224 };

export const REPORT_COLUMNS: ReportColumn[] = [
  { key: 'account', label: 'Account Name', width: 236 },
  { key: 'potential', label: 'Potential Name', width: 228 },
  { key: 'revenue', label: 'Annual Revenue', width: 219 },
  { key: 'email', label: 'Email', width: 295 },
  { key: 'created', label: 'Created Time', width: 160 },
];

const avatar = (n: number) => `${import.meta.env.BASE_URL}images/avatars/user_0${n}.jpg`;

export const REPORT_GROUPS: ReportGroup[] = [
  {
    id: 'kevin', owner: 'Kevin McGuire', avatar: avatar(1),
    rows: [
      { id: 'k1', account: 'Effiemouth', potential: 'Roger Adams', revenue: 629, email: 'selina_vonrueden@yahoo.com', created: 'Jun 19, 2018' },
      { id: 'k2', account: 'South Elianland', potential: 'Nathan Nelson', revenue: 904, email: 'moore.viva@yahoo.com', created: 'Jun 19, 2018' },
      { id: 'k3', account: 'East Jay', potential: 'Phoebe Patrick', revenue: 752, email: 'flavie_parker@gmail.com', created: 'Jun 19, 2018' },
      { id: 'k4', account: 'South Omari', potential: 'Lena Lawson', revenue: 449, email: 'nicklaus.ebert@yahoo.com', created: 'Jun 19, 2018' },
      { id: 'k5', account: 'Spinkaville', potential: 'Trevor Garcia', revenue: 487, email: 'schuppe_ted@gmail.com', created: 'Jun 19, 2018' },
    ],
  },
  {
    id: 'frances', owner: 'Frances Henry', avatar: avatar(2),
    rows: [
      { id: 'f1', account: 'North Grant', potential: 'Alvin Daniels', revenue: 323, email: 'royce_jenkins@auer.name', created: 'Jun 19, 2018' },
      { id: 'f2', account: 'Collierstad', potential: 'Joseph Barton', revenue: 577, email: 'bednar_viola@cordia.io', created: 'Jun 03, 2018' },
      { id: 'f3', account: 'Ollieside', potential: 'Lucile Hughes', revenue: 883, email: 'mustafa_feeney@gmail.com', created: 'Jun 19, 2018' },
    ],
  },
  {
    id: 'louisa', owner: 'Louisa Houston', avatar: avatar(3),
    rows: [
      { id: 'l1', account: 'West Buddy', potential: 'Charlotte Black', revenue: 585, email: 'griffin_smitham@hotmail.com', created: 'Dec 31, 2018' },
      { id: 'l2', account: 'New Daphnechester', potential: 'Cole Hill', revenue: 309, email: 'gene_ebert@antonietta.net', created: 'Jun 19, 2018' },
      { id: 'l3', account: 'West Rosella', potential: 'Jeff Floyd', revenue: 524, email: 'garfield_friesen@gmail.com', created: 'Jun 19, 2018' },
    ],
  },
  {
    id: 'nathaniel', owner: 'Nathaniel Gordon', avatar: avatar(4),
    rows: [
      { id: 'n1', account: 'Angelastad', potential: 'Tyler Gomez', revenue: 433, email: 'alexandro_larson@orlando.info', created: 'Jun 19, 2018' },
      { id: 'n2', account: 'Port Kirstin', potential: 'Irene Walsh', revenue: 612, email: 'irene.walsh@bergstrom.biz', created: 'Jun 21, 2018' },
    ],
  },
];

export const PANEL_TABS = [
  { id: 'columns', label: 'Columns' },
  { id: 'filters', label: 'Filters' },
];

// ─── Add Filter modal ────────────────────────────────────────────────────────

export interface FilterFieldOption {
  value: string;
  label: string;
  fieldType: string;
}

/** Report fields offered in the Base Filter and Quick Filter criteria builders. */
export const FILTER_FIELDS: FilterFieldOption[] = [
  { value: 'account_name', label: 'Account Name', fieldType: 'text' },
  { value: 'potential_name', label: 'Potential Name', fieldType: 'text' },
  { value: 'potential_owner', label: 'Potential Owner', fieldType: 'lookup' },
  { value: 'annual_revenue', label: 'Annual Revenue', fieldType: 'currency' },
  { value: 'email', label: 'Email', fieldType: 'email' },
  { value: 'lead_source', label: 'Lead Source', fieldType: 'picklist' },
  { value: 'stage', label: 'Stage', fieldType: 'picklist' },
  { value: 'email_opt_out', label: 'Email Opt Out', fieldType: 'text' },
  { value: 'created_by', label: 'Created By', fieldType: 'lookup' },
  { value: 'created_time', label: 'Created Time', fieldType: 'date' },
  { value: 'modified_time', label: 'Modified Time', fieldType: 'date' },
];

export const TEXT_OPERATORS = [
  { value: 'is', label: 'is' },
  { value: 'isnt', label: "isn't" },
  { value: 'contains', label: 'contains' },
  { value: 'doesnt_contain', label: "doesn't contain" },
  { value: 'starts_with', label: 'starts with' },
  { value: 'ends_with', label: 'ends with' },
  { value: 'is_empty', label: 'is empty' },
  { value: 'is_not_empty', label: 'is not empty' },
];

export const NUMERIC_OPERATORS = [
  { value: 'eq', label: '=' },
  { value: 'neq', label: '!=' },
  { value: 'lt', label: '<' },
  { value: 'lte', label: '<=' },
  { value: 'gt', label: '>' },
  { value: 'gte', label: '>=' },
  { value: 'between', label: 'between' },
  { value: 'not_between', label: 'not between' },
  { value: 'is_empty', label: 'is empty' },
  { value: 'is_not_empty', label: 'is not empty' },
];

/** Territory Filter options — the radio list from the reference, shown as a picklist (empty value shows "Select"). */
export const TERRITORY_MODES = [
  { value: 'all', label: 'All Territories' },
  { value: 'multiple', label: 'Multiple Territories' },
  { value: 'without', label: 'Without Territories' },
  { value: 'custom', label: 'Custom' },
];

export interface TerritoryOption { value: string; label: string }

export const TERRITORIES: TerritoryOption[] = [
  { value: 'delhi', label: 'Delhi' },
  { value: 'zonal_manager', label: 'Zonal Manager' },
  { value: 'south_zone', label: 'South Zone' },
  { value: 'tamilnadu', label: 'Tamilnadu' },
  { value: 'north_zone', label: 'North Zone' },
  { value: 'karnataka', label: 'Karnataka' },
  { value: 'kerala', label: 'Kerala' },
  { value: 'mumbai', label: 'Mumbai' },
];


/** Base Filter (reference image): primary module and related-module criteria. */
export const BASE_MODULE = 'contacts';
export const BASE_MODULE_LABEL = 'Contact';
export const BASE_MODULE_OPTIONS = [
  { value: 'contacts', label: 'Contact' },
  { value: 'accounts', label: 'Account' },
];
export const RELATED_CONDITIONS = [
  { value: 'with', label: 'with' },
  { value: 'without', label: 'without' },
];
export const RELATED_MODULES = [
  { value: 'accounts', label: 'Accounts' },
  { value: 'deals', label: 'Deals' },
  { value: 'tasks', label: 'Tasks' },
  { value: 'calls', label: 'Calls' },
];
