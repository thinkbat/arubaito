import React, { useState, forwardRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  COLOR_BACKGROUND_ICON_CHECKBOX_SELECTED,
  COLOR_BACKGROUND_ICON_CHECKBOX_DISABLED,
  SIZE_BORDER_CHECKBOX
 } from '@tokens/variables.js';
import './checkbox.scss';

/**
 * @visibleName Checkbox
 *
**/
const Checkbox = forwardRef(({ iconColor = COLOR_BACKGROUND_ICON_CHECKBOX_SELECTED, moduleClassName, checked = false, onChange, value, name, disabled, onClick, style, inputId, ...otherProps}, ref) => {  
  const [focus, setFocus] = useState(false);

  const moduleClasses = cx(
    'checkbox-wrapper',
    moduleClassName,
    {
      'disabled': disabled
    }
  );

  const wrapperStyles = {
    'border': `${SIZE_BORDER_CHECKBOX} solid ${ focus ? iconColor : 'transparent'}`
  };

  const iconStyles = {
    'color': disabled ? COLOR_BACKGROUND_ICON_CHECKBOX_DISABLED : iconColor
  }

  const handleFocus = () => setFocus(true);

  const handleBlur = () => setFocus(false);

  const handleMouseLeave = (e) => e.target.blur();
  
  return (
    <span moduleClassName={moduleClasses} ref={ref} {...otherProps} style={wrapperStyles}>
      <input
        moduleClassName='checkbox'
        type='checkbox'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}
        name={name}
        id={inputId}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseLeave={handleMouseLeave}
      />
      <div moduleClassName='checkbox-icon-wrapper'>
        {
          checked
          ? <span className='gdm-icon gdm-icon-checkbox-selected' moduleClassName='checkbox-icon' style={iconStyles}/>
          : <span className='gdm-icon gdm-icon-checkbox' moduleClassName='checkbox-icon'/>
        }
      </div>
    </span>
  );
});

Checkbox.propTypes = {
  name: PropTypes.string,
  inputId: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  /** Color for checked icon and focus outline */
  iconColor: PropTypes.string,
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string,
};

/* @component */
export default Checkbox;