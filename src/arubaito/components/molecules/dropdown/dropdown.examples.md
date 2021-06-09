Dropdown:
```jsx
  const countries = [
    { id: 1, name: 'United States' },
    { id: 2, name: 'New Zealand' },
    { id: 3, name: 'Australia' },
    { id: 4, name: 'India' },
    { id: 5, name: 'China' },
    { id: 6, name: 'Canada' },
    { id: 7, name: 'Japan' },
    { id: 8, name: 'Germany' },
  ];

  return (
    <Dropdown
      selectCallback={selected => undefined}
      selected={countries[0]}
      render={selected => <Dropdown.Selected>{selected ? selected.name : 'Select Country'}</Dropdown.Selected>}
      displayValue='name'
      list={countries}
    >
      <label className='gdm-label'>Search your countries by name</label>
      <Dropdown.Search autoComplete='off'/>
      <Dropdown.List
        render={item => (
          <Dropdown.ListItem item={item} key={item.id}>{item.name}</Dropdown.ListItem>
        )}
      />
    </Dropdown>
  );
```

Dropdown (no selected, no label, no search):
```jsx
  const countries = [
    { id: 1, name: 'United States' },
    { id: 2, name: 'New Zealand' },
    { id: 3, name: 'Australia' },
    { id: 4, name: 'India' },
    { id: 5, name: 'China' },
    { id: 6, name: 'Canada' },
    { id: 7, name: 'Japan' },
    { id: 8, name: 'Germany' },
  ];

  return (
    <Dropdown
      selectCallback={selected => undefined}
      list={countries}
      render={selected => <Dropdown.Selected>{selected ? selected.name : 'Select Country'}</Dropdown.Selected>}
      displayValue='name'
    >
      <Dropdown.List
        render={item => (
          <Dropdown.ListItem item={item} key={item.id}>{item.name}</Dropdown.ListItem>
        )}
      />
    </Dropdown>
  );
```