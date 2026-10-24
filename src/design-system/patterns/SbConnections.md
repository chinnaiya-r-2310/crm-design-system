# SB Connections

Storybook: **Design System → Patterns → SB Connections**.

Implements the Sandbox **Connections** tab from Figma node `79946:197286` ("Sandbox Update", file 🗿 Pascal Stone).

## Composition

Uses the existing NextGenTopBand, VerticalTabs (Setup menu), Tabs (primary), Button (primary) and Tooltip (black, on each count badge) components. The connection map is story-local layout: positioned environment cards, an SVG layer for connector lines, and warning-tinted count badges. No shared components are changed.

## Fonts

Text uses the CRM font, Zoho Puvi 4.0 (Regular 400, Medium 500, Semibold 600, Bold 700), loaded from the same `static.zohocdn.com/zohofonts/zohopuvi/4.0/` files the CRM product uses and registered under `--ds-font-family-base`. Sizes and weights follow the Figma frame.

## Content

- Tabs: Sandbox List, Current Changes List, **Connections**, Deployment Logs. Only Connections has content; other tabs show a short out-of-scope note.
- Header: "Connections", the Pre production description, and **Manage Connections** (no action).
- Legend: Inbound (green), Outbound (blue), Waiting for deployment (yellow `##` badge).
- Map (vertical, Production at the top): Customization, Automation and Dev (Configuration) along the bottom → Customization QA, Automation QA and Dev QA (Configuration and Data) above them → Pre production (Full Data) → Production at the top, with the CRM gallery building icon (`CrmEnterprise`) in the label colour before its name. Lines are grey, 1.5px thick, with smooth rounded bends; all cards (Production included) share the same 10px radius, border and shadow, with 190px-wide cards (so "Configuration and Data" fits on one line) and 120px horizontal gaps. Arrowheads match the Figma triangle (12.5 × 7.7). Count containers match Figma (35 × 22, 6px radius, #FEF2D5 fill, #D7A52F border, 12px medium #56564D text; legend chip 27 × 19, #FFF1D8 fill, #F2B84B border); legend circles are 15px and line end-dots are 10px. Each link shows its own pending-change count (sample values vary per link: 8, 3, 15, 21, 6, 9, 34); a count of 0 hides the badge.

## Data

`SbConnections.data.ts` holds the environments, connections, line coordinates and badge positions on an 810 × 450 canvas. `SbConnectionsDiagram` accepts `nodes` and `connections` props so other layouts can reuse it.

## Accessibility

Environments are a labelled list. Lines and badges are decorative; a visually hidden list describes every connection (source, target, direction, pending count).

## Validation

```sh
npx vitest run --project=storybook src/design-system/patterns/SbConnections.stories.tsx
```
