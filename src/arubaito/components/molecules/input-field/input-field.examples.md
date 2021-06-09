Input Field Text (label, no alert):
```jsx
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  <InputField
    render={(id, status) => (
      <React.Fragment>
        <InputField.Label htmlFor={id}>
          Last Name
        </InputField.Label>
        <InputField.Input
          status={status}
          id={id}
          value={state.lastname}
          name='lastname'
          onChange={handleChange}
        />
      </React.Fragment>
    )}/>
```

Input Field Select (label, no alert):
```jsx
  initialState = { selectedOption: ''};
  const handleChange = (e) => setState({ selectedOption: e.target.value });

  <InputField
    render={(id, status) => (
      <React.Fragment>
        <InputField.Label htmlFor={id}>
          Car
        </InputField.Label>
        <InputField.Select
          status={status}
          id={id}
          value={state.selectedOption}
          onChange={handleChange}
        >
          <option disabled value=''>Please select a car</option>
          <option value='redcar'>Red Car</option>
          <option value='greencar'>Blue Car</option>
          <option value='bluecar'>Blue Car</option>
        </InputField.Select>
      </React.Fragment>
    )}/>
```

Input Field Text Password (label, no alert):
```jsx
  initialState = { password: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  <InputField
    render={(id, status) => (
      <React.Fragment>
        <InputField.Label htmlFor={id}>
          Password
        </InputField.Label>
        <InputField.Input
          status={status}
          id={id}
          value={state.password}
          name='password'
          type='password'
          onChange={handleChange}
        />
      </React.Fragment>
    )}/>
```

Input Field Text (label, alert error):
```jsx
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });
  
  <InputField
    className='some-class-for-input-field'
    status='notification'
    render={(id, status) => (
      <React.Fragment>
        <InputField.Label htmlFor={id} className='gdm-p-right-xs'>
          Last Name
        </InputField.Label>
        <InputField.Input
          status={status}
          id={id}
          value={state.lastname}
          name='lastname'
          onChange={handleChange}
        />
        <InputField.AlertMessage status={status}>
          Your Notification Message goes here.
        </InputField.AlertMessage>
      </React.Fragment>
    )}/>
```

Input Field Text (inline label, alert error):
```jsx
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });
  
  <InputField
    className='some-class-for-input-field'
    status='error'
    render={(id, status) => (
      <React.Fragment>
        <InputField.Label htmlFor={id} className='gdm-p-right-xs gdm-inline-block'>
          Last Name
        </InputField.Label>
        <div className='gdm-inline-block'>
          <InputField.Input
            status={status}
            id={id}
            value={state.lastname}
            name='lastname'
            onChange={handleChange}
          />
          <InputField.AlertMessage status={status}>
            Your Error Message goes here.
          </InputField.AlertMessage>
        </div>
      </React.Fragment>
    )}/>
```

Small Input Text Field (no label, inline alert error):
```jsx
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });
  
  <InputField
    className='some-class-for-input-field'
    status='error'
    render={(id, status) => (
      <React.Fragment>
        <InputField.Input
          status={status}
          id={id}
          value={state.lastname}
          name='lastname'
          onChange={handleChange}
          className='gdm-m-bottom-none'
          small
        />
        <InputField.AlertMessage status={status} inline>
          Your Error Message goes here.
        </InputField.AlertMessage>
      </React.Fragment>
    )}/>
```


Input Field Text (label, alert success):
```jsx
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  <InputField
    status='success'
    render={(id, status) => (
      <React.Fragment>
        <InputField.Label htmlFor={id}>
          Last Name
        </InputField.Label>
        <InputField.Input
          status={status}
          id={id}
          value={state.lastname}
          name='lastname'
          onChange={handleChange}
        />
        <InputField.AlertMessage status={status}>
          Your Success Message goes here.
        </InputField.AlertMessage>
      </React.Fragment>
    )}/>
```


Input Field (label, disabled):
```jsx
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  <InputField
    render={(id, status) => (
      <React.Fragment>
        <InputField.Label htmlFor={id}>
          Last Name
        </InputField.Label>
        <InputField.Input
          status={status}
          id={id}
          value={state.lastname}
          name='lastname'
          onChange={handleChange}
          disabled
        />
      </React.Fragment>
    )}/>
```


Input Field (label, textarea):
```jsx
  initialState = { lastname: ''};
  const handleChange = (e) => setState({ [e.target.name]: e.target.value });

  <InputField
    render={(id, status) => (
      <React.Fragment>
        <InputField.Label htmlFor={id}>
          Some Story
        </InputField.Label>
        <InputField.TextArea
          status={status}
          id={id}
          value={state['textarea-story']}
          placeholder='story'
          name='textarea-story'
          onChange={handleChange}
          rows='4'
        />
      </React.Fragment>
    )}/>
```