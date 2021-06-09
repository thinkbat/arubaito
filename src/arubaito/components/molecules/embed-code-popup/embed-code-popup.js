import React, { useEffect, useRef, forwardRef } from 'react';
import cx from 'classnames'
import PropTypes from 'prop-types';
import './embed-code-popup.scss';

/**
 * @visibleName EmbedCodePopup
 *
**/
const EmbedCodePopup = forwardRef(({
  className,
  moduleClassName,
  children,
  onClose,
  position = 'center',
  ...otherProps
}, ref) => {
  const embedCodePopupRef = ref || useRef();

  const moduleClasses = cx(
    'embed-code-popup',
    moduleClassName,
    {
      'left': position === 'left',
      'center': position === 'center',
      'right': position === 'right',
    }
  );

  const handleClose = (e) => {
    const clickOutside = !embedCodePopupRef.current.contains(e.target);
    if (clickOutside) onClose();
  };

  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => window.removeEventListener('click', handleClose);
  }, []);

  return (
    <div
      moduleClassName={moduleClasses}
      className={className}
      id='embed-code-popup'
      ref={embedCodePopupRef}
      {...otherProps}
      >
      <button moduleClassName='buttonClose' className='gdm-btn-override' name='close' onClick={onClose}>
        <span moduleClassName='buttonCloseCopy' className='gdm-heading-sm gdm-color-steel'>Close</span>
        <i className='gdm-icon gdm-icon-sm gdm-icon-close gdm-align-middle'/>
      </button>
      {children}
    </div>
  );
});

const CodeSnippet = forwardRef(({ moduleClassName, children, ...otherProps }, ref) => (
  <code moduleClassName={cx('code-snippet', moduleClassName)} ref={ref} {...otherProps}>
    {children}
  </code>
));

EmbedCodePopup.CodeSnippet = CodeSnippet;

EmbedCodePopup.propTypes = {
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string,
};

/* @component */
export default EmbedCodePopup;