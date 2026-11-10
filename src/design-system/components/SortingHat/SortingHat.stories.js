import { SortingHat } from './SortingHat';

export default {
  title: 'Design System/Components/Sorting Hat',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Floating, draggable shortcut for reviewers. Drag it anywhere on screen, ' +
          'click it to open the design screens menu, and it fades to 50% opacity ' +
          'after 10 seconds without hover, click or drag.',
      },
    },
  },
};

const VARIATIONS = [
  {
    label: 'Email Properties',
    storyId: 'work-items-field-history-tracking--default',
  },
  {
    label: 'Email History Tracking (10 of 10)',
    storyId: 'work-items-field-history-tracking--limit-reached',
  },
  {
    label: 'Audit Log Retention',
    storyId: 'work-items-audit-log-duration--manage-log-retention-settings',
  },
];

export const Default = {
  render: () => (
    <div style={{ minHeight: '100vh', padding: 24, fontFamily: 'var(--ds-font-family-base)' }}>
      <p style={{ color: 'var(--ds-text-label)' }}>
        Drag the hat anywhere. Click it to open the design screens menu.
      </p>
      <SortingHat variations={VARIATIONS} />
    </div>
  ),
};
