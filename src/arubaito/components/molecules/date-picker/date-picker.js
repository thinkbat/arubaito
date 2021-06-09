import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import cx from 'classnames';
import { DateRangePickerPhrases } from './date-picker-phrases';
import Button from '../../atoms/button';

import 'react-dates/initialize';
import './date-picker.scss';

const START_DATE = 'startDate';
const END_DATE = 'endDate';

const isSameDay = (a, b) => {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return a.date() === b.date() && a.month() === b.month() && a.year() === b.year();
};

const DatePicker = ({
  minDate,
  maxDate,
  startDate,
  endDate,
  onDatesChange,
  onFocusChange,
  datePresets,
  focusedInput,
  ...otherProps
}) => {

  const startMoment = startDate ? moment(startDate) : null;
  const endMoment = endDate ? moment(endDate) : null;

  const minMoment = minDate ? moment(minDate) : null;
  const maxMoment = maxDate ? moment(maxDate) : null;

  const isOutsideRange = day => day.isAfter(maxMoment) || day.isBefore(minMoment);

  const renderDatePresets = () => {
    if (!datePresets) return null;

    return (
      <div moduleClassName="date-picker-presets-wrapper">
        {datePresets.map(({ text, start, end }) => {
          const presetStartMoment = moment(start);
          const presetEndMoment = moment(end);
          const isSelected = isSameDay(presetStartMoment, startMoment) && isSameDay(presetEndMoment, endMoment);
          const disabled = isOutsideRange(presetStartMoment) || isOutsideRange(presetEndMoment);
          return (
            <Button
              key={text}
              variant="secondary"
              small
              moduleClassName={cx(
                'date-picker-button',
                {
                  active: isSelected,
                },
              )}
              disabled={disabled}
              onClick={() => onDatesChange({ startDate: presetStartMoment, endDate: presetEndMoment })}
            >
              {text}
            </Button>
          );
        })}
      </div>
    );
  };

  return (
    <DateRangePicker
      {...otherProps}
      minDate={minMoment}
      maxDate={maxMoment}
      startDate={startMoment}
      endDate={endMoment}
      onDatesChange={onDatesChange}
      focusedInput={focusedInput}
      onFocusChange={onFocusChange}
      renderCalendarInfo={renderDatePresets}
      isOutsideRange={isOutsideRange}
    />
  );
};

DatePicker.defaultProps = {
  startDate: null,
  endDate: null,
  noBorder: true,
  hideKeyboardShortcutsPanel: true,

  // input related props
  startDateId: START_DATE,
  startDatePlaceholderText: 'Start Date',
  endDateId: END_DATE,
  endDatePlaceholderText: 'End Date',
  disabled: false,
  required: false,
  screenReaderInputMessage: '',
  showClearDates: false,
  showDefaultInputIcon: false,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,

  // calendar presentation and interaction related props
  renderMonthText: null,
  orientation: 'horizontal',
  anchorDirection: 'left',
  horizontalMargin: 0,
  withPortal: false,
  withFullScreenPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  keepOpenOnDateSelect: false,
  reopenPickerOnClearDates: false,
  isRTL: false,
  openDirection: 'down',

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},
  onClose() {},

  // day presentation and interaction related props
  renderDayContents: null,
  minimumNights: 0,
  enableOutsideDays: false,
  isDayBlocked: () => false,
  isDayHighlighted: () => false,

  // internationalization
  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',
  phrases: DateRangePickerPhrases,
};

DatePicker.propTypes = {
  startDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  endDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  startDateId: PropTypes.string,
  endDateId: PropTypes.string,
  startDatePlaceholderText: PropTypes.string,
  endDatePlaceholderText: PropTypes.string,
  startDateAriaLabel: PropTypes.string,
  endDateAriaLabel: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([START_DATE, END_DATE])]),
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  screenReaderInputMessage: PropTypes.string,
  showClearDates: PropTypes.bool,
  showDefaultInputIcon: PropTypes.bool,
  customInputIcon: PropTypes.node,
  customArrowIcon: PropTypes.node,
  customCloseIcon: PropTypes.node,
  inputIconPosition: PropTypes.oneOf(['before', 'after']),
  noBorder: PropTypes.bool,
  block: PropTypes.bool,
  small: PropTypes.bool,
  regular: PropTypes.bool,

  // calendar presentation and interaction related props
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  anchorDirection: PropTypes.oneOf(['left', 'right']),
  openDirection: PropTypes.oneOf(['up', 'down']),
  horizontalMargin: PropTypes.number,
  withPortal: PropTypes.bool,
  withFullScreenPortal: PropTypes.bool,
  appendToBody: PropTypes.bool,
  disableScroll: PropTypes.bool,
  daySize: PropTypes.number, // positive integer
  isRTL: PropTypes.bool,
  initialVisibleMonth: PropTypes.func,
  firstDayOfWeek: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  numberOfMonths: PropTypes.number,
  keepOpenOnDateSelect: PropTypes.bool,
  reopenPickerOnClearDates: PropTypes.bool,
  renderCalendarInfo: PropTypes.func,
  hideKeyboardShortcutsPanel: PropTypes.bool,

  // navigation related props
  navPrev: PropTypes.node,
  navNext: PropTypes.node,
  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onClose: PropTypes.func,
  transitionDuration: PropTypes.number, // positive integer, milliseconds

  // day presentation and interaction related props
  renderCalendarDay: PropTypes.func,
  renderDayContents: PropTypes.func,
  minimumNights: PropTypes.number,
  minDate: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
  maxDate: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.string]),
  enableOutsideDays: PropTypes.bool,
  isDayBlocked: PropTypes.func,
  isOutsideRange: PropTypes.func,
  isDayHighlighted: PropTypes.func,

  // internationalization props
  displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  monthFormat: PropTypes.string,
  weekDayFormat: PropTypes.string,
  dayAriaLabelFormat: PropTypes.string,

  focusedInput: PropTypes.oneOf(['startDate', 'endDate', null]),
  onDatesChange: PropTypes.func.isRequired,
  onFocusChange: PropTypes.func.isRequired,
  datePresets: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    start: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    end: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })),
};

export default DatePicker;
