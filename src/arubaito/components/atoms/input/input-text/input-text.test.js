import React from 'react';
import { shallow, mount } from 'enzyme';
import InputText from './input-text';

const props = {
  onChange: () => undefined,
  value: '',
  name: 'test-input-text'
};

describe('InputText', () => {
  it('renders the <Input/> Component', () => {
    const wrapper = shallow(<InputText {...props}/>);
    expect(wrapper.length).toEqual(1);
  });

  it('renders a passed in component as the Component', () => {
    const wrapper = mount(
      <InputText
        {...props}
        component={<span id='test-span'/>}
      />
    );
    const span = wrapper.find('#test-span');
    expect(span.length).toEqual(1);
  });

  it('is disabled', () => {
    const wrapper = mount(<InputText {...props} disabled/>);
    const input = wrapper.find('input');
    expect(input.is('[disabled]')).toBe(true);
  });

  it('calls onChange when enabled', () => {
    const mockChange = jest.fn();
    const wrapper = mount(<InputText {...props} onChange={mockChange}/>);
    const input = wrapper.find('input');

    input.simulate('change', '');
    expect(mockChange.mock.calls.length).toBe(1);
  });
});