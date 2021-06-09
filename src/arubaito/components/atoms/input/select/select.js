import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import inputStyles from '../input.scss';
import styles from './select.scss';

/**
 * @visibleName Select
 *
**/
const Select = forwardRef(({ children, status, moduleClassName, small, className, ...otherProps}, ref) => {  
  const selectModuleClasses = cx(
    'inputStyles.input',
    'styles.select',
    {
      'inputStyles.disabled': otherProps.disabled,
      'inputStyles.error': status === 'error',
      'inputStyles.notification': status === 'notification',
      'inputStyles.success': status === 'success',
      'styles.small': small,
    }
  );

  return (
    <div className={cx('gdm-relative', className)} moduleClassName={moduleClassName} ref={ref}>
      <select {...otherProps} moduleClassName={selectModuleClasses}>
        {children}
      </select>
      <span moduleClassName='select-caret'/>
    </div>
  );
});

Select.propTypes = {
  /** Select options */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  /** Allow multiple selects */
  multiple: PropTypes.string,
  /** Number of visible select options at a time */
  size: PropTypes.string,
  /** Input Value */
  value: PropTypes.string,
  /** error, success */
  status: PropTypes.string,
  /** Small version of the input, used when rendered inside a table */
  small: PropTypes.bool,
  /** Change Callback */
  onChange: PropTypes.func.isRequired,
  /** class names are for utility classes */
  className: PropTypes.string,
  /** module class names are for component scoped css */
  moduleClassName: PropTypes.string,
};

/* @component */
export default Select;