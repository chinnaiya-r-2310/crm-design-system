# Record Authentication

Storybook: **Design System → Patterns → Record Authentication**.

Implements the Data Verification setup illustrated in Frames 1–6 supplied as PDF references: verify-via selection, phone OTP settings, expanded resend options, email-link settings, and saved summaries.

The second tab is **Record Verification**, following the linked PM mock. It captures record-level consent independently of Data Verification. See `RecordVerification.md` for the three-step flow, supported actions/methods, and prototype limitations.

## States

- Default: no configuration; choose Phone Number or Email Address from Verify via.
- Phone Verification: phone dialog with default OTP settings.
- Phone More Options: expanded resend and validation limits.
- Email Verification: email-link configuration dialog.
- Phone Configured: saved phone summary.
- Configured: saved phone and email summaries.
- Record Verification: action/method/configuration wizard, saved rules, status toggles, editing, and confirmed deletion.

## Behavior

Uses existing Tabs, VerticalTabs, NextGenTopBand, Modal, Dropdown, Tags, Input, Textarea, Checkbox, Radio, Button, and MessageInfo components. All state is in memory. Cancel/Escape discard the draft; Save validates before updating summaries. Configured channels are removed from Verify via; when both channels are configured, the button is hidden. Settings can be reopened using the summary Edit links. Successful saves show a dismissible, top-centered floating MessageBox for five seconds; saving again restarts its timer. SMS preview resolves the supported template placeholders and selected OTP length/validity. Template/page values appear in input-style linked controls with right-aligned, label-colored 16px Edit icons. They open template-editor dialogs above the still-visible configuration dialog. Both use the wide Modal/Form design from Figma node `54195:187585`: language selector, top formatting toolbar, pale canvas with a white document card, and a leading Reset to default action. Email includes From and Subject fields; the verification page edits the page copy. Save retains template edits in memory with the configuration; Cancel/Escape discard the editor draft. Reset restores the sample template. Closing the editor preserves the configuration draft, and Escape closes only the top dialog. English (United States) is the sample language; no translation or actual verification is performed.

The SMS carrier names and alternate email templates/pages are illustrative demo choices. “Send Test SMS” previews a sample only and explicitly reports that nothing was sent. No backend calls, real OTP generation, message delivery, verification, authentication enforcement, or persistence are implemented. Numeric values must be positive whole numbers; at least one field and an SMS carrier (for phone) are required. SMS content is limited to 160 characters.

Validation errors appear directly beneath the affected fields, with invalid states and accessible error descriptions. Save expands hidden resend/validation settings if they contain errors. Editing a field clears its error; saving validates again.

The existing WMSBar spans the bottom of the viewport. On desktop, the Setup panel starts at the top edge and extends to just above the bar; navigation and workspace scroll independently. Narrow screens retain the existing hidden-sidebar layout and allow horizontal scrolling within the communication bar.

The setup sidebar (the VerticalTabs `setup` variant, shared with SB Connections, with Customization → Modules and Fields selected) and module navigation provide shell context rather than navigating to unrelated pages. Chart/homepage patterns are untouched.

## Validation

Story interaction tests cover draft cancellation, save validation, summaries, template previews, editing existing settings, and the Record Verification setup flows. Run the focused Storybook tests with:

```sh
npx vitest run src/design-system/patterns/RecordAuthentication.stories.tsx
```
