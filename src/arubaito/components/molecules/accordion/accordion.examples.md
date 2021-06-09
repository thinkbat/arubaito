Style 'default':
```jsx
  const [openAccordion, setOpenAccordion] = React.useState(false);
  const toggle = () => setOpenAccordion(openAccordion => !openAccordion);
  
  <Accordion isOpen={openAccordion}>
    <Accordion.Header>
      <Accordion.ToggleButton onClick={toggle}>
        Title 1
      </Accordion.ToggleButton>
      <Accordion.Summary>Title 1 Summary</Accordion.Summary>
    </Accordion.Header>

    <Accordion.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio et urna commodo, quis pellentesque felis semper. Pellentesque euismod, felis ut euismod laoreet, felis elit convallis tortor, ac pharetra ante dolor in nunc. Etiam vitae sem vitae urna convallis malesuada ac ac nulla. Cras efficitur condimentum imperdiet. Donec posuere vel tortor sit amet eleifend. Pellentesque iaculis nisl eu nunc egestas, eget bibendum orci lacinia. Aenean sit amet venenatis neque.
    </Accordion.Content>
  </Accordion>
```

Style 'table':
```jsx
  const [openAccordion, setOpenAccordion] = React.useState(false);
  const toggle = () => setOpenAccordion(openAccordion => !openAccordion);
  
  <Accordion isOpen={openAccordion} style='table'>
    <Accordion.Header>
      <Accordion.ToggleButton onClick={toggle}>
        Title 1
      </Accordion.ToggleButton>
      <Accordion.Summary>Title 1 Summary</Accordion.Summary>
    </Accordion.Header>

    <Accordion.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio et urna commodo, quis pellentesque felis semper. Pellentesque euismod, felis ut euismod laoreet, felis elit convallis tortor, ac pharetra ante dolor in nunc. Etiam vitae sem vitae urna convallis malesuada ac ac nulla. Cras efficitur condimentum imperdiet. Donec posuere vel tortor sit amet eleifend. Pellentesque iaculis nisl eu nunc egestas, eget bibendum orci lacinia. Aenean sit amet venenatis neque.
    </Accordion.Content>
  </Accordion>
```

Default Open:
```jsx
  const [openAccordion, setOpenAccordion] = React.useState(true);
  const toggle = () => setOpenAccordion(openAccordion => !openAccordion);
  <Accordion isOpen={openAccordion}>
    <Accordion.Header>
      <Accordion.ToggleButton onClick={toggle}>
        Title 2
      </Accordion.ToggleButton>
      <Accordion.Summary>Title 2 Summary</Accordion.Summary>
      <a className='gdm-link-dark' style={{'float': 'right', 'marginTop': '6px'}}>Link to something</a>
    </Accordion.Header>

    <Accordion.Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio et urna commodo, quis pellentesque felis semper. Pellentesque euismod, felis ut euismod laoreet, felis elit convallis tortor, ac pharetra ante dolor in nunc. Etiam vitae sem vitae urna convallis malesuada ac ac nulla. Cras efficitur condimentum imperdiet. Donec posuere vel tortor sit amet eleifend. Pellentesque iaculis nisl eu nunc egestas, eget bibendum orci lacinia. Aenean sit amet venenatis neque.
    </Accordion.Content>
  </Accordion>
```

Multiple Accordions, multiple open allowed:
```jsx
  const [openAccordions, setOpenAccordions] = React.useState({grapes: false, apples: false});

  <div>
    <Accordion isOpen={openAccordions.grapes}>
      <Accordion.Header>
        <Accordion.ToggleButton onClick={() => setOpenAccordions(openAccordions => ({...openAccordions, grapes: !openAccordions.grapes}))}>
          Grapes
        </Accordion.ToggleButton>
        <Accordion.Summary>Grapes are delicious</Accordion.Summary>
        <a className='gdm-link-dark' style={{'float': 'right', 'marginTop': '6px'}}>See more Grapes</a>
      </Accordion.Header>

      <Accordion.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio et urna commodo, quis pellentesque felis semper. Pellentesque euismod, felis ut euismod laoreet, felis elit convallis tortor, ac pharetra ante dolor in nunc. Etiam vitae sem vitae urna convallis malesuada ac ac nulla. Cras efficitur condimentum imperdiet. Donec posuere vel tortor sit amet eleifend. Pellentesque iaculis nisl eu nunc egestas, eget bibendum orci lacinia. Aenean sit amet venenatis neque.
      </Accordion.Content>
    </Accordion>

    <Accordion isOpen={openAccordions.apples}>
      <Accordion.Header>
        <Accordion.ToggleButton onClick={() => setOpenAccordions(openAccordions => ({...openAccordions, apples: !openAccordions.apples}))}>
          Apples
        </Accordion.ToggleButton>
        <Accordion.Summary>Apples are delicious</Accordion.Summary>
        <a className='gdm-link-dark' style={{'float': 'right', 'marginTop': '6px'}}>See more Apples</a>
      </Accordion.Header>

      <Accordion.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio et urna commodo, quis pellentesque felis semper. Pellentesque euismod, felis ut euismod laoreet, felis elit convallis tortor, ac pharetra ante dolor in nunc. Etiam vitae sem vitae urna convallis malesuada ac ac nulla. Cras efficitur condimentum imperdiet. Donec posuere vel tortor sit amet eleifend. Pellentesque iaculis nisl eu nunc egestas, eget bibendum orci lacinia. Aenean sit amet venenatis neque.
      </Accordion.Content>
    </Accordion>
  </div>
```

Multiple Accordions, multiple open not allowed:
```jsx
  const [openAccordion, setOpenAccordion] = React.useState('');
  const toggle = (fruit) => openAccordion === fruit ? setOpenAccordion('') : setOpenAccordion(fruit);

  <div>
    <Accordion isOpen={openAccordion === 'grapes'}>
      <Accordion.Header>
        <Accordion.ToggleButton onClick={() => toggle('grapes')}>
          Grapes
        </Accordion.ToggleButton>
        <Accordion.Summary>Grapes are delicious</Accordion.Summary>
        <a className='gdm-link-dark' style={{'float': 'right', 'marginTop': '6px'}}>See more Grapes</a>
      </Accordion.Header>

      <Accordion.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio et urna commodo, quis pellentesque felis semper. Pellentesque euismod, felis ut euismod laoreet, felis elit convallis tortor, ac pharetra ante dolor in nunc. Etiam vitae sem vitae urna convallis malesuada ac ac nulla. Cras efficitur condimentum imperdiet. Donec posuere vel tortor sit amet eleifend. Pellentesque iaculis nisl eu nunc egestas, eget bibendum orci lacinia. Aenean sit amet venenatis neque.
      </Accordion.Content>
    </Accordion>

    <Accordion isOpen={openAccordion === 'apples'}>
      <Accordion.Header>
        <Accordion.ToggleButton onClick={() => toggle('apples')}>
          Apples
        </Accordion.ToggleButton>
        <Accordion.Summary>Apples are delicious</Accordion.Summary>
        <a className='gdm-link-dark' style={{'float': 'right', 'marginTop': '6px'}}>See more Apples</a>
      </Accordion.Header>

      <Accordion.Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus odio et urna commodo, quis pellentesque felis semper. Pellentesque euismod, felis ut euismod laoreet, felis elit convallis tortor, ac pharetra ante dolor in nunc. Etiam vitae sem vitae urna convallis malesuada ac ac nulla. Cras efficitur condimentum imperdiet. Donec posuere vel tortor sit amet eleifend. Pellentesque iaculis nisl eu nunc egestas, eget bibendum orci lacinia. Aenean sit amet venenatis neque.
      </Accordion.Content>
    </Accordion>
  </div>
```