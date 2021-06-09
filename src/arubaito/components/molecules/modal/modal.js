import React, { useRef, useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import cx from 'classnames';
import { useSpring, animated } from 'react-spring';
import Backdrop from 'components/atoms/backdrop';

import './modal.scss';

// all the elements inside modal we want to make focusable
const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const TAB_KEYCODE = 9;
const ESC_KEYCODE = 27;

/**
 * @visibleName Modal
 *
**/

const Modal = forwardRef(({
  moduleClassName, children, open = true, closeOnBackdropClick = true, size = 'medium', onClose, onClosed, ...otherProps
}, ref) => {
  const [isOpen, setIsOpen] = useState(open);
  const [isHidden, setIsHidden] = useState(!open);
  const modalRef = ref || useRef();

  const handleBackdropOnClick = () => {
    if (closeOnBackdropClick) handleClose();
  };

  const handleOnRest = () => {
    if (!isOpen && !isHidden) {
      if (onClosed) onClosed();
      setIsHidden(true);
    };
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    if (open) setIsHidden(false);
    setIsOpen(open);
  }, [open]);

  const escListener = e => (e.keyCode === ESC_KEYCODE) && handleClose();

  const tabListener = (e) => {
    const focusableContent = modalRef.current.querySelectorAll(focusableElements);
    const firstFocusableElement = focusableContent[0]; // get first element to be focused inside modal
    const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

    if (!(e.key === 'Tab' || e.keyCode === TAB_KEYCODE)) return;

    if (e.shiftKey) { // shift + tab
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else { // tab
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current.focus(); // this is the invisible first step for trapping the focus inside the modal, focusing this element doesn't have any visual effects
      document.addEventListener('keydown', escListener);
      document.addEventListener('keydown', tabListener);
    } else {
      document.removeEventListener('keydown', escListener);
      document.removeEventListener('keydown', tabListener);
    }

    return () => {
      document.removeEventListener('keydown', escListener);
      document.removeEventListener('keydown', tabListener);
    };
  }, [isOpen]);

  const fromSlideTransform = isOpen ? 'translateY(10px)' : 'translateY(0px)';
  const toSlideTransform = isOpen ? 'translateY(0px)' : 'translateY(10px)';
  const fromFadeOpacity = isOpen ? 0 : 1;
  const toFadeOpacity = isOpen ? 1 : 0;

  const slide = useSpring({ from: { transform: fromSlideTransform }, to: { transform: toSlideTransform } });
  const fade = useSpring({ from: { opacity: fromFadeOpacity }, to: { opacity: toFadeOpacity }, onRest: handleOnRest });

  return createPortal(
    <animated.div
      ref={modalRef}
      tabIndex='0'
      style={fade}
      moduleClassName={cx(
        'modal',
        moduleClassName,
        {
          show: isOpen,
          hide: isHidden,
        },
      )}
      {...otherProps}
    >
      <Backdrop onClick={handleBackdropOnClick} />
      <animated.div
        style={slide}
        moduleClassName={cx(
          'modalContainer',
          {
            small: size === 'small',
            medium: size === 'medium',
            large: size === 'large',
          },
        )}
      >
        {children(handleClose)}
      </animated.div>
    </animated.div>,
    document.body,
  );
});

const ModalHeader = forwardRef(({ children, moduleClassName, ...otherProps }, ref) => (
  <div moduleClassName={cx('modalHeader', moduleClassName)} ref={ref} {...otherProps}>
    {children}
  </div>
));

const ModalBody = forwardRef(({ children, moduleClassName, ...otherProps }, ref) => (
  <div moduleClassName={cx('modalBody', moduleClassName)} ref={ref} {...otherProps}>
    {children}
  </div>
));

const ModalFooter = forwardRef(({ children, moduleClassName, ...otherProps }, ref) => (
  <div moduleClassName={cx('modalFooter', moduleClassName)} ref={ref} {...otherProps}>
    {children}
  </div>
));

const ModalClose = forwardRef(({ children = 'Close', moduleClassName, className, ...otherProps }, ref) => (
  <button type="button" moduleClassName={cx('modalClose', moduleClassName)} className={cx('gdm-btn-override', className)} ref={ref} {...otherProps}>
    <span className="gdm-heading-sm" moduleClassName="modalCloseCopy">{children}</span>
    <span className="gdm-icon gdm-icon-md gdm-icon-close gdm-align-middle" />
  </button>
));

Modal.Close = ModalClose;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

Modal.propTypes = {
  open: PropTypes.bool,
  closeOnBackdropClick: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClose: PropTypes.func,
  onClosed: PropTypes.func,
  /** for utility classes */
  className: PropTypes.string,
  /** for component scoped css */
  moduleClassName: PropTypes.string
};

/* @component */
export default Modal;
