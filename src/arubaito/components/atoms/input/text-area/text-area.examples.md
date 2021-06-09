```jsx Text Area
  const handleChange = (e) => setState({ textarea: e.target.value });

  <TextArea
    value={state.textarea}
    placeholder='placeholder text'
    onChange={handleChange}
    status="notification"
    rows='4'/>
```