import React, { createContext, useEffect, useReducer, useContext, useRef, forwardRef } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import PropTypes from 'prop-types';
import cx from 'classnames'
import InputText from 'components/atoms/input/input-text';
import { useScrollDistance } from 'utils/hooks';
import multiSelectStyles from './multi-select.scss';
import dropdownStyles from '../dropdown/dropdown.scss';

const LIST_ITEM_HEIGHT = 40;

const ACTIONS = {
  toggle: 'toggle',
  setList: 'set_list',
  setInitialList: 'set_initial_list',
  setActiveItem: 'set_active_item',
  search: 'search'
};

const Store = createContext();

const MultiSelectReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.toggle:
      return {
        ...state,
        open: action.payload,
        searchTerm: '',
        filteredList: state.list,
        activeItem: {}
      };
    case ACTIONS.setInitialList:
      return {
        ...state,
        initialList: action.payload
      }
    case ACTIONS.setList:
      const newList = state.initialList.filter((item) => state.displayValue ? !action.payload.some((selectedItem) => selectedItem[state.displayValue] === item[state.displayValue]) : !action.payload.some((selectedItem) => selectedItem === item));
      return {
        ...state,
        list: newList
      };
    case ACTIONS.setActiveItem:
      return {
        ...state,
        activeItem: action.payload
      };
    case ACTIONS.search:
      const filteredList = state.list.filter(d => state.displayValue ? d[state.displayValue].match(new RegExp(action.payload, 'i')) : d.match(new RegExp(action.payload, 'i')));
      return {
        ...state,
        searchTerm: action.payload,
        filteredList: filteredList,
        activeItem: filteredList[0] || {}
      };
    default:
      return state;
  }
}

const MultiSelect = forwardRef(({ onSelect, selectedList, initialList, onMouseLeave, displayValue, children, moduleClassName, label, inputProps, ...otherProps }, ref) => {
  const [state, dispatch] = useReducer(
    MultiSelectReducer,
    {
      searchTerm: '',
      open: false,
      displayValue,
      initialList,
      list: initialList || [],
      filteredList: initialList || [],
      activeItem: {}
    }
  );
  const firstRender = useRef(true);
  const activeItemRef = useRef({});
  const scrollContainerRef = useRef();

  const activeElement = activeItemRef.current[displayValue ? state.activeItem[displayValue] : state.activeItem];
  const scrollContainer = scrollContainerRef.current;
  const scrollDistance = useScrollDistance(activeElement, scrollContainer);

  useEffect(() => {
    if(!firstRender.current){
      dispatch({ type: ACTIONS.setInitialList, payload: initialList });
      dispatch({ type: ACTIONS.setList, payload: selectedList });
      dispatch({ type: ACTIONS.search, payload: state.searchTerm });
    }
  }, [initialList]);

  useEffect(() => {
    !firstRender.current && dispatch({ type: ACTIONS.setList, payload: selectedList });
  }, [selectedList]);

  useEffect(() => {
    scrollContainer && scrollContainer.scrollTo(0, scrollDistance);
    /** last effect of current cycle*/
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  }, [scrollDistance]);

  const listAnimation = useTransition(state.open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleMouseLeave = () => {
    onMouseLeave();
    toggleDropdown(false) ;
  };

  const handleOnSelect = (activeItem) => {
    onSelect(activeItem);
    toggleDropdown(false);
  };

  const toggleDropdown = open => dispatch({ type: ACTIONS.toggle, payload: open });

  const handleKeyDown = e => {
    const lastIndex = state.filteredList.length - 1;
    const firstIndex = 0;
    const activeItemIndex = state.filteredList.findIndex((item) => displayValue ? item[displayValue] === state.activeItem[displayValue] : item === state.activeItem);
    if (e.key === 'Escape' || e.key === 'Tab') {
      toggleDropdown(false);
      return;
    } else if (e.key === 'Enter' && Object.keys(state.activeItem).length) {
      handleOnSelect(state.activeItem);
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

  return (
    <Store.Provider value={{ state, dispatch, handleOnSelect, toggleDropdown, activeItemRef, scrollContainerRef }}>
      <div moduleClassName={cx('multiSelectStyles.multi-select-wrapper', moduleClassName)} ref={ref} {...otherProps} onMouseLeave={handleMouseLeave}>
        <label className='gdm-label gdm-block'>{label}</label>
        <div className='gdm-m-bottom-sm gdm-relative'>
          <InputText
            name='search placeholder'
            onFocus={() => toggleDropdown(true)}
            onChange={() => undefined}
            {...inputProps}
          />
          <span className='gdm-icon gdm-icon-md gdm-icon-search' moduleClassName='search-icon' />
        </div>
        {listAnimation.map(({ item, key, props }) => item && (
          <animated.div moduleClassName='dropdownStyles.dropdown-wrapper multiSelectStyles.dropdown-wrapper' key={key} style={props}>
            <div moduleClassName='dropdownStyles.dropdown-inner-wrapper'>
              <label className='gdm-label'>{label}</label>
              <div className='gdm-m-bottom-sm gdm-relative'>
                <InputText
                  name='search'
                  value={state.searchTerm}
                  autoFocus={true}
                  autoComplete='off'
                  status={state.filteredList.length || !state.searchTerm ? '' : 'error'}
                  onChange={(e) => dispatch({ type: ACTIONS.search, payload: e.target.value })}
                  onKeyDown={handleKeyDown}
                  {...inputProps}
                />
                <span className='gdm-icon gdm-icon-md gdm-icon-search' moduleClassName='search-icon' />
              </div>
              { children }
            </div>
          </animated.div>
        ))}
      </div>
    </Store.Provider>
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
      moduleClassName='dropdownStyles.list'
      ref={scrollContainerRef}
    >
      {
        state.filteredList.length
          ? state.filteredList.map((item) => render(item))
          : state.searchTerm && <span className='gdm-notification-lg gdm-color-brand-primary'>No results match your search</span>
      }
    </animated.ul>
  );
};

const ListItem = ({ item, children, ...otherProps }) => {
  const { state, handleOnSelect, activeItemRef } = useContext(Store);
  const displayValue = state.displayValue;
  const slideAnimation = useSpring({ transform: state.open ? 'translateY(0)' : 'translateY(-4px)' });

  return (
    <animated.li
      ref={element => activeItemRef.current[displayValue ? item[displayValue] : item] = element}
      style={slideAnimation}
      moduleClassName='dropdownStyles.list-item'
      data-active={displayValue ? state.activeItem[displayValue] === item[displayValue] : state.activeItem === item}
      onClick={() => handleOnSelect(item)}
      {...otherProps}
    >
      {children}
    </animated.li>
  );
};

MultiSelect.List = List;
MultiSelect.ListItem = ListItem;

MultiSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
  initialList: PropTypes.array.isRequired,
  selectedList: PropTypes.array.isRequired,
  onMouseLeave: PropTypes.func,
  inputProps: PropTypes.object,
};

MultiSelect.defaultProps = {
  inputProps: {},
  onMouseLeave: () => {},
};

/* @component */
export default MultiSelect;