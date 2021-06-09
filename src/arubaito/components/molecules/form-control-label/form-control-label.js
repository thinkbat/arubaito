import React, { cloneElement, forwardRef } from 'react';
import cx from 'classnames';
import './form-control-label.scss';

/**
 * @visibleName FormControlLabel
 *
**/
const FormControlLabel = forwardRef(({label, control, moduleClassName, className, disabled, ...otherProps}, ref) => {
  const controlProps = {
    ...control.props,
    disabled
  };

  return (
    <label moduleClassName={cx('label', moduleClassName, {'disabled': disabled})} className={cx('gdm-paragraph-sm', className)} ref={ref} {...otherProps}>
      {cloneElement(control, controlProps)}
      {label}
    </label>
  );
});

export default FormControlLabel;