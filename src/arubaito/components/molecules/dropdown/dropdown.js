import React, { createContext, useEffect, useReducer, useContext, useRef, forwardRef } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import PropTypes from 'prop-types';
import cx from 'classnames'
import InputText from 'components/atoms/input/input-text';
import { useScrollDistance } from 'utils/hooks';
import './dropdown.scss';

const noop = () => {};
const LIST_ITEM_HEIGHT = 40;

const ACTIONS = {
  toggle: 'toggle',
  initial: 'initial',
  setActiveItem: 'set_active_item',
  search: 'search',
  select: 'select'
};

const Store = createContext();

const DropdownInitialState = {
  open: false,
  searchTerm: '',
  selected: {},
  initialList: [],
  filteredList: [],
  activeItem: {}
};

const DropdownReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.initial:
      return {
        ...state,
        selected: action.payload.selected || action.payload.list[0],
        initialList: action.payload.list,
        filteredList: action.payload.list,
        displayValue: action.payload.displayValue,
        activeItem: action.payload.selected || {},
      };
    case ACTIONS.toggle:
      return {
        ...state,
        open: action.payload,
        searchTerm: '',
        filteredList: state.initialList,
        activeItem: {}
      };
    case ACTIONS.search:
      const filteredList = state.initialList.filter(d => state.displayValue ? d[state.displayValue].match(new RegExp(action.payload, 'i')) : d.match(new RegExp(action.payload, 'i')));
      return {
        ...state,
        searchTerm: action.payload,
        filteredList: filteredList,
        activeItem: filteredList[0] || {}
      };
    case ACTIONS.select:
      return {
        ...state,
        selected: action.payload,
        open: false,
        searchTerm: '',
        filteredList: state.initialList,
        activeItem: action.payload,
      };
    case ACTIONS.setActiveItem:
      return {
        ...state,
        activeItem: action.payload
      };
    default:
      return state;
  }
};

const Dropdown = forwardRef(({ selectCallback, render, selected, list, children, displayValue, ...otherProps }, ref) => {
  const [state, dispatch] = useReducer(DropdownReducer, DropdownInitialState);
  
  useEffect(() => {
    dispatch({
      type: ACTIONS.initial,
      payload: {
        selected,
        list,
        displayValue
      }
    });
  }, [selected, list]);

  const activeItemRef = useRef({});
  const scrollContainerRef = useRef();
  const firstRender = useRef(true);

  const activeElement = activeItemRef.current[displayValue ? state.activeItem[displayValue] : state.activeItem];
  const scrollContainer = scrollContainerRef.current;
  const scrollDistance = useScrollDistance(activeElement, scrollContainer);
  
  useEffect(() => {
    if(firstRender.current) {
      firstRender.current = false;
      return;
    }
    selectCallback(state.selected);
  }, [state.selected]);

  useEffect(() => {
    scrollContainer && scrollContainer.scrollTo(0, scrollDistance)
  }, [scrollDistance]);

  const dropdownAnimation = useTransition(state.open, null, {
    from: {
      opacity: 0,
      transform: 'translateY(-8px)',
    },
    enter: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    leave: {
      opacity: 0,
      transform: 'translateY(-8px)'
    },
  });

  const handleKeyDown = e => {
    const lastIndex = state.filteredList.length - 1;
    const firstIndex = 0;
    const activeItemIndex= state.filteredList.findIndex((item) => displayValue ? item[displayValue] === state.activeItem[displayValue] : item === state.activeItem);

    if (e.key === 'Escape' || e.key === 'Tab') {
      toggleDropdown(false);
      return;
    } else if (e.key === 'Enter' && Object.keys(state.activeItem).length) {
      dispatch({ type: ACTIONS.select, payload: state.activeItem });
      return;      
    } else if (e.key === 'ArrowDown') {
      const nextActiveIndex = activeItemIndex == lastIndex ? firstIndex : activeItemIndex + 1;
      dispatch({ type: ACTIONS.setActiveItem, payload: state.filteredList[nextActiveIndex] });
      return
    } else if (e.key === 'ArrowUp') {
      const nextActiveIndex = activeItemIndex == firstIndex ? lastIndex : activeItemIndex - 1;
      dispatch({ type: ACTIONS.setActiveItem, payload: state.filteredList[nextActiveIndex] });
    }
  };

  const toggleDropdown = open => dispatch({ type: ACTIONS.toggle, payload: open });

  return (
    <Store.Provider value={{ state, dispatch, activeItemRef, scrollContainerRef, handleKeyDown }}>
      <div
        moduleClassName='dropdown'
        ref={ref}
        {...otherProps}
        onMouseLeave={() => toggleDropdown(false)}
      >
        <button className='gdm-p-bottom-xs gdm-btn-override' onMouseEnter={() => toggleDropdown(true)} onFocus={() => toggleDropdown(true)}>
          {render(state.selected)}
        </button>
        {dropdownAnimation.map(({ item, key, props }) => item && (
          <animated.div moduleClassName='dropdown-wrapper' key={key} style={props}>
            <div moduleClassName='dropdown-inner-wrapper'>
              { children }
            </div>
          </animated.div>
        ))}
      </div>
    </Store.Provider>
  );
});

const Selected = ({ className, children, ...otherProps }) => {
  const { state } = useContext(Store);

  const caretAnimation = useSpring({
    transform: state.open ? 'rotateX(180deg) rotateY(180deg)' : 'rotateX(0deg) rotateY(0deg)',
  });

  return (
    <>
      <span className={cx('gdm-heading-lg', className)} {...otherProps}>{ children }</span>
      <animated.span className='gdm-icon gdm-icon-caret gdm-icon-sm gdm-m-left-xs' style={caretAnimation} />
    </>
  );
};

const Search = forwardRef(({ className, ...otherProps }, ref) => {
  const { state, dispatch, handleKeyDown } = useContext(Store);
  return (
    <div moduleClassName='search-wrapper'>
      <InputText
        className={cx('gdm-m-bottom-md gdm-block', className)}
        name='search'
        value={state.searchTerm}
        status={state.filteredList.length ? '' : 'error'}
        onChange={(e) => dispatch({ type: ACTIONS.search, payload: e.target.value })}
        onKeyDown={handleKeyDown}
        ref={ref}
        {...otherProps}
      />
    </div>
  );
});

const List = ({ render }) => {
  const { state, scrollContainerRef } = useContext(Store);

  const heightAnimation = useSpring({
    height: (Math.min(state.filteredList.length, 6) || 1) * LIST_ITEM_HEIGHT,
  }, [state.filteredList.length]);

  return (
    <animated.ul
      style={heightAnimation}
      className='gdm-scroll-shadow'
      moduleClassName='list'
      ref={scrollContainerRef}
    >
      {
        state.filteredList.length
        ? state.filteredList.map((item) => render(item))
        : <span className='gdm-notification-lg gdm-color-brand-primary'>No results match your search</span>
      }
    </animated.ul>
  );
};

const ListItem = ({ item, children, ...otherProps }) => {
  const { state, dispatch, activeItemRef } = useContext(Store);

  const displayValue = state.displayValue;
  const slideAnimation = useSpring({ transform: state.open ? 'translateY(0)' : 'translateY(-4px)' });
  return (
    <animated.li
      style={slideAnimation}
      ref={element => activeItemRef.current[displayValue ? item[displayValue] : item] = element}
      data-active={displayValue ? state.activeItem[displayValue] === item[displayValue] : state.activeItem === item}
      moduleClassName='list-item'
      onClick={() => dispatch({ type: ACTIONS.select, payload: item })}
      {...otherProps}
    >
      {children}
    </animated.li>
  );
};

Dropdown.Selected = Selected;
Dropdown.Search = Search;
Dropdown.List = List;
Dropdown.ListItem = ListItem;

Dropdown.propTypes = {
  /** if list is an array of object, specify which key should be displayed */
  displayValue: PropTypes.string,
  selectCallback: PropTypes.func,
  render: PropTypes.func,
  selected: PropTypes.object,
  list: PropTypes.array.isRequired
};

Dropdown.defaultProps = {
  selectCallback: noop,
  render: noop
};

/* @component */
export default Dropdown;