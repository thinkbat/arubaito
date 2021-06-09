List
```jsx
const options = [
  { value: 1, label: 'Arlington' },
  { value: 2, label: 'Austin' },
  { value: 3, label: 'Barcelona' },
  { value: 4, label: 'Gurgaon' }
];

const [city, setCity] = React.useState(options[2]);
const handleOnChange = (value) => setCity(value);

<div>
<List defaultValue={options[2]}
      isClearable
      onChange={handleOnChange}
      value={city}
      options={options} />

<p>Selected city: {city && city.label}</p>
</div>
```

List Asynchronous
```jsx
const [brewery, setBrewery] = React.useState();
const handleOnChange = (value) => setBrewery(value);
const getBreweries = (term) =>
  fetch(`https://api.openbrewerydb.org/breweries?by_name=${term}`)
  .then(res => res.json().then(data => data.map(({id, name}) => ({ value: id, label: name }))));

<div>
  <List asynchronous
        cacheOptions
        defaultOptions
        isClearable
        onChange={handleOnChange}
        loadOptions={getBreweries} />

  <p>Selected brewery: {brewery && brewery.label}</p>
</div>
```
