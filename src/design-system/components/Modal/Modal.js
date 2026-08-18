import { useEffect, useCallback, useState, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import { Button } from '../Button/Button';

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Modal({
  isOpen,
  title,
  description,
  headerIcon,
  onClose,
  onCancel,
  onSave,
  saveLoading = false,
  cancelLabel = 'Cancel',
  saveLabel = 'Save',
  footerNote,
  children,
  width = 569,
}) {
  // isVisible stays true during the slide-up closing animation
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef(null);
  const bodyRef = useRef(null);
  const [isBodyScrollable, setIsBodyScrollable] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
    } else if (isVisible) {
      setIsClosing(true);
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAnimationEnd = useCallback(() => {
    if (isClosing) {
      setIsVisible(false);
      setIsClosing(false);
    }
  }, [isClosing]);

  const handleCancel = useCallback(() => {
    onCancel?.();
    onClose();
  }, [onCancel, onClose]);

  // Auto-focus the first editable form field when the modal opens
  useEffect(() => {
    if (isVisible && !isClosing) {
      const t = setTimeout(() => {
        const first = dialogRef.current?.querySelector(
          'input[type="text"]:not([disabled]):not([readonly]):not(.tags-input):not(.dropdown-search-input), input[type="email"]:not([disabled]), input[type="tel"]:not([disabled]), input[type="number"]:not([disabled]), input[type="search"]:not([disabled]), input:not([type]):not([disabled]):not([readonly]):not(.tags-input), textarea:not([disabled])'
        );
        first?.focus();
      }, 50);
      return () => clearTimeout(t);
    }
  }, [isVisible, isClosing]);

  // Close on Escape key
  useEffect(() => {
    if (!isVisible) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isVisible, onClose]);

  // Show footer shadow when there is content below the visible area.
  // Hides when the user scrolls to the bottom (the trailing 30px becomes visible).
  useEffect(() => {
    const el = bodyRef.current;
    if (!el || !isVisible) return;
    const check = () => setIsBodyScrollable(el.scrollHeight - el.scrollTop - el.clientHeight > 1);
    check();
    el.addEventListener('scroll', check, { passive: true });
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', check);
      ro.disconnect();
    };
  }, [isVisible]);

  useLayoutEffect(() => {
    const el = bodyRef.current;
    if (!el || !isVisible) return;
    setIsBodyScrollable(el.scrollHeight - el.scrollTop - el.clientHeight > 1);
  }, [children, isVisible]);

  // Prevent body scroll while modal is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isVisible]);

  if (!isVisible) return null;

  return createPortal(
    <div className='modal-backdrop' aria-hidden="true">
      <div
        ref={dialogRef}
        className='modal-dialog'
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{ width }}
        data-closing={isClosing || undefined}
        onAnimationEnd={handleAnimationEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className='modal-header'>
          <div className='modal-header-title-row'>
            {headerIcon && (
              <span className='modal-header-icon' aria-hidden="true">
                {headerIcon}
              </span>
            )}
            <h2 id="modal-title" className='modal-title'>
              {title}
            </h2>
          </div>
          {description && (
            <p className='modal-description'>{description}</p>
          )}
        </div>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <div ref={bodyRef} className='modal-body'>
          {children}
        </div>

        {/* ── Footer area (note + buttons) ─────────────────────────────── */}
        <div className='modal-footer-area' data-shadow={isBodyScrollable || undefined}>
          {footerNote && (
            <div className='modal-footer-note'>
              {footerNote}
            </div>
          )}
          <div className='modal-footer'>
            <Button variant="default" onClick={handleCancel}>
              {cancelLabel}
            </Button>
            <Button variant="primary" onClick={onSave} loading={saveLoading}>
              {saveLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
