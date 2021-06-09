```jsx
  import Radio from '../../atoms/input/input-radio';
  import Checkbox from '../../atoms/input/input-checkbox';
  initialState = {};
  const handleChange = (e) => {
    setState({[e.target.name]: !state[e.target.name] })
  };

  <div>
    <FormControlLabel label='Label for Dog' control={<Checkbox value='Something about a dog' name='Dog' checked={state['Dog']} onChange={handleChange}/>}/>
    <FormControlLabel label='Label for Cat' control={<Checkbox value='Something about a cat' name='Cat' checked={state['Cat']} onChange={handleChange}/>}/>
    <FormControlLabel label='Label for Mouse' control={<Checkbox value='Something about a mouse' name='Mouse' checked={state['Mouse']} onChange={handleChange}/>}/>
    <FormControlLabel label='Label for Bird (Disabled)' control={<Checkbox value='Something about a disabled bird' checked={state['Bird']} onChange={handleChange} name='Bird'/>} disabled/>
  </div>
```