# minimal

Find the minimal variant under **Design System → Patterns → crm-homepage → minimal** in Storybook.

## Approach

- Reuses the existing CRM homepage shell, sidebar, floating top header, and communication bar without changing the header.
- Full-width content with 30px of left/right padding and no centered maximum-width container, including on mobile.
- White workspace, subtle separators, four first-row KPIs (closed revenue, open pipeline, deals won, and conversion rate), revenue progress, compact deals, and today's tasks.
- No Conversations section.
- Existing Button, Checkbox, Dropdown, ProgressBar, and SetupTable components and shared CRM sample data.

## Behavior

Reporting period changes revenue, deals won, and revenue target. Pipeline includes all closing dates. Follow-up review filters to Northstar; show all restores the list. The Today checklist contains ten local sample tasks in compact rows, with a height-limited, keyboard-focusable scrolling list. Tasks retain their checked state without displaying a remaining count. Interactions are local examples with no backend changes.

Default and Empty State stories include interaction checks and assert that Conversations is absent. The KPI row displays four columns on desktop, two on tablet, and one on mobile. Sections stack on narrow screens; the table scrolls inside its own container.

## Charts

- Revenue trend: January–June 2026 monthly closed revenue, reusing the colorful pattern's story-local SVG illustration and shared sample data.
- Pipeline by stage: a donut chart of current open opportunities across all closing dates, reusing the colorful pattern's SVG treatment, with a total and value/percentage legend.
- Revenue uses three unfilled lines: closed revenue (blue), forecast (pink), and target (amber), with a shared value scale and visible legend. Forecast and target are fixed monthly sample comparisons. Month labels and all three series use the same SVG x-coordinates so dots align with their months at every viewport width. Every point supports hover and keyboard-focus tooltips. The latest-month summary still compares closed revenue (June versus May), independently of the KPI period.
- KPI cards and dashboard panels have subtle token-based borders. Values, trend icons, percentages, and counts use the neutral heading color rather than green or red; chart strokes and fills retain their categorical colors. Direction is also written in text, and empty states do not imply a trend.
- Component titles use the larger heading token; the CRM header and content spacing are unchanged.
- Charts use fixed sample data independently of the KPI period selector; descriptive captions are omitted for the minimal layout.
- Both charts provide accessible summaries of every plotted value, without chart-data controls or expandable tables. Donut segments also have a visible legend.
- Empty State shows helpful messages instead of sample charts. Charts stack at narrow widths.
- Story interaction checks cover chart rendering, pipeline values, and empty states. No new chart primitives or dependencies are introduced.

## Idea builder widget

A compact reference-inspired builder sits at the bottom of the dashboard, half-width on desktop and full-width on smaller screens, without replacing the CRM header. Its white composer uses a peach/pink/purple/blue gradient border, a decorative sparkle, existing chain/edit/microphone icons, and a circular gradient submit arrow. Edit focuses the input; attachment and voice controls are disabled with accessible explanations because those integrations are not available. It composes existing Textarea, Button, Icon, and Modal controls with token-based pastel surfaces and gradient accents. Reduced padding, heading size, and input height keep it compact; suggestion cards and their controls are omitted. Preview idea opens a local-only summary, disabled for whitespace-only input. No AI request, application generation, file upload, or microphone access is performed. Story interaction checks cover manual input, preview, prompt reset, and the absence of suggestions.

## Additional sales widgets

- **My Today's Appointments:** compact agenda beside Company Target, with one appointment per row, profile photos, and two lines of details. Each appointment has **View details** (opens the existing dialog) and a reversible **Mark done / Completed** action with an accessible pressed state. Actions sit beside details on wide screens and wrap underneath on narrower screens. Completion is local demo state; no meeting is launched or backend updated. Interaction checks cover photos, completion toggling, and the details dialog. The empty state has no appointment actions.
- **Company Target:** reference-inspired horizontal achieved bar, target marker, record-count axis, and achieved legend. The local sample has an actual of 3,210 records against a target of 3,000, shown as **Actual: 3210 | Target: 3000** with emphasized neutral values. The bar, marker, tooltip, and accessible summary use the same values; the axis extends to 4,000 so overachievement is not clipped.
- **Accounts by Industry:** a column chart with ten named industries, visible count labels, and an accessible summary of every value. Industry counts total 3,191 independently of the Company Target sample. The chart scrolls within its container on narrow screens.
- These widgets use fixed local sample data, independent of the revenue period selector, and provide dedicated empty states. They compose existing dashboard markup and tokens without adding design-system primitives or dependencies.
- Company Target retains its compact 640px canvas. Accounts by Industry fills its panel width, with varied, deliberately unsorted fixed counts that remain stable across renders and still total 3,191. Industry columns scroll on narrow screens.
- Revenue uses smooth cubic curves through the monthly dots. Revenue and industry charts measure their rendered widths, filling the available panel space without enlarging labels or markers; month labels and dots retain shared coordinates.
- Revenue points, pipeline segments, the achieved bar, and all ten industry columns reuse Tooltip with SVG group wrappers. Hover or keyboard focus reveals values; moving away, blurring, or pressing Escape dismisses the tooltip.
- Tests assert three appointments, the target comparison, exactly ten industry columns, tooltip interactions, and the new empty states.
