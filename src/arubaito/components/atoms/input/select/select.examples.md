```jsx Select
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  <Select
    value={state.lastname}
    name='lastname'
    placeholder='placeholder text'
    onChange={handleChange}
    >
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='3'>3</option>
  </Select>
```

```jsx Select Small
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  <Select
    value={state.lastname}
    name='lastname'
    placeholder='placeholder text'
    onChange={handleChange}
    small
    >
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='3'>3</option>
  </Select>
```