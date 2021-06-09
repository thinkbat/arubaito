import React from 'react';
import { mount } from 'enzyme';
import InputField from './input-field';
import AlertMessage from 'components/atoms/alert-message';
import InputText from 'components/atoms/input/input-text';
import Select from 'components/atoms/input/select';
import TextArea from 'components/atoms/input/text-area';

const wrapper = mount(
  <InputField 
    status='error'
    render={(id, status) => (
      <React.Fragment>
        <InputField.Label htmlFor={id}>
          Last Name
        </InputField.Label>
        <InputField.Input
          status={status}
          id={id}
          value=''
          name='lastname'
          onChange={() => undefined}
        />
        <InputField.Select
          status={status}
          id={id}
          value=''
          onChange={() => undefined}
        >
          <option disabled value=''>Please select a car</option>
          <option value='redcar'>Red Car</option>
          <option value='greencar'>Blue Car</option>
          <option value='bluecar'>Blue Car</option>
        </InputField.Select>
        <InputField.TextArea
          status={status}
          id={id}
          value=''
          name='story'
          placeholder='textarea placeholder'
          rows='4'
          onChange={() => undefined}
        />
        <InputField.AlertMessage status={status}>
          My Error Message
        </InputField.AlertMessage>
      </React.Fragment>
    )}
  />
);

describe('InputField', () => {
  it('renders the <InputField/> Components', () => {
    const error = wrapper.find(AlertMessage);
    const input = wrapper.find(InputText);
    const select = wrapper.find(Select);
    const textarea = wrapper.find(TextArea);
    const label = wrapper.find('.gdm-label');

    expect(wrapper.length).toEqual(1);
    expect(input.length).toEqual(1);
    expect(select.length).toEqual(1);
    expect(textarea.length).toEqual(1);
    expect(error.length).toEqual(1);
    expect(label.length).toEqual(1);
  });

  it('displays the error message', () => {
    const error = wrapper.find(AlertMessage);
    expect(error.text()).toBe('My Error Message');
  });

  it('displays the error message for notification', () => {
    const wrapper = mount(
      <InputField 
        status='notification'
        render={(id, status) => (
          <React.Fragment>
            <InputField.Label htmlFor={id}>
              Last Name
            </InputField.Label>
            <InputField.Input
              status={status}
              id={id}
              value=''
              name='lastname'
              onChange={() => undefined}
            />
            <InputField.AlertMessage status={status}>
              My Error Message
            </InputField.AlertMessage>
          </React.Fragment>
        )}
      />
    );
    const error = wrapper.find('.gdm-icon-alert-error');
    expect(error.hasClass('gdm-color-alert-notification')).toBe(true);
  });
});