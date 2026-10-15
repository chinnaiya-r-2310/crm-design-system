# crm-homepage

Find the pattern in **Design System → Patterns → crm-homepage** in Storybook.

## Visual direction

A sales command center with the existing navy CRM sidebar, top band, and communication bar. Four KPI cards establish hierarchy; a wide primary column groups performance, deals, tasks, and meetings. A narrower contextual column highlights next actions and recent conversations. On smaller screens, the sections stack and navigation opens on demand. The top header stays pinned to the viewport while scrolling, aligned with the workspace; mobile navigation opens above it.

- **Default:** realistic populated workspace with period comparisons, revenue target, pipeline distribution, actionable insights, selectable deals, tasks, meetings, and chats.
- **Empty State:** zero metrics and contextual messages without invented growth or insights.
- **minimal:** nested minimal variant using the same CRM shell and unchanged floating header, with three KPIs, revenue progress, deals, and tasks. No Conversations section.

Homepage content spans the available workspace without outer left/right padding or a centered maximum-width constraint.

## Existing components

Composes `NextGenLeftMenu`, `NextGenTopBand`, `WMSBar`, `Dropdown`, `FormSection`, `ProgressBar`, `SetupTable`, `Checkbox`, `Button`, and `MessageInfo`. No public API changes, new library components, dependencies, or backend integration.

Colors and typography use existing tokens; layout rhythm derives from line-height tokens because spacing and radius tokens are not exposed. Components retain existing variants.

## Interactions

- Reporting period updates KPIs, comparison text, revenue target, and period label. Open pipeline remains independent of reporting period and includes all closing dates.
- Task checkboxes complete/reopen work; completed tasks can be shown or hidden.
- Deal selection reports the selected count.
- Follow-up insight filters the table to Northstar; “Show all deals” resets the view.
- Closing-deal insight selects Northstar and Meridian.
- Conversation selection opens a local preview and marks it read. The communication bar can open the first conversation.
- Navigation and quick-create actions explain their local-preview scope; no CRM records are modified.

Pipeline shares are rounded proportions of the $115,500 open-deal total. Period comparisons are illustrative mock data, not calculated from live records. All examples use a fixed June 19, 2026 date.

## Remaining design-system gap

TODO: Missing component — revenue trend chart. No existing Storybook chart component was found. This pass uses the established progress-bar component for revenue attainment and pipeline distribution rather than introducing a custom chart. A reusable chart component requires approval before adding actual-versus-target time-series visualization.

## Validation

Story interaction tests cover task completion, deal selection, insight filtering, chat selection/unread state, and empty states.

```sh
npm test -- --run src/design-system/patterns/CrmHomepage.stories.tsx
npm run build-storybook
```
