import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor, within } from 'storybook/test';
import { useState } from 'react';
import { MinimalDrilldown } from './MinimalDrilldown';
import { getDrilldownData } from './Minimal.drilldown';
import type { DrilldownSelection } from './Minimal.drilldown';

const meta = { title: 'Design System/Patterns/crm-homepage/minimal-drilldown', parameters: { layout: 'fullscreen' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
function Preview({ selection }: { selection: DrilldownSelection }) {
  const [open, setOpen] = useState(true);
  return <><button type="button" onClick={() => setOpen(true)}>Open chart records</button>{open && <MinimalDrilldown selection={selection} view="classic" onClose={() => setOpen(false)} />}</>;
}
export const Revenue: Story = {
  render: () => <Preview selection={{ kind: 'revenue', label: 'February', series: 'Closed revenue', value: 105 }} />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole('dialog', { name: 'Revenue trend' });
    await expect(getComputedStyle(dialog).animationName).toBe('crm-drilldown-enter');
    await waitFor(() => expect(getComputedStyle(dialog).transform).toBe('matrix(1, 0, 0, 1, 0, 0)'));
    await waitFor(() => expect(within(dialog).getByRole('heading', { name: 'Drilled Down By' })).toBeVisible());
    await expect(within(dialog).getByRole('region', { name: 'Drilled Down By' })).toHaveTextContent('February 2026');
    await expect(within(dialog).getByText('$105,000.00')).toBeVisible();
    await expect(within(dialog).getByRole('region', { name: 'Drilled Down By' })).not.toHaveTextContent('Homepage');
    await expect(dialog.querySelector('.crm-drilldown__note')).toBeNull();
    await expect(within(dialog).getByRole('columnheader', { name: 'Account Name' })).toBeVisible();
    const close = within(dialog).getByRole('button', { name: 'Close chart records' });
    await expect(close.parentElement?.firstElementChild).toBe(close);
    await expect(getComputedStyle(close).borderRadius).toBe('50%');
    await waitFor(() => {
      expect(close.getBoundingClientRect().right).toBeLessThan(dialog.getBoundingClientRect().left);
      expect(close.getBoundingClientRect().left).toBeGreaterThanOrEqual(0);
    });
    await expect(getComputedStyle(dialog).overflow).toBe('visible');
    const table = within(dialog).getByRole('region', { name: 'Chart records' });
    await expect(table.getBoundingClientRect().right).toBeLessThan(dialog.getBoundingClientRect().right - 15);
    for (const cell of dialog.querySelectorAll('tbody td')) {
      await expect(getComputedStyle(cell).whiteSpace).toBe('nowrap');
      await expect(cell.querySelector('small')).toBeNull();
    }
    await expect(within(dialog).getByRole('link', { name: 'Open records in new tab' }).querySelector('svg')).not.toBeNull();
    const sample = getDrilldownData({ kind: 'revenue', label: 'February', series: 'Closed revenue', value: 105 });
    await expect(sample.records.reduce((sum, record) => sum + Math.round(record.amount * 100), 0)).toBe(10500000);
    await expect(sample.records.every(record => record.date.startsWith('2026-02') && record.category === 'Closed won')).toBe(true);
    for (const format of ['Excel', 'CSV']) {
      await userEvent.click(within(dialog).getByRole('button', { name: 'Export As' }));
      const option = await body.findByRole('option', { name: format });
      await userEvent.click(option);
      await expect(within(dialog).getByRole('status')).toHaveTextContent(`Exported ${sample.records.length} records as ${format}.`);
      await expect(within(dialog).getByRole('button', { name: 'Export As' })).toBeVisible();
    }
    await userEvent.click(within(dialog).getByRole('button', { name: 'Close chart records' }));
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  },
};
export const Industry: Story = {
  render: () => <Preview selection={{ kind: 'industry', label: 'Electronics', value: 640 }} />,
  play: async ({ canvasElement }) => {
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole('dialog', { name: 'Accounts by Industry' });
    await waitFor(() => expect(within(dialog).getByText('1–25 of 640')).toBeVisible());
    await userEvent.click(within(dialog).getByRole('button', { name: 'Next records' }));
    await expect(within(dialog).getByText('26–50 of 640')).toBeVisible();
    await expect(within(dialog).getByText('Electronics Shipper 026')).toBeVisible();
    const url = new URL(within(dialog).getByRole('link', { name: 'Open records in new tab' }).getAttribute('href')!, window.location.origin);
    await expect(JSON.parse(url.searchParams.get('chart-records')!).label).toBe('Electronics');
    await expect(url.searchParams.get('home-view')).toBe('classic');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(body.queryByRole('dialog')).not.toBeInTheDocument());
  },
};
export const Pipeline: Story = { render: () => <Preview selection={{ kind: 'pipeline', label: 'Negotiation', value: 55 }} /> };
