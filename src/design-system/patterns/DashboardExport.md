# Dashboard Export

Storybook: **Design System → Patterns → Dashboard Export**.

Composes the existing Modal, Input, Dropdown, Radio, Checkbox, Switch, and Button components to implement the PM wireframe. No shared components are changed.

## Behavior

- Opens as a modal with **org_overview** as the file name and **PDF** selected. File names are converted to lowercase with whitespace replaced by underscores as they are edited.
- Formats: PDF, HTML, Image.
- PDF options: “One component per page” checkbox (unchecked initially, meaning the entire dashboard on one page); portrait or landscape; Letter, Legal, Tabloid, A3, or A4 paper.
- An **Include** group appears directly below File name for all file formats, with **Title** and **Description** checkboxes arranged horizontally (wrapping on narrow screens), both enabled initially. Selections persist when switching formats. Checkbox fields share consistent spacing and align with the input column.
- The **Phase 1** variant retains file name, included content, format, and PDF layout while omitting orientation, paper settings, and password protection. Its 575px modal fits a compact 90px label column, 20px gap, 390px controls, modal padding, and scrollbar clearance, capped at the viewport width. The full Dashboard Export variant retains its existing modal width and shared 30:70 label/control ratio.
- Controls are 390px wide at full size and stack below labels on narrow screens.
- Password protection is opt-in and reveals a masked password input without an initial error indicator. A nonblank password is validated only after clicking Export; toggling protection resets that error.
- A nonblank file name is required for all formats. Invalid fields receive focus and accessible error text.
- PDF-only controls are hidden for other formats. Changing format or closing the modal clears password state. Password values are not displayed or logged.
- Cancel and Escape dismiss without saving. Keyboard focus is contained while open and returns to the launch button on dismissal.
- The form stacks on narrow screens and uses the existing modal scrolling behavior.

## Integration boundary

This is an interactive design-system pattern, not a file-generation service. Export validates the form and closes the modal without an acknowledgement or success message. The host application's exporter must consume the selected settings, generate the requested file, and apply PDF encryption when enabled. No download or encryption is simulated.

## Validation

The stories include interaction coverage for required fields, password protection, saving, format changes, orientation, and paper selection.

```sh
npx vitest run --project=storybook src/design-system/patterns/DashboardExport.stories.tsx
```
