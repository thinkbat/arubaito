Primary Button:
```jsx
  <Button
    variant="primary"
    onClick={() => console.log('click')}
  >
    Button
  </Button>

  <span> </span>

  <Button
    variant="primary"
    onClick={() => console.log('click')}
  >
    Button
    <span className='gdm-icon gdm-icon-sm gdm-icon-edit gdm-color-light'/>
  </Button>

  <span> </span>

  <Button
    variant="primary"
    small
    onClick={() => console.log('click')}
  >
    Button sm
  </Button>

  <span> </span>

  <Button
    variant="primary"
    small
    onClick={() => console.log('click')}
  >
    Button sm
    <span className='gdm-icon gdm-icon-xs gdm-icon-edit gdm-color-light'/>
  </Button>
```

Primary Button Link:
```jsx
  import { BrowserRouter as Router, Link } from 'react-router-dom';
  <>
    <Button
      variant="primary"
      onClick={() => console.log('click')}
      component={<a href='/' className='gdm-link-light'>Link</a>}
    />

    <span> </span>
    <Router>
      <Button
        variant="primary"
        onClick={() => console.log('click')}
        component={<Link to='/' className='gdm-link-light'>React Router Link</Link>}
      />
  </Router>
  </>
```

Primary Button (disabled):
```js
  <Button
    variant="primary"
    disabled
    onClick={() => console.log('click')}
  >
    Button
  </Button>

  <span> </span>

  <Button
    variant="primary"
    small
    disabled
    onClick={() => console.log('click')}
  >
    Button
  </Button>
```

Secondary Button:
```js

  <Button
    variant="secondary"
    onClick={() => console.log('click')}
  >
    Button
  </Button>

  <span> </span>

  <Button
    variant="secondary"
    onClick={() => console.log('click')}
  >
    Button
    <span className='gdm-icon gdm-icon-sm gdm-icon-edit gdm-color-brand-primary' />
  </Button>

  <span> </span>

  <Button
    variant="secondary"
    small
    onClick={() => console.log('click')}
  >
    Button sm
  </Button>

  <span> </span>

  <Button
    variant="secondary"
    small
    onClick={() => console.log('click')}
  >
    Button sm
    <span className='gdm-icon gdm-icon-xs gdm-icon-edit gdm-color-brand-primary'/>
  </Button>
```

Secondary Button (disabled):
```js
  <Button
    variant="secondary"
    disabled
    onClick={() => console.log('click')}
  >
    Button
  </Button>

  <span> </span>

  <Button
    variant="secondary"
    small
    disabled
    onClick={() => console.log('click')}
  >
    Button
  </Button>
```

Tertiary Button:
```js
  <Button
    variant="tertiary"
    onClick={() => console.log('click')}
  >
    Button
  </Button>

  <span> </span>

  <Button
    variant="tertiary"
    small
    onClick={() => console.log('click')}
  >
    Button
  </Button>
```

Tertiary Button (disabled):
```js
  <Button
    variant="tertiary"
    disabled
    onClick={() => console.log('click')}
  >
    Button
  </Button>

  <span> </span>

  <Button
    variant="tertiary"
    disabled
    small
    onClick={() => console.log('click')}
  >
    Button
  </Button>
```

Quarternary Button:
```js
  <Button
    variant="quarternary"
    onClick={() => console.log('click')}
  >
    Button
  </Button>
```

Quarternary Button (disabled):
```js
  <Button
    disabled
    variant="quarternary"
    onClick={() => console.log('click')}
  >
    Button
  </Button>
```