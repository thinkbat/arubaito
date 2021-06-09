import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadingOverlay from './loading-overlay';

describe('LoadingOverlay', () => {
  it('renders the <LoadingOverlay/> Component', () => {
    const wrapper = shallow(<LoadingOverlay/>);
    expect(wrapper.length).toEqual(1);
  });

  it('shows the loading spinner', () => {
    const wrapper = mount(<LoadingOverlay/>);
    expect(wrapper.find('.gdm-icon-loading-spinner').length).toBe(1);
  })
});