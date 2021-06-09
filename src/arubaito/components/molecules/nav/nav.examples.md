Nav Item (default)
```jsx
import {BrowserRouter as Router, Link} from 'react-router-dom';
<Router>
  <Nav>
    <Nav.Item>
      <Link to='/'>Home</Link>
    </Nav.Item>
    <Nav.Item active>
      <Link to='/'>Dashboard</Link>
    </Nav.Item>
  </Nav>
</Router>
```

Nav Item (light)
```jsx
import {BrowserRouter as Router, Link} from 'react-router-dom';
<Router>
  <Nav>
    <Nav.Item className='gdm-color-light'>
      <Link to='/'>Home</Link>
    </Nav.Item>
    <Nav.Item className='gdm-color-light' active>
      <Link to='/'>Dashboard</Link>
    </Nav.Item>
  </Nav>
</Router>
```

Nav item (disabled)
```jsx
import {BrowserRouter as Router, Link} from 'react-router-dom';
<Router>
  <Nav>
    <Nav.Item>
      <Link to='/'>Home</Link>
    </Nav.Item>
    <Nav.Item disabled>
      <Link to='/'>Dashboard</Link>
    </Nav.Item>
  </Nav>
</Router>
```

Nav item (dropdown)
```jsx
import {BrowserRouter as Router, Link} from 'react-router-dom';
<Router>
  <Nav>
    <Nav.Item>
      <Link to='/'>Home</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/'>Dashboard</Link>
      <Nav.Dropdown>
        <Nav.SubItem>
          <Link to='#'>Help</Link>
        </Nav.SubItem>
        <Nav.SubItem>
          <Link to='#'>Contact Us</Link>
        </Nav.SubItem>
      </Nav.Dropdown>
    </Nav.Item>
  </Nav>
</Router>
```

Nav item (dropdown with active/disabled)
```jsx
import {BrowserRouter as Router, Link} from 'react-router-dom';
<Router>
  <Nav>
    <Nav.Item>
      <Link to='/'>Home</Link>
    </Nav.Item>
    <Nav.Item>
      <Link to='/'>Dashboard</Link>
      <Nav.Dropdown>
        <Nav.SubItem active>
          <Link to='#'>Help</Link>
        </Nav.SubItem>
        <Nav.SubItem disabled>
          <Link to='#'>Contact Us</Link>
        </Nav.SubItem>
      </Nav.Dropdown>
    </Nav.Item>
  </Nav>
</Router>
```