import type { Meta, StoryObj } from '@storybook/react-vite';
import { WMSToaster } from './WMSToaster';
import { ProgressBar } from '../ProgressBar/ProgressBar';

const meta: Meta<typeof WMSToaster> = {
  title: 'Design System/Components/WMSToaster',
  component: WMSToaster,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'WMS toast notification card for Zoho CRM. Shows a status badge (success, error, info, warning), ' +
          'a title, minimize and close controls, and an optional body with action buttons. ' +
          'Minimized state collapses the card to its header. ' +
          'Figma: Chinnaiya-Style-Sheet node 93780-156008 ("Toast Message").',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
    },
    title: { control: 'text' },
  },
  args: {
    variant: 'success',
    title: 'Imported successfully',
  },
};

export default meta;
type Story = StoryObj<typeof WMSToaster>;

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Imported successfully',
    children: (
      <>
        Notes imported successfully from <a href="#sample">Sample File.csv</a>. Please refresh the browser to access it.
      </>
    ),
  },
};

export const ErrorState: Story = {
  args: {
    variant: 'error',
    title: 'Import failed',
    children: 'The file could not be processed. Check the format and try again.',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Mass action status',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span>0 out of 98 leads deleted.</span>
        <span>Module - Leads</span>
        <span>Custom View - Junk Leads</span>
      </div>
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Your CRM data storage is 90% full',
    actions: [{ label: 'Manage your data storage', variant: 'outline-blue' }],
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
          <span style={{ fontWeight: 600, color: '#313949' }}>Storage</span>
          <span style={{ fontWeight: 500, color: '#616E88' }}>1.1 GB remaining of 12.9 GB</span>
        </div>
        <ProgressBar value={90} color="red" />
      </div>
    ),
  },
};

export const WithActions: Story = {
  args: {
    variant: 'success',
    title: 'Report update status',
    children: 'Successfully updated to new reports version.',
    actions: [
      { label: 'Try now', variant: 'primary' },
      { label: 'Close', variant: 'default' },
    ],
  },
};

export const Minimized: Story = {
  args: {
    variant: 'info',
    title: 'VoC - Computation completed',
    defaultMinimized: true,
    children: 'Results are ready to view.',
  },
};

export const Stack: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
      <WMSToaster variant="warning" title="Your CRM data storage is 90% full" />
      <WMSToaster variant="success" title="Imported successfully" children="Notes imported successfully." />
      <WMSToaster variant="success" title="Report update status" children="Successfully updated to new reports version." actions={[{ label: 'Close', variant: 'default' }]} />
    </div>
  ),
};
