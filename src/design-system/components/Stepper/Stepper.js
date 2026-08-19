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
  pending:   { bg: '#F2F3FA', border: '#DCDBEE' },
};

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
        <rect x="0.5" y="0.5" width="16" height="16" rx="8" fill="none" stroke="#DCDBEE" />
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
        const hasBorder = !!border;

        // Always pad 1.5px so all steps share the same height.
        // For no-border states, outer bg === inner bg → no visible border.
        const outerStyle = {
          background: hasBorder ? border : bg,
          '--stp-bg': bg,
          zIndex: i + 1,
          padding: '1.5px',
        };

        return (
          <div
            key={i}
            className={`stp-step${isFirst ? ' stp-first' : ''}${isLast ? ' stp-last' : ''}`}
            style={outerStyle}
          >
            <div
              className="stp-inner"
              style={isFirst ? { borderRadius: '4px 0 0 4px' } : undefined}
            >
              <span className="stp-icon-wrap">
                {variant === 'multi'
                  ? <MultiIcon state={step.state} />
                  : <SingleIcon number={step.number} state={step.state} />
                }
              </span>
              <span className={`stp-label${step.state === 'active' ? ' stp-label-bold' : ''}`}>
                {step.label}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stepper;
