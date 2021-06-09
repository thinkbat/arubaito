import React, { cloneElement, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

/**
 * @visibleName Button
 *
**/
const Button = forwardRef(({
  children,
  moduleClassName,
  variant,
  small,
  component,
  ...otherProps
}, ref) => {
  const moduleClasses = classNames(
    'button',
    moduleClassName,
    {
      'primary': variant === 'primary',
      'secondary': variant === 'secondary',
      'tertiary': variant === 'tertiary',
      'quarternary': variant === 'quarternary',
      'small': small,
      'disabled': otherProps.disabled,
    }
  );

  if (component) return <ButtonClone component={component} moduleClassName={moduleClasses} ref={ref} {...otherProps}/>;
  
  return (
    <button
      moduleClassName={moduleClasses}
      ref={ref}
      {...otherProps}
    >
      {children}
    </button>
  );
});

const ButtonClone = forwardRef(({ component, ...otherProps }, ref) => cloneElement( component, {...otherProps, ref} ));

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  /** Different button styles */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quarternary']),
  /** Different button types */
  type: PropTypes.string,
  /** Callback */
  onClick: PropTypes.func,
  /** Disabled */
  disabled: PropTypes.bool,
  /** Small version of the button */
  small: PropTypes.bool,
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string,
};

export default Button;