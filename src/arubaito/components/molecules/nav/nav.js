import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import "./nav.scss";

/**
 * @visibleName Nav
 *
**/
const Nav = forwardRef(({ children, moduleClassName, ...otherProps }, ref) => (
  <nav
    moduleClassName={cx(
      'nav',
      moduleClassName
    )}
    ref={ref}
    {...otherProps}
  >
    <ul moduleClassName='nav-list'>
      {children}
    </ul>
  </nav>
));

const Item = forwardRef(({ children, moduleClassName, disabled, active, ...otherProps }, ref) => (
  <li
    moduleClassName={cx(
      'item',
      moduleClassName,
      {
        'active': active,
        'disabled': disabled
      }
    )}
    ref={ref}
    {...otherProps}
  >
    {children}
  </li>
));

const Dropdown = forwardRef(({children, ...otherProps}, ref) => (
  <div moduleClassName='dropdown' ref={ref} {...otherProps}>
    <ul moduleClassName='dropdown-list'>
      {children}
    </ul>
  </div>
));

const SubItem = forwardRef(({children, moduleClassName, disabled, active, ...otherProps}, ref) => (
  <li 
    moduleClassName={cx(
      'subitem',
      moduleClassName,
      {
        'active': active,
        'disabled': disabled
      }
    )}
    ref={ref}
    {...otherProps}
  >
    {children}
  </li>
));

Nav.Item = Item;
Nav.Dropdown = Dropdown;
Nav.SubItem = SubItem;

Nav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  moduleClassName: PropTypes.string,
};

export default Nav;
