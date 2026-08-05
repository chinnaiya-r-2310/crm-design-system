# Input  `v1.1`

Single-line text input with a two-column horizontal form layout.

---

## Anatomy

```
─── Horizontal layout (default) ─────────────────────────────────────────────
           ╔════ .root (total width: 670px default) ══════════════════════╗
           ║  ┌─── .formRow (CSS Grid: 2fr | 20px gap | 3fr) ──────────┐ ║
           ║  │  .label (260px, 2fr)      .fieldColumn (390px, 3fr)    │ ║
           ║  │  Email address    →       ┌─ .inputWrapper ───────────┐ │ ║
           ║  │                           │  .input                   │ │ ║
           ║  │                           └───────────────────────────┘ │ ║
           ║  │                           .helperText                    │ ║
           ║  └────────────────────────────────────────────────────────┘ ║
           ╚═══════════════════════════════════════════════════════════╝

─── Required field — red accent bar inside input ─────────────────────────────

           Email address →  ▏ you@company.com
                              ↑ 3px wide, full height, #FF5D5A
                              layout: border | 1px gap | 3px bar | 2px gap | 10px padding | text

─── Label wrapping ───────────────────────────────────────────────────────────

  Very Long Employee    ┌─────────────────────┐
  Name Label            │                     │   ← input aligns with LINE 1
                        └─────────────────────┘

  NOT:

  Very Long Employee
  Name Label
                        ┌─────────────────────┐   ← wrong
                        └─────────────────────┘
```

| Part | Element | Notes |
|---|---|---|
| `root` | `div` | Total width owner |
| `formRow` | `div` | CSS Grid `2fr 3fr`, horizontal layout only |
| `label` | `label` | Left column (2fr = 260px at 670px total); right-aligned; `padding-top: 7px` aligns first line with input centre |
| `fieldColumn` | `div` | Right column (3fr = 390px at 670px total); stacks input + helper |
| `inputWrapper` | `div` | Visible bordered box; receives all state styles; `position: relative` anchors `::before` required indicator |
| `input` | `input` | Transparent, fills wrapper |
| `helperText` | `span` | Optional; linked via `aria-describedby` |

---

## Specifications

### Layout

| Property | Value |
|---|---|
| Grid | `grid-template-columns: 2fr 3fr` |
| Label column | 2fr → 260px at default total width |
| Input column | 3fr → 390px at default total width (fixed reference) |
| Column gap | 20px |
| Total default width | 670px = 260 + 20 + 390 |
| Label text-align | `right` — label text sits flush against the input |
| Vertical alignment | `align-items: start` — label wraps downward, input stays at top |
| Label first-line alignment | `padding-top: 7px` = (34px − 20px) / 2 |

### Input field

| Property | Value | Token |
|---|---|---|
| Height | 34px | — |
| Input column width | 390px (fixed reference) | — |
| Total default width | 670px | — |
| Border radius | 6px | — |
| Padding | 8px 10px | — |
| Background | `#FFFFFF` | `bg.common.card` |
| Border (default) | 1px `#C0C8E2` | `components.input.defaultOutline` |

### Typography

| Element | Size | Weight | Color | Token (color) |
|---|---|---|---|---|
| Label | 14px | 400 | `#616E88` | `text.label` |
| Input value | 14px | 400 | `#313949` | `text.base` |
| Placeholder | 14px | 400 | `#8C91AB` | `components.input.placeholderText` |
| Helper text | 11px | 400 | `#616E88` | `text.label` |

Font family and weight tokens: `fontFamily.base`, `fontWeight.regular`.

---

## States

| State | Border | Shadow | Status |
|---|---|---|---|
| Default | `#C0C8E2` | none | ✅ Stable |
| Hover | `#797883` | none | ✅ Stable |
| Focus | `#5464F2` | `0 0 6px 0 rgba(76,94,253,0.50)` | ✅ Stable |
| Disabled | `#D2D9F1` | none | ✅ Stable |
| Error | `#FF5D5A` | — | 🔜 Future |
| Warning | — | — | 🔜 Future |
| Success | — | — | 🔜 Future |

All state styles live in `Input.module.css` as CSS pseudo-classes and `data-state` / `data-variant` attribute selectors. Future states have scaffolded comments ready to uncomment.

---

## Required Field Indicator

When `required={true}`, a decorative red accent bar appears on the left edge of the input, overlaying the border.

| Property | Value |
|---|---|
| Implementation | CSS `::before` on `.inputWrapper[data-required]` — no extra DOM node |
| Width | 3px (content) + 3px `border-left` = 6px total element; `width: 3px` + `border-left: 3px solid` |
| Height | Full height of inputWrapper — `top: 0; bottom: 0` |
| Position | `left: -1px` — sits on top of the 1px left border, covering it with the accent color |
| Color | `#FF5D5A` (`var(--ds-components-input-required-accent, #FF5D5A)`) |
| Border radius | `4px 0 0 4px` — avoids the CSS scaling constraint (sum of radii ≤ element width) that `6px` would hit on a 6px-wide element |
| z-index | `1` — paints above sibling content |
| Trigger | `data-required` attribute on `.inputWrapper` when `required={true}` |
| Accessibility | CSS pseudo-element — not in the accessibility tree. The `required` attribute on `<input>` announces to screen readers. |

**Interior layout** (left border → text):

```
| border (1px, covered by bar) | 3px bar | 2px gap | 10px padding | text
```

Text starts **15px from the left edge** (`padding-left: 15px` on `.input` when `[data-required]` is set).

**The indicator does not affect:** inputWrapper width (390px), height, border-radius, border thickness, label alignment, or form layout.

**Reusable:** Add `data-required` to any `position: relative` form control wrapper — the `::before` rule applies automatically.

> **TODO:** Add `--ds-components-input-required-accent: #FF5D5A` to `color.json`. The hex value matches `--ds-components-input-error-outline` but the two tokens are semantically distinct.

---

## Usage

```tsx
import { Input } from '@/design-system/components/Input';

// Default horizontal form row
<Input label="Email address" />

// Required field — shows red accent bar on input left edge
<Input
  label="Work email"
  placeholder="you@company.com"
  helperText="We'll send a verification link here."
  required
/>

// With suffix icon — 32px slot on the right, icon inherits color from --ds-text-label
<Input
  label="Work email"
  placeholder="you@company.com"
  suffix={<InfoIcon />}
/>

// Disabled — gray background, no hover/focus, cursor: not-allowed
<Input label="Work email" defaultValue="rama@company.com" disabled />

// Vertical layout
<Input label="Search" placeholder="Search contacts…" layout="vertical" width={390} />

// Controlled
<Input label="Full name" value={name} onChange={e => setName(e.target.value)} />

// Custom width (total, both columns)
<Input label="ZIP code" width={400} />
```

---

## Adding a future variant (e.g. Error)

**1. Expand the type:**
```ts
export type InputVariant = 'default' | 'error';
```

**2. Add the prop and set data-variant on `.root`:**
```tsx
<div className={styles.root} style={rootStyle} data-variant={variant !== 'default' ? variant : undefined}>
```

**3. Uncomment the CSS rule in `Input.module.css`:**
```css
.root[data-variant="error"] .inputWrapper {
  border-color: var(--ds-components-input-error-outline);
  background: var(--ds-components-input-error-bg);
}
```

All future tokens (`error-outline`, `disable-bg`, etc.) are already in `design-tokens.css`.

---

## Storybook forced states

For visual regression testing, pass `forceState` to pin a visual state without mouse/keyboard interaction:

```tsx
<Input label="Email" forceState="hover" />
<Input label="Email" forceState="focus" />
```

This sets `data-state` on the `inputWrapper`, triggering the same CSS rules as the real browser pseudo-classes.

---

## Accessibility

- `<label>` is always linked to `<input>` via `htmlFor` / `id`.
- `id` auto-generated via `useId()` — safe for SSR and concurrent React.
- `helperText` linked via `aria-describedby`.
- Required indicator is a CSS `::before` pseudo-element (decorative). The `required` attribute on `<input>` handles assistive tech announcement.
- Focus ring is visible (`border-color` + `box-shadow`) without relying on `outline`.
- All native ARIA attributes pass through via prop spread.

---

## TODOs

- [ ] Add `--ds-components-input-required-accent: #FF5D5A` to `color.json`.
- [ ] Implement error variant using `data-variant="error"` (tokens ready).
- [ ] Implement warning and success variants.
- [ ] Add `sm` (28px) and `lg` (40px) sizes via `data-size`.
- [ ] Add prefix icon slot (left side) inside `.inputWrapper`.
