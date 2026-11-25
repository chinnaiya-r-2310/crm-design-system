import { describe, expect, it } from 'vitest';
import { USAGE_FEATURES } from './UsageLimitNotification.data';
import { usageNotificationMessage, COMPARISON_OPTIONS, changeUsageBasis, changeUsageMeasure, createUsageTrigger, INTERVAL_OPTIONS, usageBasisOptions, usageBasisValue, usageMeasures, usageTriggerSummary, usageWindowApplies, validateUsageTrigger } from './UsageLimitNotification.logic';

describe('combined Based on options', () => {
  it('lists the requested API combinations without exposing the internal total calculation', () => {
    const options = usageBasisOptions('api');
    expect(options.map(option => option.label)).toEqual(expect.arrayContaining([
      'Total Free Credit Used', 'Total Credit Used per API', 'Count of Credit Used per API',
      'Average of Credit Used per API', 'Maximum of Credit Used per API', 'Minimum of Credit Used per API',
    ]));
    expect(options[0].value).toBe('free_credits_used_this_cycle:max');
    expect(options[0].aggregation).toBe('Total');
    expect(options.find(option => option.label === 'Total Credit Used per API')?.aggregation).toBe('Total');
    expect(options.find(option => option.label === 'Average of Credit Used per API')?.aggregation).toBe('Average');
  });
  it('explains each calculation in its info tooltip while retaining the measure context', () => {
    const options = usageBasisOptions('api');
    const descriptions = {
      sum: 'Adds up Credit Used per API across the matching API calls.',
      count: 'Counts the matching API calls with a recorded value for Credit Used per API, not the sum of those values.',
      avg: 'Calculates the average of Credit Used per API by dividing the sum of the recorded values by the number of values.',
      max: 'Returns the highest recorded value of Credit Used per API.',
      min: 'Returns the lowest recorded value of Credit Used per API.',
    };
    for (const [calculation, explanation] of Object.entries(descriptions)) {
      expect(options.find(option => option.value === `credits_used_per_api:${calculation}`)?.description)
        .toBe(`${explanation} Credits charged by one API call across every tier.`);
    }
    expect(new Set(Object.keys(descriptions).map(calculation =>
      options.find(option => option.value === `credits_used_per_api:${calculation}`)?.description)).size).toBe(5);
    expect(options[0].description).toBe('Tracks the current running total of Free Credit Used. Free credits spent so far this cycle. Resets when the cycle rolls over.');
    for (const feature of Object.keys(USAGE_FEATURES)) {
      for (const option of usageBasisOptions(feature)) {
        expect(option.description).not.toContain('undefined');
      }
    }
  });
  it('round trips every supported combination and preserves threshold validation', () => {
    for (const feature of Object.keys(USAGE_FEATURES)) {
      const options = usageBasisOptions(feature);
      expect(options).toHaveLength(usageMeasures(feature).reduce((count, field) => count + field.aggs.length, 0));
      expect(new Set(options.map(option => option.value)).size).toBe(options.length);
      for (const option of options) {
        const selected = changeUsageBasis(createUsageTrigger(feature), option.value);
        expect(usageBasisValue(selected)).toBe(option.value);
        expect(validateUsageTrigger(selected)).toBeUndefined();
      }
    }
  });
  it('ignores unsupported combinations', () => {
    const trigger = createUsageTrigger('api');
    expect(changeUsageBasis(trigger, 'credits_used_per_api:invalid')).toBe(trigger);
    expect(usageBasisOptions('unsupported-feature')).toEqual([]);
  });
});

describe('reference usage notification trigger', () => {
  it('loads all 15 features and only selectable measures', () => {
    expect(Object.keys(USAGE_FEATURES)).toHaveLength(15);
    expect(usageMeasures('api').map(field => field.name)).not.toContain('execution_time');
    expect(usageMeasures('api').map(field => field.name)).not.toContain('status');
    expect(usageMeasures('webhooks').map(field => field.name)).toEqual(['webhook_calls_today', 'response_time', 'retries_per_call']);
  });
  it('builds the webhook example with the actual reference allocation', () => {
    const trigger = createUsageTrigger('webhooks');
    expect(validateUsageTrigger(trigger)).toBeUndefined();
    expect(usageTriggerSummary(trigger)).toContain('Current Webhook Calls is greater than 80% of Webhook Limit (40,000 calls) within the last 12 hours');
    expect(trigger.interval).toBe('hour:1');
    expect(INTERVAL_OPTIONS).toHaveLength(9);
  });
  it('selects calculations, forces absolute units and resets incompatible calculations', () => {
    const total = createUsageTrigger('webhooks');
    const response = changeUsageMeasure(total, 'response_time');
    expect(response.calculation).toBe('avg');
    expect(response.mode).toBe('val');
    expect(response.constant).toBe('');
    expect(usageTriggerSummary(response)).toContain('ms');
    expect(changeUsageMeasure(response, 'retries_per_call').calculation).toBe('avg');
  });
  it('hides running-total windows exactly where the reference does', () => {
    for (const feature of ['data_storage', 'file_storage', 'email_storage', 'mail_merge']) {
      expect(usageWindowApplies(createUsageTrigger(feature))).toBe(false);
    }
    const event = changeUsageMeasure(createUsageTrigger('data_storage'), 'storage_used_per_operation');
    expect(usageWindowApplies(event)).toBe(false);
    expect(usageWindowApplies({ ...event, calculation: 'avg' })).toBe(true);
    expect(usageWindowApplies(createUsageTrigger('webhooks'))).toBe(true);
  });
  it('validates ranges and reference percentage bounds', () => {
    const trigger = createUsageTrigger('webhooks');
    expect(validateUsageTrigger({ ...trigger, value: '500' })).toBeUndefined();
    expect(validateUsageTrigger({ ...trigger, value: '501' })).toMatch(/percentage/);
    expect(validateUsageTrigger({ ...trigger, comparator: 'bt', value: '90', valueTo: '80' })).toMatch(/From/);
    expect(validateUsageTrigger({ ...trigger, mode: 'val', value: '0' })).toBeUndefined();
    expect(validateUsageTrigger({ ...trigger, value: '' })).toMatch(/percentage/);
  });
  it('requires whole windows within unit-specific limits', () => {
    const trigger = createUsageTrigger('api');
    for (const [windowUnit, max] of [['minutes', 60], ['hours', 24], ['days', 30]] as const) {
      expect(validateUsageTrigger({ ...trigger, windowUnit, windowValue: String(max) })).toBeUndefined();
      expect(validateUsageTrigger({ ...trigger, windowUnit, windowValue: String(max + 1) })).toMatch(/window/);
    }
    expect(validateUsageTrigger({ ...trigger, windowValue: '1.5' })).toMatch(/whole/);
  });
  it('preserves the reference’s feature-only Kiosk behavior', () => {
    const trigger = createUsageTrigger('kiosk');
    expect(validateUsageTrigger(trigger)).toBeUndefined();
    expect(usageTriggerSummary(trigger)).toBe('');
  });
  it('requires a feature and supported allocation', () => {
    expect(validateUsageTrigger(createUsageTrigger())).toBe('Select a feature.');
    expect(validateUsageTrigger({ ...createUsageTrigger('api'), constant: 'invalid' })).toMatch(/allocation/);
  });
});


describe('generated notification message', () => {
  it('includes merge fields for all feature, comparison and threshold variants', () => {
    for (const feature of Object.keys(USAGE_FEATURES)) {
      if (USAGE_FEATURES[feature].blank) continue;
      for (const measure of usageMeasures(feature)) {
        for (const comparator of COMPARISON_OPTIONS) {
          for (const mode of ['pct', 'val']) {
            const trigger = { ...changeUsageMeasure(createUsageTrigger(feature), measure.name), comparator: comparator.value, mode };
            const message = usageNotificationMessage(trigger);
            expect(message).toContain('#Feature');
            expect(message).toContain('#Measure');
            expect(message).toContain('#Threshold');
          }
        }
      }
    }
  });
  it('reflects calculation, percentage, window and range criteria', () => {
    const trigger = createUsageTrigger('webhooks');
    expect(usageNotificationMessage(trigger)).toBe('#Feature: #Measure > #Threshold% of #Limit in #Window.');
    const response = changeUsageMeasure(trigger, 'response_time');
    expect(usageNotificationMessage({ ...response, comparator: 'nb' })).toBe('#Feature: #Calculation #Measure not between #Threshold in #Window.');
    expect(usageNotificationMessage(createUsageTrigger('data_storage'))).not.toContain('#Window');
    expect(usageNotificationMessage(createUsageTrigger('kiosk'))).toBe('#Feature usage alert.');
  });
});
