# minimal

Find the minimal variant under **Design System → Patterns → crm-homepage → minimal** in Storybook.

## Approach

- Reuses the existing CRM homepage shell, sidebar, floating top header, and communication bar without changing the header.
- Full-width content with 30px of left/right padding and no centered maximum-width container, including on mobile.
- White workspace, subtle separators, four first-row KPIs (closed revenue, open pipeline, deals won, and conversion rate), compact deals, and today's tasks.
- No Conversations or Revenue goal section; Company Target remains a separate widget.
- Existing Button, Checkbox, Dropdown, and SetupTable components and shared CRM sample data.

## Visual hierarchy

All named sales views share a restrained, token-based palette: white surfaces, primary and muted text, blue chart accents, and neutral secondary series. Green/red are reserved for directional trends; the company logo keeps its orange accent. Donut stages use distinct blue/neutral shades with white separators, text labels, values, and tooltips. Company Target uses a pale blue actual bar with a dark neutral target marker; industry and KPI columns use a single blue fill.

Zoho Puvi uses a consistent hierarchy: 20px medium Welcome heading, 24px regular headline values, 16px medium panel titles, 14px regular KPI names/body text, and 12px chart labels/metadata. The donut center remains 14px to fit the chart. Semibold account names remain a scanning aid. The shipment composer uses a white surface, neutral border, plain heading, and solid blue controls; only focus states add a shadow. Layout, panel heights, spacing, data, and interactions are unchanged by this visual pass. These styles are scoped to `minimal`, not the default or colorful patterns.

## Behavior

The homepage dropdown includes 12 Cargo Shipping Logistics sales view names, starting with Classic Sales View. Reporting periods are not listed. The menu is clamped to the viewport so its right edge remains visible. More options provides Edit Homepage and Reorder as inactive actions that close the menu without opening anything, plus View Fullscreen (browser fullscreen, with an explanatory fallback when unavailable). Menu options use matching left and right padding. The default preview does not run chat interaction tests or focus its input on refresh; interaction checks live in a separate test-only story. Each sales homepage name selects a distinct, fixed chart dataset and widget arrangement from `Minimal.views.ts`. All views reuse the existing line, donut, target, and industry chart markup, styling, and tooltips. Daily and Deal Desk prioritize work lists; Accounts, Leads, and Territory lead with industry charts; Forecast, Team, and Executive prioritize company performance. Pipeline-focused views put the donut before the revenue chart. Classic Sales View preserves the original chart data and arrangement. Header, tasks, appointments, and the period-based headline KPIs stay shared. These are illustrative local views, not backend-connected dashboards. All named views use monthly headline metrics. Pipeline includes all closing dates. Follow-up review filters to Northstar; show all restores the list. The Today and OverDue Tasks checklist contains twenty local sample tasks in compact rows, with a height-limited, keyboard-focusable scrolling list. Tasks retain their checked state without displaying a remaining count. Interactions are local examples with no backend changes.

Default and Empty State stories include interaction checks and assert that Conversations is absent. The KPI row displays four columns on desktop, two on tablet, and one on mobile. Sections stack on narrow screens; the table scrolls inside its own container.

## Chart record drill-down

Click or keyboard-activate any revenue dot, pipeline donut segment, industry column, achieved shipment bar, or KPI mini-chart mark to open the right-side drill-down panel (Figma `41789:80579`). The panel shows the selected filters and homepage, a sample-data note, record count, and a paginated logistics records table. Revenue and pipeline record amounts reconcile exactly to the selected aggregate; account and shipment record counts match the selected mark. Conversion snapshots show 100 enquiries with the corresponding converted percentage. These deterministic records illustrate chart relationships; they are not live backend records or the separate Open deals list. Export downloads all matching rows as CSV. Copy URL and Open in new tab preserve the mark and selected homepage. Escape or the close button dismisses the panel and restores keyboard focus. The panel fills the screen on mobile, with internal table scrolling; existing chart formation, tooltips, and legend toggles are preserved.

## Chart formation animation

On every page refresh/mount and homepage-view or reporting-period change, charts replay a brief formation animation: revenue curves/areas reveal from left to right, industry and KPI columns grow from their baselines, the achieved target bar grows horizontally, and donut segments draw in with a slight stagger. KPI values and chart summaries fade in. All animations finish within one second, preserve final data and panel dimensions, and do not replay on hover, legend toggles, task changes, or typing. Empty states are not animated. The system's reduced-motion preference disables the animations, including when changed while the page is open. Animation cleanup prevents stale effects after view changes or unmounting. No sample values are randomized and no network refresh is introduced.

## Charts

- Revenue trend: January–June 2026 monthly closed revenue, reusing the colorful pattern's story-local SVG illustration and shared sample data.
- Pipeline by stage: a donut chart of current open opportunities across all closing dates, reusing the colorful pattern's SVG treatment, with a total and value/percentage legend.
- Revenue uses two smooth line series: closed revenue (blue) and forecast (muted slate), with subtle area fills, with a shared 0–150K scale and ticks at 0K, 50K, 100K, and 150K and a visible legend. Shape-preserving cubic curves flow continuously through broad, offset sample waves matching the hand-drawn reference, rather than alternating peaks at every month. The series include a 125K peak and a 1K trough, without overshooting the scale. The revenue summary and tooltip values derive from the displayed blue series. Light gradient areas sit beneath the line strokes and interactive dots, leaving gridlines readable. The donut uses a tighter SVG viewBox to enlarge its visible diameter without changing the panel or SVG element dimensions. Open deals includes twenty-two local sample records and a taller, height-limited scrolling body using SetupTable's existing maxHeight support; its header remains outside the vertical scroll. Forecast is a fixed monthly sample comparison. Month labels and both series use the same SVG x-coordinates so dots align with their months at every viewport width. Every point supports hover and keyboard-focus tooltips. The latest-month summary still compares closed revenue (June versus May), independently of the KPI period.
- KPI cards and dashboard panels have subtle token-based borders. Main values and counts use the neutral heading color. Green/red are limited to directional trend indicators, accompanied by arrows and numeric changes; empty states do not imply a trend.
- Component titles use a consistent 16px medium style; the CRM header and content spacing are unchanged.
- Charts use fixed sample data independently of the KPI period selector; descriptive captions are omitted for the minimal layout.
- Both charts provide accessible summaries of every plotted value, without chart-data controls or expandable tables. Donut segments also have a visible legend.
- Empty State shows helpful messages instead of sample charts. Charts stack at narrow widths.
- Story interaction checks cover chart rendering, pipeline values, and empty states. No new chart primitives or dependencies are introduced.

## Idea builder widget

A compact reference-inspired builder sits at the bottom of the dashboard, half-width on desktop and full-width on smaller screens, without replacing the CRM header. Its white composer uses a neutral border, a blue decorative sparkle, existing chain/edit/microphone icons, and a solid blue circular submit arrow. Edit focuses the input; attachment and voice controls are disabled with accessible explanations because those integrations are not available. It composes existing Textarea, Button, Icon, and Modal controls with token-based white surfaces and restrained blue accents. Reduced padding, heading size, and input height keep it compact; suggestion cards and their controls are omitted. Preview idea opens a local-only summary, disabled for whitespace-only input. No AI request, application generation, file upload, or microphone access is performed. Story interaction checks cover manual input, preview, prompt reset, and the absence of suggestions.

### Composer footer

The footer groups attachment/edit controls on the left and voice/send controls on the right. A token-colored circular SVG arrow submits the local preview. Hovering or focusing the send group reveals **Discuss idea first**, which opens a separate local discussion summary; touch layouts always expose it. Attachment and microphone controls remain disabled, with no simulated recording or network requests. Toolbar padding is balanced vertically. The existing design-system icons are used rather than the reference's external sprite classes.

## Additional sales widgets

- **My Today's Appointments:** compact agenda beside Company Target, with one appointment per row, profile photos, and two lines of details. Each appointment has **View details** (opens the existing dialog) and a reversible **Mark done / Completed** action with an accessible pressed state. Actions sit beside details on wide screens and wrap underneath on narrower screens. Completion is local demo state; no meeting is launched or backend updated. Interaction checks cover photos, completion toggling, and the details dialog. The empty state has no appointment actions.
- **Company Target:** pale blue achieved bar on a neutral track, dark neutral target marker, record-count axis, and matching pale blue legend, using design tokens. The local sample has an actual of 3,210 records against a target of 3,000, shown as **Actual: 3210 | Target: 3000** with emphasized neutral values. The bar, marker, tooltip, and accessible summary use the same values; the axis extends to 4,000 so overachievement is not clipped.
- **Accounts by Industry:** a column chart with ten named industries, visible count labels, and an accessible summary of every value. Industry counts total 3,191 independently of the Company Target sample. The chart scrolls within its container on narrow screens.
- These widgets use fixed local sample data, independent of the revenue period selector, and provide dedicated empty states. They compose existing dashboard markup and tokens without adding design-system primitives or dependencies.
- Company Target retains its compact 640px canvas. Accounts by Industry fills its panel width, with varied, deliberately unsorted fixed counts that remain stable across renders and still total 3,191. Industry columns scroll on narrow screens.
- Revenue uses smooth cubic curves through the monthly dots. Revenue and industry charts measure their rendered widths, filling the available panel space without enlarging labels or markers; month labels and dots retain shared coordinates.
- Revenue points, pipeline segments, the achieved bar, and all ten industry columns reuse Tooltip with SVG group wrappers. Hover or keyboard focus reveals values; moving away, blurring, or pressing Escape dismisses the tooltip.
- Tests assert three appointments, the target comparison, exactly ten industry columns, tooltip interactions, and the new empty states.

## Cargo Shipping Logistics

The minimal homepage uses logistics-specific freight contracts, shipper accounts, shipping appointments, cargo tasks, customer industries, shipment targets, and a shipment-planning assistant. Other homepage patterns retain their own sample data. Home view and action menus remain within the viewport. Edit and reorder are local demo changes; fullscreen uses the browser API. The default story never focuses the chat input on refresh; automated interactions are isolated in Interaction Checks.
