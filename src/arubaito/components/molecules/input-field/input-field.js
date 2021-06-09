import React, { forwardRef } from 'react';
import cx from 'classnames'
import PropTypes from 'prop-types';
import InputText from 'components/atoms/input/input-text';
import Select from 'components/atoms/input/select';
import TextArea from 'components/atoms/input/text-area';
import AlertMessage from 'components/atoms/alert-message';
import _uniqueId from 'lodash/uniqueId';
import './input-field.scss';

/**
 * @visibleName InputField
 *
**/
const InputField = forwardRef(({
  className,
  moduleClassName,
  status,
  render,
  ...otherProps
}, ref) => {
  const id = _uniqueId('input-');
  const utilityClasses = cx('gdm-m-top-xs', className);
  const moduleClasses = cx('input-field-wrapper', moduleClassName);

  return (
    <div
      className={utilityClasses}
      moduleClassName={moduleClasses}
      ref={ref}
      {...otherProps}
      >
      {render(id, status)}
    </div>
  );
});

InputField.Label = forwardRef(({children, className, ...otherProps}, ref) => <label className={cx('gdm-label gdm-block', className)} ref={ref} {...otherProps}>{children}</label>)

InputField.Input = forwardRef(({className, ...otherProps}, ref) => <InputText className={cx('gdm-m-bottom-md', className)} ref={ref} {...otherProps}/>)

InputField.Select = forwardRef(({className, ...otherProps}, ref) => <Select className={cx('gdm-m-bottom-md', className)} ref={ref} {...otherProps}/>)

InputField.TextArea = forwardRef(({className, ...otherProps}, ref) => <TextArea className={cx('gdm-m-bottom-md', className)} ref={ref} {...otherProps}/>)

InputField.AlertMessage = forwardRef(({children, inline, moduleClassName, className, ...otherProps}, ref) => {
  if (!otherProps.status) return null;

  switch(otherProps.status) {
    case "notification":
      return (
        <span className={cx('gdm-block', className)} moduleClassName={cx('input-alert', {'inline': inline})} ref={ref} {...otherProps}>
          <span className='gdm-icon gdm-icon-sm gdm-icon-alert-error gdm-color-alert-notification'/>
          <span className='gdm-alert gdm-align-top gdm-m-left-xxs gdm-color-steel'>{children}</span>
        </span>
      )
    default:
      return <AlertMessage {...otherProps} ref={ref} moduleClassName={cx('input-alert', {'inline': inline})}>{children}</AlertMessage>
  }
});

InputField.propTypes = {
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string,
  /** Each status will render a different icon + styles */
  status: PropTypes.oneOf(['error', 'default', 'success', 'notification', '']),
  /** A function that returns markup */
  render: PropTypes.func.isRequired,
};

/* @component */
export default InputField;