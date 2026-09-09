import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  RtBold, RtItalic, RtUnderline, RtStrikethrough,
  RtSubscript, RtSuperscript,
  RtFontColor, RtBgColor,
  RtAlignLeft, RtAlignCenter, RtAlignRight, RtAlignJustify,
  RtBulletList, RtIndentRight, RtIndentLeft, RtLineHeight,
  RtImage, RtUnlink, RtTable, RtEvenHeight,
  RtBlockquote, RtCode, RtSpellCheck, RtQuote, RtChecklist,
  RtCopyright, RtClearFormat, RtExpand,
  RtEmoji, More, Check, Close, ResizeHandle, ChevronDownFilled,
} from '../../foundations/icons/Icons';
import { Tooltip } from '../Tooltip/Tooltip';
import './RichTextEditor.css';

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const ALIGN_OPTIONS = [
  { value: 'left',   icon: RtAlignLeft,    label: 'Align Left',    cmd: 'justifyLeft'   },
  { value: 'center', icon: RtAlignCenter,  label: 'Align Center',  cmd: 'justifyCenter' },
  { value: 'right',  icon: RtAlignRight,   label: 'Align Right',   cmd: 'justifyRight'  },
  { value: 'full',   icon: RtAlignJustify, label: 'Justify',       cmd: 'justifyFull'   },
];

const FONT_SIZE_OPTIONS = [
  { label: '10', size: '1' },
  { label: '13', size: '2' },
  { label: '16', size: '3' },
  { label: '18', size: '4' },
  { label: '24', size: '5' },
  { label: '32', size: '6' },
  { label: '48', size: '7' },
];

const FONT_SIZE_LABEL = { '1': '10', '2': '13', '3': '16', '4': '18', '5': '24', '6': '32', '7': '48' };

const LINE_HEIGHT_OPTIONS = ['1', '1.15', '1.5', '2', '2.5', '3'];

const SCRIPT_OPTIONS = [
  { icon: RtSuperscript, label: 'Superscript', cmd: 'superscript' },
  { icon: RtSubscript,   label: 'Subscript',   cmd: 'subscript'   },
];

const INDENT_OPTIONS = [
  { icon: RtIndentRight, label: 'Increase Indent', cmd: 'indent'  },
  { icon: RtIndentLeft,  label: 'Decrease Indent', cmd: 'outdent' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Toolbar primitives
// ─────────────────────────────────────────────────────────────────────────────

function TbBtn({ label, active, onClick, children, disabled: btnDisabled }) {
  const btn = (
    <button
      type="button"
      className={`rte-tb-btn${active ? ' rte-tb-btn--active' : ''}`}
      disabled={btnDisabled}
      onClick={onClick}
      onMouseDown={e => e.preventDefault()}
      aria-pressed={active}
    >
      {children}
    </button>
  );
  return label ? <Tooltip content={label} placement="bottom">{btn}</Tooltip> : btn;
}

function TbSep() {
  return <span className="rte-tb-sep" aria-hidden="true" />;
}

// ─────────────────────────────────────────────────────────────────────────────
// Dropdown
// ─────────────────────────────────────────────────────────────────────────────

function TbDd({ label, triggerContent, panelClass, children }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  function handleMouseDown(e) {
    e.preventDefault();
    if (!open && btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setPos({ top: r.bottom + 2, left: r.left });
    }
    setOpen(v => !v);
  }

  useEffect(() => {
    if (!open) return;
    function away(e) {
      if (!btnRef.current?.contains(e.target) && !panelRef.current?.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', away);
    return () => document.removeEventListener('mousedown', away);
  }, [open]);

  const btn = (
    <button
      ref={btnRef}
      type="button"
      className={`rte-tb-btn rte-tb-btn--arrow${open ? ' rte-tb-btn--open' : ''}`}
      onMouseDown={handleMouseDown}
    >
      {triggerContent}
      <span className="rte-tb-chevron">
        <ChevronDownFilled width={5} height={5} />
      </span>
    </button>
  );

  return (
    <>
      {label ? <Tooltip content={label} placement="bottom">{btn}</Tooltip> : btn}
      {open && createPortal(
        <div
          ref={panelRef}
          className={`rte-dd-panel${panelClass ? ` ${panelClass}` : ''}`}
          style={{ position: 'fixed', top: pos.top, left: pos.left }}
          onMouseDown={e => e.preventDefault()}
          onClick={() => setOpen(false)}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  );
}

function TbDdItem({ icon: Icon, label, active, onClick }) {
  return (
    <button
      type="button"
      className={`rte-dd-item${active ? ' rte-dd-item--active' : ''}`}
      onClick={onClick}
    >
      {Icon && <Icon width={16} height={16} />}
      <span>{label}</span>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function RichTextEditor({
  placeholder = 'Enter text',
  disabled = false,
  label,
  required,
  error,
  helperText,
  onSave,
  onCancel,
  minHeight = 83,
  onChange,
  width = 500,
  forceState,
}) {
  const [focused, setFocused] = useState(false);
  const [fontSize, setFontSize] = useState('16');
  const [lineHeight, setLineHeight] = useState('1.5');
  const [align, setAlign] = useState('left');
  const [activeFormats, setActiveFormats] = useState(new Set());
  const editorRef = useRef(null);

  const AlignIcon = ALIGN_OPTIONS.find(a => a.value === align)?.icon ?? RtAlignLeft;
  const showToolbar = focused && !disabled;

  const exec = useCallback((cmd, val = null) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, val);
    updateFormats();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const updateFormats = useCallback(() => {
    const active = new Set();
    ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript'].forEach(cmd => {
      if (document.queryCommandState(cmd)) active.add(cmd);
    });
    const alignVal = document.queryCommandValue('justifyLeft') === 'true' ? 'left'
      : document.queryCommandValue('justifyCenter') === 'true' ? 'center'
      : document.queryCommandValue('justifyRight') === 'true' ? 'right'
      : document.queryCommandValue('justifyFull') === 'true' ? 'full'
      : 'left';
    const fsRaw = document.queryCommandValue('fontSize');
    if (fsRaw && FONT_SIZE_LABEL[fsRaw]) setFontSize(FONT_SIZE_LABEL[fsRaw]);
    setActiveFormats(active);
    setAlign(alignVal);
  }, []);

  const handleFocus = () => setFocused(true);
  const handleBlur = useCallback((e) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setFocused(false);
  }, []);

  return (
    <div className="rte-root" style={{ width: typeof width === 'number' ? `${width}px` : width }} onBlur={handleBlur}>
      {label && (
        <span className="rte-label">
          {label}{required && <span className="rte-required"> *</span>}
        </span>
      )}

      <div
        className={[
          'rte-field',
          focused ? 'rte-field--focused' : '',
          error ? 'rte-field--error' : '',
          disabled ? 'rte-field--disabled' : '',
        ].filter(Boolean).join(' ')}
        data-state={forceState || undefined}
      >

        <div className="rte-editor-wrap" style={{ minHeight: showToolbar ? minHeight : 32 }}>
          <div
            ref={editorRef}
            className="rte-editor"
            contentEditable={!disabled}
            suppressContentEditableWarning
            onFocus={handleFocus}
            onKeyUp={updateFormats}
            onMouseUp={updateFormats}
            data-placeholder={placeholder}
            style={{ lineHeight }}
          />
          {(onSave || onCancel) && (
            <div className="rte-ajax">
              {onSave && (
                <Tooltip content="Save" placement="bottom">
                  <button
                    type="button"
                    className="rte-ajax-btn rte-ajax-save"
                    onMouseDown={e => e.preventDefault()}
                    onClick={onSave}
                  >
                    <Check width={10} height={10} />
                  </button>
                </Tooltip>
              )}
              {onCancel && (
                <Tooltip content="Cancel" placement="bottom">
                  <button
                    type="button"
                    className="rte-ajax-btn rte-ajax-cancel"
                    onMouseDown={e => e.preventDefault()}
                    onClick={onCancel}
                  >
                    <Close width={8} height={8} />
                  </button>
                </Tooltip>
              )}
            </div>
          )}
          {!showToolbar && !disabled && (
            <span className="rte-resize">
              <ResizeHandle />
            </span>
          )}
        </div>

        {showToolbar && (
          <div className="rte-toolbar" onMouseDown={e => e.preventDefault()}>
            <div className="rte-tb-row">
              <TbBtn label="Bold" active={activeFormats.has('bold')} onClick={() => exec('bold')}>
                <RtBold width={16} height={16} />
              </TbBtn>
              <TbBtn label="Italic" active={activeFormats.has('italic')} onClick={() => exec('italic')}>
                <RtItalic width={16} height={16} />
              </TbBtn>
              <TbBtn label="Underline" active={activeFormats.has('underline')} onClick={() => exec('underline')}>
                <RtUnderline width={16} height={16} />
              </TbBtn>
              <TbBtn label="Strikethrough" active={activeFormats.has('strikeThrough')} onClick={() => exec('strikeThrough')}>
                <RtStrikethrough width={16} height={16} />
              </TbBtn>

              <TbDd label="Script" triggerContent={<RtSubscript width={16} height={16} />}>
                {SCRIPT_OPTIONS.map(opt => (
                  <TbDdItem
                    key={opt.cmd}
                    icon={opt.icon}
                    label={opt.label}
                    active={activeFormats.has(opt.cmd)}
                    onClick={() => exec(opt.cmd)}
                  />
                ))}
              </TbDd>

              <TbSep />

              <TbDd
                label="Font Size"
                triggerContent={<span className="rte-tb-fontsize-val">{fontSize}</span>}
                panelClass="rte-dd-panel--compact"
              >
                {FONT_SIZE_OPTIONS.map(opt => (
                  <TbDdItem
                    key={opt.size}
                    label={opt.label}
                    active={fontSize === opt.label}
                    onClick={() => { exec('fontSize', opt.size); setFontSize(opt.label); }}
                  />
                ))}
              </TbDd>

              <TbSep />

              <TbBtn label="Text Color" onClick={() => {}}>
                <RtFontColor width={16} height={16} />
              </TbBtn>
              <TbBtn label="Background Color" onClick={() => {}}>
                <RtBgColor width={16} height={16} />
              </TbBtn>

              <TbSep />

              <TbDd label="Text Align" triggerContent={<AlignIcon width={16} height={16} />}>
                {ALIGN_OPTIONS.map(opt => (
                  <TbDdItem
                    key={opt.value}
                    icon={opt.icon}
                    label={opt.label}
                    active={align === opt.value}
                    onClick={() => { exec(opt.cmd); setAlign(opt.value); }}
                  />
                ))}
              </TbDd>

              <TbBtn label="Bullets" onClick={() => exec('insertUnorderedList')}>
                <RtBulletList width={16} height={16} />
              </TbBtn>

              <TbDd label="Indent" triggerContent={<RtIndentRight width={16} height={16} />}>
                {INDENT_OPTIONS.map(opt => (
                  <TbDdItem
                    key={opt.cmd}
                    icon={opt.icon}
                    label={opt.label}
                    onClick={() => exec(opt.cmd)}
                  />
                ))}
              </TbDd>

              <TbDd
                label="Line Height"
                triggerContent={<RtLineHeight width={16} height={16} />}
                panelClass="rte-dd-panel--compact"
              >
                {LINE_HEIGHT_OPTIONS.map(lh => (
                  <TbDdItem
                    key={lh}
                    label={lh}
                    active={lineHeight === lh}
                    onClick={() => setLineHeight(lh)}
                  />
                ))}
              </TbDd>

              <TbSep />

              <TbBtn label="Insert Image" onClick={() => {}}>
                <RtImage width={16} height={16} />
              </TbBtn>
              <TbBtn label="Unlink" onClick={() => exec('unlink')}>
                <RtUnlink width={16} height={16} />
              </TbBtn>
              <TbBtn label="Insert Table" onClick={() => {}}>
                <RtTable width={16} height={16} />
              </TbBtn>
              <TbBtn label="Even Row Height" onClick={() => {}}>
                <RtEvenHeight width={16} height={16} />
              </TbBtn>
              <TbBtn label="Blockquote" onClick={() => {}}>
                <RtBlockquote width={16} height={16} />
              </TbBtn>
              <TbBtn label="Code" onClick={() => {}}>
                <RtCode width={16} height={16} />
              </TbBtn>
              <TbBtn label="Spell Check" onClick={() => {}}>
                <RtSpellCheck width={16} height={16} />
              </TbBtn>
              <TbBtn label="Quote" onClick={() => {}}>
                <RtQuote width={16} height={16} />
              </TbBtn>
              <TbBtn label="Check List" onClick={() => {}}>
                <RtChecklist width={16} height={16} />
              </TbBtn>

              <TbSep />

              <TbBtn label="Copyright" onClick={() => exec('insertText', '©')}>
                <RtCopyright width={16} height={16} />
              </TbBtn>
              <TbBtn label="Emoji" onClick={() => {}}>
                <RtEmoji width={16} height={16} />
              </TbBtn>

              <TbSep />

              <TbBtn label="Clear Formatting" onClick={() => exec('removeFormat')}>
                <RtClearFormat width={16} height={16} />
              </TbBtn>
              <TbBtn label="More" onClick={() => {}}>
                <More width={16} height={16} />
              </TbBtn>
            </div>

            <button
              type="button"
              className="rte-expand-btn"
              onMouseDown={e => e.preventDefault()}
              title="Expand"
            >
              <RtExpand width={12} height={12} />
            </button>
          </div>
        )}
      </div>

      {helperText && (
        <span className={`rte-helper${error ? ' rte-helper--error' : ''}`}>{helperText}</span>
      )}
    </div>
  );
}

export default RichTextEditor;
