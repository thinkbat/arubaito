DatePicker:
```jsx
  const today = new Date()

  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [focusedInput, setFocusedInput] = React.useState();

  const minDate = new Date().setDate(today.getDate() - 29) // 30 days back
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
      end: new Date().setDate(today.getDate() + 5),
    },
    {
      text: 'Last 7 Days',
      start: new Date().setDate(today.getDate() - 6),
      end: today,
    },
  ]

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate)
  };

  const onFocusChange = (focusedInput) => {
    setFocusedInput(focusedInput);
  };

  return (
    <DatePicker
      minDate={minDate}
      maxDate={maxDate}
      startDate={startDate}
      endDate={endDate}
      onDatesChange={onDatesChange}
      focusedInput={focusedInput}
      onFocusChange={onFocusChange}
      datePresets={datePresets}
    />
  )
```