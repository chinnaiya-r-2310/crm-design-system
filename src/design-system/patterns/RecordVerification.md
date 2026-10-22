# Record Verification

Available in **Design System → Patterns → Record Authentication → Record Verification** and the second tab of the other Record Authentication stories. The existing `record-configuration` story ID is preserved for bookmarks.

Reference: https://contact-verification-uprepunm.onslate.in/Data%20Verification%20Config.dc.html

## PM mock flow

1. **Action:** record creation, a picklist/value criterion, or a custom Detail-page button. Button setup captures a name, layouts, profiles, and portal availability.
2. **Method:** phone OTP, email code, or email confirmation link. Links are restricted to button actions.
3. **Configuration:** one matching phone/email field, validity, delivery content, and optional resend/validation limits. Reuses the Data Verification form and template editor; the rule state is separate.

Saved rules appear in the shared SetupTable with action, field, method/channel, modification date, enable switch, Edit, and Delete. Deletion requires confirmation. Record creation can be configured once. Duplicate action/method/field combinations are rejected. Cancel discards edits; Back preserves delivery drafts. Switching tabs preserves rules for the mounted story.

**Prototype only:** state is held in memory. No actual messages, OTPs, translations, CRM buttons, enforcement, or backend persistence. Verification and confirmation never update each other's state.

The PM mock permits email codes for record creation. This implementation follows that mock; the PRD's conflicting phone-only creation requirement still needs product clarification before backend enforcement is implemented. Picklist values, layouts, and profiles are illustrative.

## Validation

`npx vitest run src/design-system/patterns/RecordAuthentication.stories.tsx`

The Record Verification story exercises phone OTP creation, required fields, single creation-rule restriction, email-code criteria, button confirmation links, status toggling, independent tabs, editing, and confirmed deletion. Existing Data Verification tests remain in place.
