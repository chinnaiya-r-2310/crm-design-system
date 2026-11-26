import { useId } from 'react';

// Icons imported from the CRM Icon Library app (crm-icon-library, /api/local-icons).
// Dark strokes/fills are converted to currentColor; the light knockout colour
// (#EDF0F4) reads --lib-icon-knockout so it can match the surface behind it.
// Regenerate rather than editing by hand.

export const libraryIconCatalog = [
 {
  "name": "LibArrowLeft",
  "slug": "arrow-left",
  "category": "general",
  "viewBox": "292.575 334.975 17.025 14.525",
  "fill": "currentColor",
  "markup": "<path d=\"M309.1,342.2c0,.4-.3.8-.8.8h-12.7l4.7,4.7c.3.3.3.8,0,1.1-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-6-6c-.3-.3-.3-.8,0-1.1l6-6c.3-.3.8-.3,1.1,0s.3.8,0,1.1l-4.7,4.7h12.7c.4-.1.7.2.7.7h0Z\"/>"
 },
 {
  "name": "LibBuilderAddressField",
  "slug": "builder-address-field",
  "category": "ui-controls",
  "viewBox": "0 0 16 17",
  "fill": "none",
  "markup": "<path d=\"M6.5 11H3C1.89543 11 1 10.1046 1 9V5C1 3.89543 1.89543 3 3 3H12C13.1046 3 14 3.89543 14 5V6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M16 11.3409C16 13.9394 12.5 16.1667 12.5 16.1667C12.5 16.1667 9 13.9394 9 11.3409C9 10.4548 9.36875 9.60507 10.0251 8.97853C10.6815 8.35199 11.5717 8 12.5 8C13.4283 8 14.3185 8.35199 14.9749 8.97853C15.6313 9.60507 16 10.4548 16 11.3409Z\" fill=\"currentColor\"/> <path d=\"M12.5 12.6666C13.1443 12.6666 13.6667 12.1443 13.6667 11.4999C13.6667 10.8556 13.1443 10.3333 12.5 10.3333C11.8557 10.3333 11.3333 10.8556 11.3333 11.4999C11.3333 12.1443 11.8557 12.6666 12.5 12.6666Z\" style=\"fill:var(--lib-icon-knockout, #EDF0F4)\"/>"
 },
 {
  "name": "LibBuilderAutonumbers",
  "slug": "builder-autonumbers",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M8 3H14\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\"/> <path d=\"M8 8H14\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\"/> <path d=\"M8.00002 13H14\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\"/> <path d=\"M2 2L3 2.0001V6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M2 9H4.5V11.5H2L2 13.9999H4.33334\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderCheckbox",
  "slug": "builder-checkbox",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M14 3.71475L14 3.5C14 2.67157 13.3284 2 12.5 2L4 2C2.89543 2 2 2.89543 2 4L2 12C2 13.1046 2.89543 14 4 14L12.5 14C13.3284 14 14 13.3284 14 12.5L14 12.1823\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M7.2229 9.05737L9.40869 11.2432L15.2229 5.42896\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderCurrency",
  "slug": "builder-currency",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M13.5 14C14.3284 14 15 13.3284 15 12.5C15 11.6716 14.3284 11 13.5 11C12.6716 11 12 11.6716 12 12.5C12 13.3284 12.6716 14 13.5 14Z\" fill=\"currentColor\"/> <path d=\"M9 12H1V3H15V8\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M1.5 5C1.69698 5 1.89204 4.9612 2.07403 4.88582C2.25601 4.81044 2.42137 4.69995 2.56066 4.56066C2.69995 4.42137 2.81044 4.25601 2.88582 4.07403C2.9612 3.89204 3 3.69698 3 3.5L1.5 3.5L1.5 5Z\" fill=\"currentColor\"/> <path d=\"M13 3.5C13 3.69698 13.0388 3.89204 13.1142 4.07403C13.1896 4.25601 13.3001 4.42137 13.4393 4.56066C13.5786 4.69995 13.744 4.81044 13.926 4.88582C14.108 4.9612 14.303 5 14.5 5L14.5 3.5L13 3.5Z\" fill=\"currentColor\"/> <mask id=\"path-5-inside-1_1_3481\" fill=\"white\"> <path d=\"M3 11.5C3 11.303 2.9612 11.108 2.88582 10.926C2.81044 10.744 2.69995 10.5786 2.56066 10.4393C2.42137 10.3001 2.25601 10.1896 2.07402 10.1142C1.89204 10.0388 1.69698 10 1.5 10L1.5 11.5H3Z\"/> </mask> <path d=\"M3 11.5C3 11.303 2.9612 11.108 2.88582 10.926C2.81044 10.744 2.69995 10.5786 2.56066 10.4393C2.42137 10.3001 2.25601 10.1896 2.07402 10.1142C1.89204 10.0388 1.69698 10 1.5 10L1.5 11.5H3Z\" stroke=\"currentColor\" stroke-width=\"2\" mask=\"url(#path-5-inside-1_1_3481)\"/> <rect x=\"6\" y=\"6\" width=\"4\" height=\"3\" rx=\"1.5\" fill=\"currentColor\"/>"
 },
 {
  "name": "LibBuilderDate",
  "slug": "builder-date",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M11 1V2.52941\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M5 1V2.52941\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M2 5H14\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderDateTime",
  "slug": "builder-date-time",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M11 1V2.52941\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M5 1V2.52941\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M2 5H14\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M12.5 9C10.575 9 9 10.575 9 12.5C9 14.425 10.575 16 12.5 16C14.425 16 16 14.425 16 12.5C16 10.575 14.425 9 12.5 9Z\" fill=\"currentColor\"/> <path d=\"M12.667 1.25C13.8173 1.25018 14.7498 2.18267 14.75 3.33301V8.03809C14.2863 7.80289 13.7819 7.63628 13.25 7.55566V3.33301C13.2498 3.0111 12.9889 2.75018 12.667 2.75H3.33301C3.0111 2.75018 2.75018 3.0111 2.75 3.33301V12.667C2.75018 12.9889 3.0111 13.2498 3.33301 13.25H7.55664C7.63727 13.7819 7.80291 14.2863 8.03809 14.75H3.33301C2.18267 14.7498 1.25018 13.8173 1.25 12.667V3.33301C1.25018 2.18267 2.18267 1.25018 3.33301 1.25H12.667ZM13.25 9.08203C13.8118 9.20595 14.3239 9.46585 14.75 9.8252V12.667C14.7498 13.8173 13.8173 14.7498 12.667 14.75H9.8252C9.46585 14.3239 9.20595 13.8118 9.08203 13.25H12.667C12.9889 13.2498 13.2498 12.9889 13.25 12.667V9.08203Z\" fill=\"currentColor\"/> <path d=\"M12.5 11V12.5H14.5\" style=\"stroke:var(--lib-icon-knockout, #EDF0F4)\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderDecimal",
  "slug": "builder-decimal",
  "category": "ui-controls",
  "viewBox": "0 0 18 16",
  "fill": "none",
  "markup": "<circle cx=\"1\" cy=\"12\" r=\"1\" fill=\"currentColor\"/> <rect x=\"4\" y=\"4\" width=\"5\" height=\"8\" rx=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <rect x=\"12\" y=\"4\" width=\"5\" height=\"8\" rx=\"2.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderEmail",
  "slug": "builder-email",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<rect x=\"1\" y=\"3\" width=\"14\" height=\"11\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\"/> <path d=\"M2 4L6.58579 8.58579C7.36683 9.36683 8.63316 9.36684 9.41421 8.58579L14 4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderFieldUpload",
  "slug": "builder-field-upload",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M4.5 5.71436H7.125\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/> <path d=\"M4.5 8.57153H9.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/> <path d=\"M13.9912 6.38667V3.17333L11.5783 1H3.3836C2.64568 1 2 1.65333 2 2.4V3.33333V13.6C2 14.3467 2.64568 15 3.3836 15H8.99561\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M11 12L13 10L15 12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M13 10.5V15\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderFormula",
  "slug": "builder-formula",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M4 14V4.28571C4 3.02857 5 2 6.22222 2H8\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M2 7H7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M9 9L14 14\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M14 9L9 14\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderImageUpload",
  "slug": "builder-image-upload",
  "category": "ui-controls",
  "viewBox": "0 0 18 16",
  "fill": "none",
  "markup": "<path d=\"M15 1V7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M13 3L15 1L17 3\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M6.5625 9.125C7.42544 9.125 8.125 8.42544 8.125 7.5625C8.125 6.69955 7.42544 6 6.5625 6C5.69955 6 5 6.69955 5 7.5625C5 8.42544 5.69955 9.125 6.5625 9.125Z\" fill=\"currentColor\"/> <path d=\"M14.6933 12.9022L12.1746 10.1553C12.0572 10.0273 11.9144 9.92508 11.7553 9.8553C11.5962 9.78551 11.4244 9.74965 11.2506 9.75C11.0769 9.75036 10.9052 9.78691 10.7464 9.85734C10.5876 9.92778 10.4452 10.0305 10.3283 10.1591L7.66397 13.09L6.33179 14.5555\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M9 3H2C1.44772 3 1 3.44772 1 4V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V10.0001\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderLongInteger",
  "slug": "builder-long-integer",
  "category": "ui-controls",
  "viewBox": "0 0 18 16",
  "fill": "none",
  "markup": "<circle cx=\"7.75\" cy=\"13\" r=\"1\" fill=\"currentColor\"/> <circle cx=\"10.75\" cy=\"13\" r=\"1\" fill=\"currentColor\"/> <path d=\"M14.79 13.0952C15.3927 12.6043 15.8869 11.9392 16.2288 11.1589C16.5707 10.3785 16.7498 9.50708 16.75 8.62188V5.37077C16.75 5.11145 16.6657 4.86275 16.5157 4.67938C16.3657 4.49601 16.1622 4.39299 15.95 4.39299H13.55C13.3378 4.39299 13.1343 4.49601 12.9843 4.67938C12.8343 4.86275 12.75 5.11145 12.75 5.37077V5.43372C12.75 5.69304 12.8343 5.94174 12.9843 6.12511C13.1343 6.30848 13.3378 6.4115 13.55 6.4115H14.9492V5.07072H13.4012\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M2.79 13.0952C3.39269 12.6043 3.88692 11.9392 4.22883 11.1589C4.57074 10.3785 4.74976 9.50708 4.75 8.62188V5.37077C4.75 5.11145 4.66571 4.86275 4.51569 4.67938C4.36566 4.49601 4.16217 4.39299 3.95 4.39299H1.55C1.33783 4.39299 1.13434 4.49601 0.984315 4.67938C0.834286 4.86275 0.75 5.11145 0.75 5.37077V5.43372C0.75 5.69304 0.834286 5.94174 0.984315 6.12511C1.13434 6.30848 1.33783 6.4115 1.55 6.4115H2.9492V5.07072H1.40122\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderLookup",
  "slug": "builder-lookup",
  "category": "ui-controls",
  "viewBox": "0 0 17 16",
  "fill": "none",
  "markup": "<path d=\"M5.09091 11.1818C7.35026 11.1818 9.18182 9.35026 9.18182 7.09091C9.18182 4.83156 7.35026 3 5.09091 3C2.83156 3 1 4.83156 1 7.09091C1 9.35026 2.83156 11.1818 5.09091 11.1818Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/> <path d=\"M8.27271 10.2727L11 13\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/> <path d=\"M12.8182 10.2727H15.5454\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M11.9091 7.54539H15.5455M11 4.81812H15.5455\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderMultiSelectLookup",
  "slug": "builder-multi-select-lookup",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M7.61111 14H14.6111\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\"/> <path d=\"M1 9L1.98293 10L4.5 7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M1 4L1.98293 5L4.5 2\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M10.8899 7.77981C12.486 7.77981 13.7798 6.48595 13.7798 4.8899C13.7798 3.29385 12.486 2 10.8899 2C9.29385 2 8 3.29385 8 4.8899C8 6.48595 9.29385 7.77981 10.8899 7.77981Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\"/> <path d=\"M15 8.87142L13.1376 7.00903\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/> <path d=\"M7.5 10H9.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\"/> <rect x=\"1\" y=\"12\" width=\"3\" height=\"3\" rx=\"1\" fill=\"currentColor\"/>"
 },
 {
  "name": "LibBuilderMultiline",
  "slug": "builder-multiline",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M1 13H8\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/> <path d=\"M1 8H15\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/> <path d=\"M1 3H15\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>"
 },
 {
  "name": "LibBuilderMultiselect",
  "slug": "builder-multiselect",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M8.11108 4H15.1111\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\"/> <path d=\"M8.11108 9H15.1111\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\"/> <path d=\"M8.11111 14H15.1111\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"bevel\"/> <path d=\"M1.5 9L2.48293 10L5 7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M1.5 4L2.48293 5L5 2\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M1 13.5C1 12.9477 1.44772 12.5 2 12.5H3C3.55228 12.5 4 12.9477 4 13.5V14.5C4 15.0523 3.55228 15.5 3 15.5H2C1.44772 15.5 1 15.0523 1 14.5V13.5Z\" fill=\"currentColor\"/>"
 },
 {
  "name": "LibBuilderNumber",
  "slug": "builder-number",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M1 4C1.55228 4 2 4.44772 2 5V12\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M5 4H7.99999C8.55227 4 8.99999 4.44772 8.99999 5V6.99989C8.99999 7.55217 8.55227 7.99989 7.99999 7.99989H6C5.44772 7.99989 5 8.4476 5 8.99989V11C5 11.5523 5.44772 12 6 12H8.99999\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/> <path d=\"M11 4H14C14.5523 4 15 4.44772 15 5L15 7C15 7.55229 14.5523 8 14 8H11.125\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/> <path d=\"M11 8H14C14.5523 8 15 8.44772 15 9V11C15 11.5523 14.5523 12 14 12H11\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\"/>"
 },
 {
  "name": "LibBuilderPercent",
  "slug": "builder-percent",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M2 14L14 2\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/> <circle cx=\"4\" cy=\"4\" r=\"2.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/> <circle cx=\"12\" cy=\"12\" r=\"2.25\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>"
 },
 {
  "name": "LibBuilderPhone",
  "slug": "builder-phone",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M7.08998 9.12006C5.68998 7.72006 4.27998 6.11006 4.88998 5.51006C5.78998 4.61006 6.58998 4.00006 4.98998 2.00006C3.38998 5.8949e-05 2.27998 1.50006 1.37998 2.40006C0.379982 3.40006 1.27998 7.22006 5.08998 10.9301C8.79998 14.6401 12.71 15.6501 13.61 14.6401C14.51 13.7401 16.02 12.6301 14.01 11.0301C12.2079 9.59553 11.5392 10.0903 10.7715 10.8566C10.5914 11.0363 10.4522 11.3172 10.1982 11.3336C9.57593 11.374 8.23015 10.3498 7.08998 9.12006Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\"/>"
 },
 {
  "name": "LibBuilderPickList",
  "slug": "builder-pick-list",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M13 3H3C1.89543 3 1 3.89543 1 5V11C1 12.1046 1.89543 13 3 13H13C14.1046 13 15 12.1046 15 11V5C15 3.89543 14.1046 3 13 3Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/> <path d=\"M10.2695 9.72344L8.41005 7.49206C8.24721 7.29666 8.38616 7 8.64051 7H12.3595C12.6138 7 12.7528 7.29666 12.59 7.49205L10.7305 9.72344C10.6105 9.86737 10.3895 9.86737 10.2695 9.72344Z\" fill=\"currentColor\"/>"
 },
 {
  "name": "LibBuilderRadioButton",
  "slug": "builder-radio-button",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<circle cx=\"8\" cy=\"8\" r=\"7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <circle cx=\"8.00006\" cy=\"8.00006\" r=\"3.08331\" fill=\"currentColor\"/>"
 },
 {
  "name": "LibBuilderRollupFields",
  "slug": "builder-rollup-fields",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M5 11H3C1.89543 11 1 10.1046 1 9V5C1 3.89543 1.89543 3 3 3H13C14.1046 3 15 3.89543 15 5L15 6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M10.8449 7.65698C10.4529 7.76809 9.89286 8.21254 9.89286 8.21254C9.83686 8.21254 9.72486 8.32365 9.72486 8.32365C9.05286 8.8792 8.60486 9.71254 8.60486 10.657C8.60486 12.3236 10.0049 13.7125 11.6849 13.7125C13.3649 13.7125 14.7649 12.3236 14.7649 10.657C14.7649 10.3129 14.7076 9.98778 14.6048 9.6855C14.4588 9.25567 14.2208 8.87205 13.9249 8.54587\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M8.82886 7.10132H11.3489V9.32354\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderSingleLine",
  "slug": "builder-single-line",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M4.5 12H3C1.89543 12 1 11.1046 1 10V6C1 4.89543 1.89543 4 3 4H4.5M10 4H11.5H13C14.1046 4 15 4.89543 15 6V10C15 11.1046 14.1046 12 13 12H11.5H10\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M7 1L7 15\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M6 1H8\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M6 15H8\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderSubform",
  "slug": "builder-subform",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M1 12V4C1 2.89543 1.89543 2 3 2H13C14.1046 2 15 2.89543 15 4V12C15 13.1046 14.1046 14 13 14H3C1.89543 14 1 13.1046 1 12Z\" stroke=\"currentColor\" stroke-width=\"1.5\"/> <path d=\"M5.5 2V14\" stroke=\"currentColor\" stroke-width=\"1.5\"/> <path d=\"M10.5 2V14\" stroke=\"currentColor\" stroke-width=\"1.5\"/> <path d=\"M1 5.76929H14.5333\" stroke=\"currentColor\" stroke-width=\"1.5\"/>"
 },
 {
  "name": "LibBuilderUrl",
  "slug": "builder-url",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M10.9166 9.5L13.1774 7.23922C13.7112 6.65615 14.0066 5.87523 13.9999 5.06464C13.9932 4.25406 13.685 3.47867 13.1417 2.90548C12.5984 2.33229 11.8634 2.00716 11.095 2.00012C10.3267 1.99307 9.58643 2.30468 9.03374 2.86782L7 4.90153\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M4.58088 6.90576L2.82261 8.76067C2.28881 9.34373 1.99343 10.1247 2.00011 10.9352C2.00679 11.7458 2.31498 12.5212 2.85831 13.0944C3.40164 13.6676 4.13663 13.9927 4.90499 13.9998C5.67334 14.0068 6.41358 13.6952 6.96627 13.1321L8.5 11.5983\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M5.5 10.5L10.5 5.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibBuilderUser",
  "slug": "builder-user",
  "category": "ui-controls",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M2 15C2 12.2386 4.23858 10 7 10H9C11.7614 10 14 12.2386 14 15\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/> <circle cx=\"8\" cy=\"5\" r=\"3\" stroke=\"currentColor\" stroke-width=\"1.5\"/>"
 },
 {
  "name": "LibButtons",
  "slug": "buttons",
  "category": "general",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M8 12H3C1.89543 12 1 11.1046 1 10V6C1 4.89543 1.89543 4 3 4H13C14.1046 4 15 4.89543 15 6V7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M15.4215 11.6777L14.515 11.9831C14.2647 12.0664 14.0645 12.2607 13.9811 12.5161L13.6752 13.4211C13.4138 14.204 12.3125 14.1873 12.0678 13.4045L11.0389 10.1009C10.8387 9.44578 11.4449 8.83505 12.0956 9.04047L15.4104 10.0676C16.1891 10.3119 16.2002 11.4168 15.4215 11.6777Z\" fill=\"currentColor\"/>"
 },
 {
  "name": "LibChevronRight",
  "slug": "chevron-right",
  "category": "crm-notes",
  "viewBox": "381.80 3.60 10.00 16.00",
  "fill": "none",
  "markup": "<path d=\"M 383.8,17.6 l 6,-6 l -6,-6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibGear2",
  "slug": "gear-2",
  "category": "general",
  "viewBox": "98.300 292.296 19.100 18.107",
  "fill": "currentColor",
  "markup": "<path d=\"M114.5,298.3c-.4,0-.8-.1-.9-.3,0-.2,0-.5.2-.9.3-.5.4-1.2.2-1.8s-.6-1.1-1.1-1.4l-1.4-.8c-1-.6-2.3-.3-2.9.8v.2c-.3.4-.6.6-.8.6h0c-.2,0-.5-.2-.7-.6v-.2c-.7-1-2-1.4-3-.8l-1.4.8c-.5.3-.9.8-1.1,1.4s0,1.2.2,1.8c.2.4.3.7.2.9,0,.2-.4.3-.9.3-1.3,0-2.3,1-2.3,2.3v1.5c0,1.3,1,2.3,2.3,2.3s.8.1.9.3c0,.2,0,.5-.2.9-.3.5-.4,1.2-.2,1.8.2.6.6,1.1,1.1,1.4l1.4.8c1,.6,2.3.3,2.9-.8v-.2c.3-.4.6-.6.8-.6h0c.2,0,.5.2.7.6v.2c.5.7,1.2,1.1,2,1.1s.7-.1,1.1-.3l1.4-.8c.5-.3.9-.8,1.1-1.4s0-1.2-.2-1.8c-.2-.4-.3-.7-.2-.9,0-.2.4-.3.9-.3,1.3,0,2.3-1,2.3-2.3v-1.5c0-1.3-1.1-2.3-2.4-2.3h0ZM115.4,302.1c0,.5-.4.8-.8.8-1,0-1.8.4-2.2,1.1-.4.7-.3,1.6.2,2.4.2.4,0,.9-.3,1.1l-1.5.8c-.3.2-.7.1-.9-.2v-.2c-.6-.9-1.3-1.4-2.1-1.4h0c-.8,0-1.5.5-2,1.4v.2c-.2.2-.3.3-.5.3s-.3,0-.5-.1l-1.4-.8c-.2-.1-.3-.3-.4-.5s0-.4,0-.6c.5-.9.6-1.7.2-2.4-.4-.7-1.2-1.1-2.2-1.1s-.8-.4-.8-.8v-1.5c0-.5.4-.8.8-.8,1,0,1.8-.4,2.2-1.1.4-.7.3-1.6-.2-2.4v-.6c0-.2.2-.4.4-.5l1.5-.8c.3-.2.7-.1.9.2v.2c.6.9,1.3,1.4,2.1,1.4h0c.8,0,1.5-.5,2-1.4h0c.2-.4.6-.5.9-.3l1.4.8c.2.1.3.3.4.5s0,.4,0,.6c-.5.9-.6,1.7-.2,2.4.4.7,1.2,1.1,2.2,1.1s.8.4.8.8v1.4h0ZM107.8,298.1c-1.8,0-3.2,1.5-3.2,3.2s1.5,3.2,3.2,3.2,3.2-1.5,3.2-3.2-1.4-3.2-3.2-3.2ZM107.8,303.1c-1,0-1.8-.8-1.8-1.8s.8-1.8,1.8-1.8,1.8.8,1.8,1.8-.9,1.8-1.8,1.8Z\"/>"
 },
 {
  "name": "LibInfo",
  "slug": "info",
  "category": "status",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<circle cx=\"8\" cy=\"8\" r=\"7\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <circle cx=\"8.5\" cy=\"4.5\" r=\"1.5\" fill=\"currentColor\"/> <path d=\"M6.56544 8.6144C7.32472 8.01177 7.55845 7.6322 8.05255 7.80574C8.67017 8.02267 6.38238 11.783 7 11.9999C7.4941 12.1734 8.13301 11.7392 8.72018 11.1848\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibMore",
  "slug": "more",
  "category": "general",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8Z\" fill=\"currentColor\"/> <path d=\"M4.5 8C4.5 8.82843 3.82843 9.5 3 9.5C2.17157 9.5 1.5 8.82843 1.5 8C1.5 7.17157 2.17157 6.5 3 6.5C3.82843 6.5 4.5 7.17157 4.5 8Z\" fill=\"currentColor\"/> <path d=\"M14.5 8C14.5 8.82843 13.8284 9.5 13 9.5C12.1716 9.5 11.5 8.82843 11.5 8C11.5 7.17157 12.1716 6.5 13 6.5C13.8284 6.5 14.5 7.17157 14.5 8Z\" fill=\"currentColor\"/>"
 },
 {
  "name": "LibPreviewEyeSeeShow",
  "slug": "preview-eye-see-show",
  "category": "actions",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M1 8C1 8 3.54545 3 8 3C12.4545 3 15 8 15 8C15 8 12.4545 13 8 13C3.54545 13 1 8 1 8Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibRules",
  "slug": "rules",
  "category": "general",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M7.30635 2.75H12.4163C13.2004 2.75 13.5925 2.75 13.8919 2.90259C14.1554 3.03681 14.3695 3.25099 14.5038 3.51441C14.6563 3.81389 14.6563 4.20593 14.6563 4.99V5.9C14.6563 6.55232 14.6563 6.87848 14.5498 7.13576C14.4077 7.4788 14.1351 7.75134 13.7921 7.89343C13.5348 8 13.2087 8 12.5563 8M8.70635 13.25H3.59635C2.81227 13.25 2.42024 13.25 2.12076 13.0974C1.85733 12.9632 1.64316 12.749 1.50894 12.4856C1.35635 12.1861 1.35635 11.7941 1.35635 11.01V10.1C1.35635 9.44768 1.35635 9.12152 1.46292 8.86424C1.60501 8.5212 1.87755 8.24866 2.22059 8.10657C2.47787 8 2.80403 8 3.45635 8M6.81635 9.75H9.19635C9.39237 9.75 9.49038 9.75 9.56524 9.71185C9.6311 9.6783 9.68464 9.62475 9.7182 9.5589C9.75635 9.48403 9.75635 9.38602 9.75635 9.19V6.81C9.75635 6.61398 9.75635 6.51597 9.7182 6.4411C9.68464 6.37525 9.6311 6.3217 9.56524 6.28815C9.49038 6.25 9.39237 6.25 9.19635 6.25H6.81635C6.62033 6.25 6.52232 6.25 6.44745 6.28815C6.38159 6.3217 6.32805 6.37525 6.2945 6.4411C6.25635 6.51597 6.25635 6.61398 6.25635 6.81V9.19C6.25635 9.38602 6.25635 9.48403 6.2945 9.5589C6.32805 9.62475 6.38159 9.6783 6.44745 9.71185C6.52232 9.75 6.62033 9.75 6.81635 9.75ZM12.0663 15H14.4463C14.6424 15 14.7404 15 14.8152 14.9619C14.8811 14.9283 14.9346 14.8748 14.9682 14.8089C15.0063 14.734 15.0063 14.636 15.0063 14.44V12.06C15.0063 11.864 15.0063 11.766 14.9682 11.6911C14.9346 11.6252 14.8811 11.5717 14.8152 11.5381C14.7404 11.5 14.6424 11.5 14.4463 11.5H12.0663C11.8703 11.5 11.7723 11.5 11.6975 11.5381C11.6316 11.5717 11.5781 11.6252 11.5445 11.6911C11.5063 11.766 11.5063 11.864 11.5063 12.06V14.44C11.5063 14.636 11.5063 14.734 11.5445 14.8089C11.5781 14.8748 11.6316 14.9283 11.6975 14.9619C11.7723 15 11.8703 15 12.0663 15ZM1.56635 4.5H3.94635C4.14237 4.5 4.24038 4.5 4.31524 4.46185C4.3811 4.4283 4.43464 4.37475 4.4682 4.3089C4.50635 4.23403 4.50635 4.13602 4.50635 3.94V1.56C4.50635 1.36398 4.50635 1.26597 4.4682 1.1911C4.43464 1.12525 4.3811 1.0717 4.31524 1.03815C4.24038 1 4.14237 1 3.94635 1H1.56635C1.37033 1 1.27232 1 1.19745 1.03815C1.13159 1.0717 1.07805 1.12525 1.0445 1.1911C1.00635 1.26597 1.00635 1.36398 1.00635 1.56V3.94C1.00635 4.13602 1.00635 4.23403 1.0445 4.3089C1.07805 4.37475 1.13159 4.4283 1.19745 4.46185C1.27232 4.5 1.37033 4.5 1.56635 4.5Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibSections",
  "slug": "sections",
  "category": "general",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M15 6.2H1M1 5.36L1 11.24C1 12.4161 1 13.0042 1.22889 13.4534C1.43022 13.8485 1.75148 14.1698 2.14662 14.3711C2.59583 14.6 3.18389 14.6 4.36 14.6H11.64C12.8161 14.6 13.4042 14.6 13.8534 14.3711C14.2485 14.1698 14.5698 13.8485 14.7711 13.4534C15 13.0042 15 12.4161 15 11.24V5.36C15 4.18389 15 3.59584 14.7711 3.14662C14.5698 2.75148 14.2485 2.43022 13.8534 2.22889C13.4042 2 12.8161 2 11.64 2L4.36 2C3.18389 2 2.59583 2 2.14662 2.22889C1.75148 2.43022 1.43022 2.75148 1.22889 3.14662C1 3.59583 1 4.18389 1 5.36Z\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibSparkle4pt",
  "slug": "sparkle-4pt",
  "category": "general",
  "viewBox": "298.900 871.300 18.000 18.000",
  "fill": "currentColor",
  "markup": "<path d=\"M309.9,886c-1.8.4-2.1.8-2.5,2.8-.4-2-.7-2.4-2.5-2.8,1.8-.4,2.1-.8,2.5-2.8.3,2,.7,2.4,2.5,2.8ZM310.7,871.8c-.9,4.5-1.6,5.3-5.7,6.3,4.1,1,4.8,1.8,5.7,6.3.9-4.5,1.6-5.3,5.7-6.3-4.1-1-4.8-1.8-5.7-6.3ZM302.2,877.2c-.4,2.3-.8,2.7-2.8,3.2,2,.5,2.4.9,2.8,3.2.4-2.3.8-2.7,2.8-3.2-2-.5-2.4-.9-2.8-3.2Z\"/>"
 },
 {
  "name": "LibSwap",
  "slug": "swap",
  "category": "general",
  "viewBox": "0 0 16 16",
  "fill": "none",
  "markup": "<path d=\"M4.25 1.5L1.25 4.5L4.25 7.5M1.75 4.5H7.68845C8.60618 4.5 9.40615 5.12459 9.62873 6.01493L9.75 6.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M11.75 14.5L14.75 11.5L11.75 8.5M14.25 11.5H8.31155C7.39382 11.5 6.59385 10.8754 6.37127 9.98507L6.25 9.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>"
 },
 {
  "name": "LibWarning",
  "slug": "warning",
  "category": "crm-accessibility",
  "viewBox": "283.84 7.58 18.41 15.42",
  "fill": "none",
  "markup": "<path d=\"M 293.1,12 L 293.1,15 M 299.9,17.9 L 294.7,10.4 C 293.9,9.3 292.2,9.3 291.4,10.4 L 286.2,17.9 C 285.3,19.2 286.2,21 287.8,21 L 298.2,21 C 299.9,21 300.8,19.2 299.9,17.9 Z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/> <path d=\"M 293.1,19 C 293.652,19 294.1,18.5523 294.1,18 C 294.1,17.4477 293.652,17 293.1,17 C 292.547,17 292.1,17.4477 292.1,18 C 292.1,18.5523 292.547,19 293.1,19 Z\" fill=\"currentColor\" stroke=\"none\" stroke-width=\"1.0\"/>"
 }
];

function createIcon({ name, viewBox, fill, markup }) {
  const hasIds = markup.includes(' id="');
  function LibraryIcon(props) {
    // Masks/clip-paths use ids; suffix them per instance so repeated icons don't collide.
    const suffix = useId().replace(/:/g, '');
    const html = hasIds
      ? markup.replace(/ id="([^"]+)"/g, ` id="$1-${suffix}"`).replace(/url\(#([^)]+)\)/g, `url(#$1-${suffix})`)
      : markup;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width={16}
        height={16}
        fill={fill}
        {...props}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  LibraryIcon.displayName = name;
  return LibraryIcon;
}

export const libraryIconMap = Object.fromEntries(
  libraryIconCatalog.map(icon => [icon.name, createIcon(icon)])
);
