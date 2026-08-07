import type { FC, SVGProps } from 'react';

type P = SVGProps<SVGSVGElement>;

// ─────────────────────────────────────────────────────────────────────────────
// Icon components — from crm-icon-library (node 91-19)
// ─────────────────────────────────────────────────────────────────────────────

export const Info: FC<P> = (props) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="8.75" cy="8.75" r="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9.25" cy="5.25" r="1.5" fill="currentColor"/>
    <path d="M7.11048 9.45227C7.97824 8.76356 8.24535 8.32977 8.81003 8.5281C9.51589 8.77601 6.90127 13.0735 7.60713 13.3214C8.17181 13.5198 8.90199 13.0235 9.57305 12.3899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Lock: FC<P> = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12.6667 6H3.33333C2.59695 6 2 6.65122 2 7.45455V12.5455C2 13.3488 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.3488 14 12.5455V7.45455C14 6.65122 13.403 6 12.6667 6Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 6V3.77778C5 3.04107 5.31607 2.33453 5.87868 1.81359C6.44129 1.29266 7.20435 1 8 1C8.79565 1 9.55871 1.29266 10.1213 1.81359C10.6839 2.33453 11 3.04107 11 3.77778V6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="8" cy="9" r="1" fill="currentColor"/>
    <path d="M8 9.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronDownFilled: FC<P> = (props) => (
  <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.79289 0H1.20711C0.761654 0 0.53857 0.53857 0.853553 0.853553L4.64645 4.64645C4.84171 4.84171 5.15829 4.84171 5.35355 4.64645L9.14645 0.853553C9.46143 0.538571 9.23835 0 8.79289 0Z" fill="currentColor"/>
  </svg>
);

export const Search: FC<P> = (props) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6.13953 10.6952C8.65562 10.6952 10.6953 8.65546 10.6953 6.13937C10.6953 3.62328 8.65562 1.58359 6.13953 1.58359C3.62343 1.58359 1.58374 3.62328 1.58374 6.13937C1.58374 8.65546 3.62343 10.6952 6.13953 10.6952Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
    <path d="M12.6188 12.4163L9.68286 9.48038" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

export const Check: FC<P> = (props) => (
  <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1 4.333L3.769 7L10 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// Alert icons — used by MessageBox (node 31-9759)
// ─────────────────────────────────────────────────────────────────────────────

export const AlertSuccess: FC<P> = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="11" cy="11" r="11" fill="#12AA67"/>
    <path d="M7 12L10 14.5L15 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AlertError: FC<P> = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="11" cy="11" r="11" fill="#FF5D5A"/>
    <path d="M7.5 7.5L14.5 14.5M14.5 7.5L7.5 14.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const AlertWarning: FC<P> = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="11" cy="11" r="11" fill="#F18E0A"/>
    <path d="M11 6V12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="11" cy="15" r="1.14" fill="white"/>
  </svg>
);

export const AlertInfo: FC<P> = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="11" cy="11" r="11" fill="#24CBB7"/>
    <circle cx="11" cy="7" r="1.14" fill="white"/>
    <path d="M11 10.5V16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const CloseSmall: FC<P> = (props) => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0.5 0.5L7.5 7.5M7.5 0.5L0.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ResizeHandle: FC<P> = (props) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0.5 9.5L9.5 0.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4.3 9.5L9.5 4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8.1 9.4L9.6 7.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const More: FC<P> = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8Z" fill="currentColor"/>
    <path d="M4.5 8C4.5 8.82843 3.82843 9.5 3 9.5C2.17157 9.5 1.5 8.82843 1.5 8C1.5 7.17157 2.17157 6.5 3 6.5C3.82843 6.5 4.5 7.17157 4.5 8Z" fill="currentColor"/>
    <path d="M14.5 8C14.5 8.82843 13.8284 9.5 13 9.5C12.1716 9.5 11.5 8.82843 11.5 8C11.5 7.17157 12.1716 6.5 13 6.5C13.8284 6.5 14.5 7.17157 14.5 8Z" fill="currentColor"/>
  </svg>
);

export const CriteriaMinus: FC<P> = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 0.75C12.0302 0.75 15.25 3.96977 15.25 8C15.25 12.0302 12.0302 15.25 8 15.25C3.96977 15.25 0.75 12.0302 0.75 8C0.75 3.96977 3.96977 0.75 8 0.75Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M11 8H5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

export const CriteriaPlus: FC<P> = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 0.75C12.0302 0.75 15.25 3.96977 15.25 8C15.25 12.0302 12.0302 15.25 8 15.25C3.96977 15.25 0.75 12.0302 0.75 8C0.75 3.96977 3.96977 0.75 8 0.75Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 5V11" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M11 8H5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
  </svg>
);

export const HelpCircle: FC<P> = (props) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8 0.75C12.0041 0.75 15.25 3.99594 15.25 8C15.25 12.0041 12.0041 15.25 8 15.25C3.99594 15.25 0.75 12.0041 0.75 8C0.75 3.99594 3.99594 0.75 8 0.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <path d="M6 5.33532C6.16131 4.8901 6.47969 4.51467 6.89877 4.27553C7.31784 4.0364 7.81056 3.94898 8.28966 4.02877C8.76875 4.10856 9.2033 4.35041 9.51635 4.71147C9.82939 5.07254 10.0007 5.52952 10 6.00149C10 7.33383 7.94168 8 7.94168 8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
    <circle cx="8" cy="11" r="1" fill="currentColor"/>
  </svg>
);
