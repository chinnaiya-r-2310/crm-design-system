import { useEffect, useCallback, useState, useRef, useLayoutEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
import { Button } from '../Button/Button';
import {
  CrmAlertSuccess,
  CrmAlertInfo,
  CrmAlertWarning,
  CrmAlertError,
  CrmAlertStop,
} from '../../foundations/icons/Icons';

const ALERT_ICONS = {
  success: CrmAlertSuccess,
  info:    CrmAlertInfo,
  warning: CrmAlertWarning,
  error:   CrmAlertError,
  denial:  CrmAlertStop,
};

// success, info, denial show a single "Ok, Got it" button — no Cancel
const SINGLE_BTN_VARIANTS = new Set(['success', 'info', 'denial']);
let scrollLockCount = 0;
let previousBodyOverflow = '';

function alertConfirmVariant(variant) {
  return variant === 'error' ? 'negative' : 'primary';
}

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
  disableAutoFocus = false,
  // Alert-specific props
  type = 'modal',
  variant = 'info',
  confirmLabel,
  className = '',
  headerActions,
  headerStart,
  footerStart,
}) {
  // isVisible stays true during the slide-up closing animation
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const titleId = useId();
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
    if (isVisible && !isClosing && !disableAutoFocus) {
      const t = setTimeout(() => {
        const first = dialogRef.current?.querySelector(
          'input[type="text"]:not([disabled]):not([readonly]):not(.tags-input):not(.dropdown-search-input), input[type="email"]:not([disabled]), input[type="tel"]:not([disabled]), input[type="number"]:not([disabled]), input[type="search"]:not([disabled]), input:not([type]):not([disabled]):not([readonly]):not(.tags-input), textarea:not([disabled])'
        );
        first?.focus();
      }, 50);
      return () => clearTimeout(t);
    }
  }, [isVisible, isClosing]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close on Escape key
  useEffect(() => {
    if (!isVisible) return;
    const handler = (e) => {
      const dialogs = document.querySelectorAll('.modal-dialog');
      if (e.key === 'Escape' && dialogs[dialogs.length - 1] === dialogRef.current) onClose();
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
    if (!isVisible) return;
    if (scrollLockCount === 0) previousBodyOverflow = document.body.style.overflow;
    scrollLockCount += 1;
    document.body.style.overflow = 'hidden';
    return () => {
      scrollLockCount -= 1;
      if (scrollLockCount === 0) document.body.style.overflow = previousBodyOverflow;
    };
  }, [isVisible]);

  if (!isVisible) return null;

  // ── Alert modal ────────────────────────────────────────────────────────────
  if (type === 'alert') {
    const IconComp = ALERT_ICONS[variant];
    const btnVariant = alertConfirmVariant(variant);
    const singleBtn = SINGLE_BTN_VARIANTS.has(variant);
    const actionLabel = confirmLabel ?? (singleBtn ? 'Ok, Got it' : saveLabel);

    return createPortal(
      <div className='modal-backdrop'>
        <div
          ref={dialogRef}
          className='modal-dialog'
          role="alertdialog"
          aria-modal="true"
          aria-labelledby={titleId}
          style={{ width }}
          data-closing={isClosing || undefined}
          onAnimationEnd={handleAnimationEnd}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-alert-content" data-heading-only={!description || undefined}>
            <div className="modal-header-title-row">
              {IconComp && (
                <span className="modal-header-icon" aria-hidden="true">
                  <IconComp width={25} height={25} />
                </span>
              )}
              <h2 id={titleId} className="modal-title">{title}</h2>
            </div>
            {description && <div className="modal-description">{description}</div>}
          </div>
          <div className="modal-footer">
            {!singleBtn && (
              <Button variant="default" onClick={handleCancel}>{cancelLabel}</Button>
            )}
            <Button variant={btnVariant} onClick={onSave} loading={saveLoading}>
              {actionLabel}
            </Button>
          </div>
        </div>
      </div>,
      document.body
    );
  }

  return createPortal(
    <div className='modal-backdrop'>
      <div
        ref={dialogRef}
        className={`modal-dialog${className ? ` ${className}` : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={{ width }}
        data-closing={isClosing || undefined}
        onAnimationEnd={handleAnimationEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className='modal-header'>
          <div className='modal-header-title-row'>
            {headerStart}
            {headerIcon && (
              <span className='modal-header-icon' aria-hidden="true">
                {headerIcon}
              </span>
            )}
            <h2 id={titleId} className='modal-title'>
              {title}
            </h2>
            {headerActions}
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
            {footerStart && <div className="modal-footer-start">{footerStart}</div>}
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
