# AI Rules

These rules apply to every AI-generated screen.

---

## Rule 1

Never create a new component if one already exists.

---

## Rule 2

Search Storybook before generating UI.

---

## Rule 3

Reuse patterns whenever possible.

Example

CustomerCard

AddressCard

SearchPanel

Timeline

---

## Rule 4

Never hardcode

colors

typography

spacing

radius

shadow

motion

Always use tokens.

---

## Rule 5

Do not invent visual styles.

Use existing variants.

---

## Rule 6

If a required component does not exist

write

TODO: Missing component

instead of generating one.

---

## Rule 7

Prefer composition.

Bad

Huge 1200-line page

Good

CustomerPage

CustomerHeader

CustomerProfile

OrdersTable

ActivityTimeline

NotesPanel

---

## Rule 8

Follow accessibility.

Keyboard

<!--ARIA

Focus

Contrast

Labels -->

Semantic HTML

---

## Rule 9

Use realistic mock data.

Avoid

John Doe

Foo

Bar

Lorem Ipsum

---

## Rule 10

Generate Storybook stories for every reusable page.

---

## Rule 11

Follow the existing folder structure.

Never create random folders.

---

## Rule 12

When uncertain

ask instead of guessing.

---

## Rule 13

Never duplicate existing code.

Extract reusable logic.

---

## Rule 14

Output production-ready TypeScript.

Avoid placeholders.

Avoid pseudo-code.

---

## Rule 15

Prefer readability over cleverness.

---

## Table interaction behavior

Keep a table row's hover background while a control inside it is focused or its dropdown menu is open. Selected rows must retain their selected background. Row more-options triggers use a white circular background and border on hover, focus, and while open; reserve the border space to avoid layout shifts. Action menus must fit their labels rather than inherit the icon-only trigger width. Action-only dropdowns (such as Edit/Delete) must set `showSelectionIndicator={false}` so an empty selection-tick slot does not add leading space; keep the tick slot for selection dropdowns.

---

## Rule 16

Tooltips appear below the cursor.

Use `<Tooltip placement="top" followCursor>` (placement names the arrow edge, so `top` puts the tooltip below). Keyboard focus still anchors below the trigger, and the tooltip flips or shifts to stay inside the viewport.
