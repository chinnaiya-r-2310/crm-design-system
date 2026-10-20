export type ExportFormat = 'excel' | 'csv';

// Prevent spreadsheet formulas in textual record data, including quoted CSV cells.
function safeText(value: unknown) {
  const text = String(value ?? '');
  return /^[\s]*[=+@-]/.test(text) ? `'${text}` : text;
}
const xml = (text: string) => text.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]!);

export function buildRecordsExport(rows: unknown[][], format: ExportFormat) {
  if (format === 'csv') {
    const content = '\uFEFF' + rows.map(row => row.map(value => `"${safeText(value).replaceAll('"', '""')}"`).join(',')).join('\r\n');
    return { content, extension: 'csv', mime: 'text/csv;charset=utf-8' };
  }
  // Native Excel XML Spreadsheet format: an actual workbook, not renamed CSV/HTML.
  const content = '<?xml version="1.0" encoding="UTF-8"?><?mso-application progid="Excel.Sheet"?>' +
    '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">' +
    '<Worksheet ss:Name="Chart records"><Table>' + rows.map(row => '<Row>' + row.map(value => {
      const numeric = typeof value === 'number' && Number.isFinite(value);
      return `<Cell><Data ss:Type="${numeric ? 'Number' : 'String'}">${xml(numeric ? String(value) : safeText(value))}</Data></Cell>`;
    }).join('') + '</Row>').join('') + '</Table></Worksheet></Workbook>';
  return { content, extension: 'xml', mime: 'application/vnd.ms-excel;charset=utf-8' };
}
