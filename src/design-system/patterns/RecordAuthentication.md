# Record Authentication

Storybook: **Design System → Patterns → Record Authentication**.

Implements the Data Verification setup illustrated in Frames 1–6 supplied as PDF references: verify-via selection, phone OTP settings, expanded resend options, email-link settings, and saved summaries.

The second tab is named **Record Configuration** per the latest request and is intentionally empty. The reference PDFs call this tab Record Confirmation; no confirmation behavior has been invented.

## States

- Default: no configuration; choose Phone Number or Email Address from Verify via.
- Phone Verification: phone dialog with default OTP settings.
- Phone More Options: expanded resend and validation limits.
- Email Verification: email-link configuration dialog.
- Phone Configured: saved phone summary.
- Configured: saved phone and email summaries.
- Record Configuration: intentionally empty tab.

## Behavior

Uses existing Tabs, VerticalTabs, NextGenTopBand, Modal, Dropdown, Tags, Input, Textarea, Checkbox, Radio, Button, and MessageInfo components. All state is in memory. Cancel/Escape discard the draft; Save validates before updating summaries. Settings can be reopened using Edit or Verify via. SMS preview resolves the supported template placeholders and selected OTP length/validity. Template/page links open local previews.

The SMS carrier names and alternate email templates/pages are illustrative demo choices. “Send Test SMS” previews a sample only and explicitly reports that nothing was sent. No backend calls, real OTP generation, message delivery, verification, authentication enforcement, or persistence are implemented. Numeric values must be positive whole numbers; at least one field and an SMS carrier (for phone) are required. SMS content is limited to 160 characters.

The setup sidebar and module navigation provide shell context rather than navigating to unrelated pages. Chart/homepage patterns are untouched.

## Validation

Story interaction tests cover draft cancellation, save validation, summaries, template previews, editing existing settings, and the empty second tab. Run the focused Storybook tests with:

```sh
npx vitest run src/design-system/patterns/RecordAuthentication.stories.tsx
```
