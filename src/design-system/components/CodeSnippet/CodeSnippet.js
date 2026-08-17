import { useState, useCallback } from 'react';
import { Tooltip } from '../Tooltip';
import './CodeSnippet.css';

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5.75" y="1.75" width="8.5" height="8.5" rx="1.25" stroke="#313949" strokeWidth="1.5"/>
      <path d="M3.5 4.5H2.5C1.94772 4.5 1.5 4.94772 1.5 5.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H10.5C11.0523 14.5 11.5 14.0523 11.5 13.5V12.5" stroke="#313949" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8.5L6.5 12L13 5" stroke="#39C995" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CodeSnippet
   Props:
     code     — string to display and copy
     type     — 'single' | 'multi' | 'inline'  (default: 'single')
     onCopy   — callback(code) after copy
   ───────────────────────────────────────────────────────────────────────────── */
export function CodeSnippet({ code = '', type = 'single', onCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const el = document.createElement('textarea');
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    onCopy?.(code);
    setTimeout(() => setCopied(false), 2000);
  }, [code, onCopy]);

  return (
    <div className={`cs-root cs-${type}`}>
      <div className="cs-code-wrap">
        <code className="cs-code">{code}</code>
      </div>
      <Tooltip content={copied ? 'Copied!' : 'Copy to Clipboard'} placement="top">
        <button
          type="button"
          className={`cs-copy-btn${copied ? ' cs-copied' : ''}`}
          onClick={handleCopy}
          aria-label={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
      </Tooltip>
    </div>
  );
}

export default CodeSnippet;
