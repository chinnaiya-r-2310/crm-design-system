# Record Verification

Available in **Design System → Patterns → Record Authentication → Record Verification** and the second tab of the other Record Authentication stories. The existing `record-configuration` story ID is preserved for bookmarks.

Reference: https://contact-verification-uprepunm.onslate.in/Data%20Verification%20Config.dc.html

## Single-form configuration

The original three-step PM flow is combined into one modal with Save and Cancel:

The page uses a **Configure** button aligned like Data Verification, without an empty-state card or settings heading. The modal title is always **Record Verification**. Changing Consent Type updates the delivery fields in place without closing or replaying the modal entrance. Inputs are 390px wide on desktop and shrink to fit smaller screens. New rules show **Select** in both initial dropdowns. Button-action settings use **Layout** and **Profile** labels and a checkbox for portal users. The When tooltip is white and uses the gallery info icon; dropdown secondary descriptions use 13px Zoho Puvi. **Send Test SMS** displays a temporary “Test SMS sent successfully” alert (prototype feedback only; no SMS is sent).

1. **When:** always the first field. Its menu describes record creation, a picklist/value criterion, and custom Detail-page button actions. An information tooltip defines when consent is required.
2. **Consent Type:** always the second field. Its menu describes phone OTP, email code, and email confirmation links. Links are restricted to button actions; changing to another action resets an incompatible link method to phone OTP.
3. **Conditional fields:** picklist/value criteria or button name, layouts, profiles, and portal availability appear after the first two fields.
4. **Delivery configuration:** matching phone/email field, validity, content, and optional resend/validation limits reuse the Data Verification form and template editor. Rule state remains separate.

Saved rules appear in the shared SetupTable with action, field, method/channel, modification date, enable switch, Edit, and Delete. Deletion requires confirmation. Record creation can be configured once. Duplicate action/method/field combinations are rejected. Cancel discards edits. Action changes preserve compatible delivery settings; changing Consent Type resets channel-specific delivery defaults and clears the selected field. Switching tabs preserves rules for the mounted story.

**Prototype only:** state is held in memory. No actual messages, OTPs, translations, CRM buttons, enforcement, or backend persistence. Verification and confirmation never update each other's state.

The PM mock permits email codes for record creation. This implementation follows that mock; the PRD's conflicting phone-only creation requirement still needs product clarification before backend enforcement is implemented. Picklist values, layouts, and profiles are illustrative.

## Validation

`npx vitest run src/design-system/patterns/RecordAuthentication.stories.tsx`

The Record Verification story exercises phone OTP creation, required fields, single creation-rule restriction, email-code criteria, button confirmation links, status toggling, independent tabs, editing, and confirmed deletion. Existing Data Verification tests remain in place.
