# Joined Reports: handoff

Status: prototype in Storybook. No network calls. Save and Run are visual only.

## 1. What the feature is

A Joined Report combines up to three reports that share a base module, so one table shows records from each. The feature has two parts:

1. **Create Joined Report (modal, two steps)**
   - **Step 1, Select Reports:** choose Report 1 (the primary, fixed) plus up to two more reports.
   - **Step 2, Grouping:** define groups. Each group has a name and one mapping field per selected report.
   - **Preview:** a sample table, opened from step 2.
   - **Save:** shows a success message and switches the page to the saved view.
2. **Joined Report builder (page)**
   - Two states: the **initial** page (unsaved) and the **saved** joined report page.
   - Left panel lists the joined report and its reports, with edit icons that open the modal.
   - Right side has Columns and Filters tabs.

## 2. Where it lives

| Item | Path |
|---|---|
| Pattern (all markup and state) | `src/design-system/patterns/JoinedReportsRevamp.stories.tsx` |
| Pattern styles | `src/design-system/patterns/JoinedReportsRevamp.css` |
| Filters tab (shared with Cross Module Reports) | `BuilderFilters` in the pattern, plus `CrossModuleReports.css` |
| Storybook title | `Work Items/Joined Reports - Revamp` |

Stories (Storybook ids are the title in kebab case plus the export name):

| Story | Export | Shows |
|---|---|---|
| Initial page | `Default` | Unsaved builder, no panel sections, no modal on load |
| Saved page | `SavedJoinedReport` | Saved view: Joined Report panel and Report 1, 2, 3 sections |
| Grouping step | `GroupingStep` | Modal open at step 2, three reports |
| Report limit | `ReportLimit` | Three reports; the plus on the last row shows the limit message (play test) |

Controls on the meta: `primaryReportName` (default `Monthly Sales Pipeline`), `initialStep` (`select` or `group`), `initialReportCount` (1 to 3).

## 3. Components used

- **Modal**: the create/edit dialog. Width is 600px on step 1, and on step 2 it grows with the number of groups.
- **Stepper**: step indicator (Select Reports, Grouping).
- **FormTable**: report rows on step 1, and group rows on step 2. It supports drag reorder, minus/plus actions, and `actionGap`.
- **Dragger**: reorder of the Columns and Aggregates lists in the builder.
- **Input, Dropdown, Button, Icon, Tooltip, Tabs, NextGenTopBand, MessageBox**: standard components, no local copies.

## 4. Behaviour

**Step 1**
- Report 1 is fixed and named after `primaryReportName`. Its default name is "Leads By Source" in the Report 1 section; the joined report itself is named "Monthly Sales Pipeline" once saved.
- Plus adds a row, up to `MAX_REPORTS` (3). Adding past the limit shows `You cannot add more than 3 reports`.
- Next with an empty report row shows the inline error `A Report has to be selected`.
- Minus removes a row. Rows reorder by drag.

**Step 2**
- Each group needs a name and a field for every selected report. Missing values show inline errors (`Enter a group name`, `Select a field`) on that cell only. The row grows to fit the helper text; there is no fixed bottom padding.
- Add group appends a row. Groups reorder by drag.
- Preview opens a sample table (static data, no aggregation).
- Save requires a name for every group, then calls `onSaved(name)`. The page sets `isSaved` and the builder switches to the saved view.

**Page**
- Initial page: title only, module name below it (13px regular), and the "Do you want to join another report? Create Joined Report" call to action. No Report 1/2/3 sections.
- Saved page: no call to action. Adds the Joined Report panel title with an edit icon, which opens the modal in edit mode with prefilled data. Report 1, 2 and 3 sections are shown.
- Neither state opens the modal on load (`startOpen: false`).

## 5. Interaction conventions (also in the Storybook skill file)

- Drag uses `Dragger` or `FormTable`, not custom drag code. The picked row becomes a white copy with shadow that follows the pointer vertically. The empty slot is grey (`--ds-bg-scale-bg4`). Other rows glide with `transform 220ms ease`.
- Icon-only actions are real buttons with an `aria-label`, 24px, a grey circle on hover.
- Edit icons open the modal that edits that title.
- Nested modals sit above the parent and close on Escape only when they have the close icon.
- Text inputs show the text cursor. The shared rule is in `src/design-system/foundations/interaction.css`.

## 6. Commits

Relevant history (`git log -- src/design-system/patterns/JoinedReportsRevamp.stories.tsx`):

- `b173d82` Add FormTable, rework Joined Reports step 2 and Stepper
- `f6e9387` Add Dragger, Input and Dropdown variants; rework Joined Reports builder
- `f33bf7d` Rework Joined Report builder states, drag styling and edit mode
- `750ee99` Switch Joined Report page to the saved view after save
- `0839778` Move pattern stories to Work Items; MergeField filter dropdown updates

## 7. Known gaps and open items

- **Backend mapping:** the backend supports one shared group-by field. Mapping different field names per report into one group is front-end only. A developer must wire the real payload.
- **Preview data:** static sample rows, no aggregation API.
- **Save and Run:** Save shows a success message only. Run and Cancel in the builder are not wired.
- **Filters tab:** uses the same filter layout as Cross Module Reports. Changes to one should be checked in the other.
- **Field lists:** grouping dropdowns use sample field names from the pattern file. Replace with the shared CRM sample data (`src/design-system/data/crm-sample-data.js`) when wiring real modules.
- **Accessibility:** group and report rows need a keyboard alternative to drag before release. Not yet checked.

## 8. How to check it

```
npm run storybook
```

Open `http://localhost:6006/?path=/story/work-items-joined-reports---revamp--default` and walk through:

1. Default: open "Create Joined Report", pick reports, click Next with an empty row (inline error), then Save a group.
2. Saved joined report: edit icon opens the modal in edit mode; the panel shows Report 1, 2 and 3.
3. Limit: three reports, then the plus on the last row shows the limit message.
