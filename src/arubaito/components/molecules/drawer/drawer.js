import React, { useState, useEffect, useRef, createContext, useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring'
import { SIZE_HEIGHT_DRAWER_TOGGLE } from '@tokens/variables.js';
import cx from 'classnames';
import Backdrop from 'components/atoms/backdrop';
import './drawer.scss';

const Store = createContext();

const Drawer = forwardRef(({ renderHeader, renderContent, moduleClassName, show = false, ...otherProps }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hideContent, setHideContent] = useState(!show);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (!show && isOpen) setIsOpen(false);
    if (show && hideContent) setHideContent(false);
  }, [show]);

  const drawerAnimation = useSpring({
    transform: show
      ? isOpen ? `translateY(calc(0% + 0px))` : `translateY(calc(100% - ${headerHeight * -1}))`
      : `translateY(calc(100% + ${SIZE_HEIGHT_DRAWER_TOGGLE}))`,
    onRest: () => {
      if (!show && !hideContent) setHideContent(true);
    }
  });

  const backdropAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? 'all' : 'none'
  });

  const toggleIsOpen = () => setIsOpen(isOpen => !isOpen);

  return (
    <Store.Provider value={{ isOpen, setHeaderHeight }}>
      <div
        moduleClassName={cx('drawer-wrapper', moduleClassName)}
        ref={ref}
        {...otherProps}
      >
        <Backdrop onClick={toggleIsOpen} style={backdropAnimation} animated/>
        <animated.div
          style={drawerAnimation}
          moduleClassName='drawer'
        >
          <div className={cx({'gdm-invisible': hideContent})} moduleClassName='drawer-inner-wraper'>
            {renderHeader && renderHeader(toggleIsOpen)}
            {renderContent && renderContent(toggleIsOpen)}
          </div>
        </animated.div>
      </div>
    </Store.Provider>
  );
});

const Toggle = forwardRef(({ children, moduleClassName, iconClassName, ...otherProps }, ref) => {
  const { isOpen } = useContext(Store);
  const animateIcon = useSpring({
    transform: isOpen ? 'rotate(0deg)' : 'rotate(-180deg)'
  });
  const moduleClasses = cx("drawer-toggle", moduleClassName);

  return (
    <div
      moduleClassName={moduleClasses}
      ref={ref}
      {...otherProps}
    >
      <animated.span style={animateIcon} className={cx('gdm-icon gdm-icon-sm gdm-icon-caret gdm-align-middle gdm-color-light', iconClassName)} />
      {children}
    </div>
  );
});

const Header = forwardRef(({ children, moduleClassName, onClick, ...otherProps }, ref) => {
  const headerRef = ref || useRef(null);
  const { setHeaderHeight } = useContext(Store);

  useEffect(() => {
    setHeaderHeight(headerRef.current.scrollHeight);
  }, []);

  return (
    <div
      moduleClassName={cx('drawer-header', moduleClassName, { 'clickable': !!onClick })}
      ref={headerRef}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </div>
  );
});

const Content = forwardRef(({ children, moduleClassName, ...otherProps }, ref) => (
  <div
    moduleClassName={cx('drawer-content', moduleClassName)}
    ref={ref}
    {...otherProps}
  >
    {children}
  </div>
));

Drawer.Toggle = Toggle;
Drawer.Header = Header;
Drawer.Content = Content;

Drawer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  renderHeader: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
};

export default Drawer;