import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './flash-message.scss';

/**
 * @visibleName FlashMessage
 *
**/
const FlashMessage = forwardRef(({ className, moduleClassName, children, status, ...otherProps}, ref) => {
  const utilityClasses = cx('gdm-block gdm-relative', className);
  const moduleClasses = cx(`flash-message-wrapper border-color-${status}`, moduleClassName);

  return (
    <div className={utilityClasses} moduleClassName={moduleClasses} ref={ref} {...otherProps}>
      <span className={`gdm-icon gdm-icon-sm gdm-icon-alert-${status}`}/>
      <span className='gdm-alert gdm-align-top gdm-m-left-xs'>{children}</span>
    </div>
  );
});

FlashMessage.propTypes = {
  /** FlashMessage status  */
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
export default FlashMessage;