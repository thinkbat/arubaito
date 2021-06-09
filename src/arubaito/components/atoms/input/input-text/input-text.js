import React, { cloneElement, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../input.scss';

/**
 * @visibleName InputText
 *
**/
const InputText = forwardRef(({ status, moduleClassName, small, type = 'text', component, ...otherProps}, ref) => {  
  const moduleClasses = cx(
    'input',
    moduleClassName,
    {
      'disabled': otherProps.disabled,
      'error': status === 'error',
      'notification': status === 'notification',
      'success': status === 'success',
      'small': small,
    }
  );
  
  if (component) return <InputClone component={component} moduleClassName={moduleClasses} type={type} {...otherProps}/>;

  return <input ref={ref} moduleClassName={moduleClasses} type={type} {...otherProps}/>;
});

const InputClone = forwardRef(({ component, ...otherProps }, ref) => cloneElement( component, {...otherProps, ref} ));

InputText.propTypes = {
  /** This component will be extended with the design system styles and functionality */
  component: PropTypes.node,
  /** Input name */
  name: PropTypes.string.isRequired,
  /** Input Value */
  value: PropTypes.string,
  /** error, success */
  status: PropTypes.string,
  /** Small version of the input, used when rendered inside a table */
  small: PropTypes.bool,
  /** Change Callback */
  onChange: PropTypes.func,
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string,
};

/* @component */
export default InputText;