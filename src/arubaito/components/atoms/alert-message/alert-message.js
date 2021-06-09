import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './alert-message.scss';

/**
 * @visibleName AlertMessage
 *
**/
const AlertMessage = forwardRef(({ className, moduleClassName, children, status, ...otherProps}, ref) => {
  const utilityClasses = cx('gdm-block', className);
  const moduleClasses = cx('alert-message-wrapper', moduleClassName);

  return (
    <span className={utilityClasses} moduleClassName={moduleClasses} ref={ref} {...otherProps}>
      <span className={`gdm-icon gdm-icon-sm gdm-icon-alert-${status}`}/>
      <span className={`gdm-alert gdm-align-top gdm-m-left-xxs`} moduleClassName={`color-${status}`}>{children}</span>
    </span>
  );
});

AlertMessage.propTypes = {
  /** status  */
  status: PropTypes.oneOf([
    'error',
    'success',
    'notification'
  ]).isRequired,
  /** Text that will be displayed */
  children: PropTypes.string,
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string
};

/* @component */
export default AlertMessage;