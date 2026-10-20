import { describe, expect, it } from 'vitest';
import { buildRecordsExport } from './Minimal.export';
describe('chart records export', () => {
  it('quotes CSV, preserves numbers and neutralizes formulas', () => {
    const result = buildRecordsExport([['Account', 'Amount'], ['Ocean "Freight", Ltd', 105000], ['=1+1', 5]], 'csv');
    expect(result.extension).toBe('csv');
    expect(result.content).toContain('"Ocean ""Freight"", Ltd","105000"');
    expect(result.content).toContain('"\'=1+1"');
  });
  it('creates Excel XML with typed amounts and escaped text', () => {
    const result = buildRecordsExport([['A&B <cargo>', 25]], 'excel');
    expect(result.extension).toBe('xml');
    expect(result.content).toContain('<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"');
    expect(result.content).toContain('A&amp;B &lt;cargo&gt;');
    expect(result.content).toContain('ss:Type="Number">25');
  });
});
