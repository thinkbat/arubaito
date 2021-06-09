import React from 'react';
import { shallow } from 'enzyme';
import FlashMessage from './flash-message';

describe('FlashMessage', () => {
  it('renders the <FlashMessage/> Component', () => {
    const wrapper = shallow(<FlashMessage status='error'>Error Text</FlashMessage>);
    expect(wrapper.length).toEqual(1);
  });

  it('renders the correct icon for error', () => {
    const wrapper = shallow(<FlashMessage status='error'>Error Text</FlashMessage>);
    const errorClass = wrapper.find('.gdm-icon-alert-error');
    expect(errorClass.length).toBe(1);
  });

  it('renders the correct icon for success', () => {
    const wrapper = shallow(<FlashMessage status='success'>Error Text</FlashMessage>);
    const successClass = wrapper.find('.gdm-icon-alert-success');
    expect(successClass.length).toBe(1);
  });

  it('renders the correct icon for notification', () => {
    const wrapper = shallow(<FlashMessage status='notification'>Error Text</FlashMessage>);
    const notificationClass = wrapper.find('.gdm-icon-alert-notification');
    expect(notificationClass.length).toBe(1);
  });
});