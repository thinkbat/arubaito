import React, { useReducer, createContext, useContext, forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from 'components/atoms/button';
import './table-row-select.scss';

const Store = createContext();
const SET_OPEN = 'SET_OPEN';
const InitialState = { open: false };

const TableRowReducer = (state, action) => {  
  switch (action.type) {
    case SET_OPEN:
      return {
        open: action.payload,
      };
    default:
      return state;
  }
}

const TableRowSelect = forwardRef(({animationDistance = '114px', children, ...otherProps}, ref) => {
  const [state, dispatch] = useReducer(TableRowReducer, InitialState);
  const tableRowAnimation = useSpring({
    transform: state.open ? `translateX(${animationDistance})` : 'translateX(0px)',
  });

  const toggle = (state) => dispatch({type: SET_OPEN, payload: state});

  return (
    <Store.Provider value={{ state, toggle }}>
      <animated.tr
        onMouseEnter={() => toggle(true)}
        onMouseLeave={() => toggle(false)}
        style={tableRowAnimation}
        ref={ref}
        {...otherProps}
      >
        {children}
      </animated.tr>
    </Store.Provider>
  );
});

const SelectButton = forwardRef(({moduleClassName, children, onClick, ...otherProps}, ref) => {
  const { toggle } = useContext(Store);
  const select = (e) => {
    onClick(e);
    toggle(false)
  }

  return (
    <Button
      moduleClassName={cx('button', moduleClassName)}
      onClick={select}
      variant="primary"
      onFocus={() => toggle(true)}
      onBlur={() => toggle(false)}
      ref={ref}
      {...otherProps}
    >
      {children}
    </Button>
  );
});

TableRowSelect.Button = SelectButton;

TableRowSelect.propTypes = {
  /** class names are for utility classes */
  className: PropTypes.string,
  /** module class names are for component scoped css */
  moduleClassName: PropTypes.string,
  /** distance by which the animation will move the row, this should also be the same as the width of the button */
  animationDistance: PropTypes.string,
};

TableRowSelect.Button.propTypes = {
  /** class names are for utility classes */
  className: PropTypes.string,
  /** module class names are for component scoped css */
  moduleClassName: PropTypes.string,
  /** click event */
  onClick: PropTypes.func.isRequired,
};

/* @component */
export default TableRowSelect;