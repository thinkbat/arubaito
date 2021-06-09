import React, { useState, useRef, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { SIZE_HEIGHT_TABLE_ROW } from '@tokens/variables.js';
import { useSpring, animated } from 'react-spring';
import './table-row-accordion.scss';

const ROW_HEIGHT = Number(SIZE_HEIGHT_TABLE_ROW);
const MAX_VISIBLE_ROWS = 6;

/**
 * @visibleName TableRowAccordion
 *  
**/
const TableRowAccordion = forwardRef(({ render, rowsLength, moduleClassName, ...otherProps}, ref) => {
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const multipleRows = rowsLength > 1;
  const scrollEl = ref || useRef();
  const scrollTop = scrollEl.current ? scrollEl.current.scrollTop : 0;

  const currentRow = scrollEl.current && scrollEl.current.querySelector('tr');
  const CLOSED_ROW_HEIGHT = Math.max(ROW_HEIGHT, currentRow ? currentRow.offsetHeight : 0);

  const ROWS_SUM_HEIGHT = CLOSED_ROW_HEIGHT * MAX_VISIBLE_ROWS;
  const calcAccordionHeight = rowsLength => rowsLength >= MAX_VISIBLE_ROWS ? ROWS_SUM_HEIGHT : (rowsLength || 1) * CLOSED_ROW_HEIGHT;

  const accordionHeight = calcAccordionHeight(rowsLength);

  const scrollAnimation = useSpring({
    from: { y:  scrollTop },
    to: { y: scrollPos },
    config: { duration: 120 },
    immediate: scrollTop === scrollPos,
  });

  const accordionAnimation = useSpring({
    height: open ? accordionHeight : CLOSED_ROW_HEIGHT,
    config: { tension: 200, friction: 24 },
    onRest: () => {
      if (!open && scrollPos === scrollTop) setScrollPos(0);
    },
  });

  const onToggle = () => {
    if (!multipleRows) return;
    setScrollPos(scrollEl.current.scrollTop);
    setOpen(!open);
  };

  return (
    <animated.tbody
      className={cx('gdm-scroll-shadow', {'gdm-no-scroll': !open})}
      moduleClassName={cx('table-row-accordion', moduleClassName, {'single-row': !multipleRows, 'open': open})}
      ref={scrollEl}
      style={accordionAnimation}
      scrollTop={scrollAnimation.y}
      {...otherProps}
    >
      {render(onToggle, open)}
    </animated.tbody>
  );
});

const ToggleButton = forwardRef(({children, className, moduleClassName, ...otherProps}, ref) => (
  <button className={cx('gdm-paragraph-sm', className)} moduleClassName={cx('button', moduleClassName)} ref={ref} {...otherProps}>
    <span className='gdm-icon gdm-icon-xs gdm-icon-caret' moduleClassName='caret'/>
    {children}
  </button>
));

TableRowAccordion.ToggleButton = ToggleButton;

TableRowAccordion.propTypes = {
  /** class names are for utility classes */
  className: PropTypes.string,
  /** module class names are for component scoped css */
  moduleClassName: PropTypes.string,
  /** Amount of rows is needed to calculate the animation */
  rowsLength: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};

/* @component */
export default TableRowAccordion;