Multi Select:
```jsx
  import FormControlLabel from 'components/molecules/form-control-label';
  
  const [selected, setSelected] = React.useState([])
  const countries = [
    { id: 1, name: 'United States' },
    { id: 2, name: 'New Zealand' },
    { id: 3, name: 'Australia' },
    { id: 4, name: 'India' },
    { id: 5, name: 'China' },
    { id: 6, name: 'Canada' },
    { id: 7, name: 'Japan' },
    { id: 8, name: 'Germany' },
    { id: 9, name: 'Denmark' },
    { id: 10, name: 'Brazil' },
    { id: 11, name: 'Columbia' },
    { id: 12, name: 'Switzerland' },
    { id: 13, name: 'Netherlands' },
    { id: 14, name: 'Vietnam' },
    { id: 15, name: 'Italy' },
    { id: 16, name: 'France' },
  ];

  const handleChange = (selectedItem) => {
    const already_selected = selected.find((item) => item.name === selectedItem.name);
    let newSelected;
    if (already_selected) {
      newSelected = selected.filter((item) => item.name !== selectedItem.name);
    } else {
      newSelected = [
        ...selected,
        selectedItem
      ]
    }
    setSelected(newSelected);
  };

  <React.Fragment>
    <MultiSelect
      onSelect={selected => handleChange(selected)}
      selectedList={selected || []}
      onMouseLeave={() => console.log('Mouse Leave')}
      displayValue='name'
      initialList={countries}
      label='Select Countries'
    >
      <MultiSelect.List
        render={item => (
          <MultiSelect.ListItem item={item} key={item.id}>{item.name}</MultiSelect.ListItem>
        )}
      />
    </MultiSelect>
    {
      !!selected.length &&
        <div className='gdm-block gdm-w-24 gdm-m-top-sm gdm-p-left-sm' style={{'columnCount': '3'}}>
          {
            selected.map((listItem) => (
              <FormControlLabel
                label={listItem.name}
                className='gdm-w-24'
                key={listItem.id}
                control={
                  <button className='gdm-btn-override gdm-m-right-xs' onClick={() => handleChange(listItem)}>
                    <span className='gdm-icon gdm-icon-sm gdm-icon-close gdm-block'/>
                  </button>
                }
              />
            ))
          }
        </div>
    }
  </React.Fragment>
```