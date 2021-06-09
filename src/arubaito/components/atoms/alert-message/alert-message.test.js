import React from 'react';
import { shallow } from 'enzyme';
import AlertMessage from './alert-message';

describe('AlertMessage', () => {
  it('renders the <AlertMessage/> Component', () => {
    const wrapper = shallow(<AlertMessage status='error'>Error Text</AlertMessage>);
    expect(wrapper.length).toEqual(1);
  });

  it('renders the correct icon for error', () => {
    const wrapper = shallow(<AlertMessage status='error'>Error Text</AlertMessage>);
    const errorClass = wrapper.find('.gdm-icon-alert-error');
    expect(errorClass.length).toBe(1);
  });

  it('renders the correct icon for success', () => {
    const wrapper = shallow(<AlertMessage status='success'>Error Text</AlertMessage>);
    const successClass = wrapper.find('.gdm-icon-alert-success');
    expect(successClass.length).toBe(1);
  });

  it('renders the correct icon for notification', () => {
    const wrapper = shallow(<AlertMessage status='notification'>Error Text</AlertMessage>);
    const notificationClass = wrapper.find('.gdm-icon-alert-notification');
    expect(notificationClass.length).toBe(1);
  });
});