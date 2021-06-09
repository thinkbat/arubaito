import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../input.scss';

/**
 * @visibleName TextArea
 *
**/
const TextArea = forwardRef(({ status, moduleClassName, ...otherProps}, ref) => {  
  const moduleClasses = cx(
    'input',
    moduleClassName,
    {
      'disabled': otherProps.disabled,
      'error': status === 'error',
      'notification': status === 'notification',
      'success': status === 'success',
    }
  );

  return (
    <textarea moduleClassName={moduleClasses} ref={ref} {...otherProps}/>
  );
});

TextArea.propTypes = {
  /** Text */
  value: PropTypes.string,
  /** Number of rows */
  row: PropTypes.string,
  /** error, success */
  status: PropTypes.string,
  /** Change Callback */
  onChange: PropTypes.func.isRequired,
  /** class names are for utility classes */
  className: PropTypes.string,
  /** module class names are for component scoped css */
  moduleClassName: PropTypes.string,
};

/* @component */
export default TextArea;