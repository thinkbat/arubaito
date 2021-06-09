import React from 'react';
import { shallow, mount } from 'enzyme';
import DatePicker from './date-picker';

const today = 'Fri Mar 05 2021 12:48:10 GMT-0500 (Eastern Standard Time)';
const minDate = 'Thu Feb 04 2021 12:49:16 GMT-0500 (Eastern Standard Time)';
const maxDate = today;

const datePresets = [
  {
    text: 'Today',
    start: today,
    end: today,
  },
  {
    text: 'Today + 5 Days',
    start: today,
    end: 'Wed Mar 10 2021 12:50:15 GMT-0500 (Eastern Standard Time)',
  },
  {
    text: 'Last 7 Days',
    start: 'Sat Feb 27 2021 12:51:45 GMT-0500 (Eastern Standard Time)',
    end: today,
  },
];

const props = {
  minDate: minDate,
  maxDate: maxDate,
  startDate: null,
  endDate: null,
  onDatesChange: () => undefined,
  focusedInput: null,
  onFocusChange: () => undefined,
  datePresets: datePresets,
};

describe('DatePicker', () => {
  it('renders the <DatePicker/> Component', () => {
    const wrapper = shallow(<DatePicker {...props}/>);
    expect(wrapper.length).toEqual(1);
  });
  // can't write more tests right now because I don't get any DatePicker dom elements for some reason
});