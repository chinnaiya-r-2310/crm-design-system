import { DEMO_LIMITS, UNIT_LABELS, USAGE_FEATURES, type UsageProperty } from './UsageLimitNotification.data';

const LABELS: Record<string, string> = {
  webhook_calls_today: 'Webhook Calls', emails_sent_today: 'Emails Sent',
  merges_used_today: 'Total Merges', exports_today: 'Total Exports',
  backups_used_this_month: 'Backups Used', records_enriched_this_month: 'Records Enriched',
  free_credits_used_this_cycle: 'Free Credits Used', paid_credits_used_this_cycle: 'Paid Credits Used',
  overall_credits_used_this_cycle: 'Overall Credits Used',
};
const ACRONYMS: Record<string, string> = { api: 'API', uri: 'URI', oauth: 'OAuth' };
export function prettyUsageName(name: string): string {
  return LABELS[name] ?? name.split('_').map((word, i) => ACRONYMS[word] ??
    (i > 0 && ['per', 'this'].includes(word) ? word : word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
}
export const AGGREGATION_LABELS: Record<string, string> = {
  count: 'Count', count_distinct: 'Distinct count', sum: 'Total', avg: 'Average', max: 'Maximum', min: 'Minimum',
};
export const COMPARISON_OPTIONS = [
  { value: 'eq', label: '=' }, { value: 'ne', label: '!=' }, { value: 'lt', label: '<' },
  { value: 'gt', label: '>' }, { value: 'bt', label: 'between' }, { value: 'nb', label: 'not between' },
];
export const INTERVAL_OPTIONS = [
  { value: 'minute:15', label: '15 minutes' }, { value: 'minute:30', label: '30 minutes' },
  { value: 'minute:45', label: '45 minutes' }, { value: 'hour:1', label: '1 hour' },
  { value: 'hour:2', label: '2 hours' }, { value: 'hour:4', label: '4 hours' },
  { value: 'hour:8', label: '8 hours' }, { value: 'hour:12', label: '12 hours' },
  { value: 'hour:24', label: '24 hours' },
];
export const WINDOW_OPTIONS = [
  { value: 'minutes', label: 'Minutes' }, { value: 'hours', label: 'Hours' }, { value: 'days', label: 'Days' },
];
export const WINDOW_MAX: Record<string, number> = { minutes: 60, hours: 24, days: 30 };
export interface UsageTrigger {
  feature: string; measure: string; calculation: string; constant: string;
  mode: string; comparator: string; value: string; valueTo: string;
  windowValue: string; windowUnit: string; interval: string;
}
export function usageMeasures(feature: string): UsageProperty[] {
  return USAGE_FEATURES[feature]?.properties.filter(p => p.kind !== 'constant' && !p.noAgg) ?? [];
}
export function createUsageTrigger(feature = ''): UsageTrigger {
  const measure = usageMeasures(feature)[0];
  return { feature, measure: measure?.name ?? '', calculation: measure?.aggs[0] ?? '',
    constant: measure?.limits?.[0] ?? '', mode: measure?.limits?.length ? 'pct' : 'val',
    comparator: 'gt', value: measure?.limits?.length ? '80' : '90000', valueTo: measure?.limits?.length ? '100' : '100000',
    windowValue: '12', windowUnit: 'hours', interval: 'hour:1' };
}
export function selectedUsageMeasure(trigger: UsageTrigger): UsageProperty | undefined {
  return usageMeasures(trigger.feature).find(p => p.name === trigger.measure);
}
export function changeUsageMeasure(trigger: UsageTrigger, name: string): UsageTrigger {
  const old = selectedUsageMeasure(trigger);
  const next = usageMeasures(trigger.feature).find(p => p.name === name);
  if (!next) return trigger;
  const calculation = next.kind === old?.kind && next.aggs.includes(trigger.calculation)
    ? trigger.calculation : next.aggs[0];
  const mode = next.limits?.length ? trigger.mode : 'val';
  return { ...trigger, measure: name, calculation, constant: next.limits?.[0] ?? '',
    mode, value: mode === trigger.mode ? trigger.value : mode === 'pct' ? '80' : '90000',
    valueTo: mode === trigger.mode ? trigger.valueTo : mode === 'pct' ? '100' : '100000' };
}
export function usageWindowApplies(trigger: UsageTrigger): boolean {
  const field = selectedUsageMeasure(trigger);
  return !!field && !(['data_storage', 'file_storage', 'email_storage', 'mail_merge'].includes(trigger.feature) &&
    (field.kind === 'total' || trigger.calculation === 'sum'));
}
export function usageValueUnit(trigger: UsageTrigger): string {
  const field = selectedUsageMeasure(trigger);
  return trigger.calculation === 'count' ? USAGE_FEATURES[trigger.feature].recordNoun : UNIT_LABELS[field?.unit ?? ''] ?? '';
}
export function validateUsageTrigger(trigger: UsageTrigger): string | undefined {
  const feature = USAGE_FEATURES[trigger.feature];
  if (!feature) return 'Select a feature.';
  if (feature.blank) return;
  const field = selectedUsageMeasure(trigger);
  if (!field || !field.aggs.includes(trigger.calculation)) return 'Select a supported measure and calculation.';
  const range = ['bt', 'nb'].includes(trigger.comparator);
  if (!COMPARISON_OPTIONS.some(option => option.value === trigger.comparator)) return 'Select a comparison.';
  if (trigger.mode === 'pct' && !field.limits?.includes(trigger.constant)) return 'Select a supported allocation limit.';
  const values = range ? [trigger.value, trigger.valueTo] : [trigger.value];
  if (values.some(value => value.trim() === '' || !Number.isFinite(Number(value)) ||
    (trigger.mode === 'pct' ? Number(value) <= 0 || Number(value) > 500 : Number(value) < 0))) {
    return trigger.mode === 'pct' ? 'Enter a percentage greater than 0 and up to 500.' : 'Enter a value of zero or greater.';
  }
  if (range && Number(trigger.value) > Number(trigger.valueTo)) return 'From can’t be greater than To.';
  if (usageWindowApplies(trigger) && (!Number.isInteger(Number(trigger.windowValue)) || Number(trigger.windowValue) < 1 ||
    !WINDOW_MAX[trigger.windowUnit] || Number(trigger.windowValue) > WINDOW_MAX[trigger.windowUnit])) {
    return `Enter a whole-number window between 1 and ${WINDOW_MAX[trigger.windowUnit]} ${trigger.windowUnit}.`;
  }
  if (!INTERVAL_OPTIONS.some(option => option.value === trigger.interval)) return 'Select a notification interval.';
}
const VERBS: Record<string, string> = {
  eq: 'equals', ne: 'doesn’t equal', lt: 'is less than', gt: 'is greater than', bt: 'is between', nb: 'is not between',
};
export function usageTriggerSummary(trigger: UsageTrigger): string {
  const field = selectedUsageMeasure(trigger);
  if (!field || USAGE_FEATURES[trigger.feature].blank) return '';
  const format = (value: number) => (Math.round(value * 100) / 100).toLocaleString('en-US');
  const range = ['bt', 'nb'].includes(trigger.comparator);
  const values = range ? [trigger.value, trigger.valueTo] : [trigger.value];
  const subject = field.kind === 'total' ? `Current ${prettyUsageName(field.name)}` :
    `${AGGREGATION_LABELS[trigger.calculation]} of ${prettyUsageName(field.name)}`;
  let target = values.map(value => format(Number(value))).join(' and ');
  if (trigger.mode === 'pct') {
    const allocation = DEMO_LIMITS[trigger.constant];
    target = values.map(value => `${format(Number(value))}%`).join(' and ') + ` of ${prettyUsageName(trigger.constant)}`;
    if (allocation != null) target += ` (${values.map(value => format(Number(value) / 100 * allocation)).join(' and ')} ${UNIT_LABELS[field.unit ?? ''] ?? ''})`;
  } else target += ` ${usageValueUnit(trigger)}`;
  const window = usageWindowApplies(trigger) ? ` within the last ${trigger.windowValue} ${Number(trigger.windowValue) === 1 ? trigger.windowUnit.replace(/s$/, '') : trigger.windowUnit}` : '';
  const interval = INTERVAL_OPTIONS.find(option => option.value === trigger.interval)?.label ?? '';
  return `Alert when ${subject} ${VERBS[trigger.comparator]} ${target}${window}. You’ll be notified at most once every ${interval}.`;
}

export const USAGE_MESSAGE_FIELDS = [
  { value: 'Feature', label: 'Feature' },
  { value: 'Measure', label: 'Based on' },
  { value: 'Calculation', label: 'Calculation' },
  { value: 'Threshold', label: 'Threshold' },
  { value: 'Limit', label: 'Allocation limit' },
  { value: 'Window', label: 'Time window' },
];
export function usageNotificationMessage(trigger: UsageTrigger): string {
  const measure = selectedUsageMeasure(trigger);
  if (!measure || USAGE_FEATURES[trigger.feature]?.blank) return '#Feature usage alert.';
  const comparison = COMPARISON_OPTIONS.find(option => option.value === trigger.comparator)?.label ?? '>';
  const calculation = measure.kind === 'total' ? '' : '#Calculation ';
  const allocation = trigger.mode === 'pct' ? '% of #Limit' : '';
  const window = usageWindowApplies(trigger) ? ' in #Window' : '';
  return `#Feature: ${calculation}#Measure ${comparison} #Threshold${allocation}${window}.`;
}
