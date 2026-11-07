import './Stepper.css';

/* ─────────────────────────────────────────────────────────────────────────────
   Stepper — chevron breadcrumb-style progress stepper
   Figma: Chinnaiya-Style-Sheet node 93672-150667

   Props:
     variant     — 'multi' | 'single'  (default 'multi')
     steps       — string[] or { label, state? }[]
     currentStep — 0-based active step index (used when steps don't have states)

   States: 'completed' | 'active' | 'pending'
   ─────────────────────────────────────────────────────────────────────────────── */

const MULTI_COLORS = {
  completed: { bg: '#F1FFF4', border: '#89D69C' },
  active:    { bg: '#FFFAF2', border: '#F7A973' },
  pending:   { bg: '#F2F3FA', border: null },
};

const SINGLE_COLORS = {
  completed: { bg: '#E9EBFE', border: '#5464F2' },
  active:    { bg: '#E9EBFE', border: '#5464F2' },
  pending:   { bg: '#F2F3FA', border: null },
};

/* Head/tail connector shapes — traced from Figma (Pascal Stone, node 80436:427906).
   Per step: [head][body][tail]. The head (notched) attaches to the body's left
   edge and overlaps the previous step's tail; the tail (pointed) attaches flush
   to the body's right edge. Each piece has a fill path and an open stroke path
   that skips the flat edge joined to the body, so no vertical seam is drawn. */
const HEAD_FILL = 'M11 30H0.05C0.01 30 -0.015 29.92 0.01 29.89L9.54 15L0.01 0.075C-0.01 0.04 0.01 0 0.05 0H11V30Z';
const HEAD_STROKE = 'M11 0.5H0.6C0.4 0.5 0.3 0.6 0.4 0.75L9 15L0.4 29.25C0.3 29.4 0.4 29.5 0.6 29.5H11';
const TAIL_FILL = 'M2 0H3.489C5.132 0 6.666 0.835 7.587 2.234L16 15L7.587 27.766C6.666 29.16 5.132 30 3.489 30H2Q0 30 0 28V2Q0 0 2 0Z';
const TAIL_STROKE = 'M2 0.5H3.489C5.1 0.5 6.4 1.2 7.3 2.5L15.3 15L7.3 27.5C6.4 28.8 5.1 29.5 3.489 29.5H2Q0.5 29.5 0.5 28';

function Connector({ type, fill, stroke }) {
  const isHead = type === 'head';
  return (
    <svg
      className={`stp-connector stp-connector-${type}`}
      width={isHead ? 11 : 16}
      height={30}
      viewBox={isHead ? '0 0 11 30' : '0 0 16 30'}
      preserveAspectRatio="none"
    >
      <path d={isHead ? HEAD_FILL : TAIL_FILL} fill={fill} />
      {stroke && (
        <path d={isHead ? HEAD_STROKE : TAIL_STROKE} fill="none" stroke={stroke} strokeWidth={1} />
      )}
    </svg>
  );
}

function MultiIcon({ state }) {
  if (state === 'completed') {
    return (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.5" cy="7.5" r="7.5" fill="#12AA67" />
        <path d="M4.5 8.2L6 9.8L10.6 5.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="4" cy="4" r="4" fill={state === 'active' ? '#F9C6A1' : '#CCCEDF'} />
    </svg>
  );
}

function SingleIcon({ number, state }) {
  if (state === 'pending') {
    return (
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="16" height="16" rx="8" fill="#FFFFFF" stroke="#DCDBEE" />
        <text x="8.5" y="12.5" textAnchor="middle" fontSize="10" fill="#313949">
          {number}
        </text>
      </svg>
    );
  }
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="17" height="17" rx="8.5" fill="#5464F2" />
      <text x="8.5" y="12.5" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">
        {number}
      </text>
    </svg>
  );
}

function deriveSteps(steps, currentStep) {
  return steps.map((step, i) => {
    const label = typeof step === 'string' ? step : step.label;
    let state;
    if (typeof step === 'object' && step.state) {
      state = step.state;
    } else if (currentStep !== undefined) {
      state = i < currentStep ? 'completed' : i === currentStep ? 'active' : 'pending';
    } else {
      state = 'pending';
    }
    return { label, state, number: i + 1 };
  });
}

export function Stepper({ variant = 'multi', steps = [], currentStep }) {
  const normalized = deriveSteps(steps, currentStep);
  const colorMap = variant === 'single' ? SINGLE_COLORS : MULTI_COLORS;

  return (
    <div className="stp-root">
      {normalized.map((step, i) => {
        const isFirst = i === 0;
        const isLast = i === normalized.length - 1;
        const { bg, border } = colorMap[step.state];

        const edge = border ? `1px solid ${border}` : 'none';
        const bodyStyle = {
          background: bg,
          borderTop: edge,
          borderBottom: edge,
          borderLeft: isFirst ? edge : 'none',
          borderRight: isLast ? edge : 'none',
          borderRadius: isFirst && isLast ? '6px' : isFirst ? '6px 0 0 6px' : isLast ? '0 6px 6px 0' : 0,
        };

        return (
          <div className="stp-step-group" key={i}>
            {!isFirst && <Connector type="head" fill={bg} stroke={border} />}
            <div className="stp-inner" style={bodyStyle}>
              <span className="stp-icon-wrap">
                {variant === 'multi'
                  ? <MultiIcon state={step.state} />
                  : <SingleIcon number={step.number} state={step.state} />
                }
              </span>
              <span className={`stp-label${step.state === 'active' ? ' stp-label-active' : ''}`}>
                {step.label}
              </span>
            </div>
            {!isLast && <Connector type="tail" fill={bg} stroke={border} />}
          </div>
        );
      })}
    </div>
  );
}

export default Stepper;
