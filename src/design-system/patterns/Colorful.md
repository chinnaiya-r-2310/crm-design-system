# Colorful CRM homepage

Storybook: **Design System → Patterns → crm-homepage → colorful → Default**.

An alternate homepage preserving the existing CRM shell and floating header. Minimal and default pages are unchanged. Colors and layout rhythm derive from existing design tokens. Existing buttons, dropdown, checkboxes, table and progress bars are reused. Lightweight inline SVG data illustrations are story-local, with no chart dependency or new public component.

## 20 sales widgets

1. Closed revenue with mini trend
2. Open pipeline with mini trend
3. Deals won with mini trend
4. New leads with mini trend
5. Lead conversion with mini trend
6. Average won deal with mini trend
7. Revenue trend line/area chart with customer-segment breakdown
8. Pipeline by stage bar chart
9. Lead sources donut chart
10. Segmented revenue goal gauge
11. Quarterly forecast bars
12. Weekly activity column chart
13. Win/loss donut chart
14. Deal age bars
15. Open deals table and follow-up filter
16. Priority tasks with completion controls
17. Team leaderboard and goal progress
18. Upcoming meetings
19. Actionable sales insights
20. Sales assistant with a local, deterministic demo response

## Reference-inspired styling

White rounded cards on the existing subdued workspace background, blue icon accents, green change badges, a revenue chart with customer-segment breakdown, weekday activity columns with a highlighted peak, and a segmented semicircular revenue-goal gauge. The sales assistant uses existing Input and Button controls and a decorative token-colored orb. It does not call an AI service; the submitted prompt reveals a clearly labeled sample-workspace recommendation. The 20-widget count and CRM header remain unchanged.

## Data and interactions

All data is illustrative. The period selector updates the six headline metrics only; charts explicitly retain the fixed periods in their captions. Mini trends are decorative, labeled illustrative, and hidden from assistive technology. Every full chart has a readable detail table; SVG charts also include a text summary. Forecast scenarios are estimates, not booked revenue. Pipeline and deals reuse shared homepage data.

Task completion, deal filtering, goal details, assistant demo and chart disclosure work locally. Reviewing Northstar filters and scrolls to the deals table. No action writes CRM records.

The grid scales from six columns on wide screens to four on tablet and one on mobile. The existing CRM shell supplies sticky navigation, mobile menu and communication bar. Tests verify exactly 20 widgets, five accessible chart summaries, period changes, task completion, deal filtering, goal details and assistant feedback, and chart data disclosure.
