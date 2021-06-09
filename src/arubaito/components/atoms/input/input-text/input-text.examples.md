```jsx Input Text
  import NumberFormat from 'react-number-format';
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  <InputText
    value={state.lastname}
    name='lastname'
    placeholder='Type text'
    onChange={handleChange}
  />
```

```jsx Input Text Small
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  <InputText
    value={state.lastname}
    name='lastname'
    placeholder='Type text'
    onChange={handleChange}
    small
  />
```

```jsx Input Text Number
  import NumberFormat from 'react-number-format';
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  <InputText
    value={state.lastname}
    name='lastname'
    placeholder='Type a number'
    onChange={handleChange}
    component={<NumberFormat/>}
    thousandSeparator={true}
    prefix={'$'}
  />
```