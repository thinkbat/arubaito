Default:
```jsx
  initialState = { checked: true}
  const handleChange = (e) => setState({ checked: !state.checked });

  <Checkbox
    checked={state.checked}
    value='lastname'
    onChange={handleChange}
  />  
```

Different color:
```jsx
  import { COLOR_BASE_BRAND_SECONDARY } from '@tokens/variables.js';
  initialState = { checked: true}
  const handleChange = (e) => setState({ checked: !state.checked });

  <Checkbox
    checked={state.checked}
    value='lastname'
    onChange={handleChange}
    iconColor={COLOR_BASE_BRAND_SECONDARY}
  />
```

Disabled:
```jsx
  initialState = { checked: true}
  const handleChange = (e) => setState({ checked: !state.checked });

  <Checkbox
    checked={state.checked}
    value='lastname'
    onChange={handleChange}
    disabled
  />
```