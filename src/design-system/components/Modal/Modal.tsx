import { useEffect, useCallback, useState, useRef, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { Button } from '../Button/Button';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface ModalProps {
  /** Controls visibility. */
  isOpen: boolean;

  /** Dialog title rendered in the header. */
  title: string;

  /**
   * Optional icon element shown to the left of the title.
   * Matches the Figma "Header Icon" boolean property.
   */
  headerIcon?: React.ReactNode;

  /** Called when the modal should close (backdrop click or Escape key). */
  onClose: () => void;

  /** Called when the cancel button is clicked (also calls onClose). */
  onCancel?: () => void;

  /** Called when the save / primary action button is clicked. */
  onSave?: () => void;

  /** Label for the secondary action button. @default "Cancel" */
  cancelLabel?: string;

  /** Label for the primary action button. @default "Save" */
  saveLabel?: string;

  /**
   * Optional content rendered below the form fields and above the footer —
   * typically a Checkbox with helper text (matches Figma Frame 875).
   */
  footerNote?: React.ReactNode;

  /** Form fields and content rendered in the body. */
  children?: React.ReactNode;

  /**
   * Total modal width in px.
   * @default 569
   */
  width?: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

export function Modal({
  isOpen,
  title,
  headerIcon,
  onClose,
  onCancel,
  onSave,
  cancelLabel = 'Cancel',
  saveLabel = 'Save',
  footerNote,
  children,
  width = 569,
}: ModalProps) {
  // isVisible stays true during the slide-up closing animation
  const [isVisible, setIsVisible] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
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
        const first = dialogRef.current?.querySelector<HTMLElement>(
          'input:not([disabled]):not([readonly]), textarea:not([disabled])'
        );
        first?.focus();
      }, 50);
      return () => clearTimeout(t);
    }
  }, [isVisible, isClosing]);

  // Close on Escape key
  useEffect(() => {
    if (!isVisible) return;
    const handler = (e: KeyboardEvent) => {
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
    <div className={styles.backdrop} aria-hidden="true">
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{ width }}
        data-closing={isClosing || undefined}
        onAnimationEnd={handleAnimationEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className={styles.header}>
          {headerIcon && (
            <span className={styles.headerIcon} aria-hidden="true">
              {headerIcon}
            </span>
          )}
          <h2 id="modal-title" className={styles.title}>
            {title}
          </h2>
        </div>

        {/* ── Body ─────────────────────────────────────────────────────── */}
        <div ref={bodyRef} className={styles.body}>
          {children}
        </div>

        {/* ── Footer area (note + buttons) ─────────────────────────────── */}
        <div className={styles.footerArea} data-shadow={isBodyScrollable || undefined}>
          {footerNote && (
            <div className={styles.footerNote}>
              {footerNote}
            </div>
          )}
          <div className={styles.footer}>
            <Button variant="default" onClick={handleCancel}>
              {cancelLabel}
            </Button>
            <Button variant="primary" onClick={onSave}>
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
