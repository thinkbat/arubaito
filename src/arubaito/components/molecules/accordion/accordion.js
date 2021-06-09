import React, { createContext, useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import "./accordion.scss";

const Store = createContext();

/**
 * @visibleName Accordion
**/

const Accordion = forwardRef(({ moduleClassName, isOpen, style = 'default', children, ...otherProps }, ref) => (
  <Store.Provider value={{ isOpen, style }}>
    <div
      moduleClassName={cx(
        'accordion',
        moduleClassName,
        {
          'table': style === 'table',
          'open': isOpen
        }
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  </Store.Provider>
));

const Header = forwardRef(({ children, moduleClassName, ...otherProps }, ref) => (
  <div
    moduleClassName={cx('accordion-header', moduleClassName)}
    ref={ref}
    {...otherProps}
  >
    {children}
  </div>
));

const ToggleButton = forwardRef(({ children, className, onClick, ...otherProps }, ref) => {
  const { style } = useContext(Store);
  const tableStyle = style === 'table';
  return (
    <button moduleClassName='caret-btn' className={cx('gdm-btn-override gdm-align-middle', className)} onClick={onClick} ref={ref} {...otherProps}>
      <span moduleClassName={cx('accordion-icon', { 'accordion-icon-hide': !onClick })} className={cx('gdm-icon gdm-icon-caret gdm-align-middle', {'gdm-icon-sm': !tableStyle, 'gdm-icon-xs': tableStyle})}/>
      <span className={cx('gdm-align-middle gdm-inline-block gdm-m-none', {'gdm-paragraph-sm': tableStyle, 'gdm-heading-lg': !tableStyle})}>{children}</span>
    </button>
  );
});

const Summary = forwardRef(({ children, moduleClassName, className, ...otherProps }, ref) => (
  <span 
    moduleClassName={cx('accordion-summary', moduleClassName)}
    className={cx('gdm-paragraph-sm', className)}
    ref={ref}
    {...otherProps}
  >
    {children}
  </span>
));

const Content = forwardRef(({ children, moduleClassName, ...otherProps }, ref) => {
  const { isOpen } = useContext(Store);
  if (!isOpen) return null;
  return (
    <div
      moduleClassName={cx('accordion-content', moduleClassName)}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  );
});

Accordion.ToggleButton = ToggleButton;
Accordion.Header = Header;
Accordion.Summary = Summary;
Accordion.Content = Content;

Accordion.propTypes = {
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string,
  isOpen: PropTypes.bool,
  style: PropTypes.oneOf(['default', 'table'])
};

export default Accordion;
