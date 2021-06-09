import React from 'react';
import { shallow, mount } from 'enzyme';
import InputField from 'components/molecules/input-field';
import Button from 'components/atoms/button';
import Form from './form';
import LoadingOverlay from 'components/atoms/loading-overlay';

const props = {
  initialInputsData: {
    firstname: {
      value: 'Max',
      validate: value => value.length > 0,
      statusMsg: "First Name can't be empty.",
    },
    password: {
      value: '',
      validate: value => value.length >= 6,
      statusMsg: "Password must be at least 6 characters long."
    }
  },
  onSubmit: (submitArgs, setFormMessage, setIsSubmitting, handleReset) => {
    handleReset();
    setFormMessage({status: 'success', msg: 'you did it!'});
  },
  render: (handleSubmit, handleChange, handleBlur, handleReset, inputsData, errors, invalidForm, isSubmitting) => (
    <React.Fragment>
      <InputField
        status={errors['firstname']}
        render={(id, status) => (
          <React.Fragment>
            <InputField.Label>
              First Name
            </InputField.Label>
            <InputField.Input
              status={status}
              id={id}
              value={inputsData['firstname'].value}
              name='firstname'
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <InputField.AlertMessage status={status}>
              {inputsData['firstname'].statusMsg}
            </InputField.AlertMessage>
          </React.Fragment>
        )}
      />

      <InputField
        status={errors['password']}
        className='w-12 p-left-xs p-right-xs'
        render={(id, status) => (
          <React.Fragment>
            <InputField.Label>
              Password
            </InputField.Label>
            <InputField.Input
              status={status}
              id={id}
              value={inputsData['password'].value}
              name='password'
              type='password'
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <InputField.AlertMessage status={status}>
              {inputsData['password'].statusMsg}
            </InputField.AlertMessage>
          </React.Fragment>
        )}
      />

      <div className="m-top-xs">
        <Button
          variant='primary'
          type='submit'
          disabled={invalidForm || isSubmitting}
          onClick={handleSubmit}
        >
          Submit
        </Button>

        <Button
          variant="tertiary"
          disabled={isSubmitting}
          onClick={handleReset}
        >
          Clear
        </Button>
      </div>
    </React.Fragment>
  )
};

describe('Form', () => {
  it('renders the <Form/> Component', () => {
    const wrapper = shallow(<Form {...props}/>);
    expect(wrapper.length).toEqual(1);
  });

  it('changes input field correctly', () => {
    const wrapper = mount(<Form {...props}/>);

    expect(wrapper.find('input').at(0).props().value).toBe('Max');
    wrapper.find('input').at(0).simulate('change', { target: { name: 'firstname', value: 'Peter' } });
    expect(wrapper.find('input').at(0).props().value).toBe('Peter');
  });

  it('shows no validation errors on initial render', () => {
    const wrapper = mount(<Form {...props}/>);

    expect(wrapper.find('.gdm-icon-alert-error').length).toBe(0);
  });

  it('displays the correct initial value on the firstname input', () => {
    const wrapper = mount(<Form {...props}/>);

    expect(wrapper.find('input').at(0).props().value).toBe('Max')
  });

  it('shows 1 validation error (password input) after a submit button click', () => {
    const wrapper = mount(<Form {...props}/>);

    wrapper.find('button').at(0).simulate('click');
    debugger
    expect(wrapper.find('.gdm-icon-alert-error').length).toBe(1);
  });

  it('shows 2 validation errors (firstname, password) after removing firstname from input field and a submit button click', () => {
    const wrapper = mount(<Form {...props}/>);

    wrapper.find('input').at(0).simulate('change', { target: { name: 'firstname', value: '' } });
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.find('.gdm-icon-alert-error').length).toBe(2);
  });

  it('submits the correct form data', () => {
    const submitArgs = {
      firstname: 'Hans',
      password: 'hans123'
    };

    const submitCallback = jest.fn();
    const wrapper = mount(<Form {...props} onSubmit={submitCallback}/>);

    wrapper.find('input').at(0).simulate('change', { target: { name: 'firstname', value: submitArgs.firstname } });
    wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: submitArgs.password } });
    wrapper.find('button').at(0).simulate('click');

    expect(submitCallback).toHaveBeenCalledTimes(1);
    expect(submitCallback).toHaveBeenCalledWith(submitArgs, expect.any(Function), expect.any(Function), expect.any(Function));    
  });

  it('resets input data after submit and displays success message', () => {
    const wrapper = mount(<Form {...props}/>);

    wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: 'test123' } });
    wrapper.find('button').at(0).simulate('click');

    expect(wrapper.find('input').at(0).props().value).toBe('');
    expect(wrapper.find('input').at(1).props().value).toBe('');
    expect(wrapper.find('.gdm-icon-alert-error').length).toBe(0);
    expect(wrapper.find('.gdm-icon-alert-success').length).toBe(1);
  });

  it('displays the loading state after submit and disables submit button', () => {
    const submitCallback = jest.fn((submitArgs, setFormMessage, setIsSubmitting, handleReset) => {
      setIsSubmitting(true);
    });
    const wrapper = mount(<Form {...props} onSubmit={submitCallback}/>);
    wrapper.find('input').at(0).simulate('change', { target: { name: 'firstname', value: 'test' } });
    wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: 'test123' } });
    wrapper.find('button').at(0).simulate('click');

    expect(submitCallback).toHaveBeenCalledTimes(1);
    expect(wrapper.find(LoadingOverlay).length).toBe(1);
    wrapper.find('button').at(0).simulate('click');
    expect(submitCallback).toHaveBeenCalledTimes(1);
  });

  it('resets to initial input data on handleReset click', () => {
    const wrapper = mount(<Form {...props}/>);
    wrapper.find('input').at(0).simulate('change', { target: { name: 'firstname', value: 'test' } });
    wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: 'test123' } });
    wrapper.find('button').at(1).simulate('click');

    expect(wrapper.find('input').at(0).props().value).toBe('');
    expect(wrapper.find('input').at(1).props().value).toBe('');
    expect(wrapper.find('.gdm-icon-alert-error').length).toBe(0);
  });
});