# Cross-module Reports

Storybook: **Design System → Patterns → Cross-module Reports**.

Implements the cross-module report editor from Figma node `79995:20707` (file 🗿 Pascal Stone).

## Composition

Uses the existing NextGenLeftMenu (Reports active), Tabs (secondary, for Columns / Filters), Button (default Cancel and Run, primary Save with an arrow), Icon (CriteriaPlus for Add filter), Tooltip and WMSBar components. No shared components are changed.

Built inside the pattern (no matching component exists):

- **Grouped report grid**: SetupTable does not support grouped rows or subtotal rows, so this grid is built in the pattern. It is grouped by Potential Owner, with avatars, a merged owner cell, a sticky header, and peach subtotal rows showing the Annual Revenue total.

## Behavior

- The Filters tab shows "No filters applied". The plus button next to the Filters heading has no action yet.
- **Run** replaces the preview notice with a "report run" message. **Cancel** and **Back** restore the notice. Save has no action.
- The Columns tab lists the selected report columns.
- The grid scrolls in both directions inside its card.
- At widths of 1100px or less, the left menu is hidden. At widths of 760px or less, the panel stacks above the grid.

## Fonts

Uses Zoho Puvi 4.0 through the shared `CrmFonts.css`. That file was split out of `SbConnections.css` so both patterns can use it.

## Validation

```sh
npx vitest run --project=storybook src/design-system/patterns/CrossModuleReports.stories.tsx
```

## Add Filter modal

The plus button beside **Filters** opens an **Add Filter** modal (Cancel / Apply). It starts with only **Base Filter**; an outlined **Add Filter** menu button below it adds the other two:

1. **Base Filter**: always shown; a criteria builder that starts with one empty criterion. Its field and condition pickers show **Select** when empty (the builder's `placeholder` prop; the default elsewhere stays "None").
2. **Quick Filter**: the same, also starting with one criterion. Has a **Remove** link beside its title.
Quick Filter and Territory Filter appear in the order the user adds them from **Add Filter**.

3. **Territory Filter**: the reference's radio list (All Territories, Multiple Territories, Without Territories, Custom) shown as a picklist that starts on **Select**. **Custom** shows an empty territory tag field (no territories selected) and an unchecked **Include Sub-Territories** checkbox. Has a **Remove** link beside its title.

The Add Filter menu lists only filters not yet added and hides once both are added; removing one brings it back.

Section names are `h3` with a 13px paragraph-colour description; sections have no dividers and are spaced 30px apart. The territory picklist and tag field are both 390px wide, with no indent. The criteria builders use their default action spacing (no reserved icon slot); the dialog is 920px wide so a row showing both minus and plus still leaves the full 30px right padding.

Each time the modal opens it starts fresh, so Cancel throws away any edits. Apply closes the modal without changing the report, because this is sample data only.

## Base Filter layout

- Base Filter follows the reference: an always-open **Specify Criteria** card (no switch; module / field / condition / value row), an **AND** connector, then a **Related Modules Criteria** card (switch, off by default) with related-module rows, a **Specify Criteria - <Module>** checkbox per row with a nested criteria builder, and an **Add Condition** button.
- The module picker and the value width come from two optional Criteria Builder props, `moduleOptions` and `valueWidth` (default 390px, so other uses are unchanged).
- The dialog is 1080px wide so the module row keeps the 30px right padding.
- The Columns / Filters tab bar hugs its content.

### Base Filter details

- Only **Related Modules Criteria** has a switch, and it starts off. When off, the card shows "It helps to filter record based on related module values."
- Every related-module row, including the first, starts empty: the condition picker shows **Select** and the module picker shows **Select Module**. Each row always shows its **Specify Criteria** checkbox, disabled until a module is picked; the label then reads **Specify Criteria - <Module>**. It starts unchecked.
- Related-module rows are joined by an **AND / OR** connector (AND by default, click to toggle; no pattern). Each row has a minus to remove it when there is more than one. Nested boxes hug their rows.
- The Base, Quick and Territory section headers stay pinned at the top of the modal body while it scrolls.
- Field pickers show **Select Field** (`fieldPlaceholder` on CriteriaBuilder); condition and module pickers show **Select**.
- **Remove** links on Quick and Territory filters are red. The Territory picklist has no label.

### Criteria pattern editing (shared CriteriaBuilder)

Saving an edited pattern now updates the rows: the highest number sets how many rows there are (empty rows are added, extra rows at the end are removed), and each and/or sets the connector after that number. Patterns with errors (unknown words, unmatched brackets, missing numbers) show a message under the box and are not saved. The cancel (✕) button is grey.

## Versions

- **Version 1** (story *Add Filter modal · Version 1*): the stacked layout above — Base Filter always shown, Quick and Territory added from the **Add Filter** menu, each with **Remove**.
- **Version 2** (story *Add Filter modal · Version 2*): Base, Quick and Territory are **primary tabs** at the top of the modal (shared `Tabs`, `variant="primary"`). The selected tab's description shows under the tab bar; section `h3` headings, the Add Filter menu and Remove links are not used. All three panels stay mounted, so edits survive switching tabs; Cancel still discards everything. The tab bar stays pinned while the modal body scrolls.
- Choose with the page's `filterVersion` prop (`1` by default).

## Saved filter summary

- **Apply** saves the modal's values; the Filters panel then shows one titled Criteria Summary card per filter with complete criteria (Base, Quick, Territory). "No filters applied" shows only when nothing is saved.
- Territory Filter is shown as one sentence in the same card frame, e.g. "All Territories" or "Territories IS Delhi, Tamilnadu including Sub-Territories". Custom with no territories picked is not shown.
- Tooltips (header, Edit / Delete / Add filter) follow the cursor and appear below it.
- Base Filter uses the Nested variant (Primary Module / AND / Related Module) when related modules are on; otherwise Standard.
- Cancel still discards edits; reopening starts from the last applied values. Works the same in Version 1 and Version 2.

## Saved filters: shared actions and confirmation

- Once any filter is applied, the plus next to **Filters** is replaced by one shared **Edit** (reopens Add Filter with the applied values) and **Delete** (asks "Are you sure you want to delete filter?" in an error alert with Delete / Cancel, then clears all saved filters). The icons keep their native 12px size, sit 8px apart and get a circular hover background (red tint for Delete). The summary cards have no per-card actions.
- "No filters applied" uses the muted text colour.
- Apply shows a success MessageBox, "Filter applied successfully", fixed top-centre of the page with the same placement and slide-in as Record Authentication; it hides after 4s or on ✕.
- The filters panel scrolls with its scrollbar on the panel's inner right edge.
- Visible stories render without interactions, so the modal no longer opens and closes on every refresh. The interaction checks live in hidden `· checks` stories (`!dev`, `!autodocs`) that only the test runner executes.
