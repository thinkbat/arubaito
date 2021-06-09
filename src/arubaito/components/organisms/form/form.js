import React, { useState, useEffect, useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'; 
import AlertMessage from 'components/atoms/alert-message';
import LoadingOverlay from 'components/atoms/loading-overlay';
import './form.scss';

/**
 * @visibleName Form
 *
**/
const Form = forwardRef(({
  initialInputsData,
  className,
  moduleClassName,
  onSubmit,
  render,
  ...otherProps
}, ref) => {
  const [inputsData, setInputsData] = useState(initialInputsData);
  const [errors, setErrors] = useState({});
  const [formMessage, setFormMessage] = useState({status: '', msg: ''});
  const [invalidForm, setInvalidForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setInputsData(initialInputsData);
  }, [initialInputsData]);

  const handleChange = (event) => {
    if (!event) return;

    const { name, value } = event.target;
    setInputsData({
      ...inputsData,
      [name]: {
        ...inputsData[name],
        value
      }
    });

    if (errors[name] === 'error') {
      validateField(name, value);
    };
  };

  const handleSubmit = (e) => {
    if (formMessage.status.length > 0) {
      // if we are displaying a form error and hit submit again, we want to reset that error
      setFormMessage({status: '', msg: ''})
    }
    if (onSubmit) e.preventDefault();
    if (onSubmit && !isSubmitting && !invalidForm && validateAll()) {
      let submitData = {};
      Object.keys(inputsData).forEach((key) => submitData[key] = inputsData[key].value);
      onSubmit(submitData, setFormMessage, setIsSubmitting, handleReset);
    }
  };

  const handleBlur = () => {
    console.log('blur');
  };

  const handleReset = () => {
    const emptyFormState = {...initialInputsData};
    Object.keys(emptyFormState).forEach((key) => emptyFormState[key].value = '');
    setInputsData(emptyFormState);
    setErrors({});
  };

  const validate = (name, value) => {
    const validateSchema = inputsData[name].validate;
    if (!validateSchema) return true;
    return validateSchema(value);
  }

  const validateAll = () => {
    const invalidFields = {};
    Object.keys(inputsData).forEach((inputField) => {
      const isValid = validate(inputField, inputsData[inputField].value);
      if (!isValid) {
        invalidFields[inputField] = 'error';
      }
    });

    setErrors({...errors, ...invalidFields});

    return Object.keys(invalidFields).length === 0;
  };

  const validateField = (name, value) => {
    if (!inputsData[name].validate) return true;
    const isValid = validate(name, value);
    setErrors({...errors, [name]: isValid ? '' : 'error' });
    return isValid;
  };

  const anyFormErrors = useMemo(() => Object.keys(errors).some((inputField) => errors[inputField] === 'error'), [errors]);

  useEffect(() => {
    // change the form status whenever the anyFormErrors object is changed
    setInvalidForm(anyFormErrors)
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit}
      className={cx('gdm-relative gdm-inline-block', className)}
      moduleClassName={cx('form', moduleClassName)}
      ref={ref}
      {...otherProps}
    >
      {isSubmitting && <LoadingOverlay light/>}
      {render(handleSubmit, handleChange, handleBlur, handleReset, inputsData, errors, invalidForm, isSubmitting)}
      {formMessage.status && <AlertMessage status={formMessage.status} className='gdm-m-top-xxs gdm-m-left-xs'>{formMessage.msg}</AlertMessage>}
    </form>
  );
});

Form.propTypes = {
  /** Initial Data for all inputs */
  initialInputsData: PropTypes.objectOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    validation: PropTypes.func,
    statusMsg: PropTypes.string
  })).isRequired,
  /** A function that returns markup */
  render: PropTypes.func.isRequired,
  /** Submit function  */
  onSubmit: PropTypes.func.isRequired,
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string
};

/* @component */
export default Form;