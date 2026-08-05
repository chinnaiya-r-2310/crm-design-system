# Icon  `v1.0`

Renders a design-system SVG icon as a React component. Icons use `currentColor` for color, scale via the `size` prop, and handle accessibility automatically.

---

## Folder Structure

```
src/design-system/
├── foundations/
│   └── icons/
│       ├── Add.svg             ← source SVG files (PascalCase)
│       ├── Search.svg
│       ├── ...
│       └── icons.json          ← AI-readable metadata (category, keywords)
└── components/
    └── Icon/
        ├── Icon.tsx            ← component
        ├── iconMap.ts          ← central registry (import here to add icons)
        ├── Icon.stories.tsx    ← Gallery + Playground + Size + Color + A11y stories
        ├── component.json      ← AI-readable specification
        └── README.md
```

---

## Naming Convention

Every SVG file uses **PascalCase** — no kebab-case or snake_case.

```
Add.svg         ✓
ArrowDown.svg   ✓
ChevronRight.svg✓

arrow-down.svg  ✗
arrow_down.svg  ✗
arrowdown.svg   ✗
```

---

## Usage

```tsx
import { Icon } from '@/design-system/components/Icon';

// Decorative — hidden from screen readers automatically
<Icon name="Search" size={16} />

// Meaningful — announced by screen readers
<Icon name="Warning" size={16} aria-label="Warning" />
<Icon name="Delete"  size={16} title="Delete record" />

// Sized
<Icon name="Add" size={24} />

// Colored via CSS
<span style={{ color: '#5464F2' }}>
  <Icon name="Star" size={20} />
</span>

// Colored via className
<Icon name="Check" size={16} className={styles.successIcon} />
/* .successIcon { color: #2ECC71; } */
```

---

## Adding a New Icon

**1. Add the SVG file** to `src/design-system/foundations/icons/` in PascalCase:

```
src/design-system/foundations/icons/Tag.svg
```

The SVG must use `currentColor` for any stroke or fill that should be themeable:

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="..." stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>
```

**2. Register it in `iconMap.ts`:**

```ts
import TagIcon from '../../foundations/icons/Tag.svg?react';

export const iconMap = {
  // ...existing entries...
  Tag: TagIcon,
};
```

The `IconName` type updates automatically — no further changes needed.

**3. Add metadata to `icons.json`:**

```json
{
  "Tag": {
    "category": "Actions",
    "keywords": ["label", "badge", "mark", "categorize"]
  }
}
```

---

## SVG Authoring Guidelines

| Rule | Detail |
|---|---|
| ViewBox | `viewBox="0 0 16 16"` — all icons share the same grid |
| Fill | `fill="none"` on the root `<svg>` — use `fill="currentColor"` on specific elements only |
| Stroke color | `stroke="currentColor"` |
| Stroke width | `1.5` — consistent weight across the set |
| Line caps | `stroke-linecap="round"` |
| Line joins | `stroke-linejoin="round"` |
| Pixel align | Paths should land on 0.5px increments for crisp rendering at 16px |
| No inline colors | Never hardcode hex values — always use `currentColor` |

---

## Accessibility

| Scenario | What to do |
|---|---|
| Decorative (visual only) | Pass no `aria-label` or `title` — `aria-hidden="true"` is applied automatically |
| Standalone meaningful icon | Pass `aria-label="Description"` — sets `role="img"` automatically |
| Icon with visible adjacent label | Decorative — let the label do the work, don't double-announce |
| Override auto behavior | Pass `aria-hidden={false}` explicitly |

```tsx
// ✓ Decorative — next to a "Delete" text label
<button>
  <Icon name="Delete" size={16} />
  Delete
</button>

// ✓ Meaningful — icon-only button
<button aria-label="Delete record">
  <Icon name="Delete" size={16} />
</button>

// or via the Icon prop directly
<button>
  <Icon name="Delete" size={16} aria-label="Delete record" />
</button>
```

---

## Storybook

| Story | What it shows |
|---|---|
| **Gallery** | All 24 registered icons in a responsive grid |
| **Playground** | Single icon with `name` and `size` controls |
| **Size Scale** | 12 · 16 · 20 · 24 · 32 · 48 px sizes |
| **Color Inheritance** | currentColor picking up six different parent colors |
| **Accessibility** | Decorative vs. meaningful icon markup |

---

## Scalability

The architecture scales to 500+ icons without code changes:

- `iconMap.ts` is the **only** file to update when adding icons.
- No switch statements — the registry is a plain object lookup.
- `IconName` is derived from `keyof typeof iconMap` — TypeScript always stays in sync.
- The Storybook Gallery derives its list from `iconMap` — zero maintenance needed.
