// ── CSS — consumers must import this for design tokens and component styles ──
import './design-system/foundations/design-tokens.css';

// ── Components ────────────────────────────────────────────────────────────────

export { Breadcrumb } from './design-system/components/Breadcrumb';
export type { BreadcrumbItem, BreadcrumbProps } from './design-system/components/Breadcrumb';

export { Button, ButtonGroup } from './design-system/components/Button';
export type {
  ButtonProps,
  ButtonGroupProps,
  ButtonGroupOption,
  ButtonVariant,
  ButtonSize,
  ButtonForceState,
  ButtonFilledVariant,
  ButtonOutlineVariant,
  ButtonGhostVariant,
  ButtonLinkVariant,
} from './design-system/components/Button';

export { Calendar, DateRangePicker } from './design-system/components/Calendar';
export type {
  CalendarProps,
  CalendarMode,
  DateRangePickerProps,
  RangePreset,
} from './design-system/components/Calendar';

export { Checkbox } from './design-system/components/Checkbox';
export type { CheckboxProps, CheckboxForceState } from './design-system/components/Checkbox';

export { CriteriaBuilder } from './design-system/components/CriteriaBuilder';
export type {
  CriteriaBuilderProps,
  CriteriaRow,
  CriteriaError,
} from './design-system/components/CriteriaBuilder';

export { DatePicker } from './design-system/components/DatePicker';
export type { DatePickerProps } from './design-system/components/DatePicker';

export { Dropdown } from './design-system/components/Dropdown';
export type {
  DropdownProps,
  DropdownOption,
  DropdownLayout,
  DropdownFooterAction,
} from './design-system/components/Dropdown';

export { FormSection } from './design-system/components/FormSection';
export type { FormSectionProps } from './design-system/components/FormSection';

export { Icon } from './design-system/components/Icon';
export type { IconProps, IconName } from './design-system/components/Icon';
export { iconMap } from './design-system/components/Icon';
export type { SvgComponent } from './design-system/components/Icon';

export { Input, DateTimeInput } from './design-system/components/Input';
export type {
  InputProps,
  InputType,
  InputLayout,
  InputSize,
  InputVariant,
  InputForceState,
  DateTimeInputProps,
} from './design-system/components/Input';

export { MessageBox } from './design-system/components/MessageBox';
export type { MessageBoxProps, MessageBoxVariant } from './design-system/components/MessageBox';

export { Modal } from './design-system/components/Modal';
export type { ModalProps } from './design-system/components/Modal';

export { Radio } from './design-system/components/Radio';
export type { RadioProps, RadioForceState } from './design-system/components/Radio';

export { Select } from './design-system/components/Select';
export type {
  SelectProps,
  SelectOption,
  SelectLayout,
  SelectVariant,
  SelectForceState,
} from './design-system/components/Select';

export { Switch } from './design-system/components/Switch';
export type { SwitchProps } from './design-system/components/Switch';

export { SetupTable } from './design-system/components/Table';
export type {
  SetupTableProps,
  TableColumn,
  SetupTableRow,
  SortDir,
} from './design-system/components/Table';

export { Tabs } from './design-system/components/Tabs';
export type { TabsProps, TabItem } from './design-system/components/Tabs';

export { Tags } from './design-system/components/Tags';
export type { TagsProps, TagItem } from './design-system/components/Tags';

export { Textarea } from './design-system/components/Textarea';
export type {
  TextareaProps,
  TextareaLayout,
  TextareaForceState,
} from './design-system/components/Textarea';

export { Tooltip } from './design-system/components/Tooltip';
export type {
  TooltipProps,
  TooltipVariant,
  TooltipPlacement,
} from './design-system/components/Tooltip';

export { UserPicker } from './design-system/components/UserPicker';
export type {
  UserPickerProps,
  UserOption,
  UserPickerLayout,
} from './design-system/components/UserPicker';

// ── Foundations / Icons ───────────────────────────────────────────────────────
export {
  Info,
  Lock,
  ChevronDownFilled,
  Search,
  Check,
  AlertSuccess,
  AlertError,
  AlertWarning,
  AlertInfo,
  CloseSmall,
  ResizeHandle,
  More,
  CriteriaMinus,
  CriteriaPlus,
  HelpCircle,
  Edit,
  Close,
  UserAvatar,
  GroupAvatar,
  CompanyAvatar,
  ImageAvatar,
} from './design-system/foundations/icons/Icons';

// ── Token Engine ──────────────────────────────────────────────────────────────
export {
  TokenEngine,
  TokenEngineCore,
  TokenRegistry,
  TokenValidator,
  CssVariableGenerator,
  ThemeManager,
  isDtcgToken,
  isDtcgColorValue,
  isAliasString,
} from './design-system/engine';
export type {
  DtcgColorValue,
  DtcgRawValue,
  DtcgToken,
  TokenCollection,
  ResolvedToken,
  ValidationIssue,
  ValidationResult,
  CssVariableOptions,
  Theme,
  ThemeChangeListener,
  Unsubscribe,
  TokenEngineConfig,
} from './design-system/engine';
