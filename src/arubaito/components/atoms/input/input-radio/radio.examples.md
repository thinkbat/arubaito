```jsx
  import { COLOR_BASE_BRAND_SECONDARY } from '@tokens/variables.js';
  initialState = { checked: true}
  const handleChange = () => null;

  <div>
    <Radio.Button
      checked={state.checked}
      value='lastname'
      onChange={handleChange}
    />

    <Radio.Button
      checked={state.checked}
      value='lastname'
      onChange={handleChange}
      iconColor={COLOR_BASE_BRAND_SECONDARY}
    />

    <Radio.Button
      checked={state.checked}
      value='lastname'
      onChange={handleChange}
      disabled
    />
  </div>
```

<!-- Different color:
```jsx
  import { COLOR_BASE_BRAND_SECONDARY } from '@tokens/variables.js';
  initialState = { checked: false}
  const handleChange = (e) => setState({ checked: !state.checked });

  <Radio.Button
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

  <Radio.Button
    checked={state.checked}
    value='lastname'
    onChange={handleChange}
    disabled
  />
``` -->

Multiple Radio Groups:
```jsx
  import FormControlLabel from 'components/molecules/form-control-label';
  import { COLOR_BASE_BRAND_SECONDARY } from '@tokens/variables.js';
  initialState = {
    'animals': 'Dachshund',
    'colors': 'Yellow'
  };
  const handleChange = (e, name, value) => setState({ [name]: value });

  <div>
    <label className='gdm-label'>Selected animal: {state['animals']}</label>
    <Radio.Group value={state['animals']} name='animals' onChange={handleChange} className='gdm-m-bottom-sm gdm-block'>
      <FormControlLabel label='Dachshund' control={<Radio.Button value='Dachshund'/>}/>
      <FormControlLabel label='Monkey' disabled control={<Radio.Button value='Monkey'/>}/>
      <FormControlLabel label='Giraffe' control={<Radio.Button value='Giraffe'/>}/>
      <FormControlLabel label='Elephant' control={<Radio.Button value='Elephant'/>}/>
    </Radio.Group>

    <label className='gdm-label'>Selected color: {state['colors']}</label>
    <Radio.Group value={state['colors']} name='colors' onChange={handleChange} className='gdm-m-bottom-sm gdm-block'>
      <FormControlLabel label='Red' disabled control={<Radio.Button value='Red'/>}/>
      <FormControlLabel label='Green' control={<Radio.Button value='Green'/>}/>
      <FormControlLabel label='Blue' control={<Radio.Button value='Blue'/>}/>
      <FormControlLabel label='Yellow' control={<Radio.Button value='Yellow'/>}/>
    </Radio.Group>

    <label className='gdm-label'>Selected shoe: {state['shoes']}</label>
    <Radio.Group value={state['shoes']} name='shoes' onChange={handleChange}>
      <div>
        <FormControlLabel label='Air Jordan 1 UNC Off-White (Sold Out)' disabled control={<Radio.Button value='Air Jordan 1 UNC Off-White'/>}/>
      </div>
      <div>
        <FormControlLabel label='Air Max 1' control={<Radio.Button value='Air Max 1'/>}/>
      </div>
      <div>
        <FormControlLabel label='Air Force 1' control={<Radio.Button value='Air Force 1'/>}/>
      </div>
      <div>
        <FormControlLabel label='Dunk' control={<Radio.Button value='Dunk'/>}/>
      </div>
    </Radio.Group>
  </div>
```