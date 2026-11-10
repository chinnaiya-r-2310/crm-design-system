import type { Preview } from '@storybook/react-vite'
import '../src/design-system/foundations/design-tokens.css'
import '../src/design-system/foundations/interaction.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    // Work Items: most recently created first (order of first git commit).
    options: {
      storySort: {
        order: [
          'Design System',
          'Work Items',
          [
            'Field History Tracking',
            'Joined Reports - Revamp',
            'Cross-module Reports',
            'SB Connections',
            'Dashboard Export',
            'Portal UI',
            'crm-homepage',
            'Record Authentication',
            'Send Dashboard Scheduler',
            'Audit Log Duration',
            'Usage Limit Notification',
          ],
        ],
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;