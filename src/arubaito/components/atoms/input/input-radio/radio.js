import React, { useState, Fragment, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {
  COLOR_BACKGROUND_ICON_RADIO_SELECTED,
  COLOR_BACKGROUND_ICON_RADIO_DISABLED,
  SIZE_BORDER_RADIO
} from '@tokens/variables.js';
import RadioContext, { useRadioGroup } from './radio-context';
import './radio.scss';


const Radio = ({children}) => <Fragment>{children}</Fragment>;

const RadioGroup = forwardRef(({children, value, onChange, name, ...otherProps}, ref) => {
  const handleChange = (event) => onChange(event, name, event.target.value);

  return (
    <RadioContext.Provider value={{ onChange: handleChange, value }}>
      <div ref={ref} {...otherProps}>
        {children}
      </div>
    </RadioContext.Provider>
  );
});

/**
 * @visibleName RadioButton
 *
**/
const RadioButton = forwardRef(({
  iconColor = COLOR_BACKGROUND_ICON_RADIO_SELECTED,
  moduleClassName,
  checked,
  onChange: onChangeProp,
  value,
  disabled,
  name,
  style,
  ...otherProps
}, ref) => {  
  const radioGroup = useRadioGroup();
  const [focus, setFocus] = useState(false);

  const moduleClasses = cx(
    'radio-wrapper',
    moduleClassName,
    {
      'disabled': disabled
    }
  );
  
  const wrapperStyles = {
    'border': `${SIZE_BORDER_RADIO} solid ${ focus ? iconColor : 'transparent'}`
  };

  const iconStyles = {
    'color': disabled ? COLOR_BACKGROUND_ICON_RADIO_DISABLED : iconColor
  };

  if (typeof checked === 'undefined' && radioGroup) {
    checked = radioGroup.value === value;
  }

  const handleFocus = (e) => setFocus(true);

  const handleBlur = () => setFocus(false);

  const handleMouseLeave = (e) => e.target.blur();

  const onChange = (e) => {
    if (radioGroup) {
      radioGroup.onChange(e);
    } else {
      onChangeProp(e);
    }
  };

  return (
    <span moduleClassName={moduleClasses} ref={ref} {...otherProps} style={wrapperStyles}>
      <input
        moduleClassName='radio'
        type='radio'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        value={value}
        name={name}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseLeave={handleMouseLeave}
      />
      <div moduleClassName='radio-icon-wrapper'>
        {
          checked
          ? <span className='gdm-icon gdm-icon-radio-selected' moduleClassName='radio-icon' style={iconStyles}/>
          : <span className='gdm-icon gdm-icon-radio' moduleClassName='radio-icon'/>
        }
      </div>
    </span>
  );
});

Radio.Button = RadioButton;
Radio.Group = RadioGroup;

const RadioButtonPropTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  /** Color for checked icon and focus outline */
  iconColor: PropTypes.string,
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string,
};

const RadioGroupPropTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string
 };

Radio.propTypes = {
  Button: PropTypes.shape(RadioButtonPropTypes),
  Group: PropTypes.shape(RadioGroupPropTypes)
 };
 
Radio.Group.propTypes = {
  ...RadioGroup.propTypes,
 };

/* @component */
export default Radio;