import React, { Fragment, isValidElement, Children, cloneElement, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './tabs.scss';

const Tabs = forwardRef(({ children: childrenProp, onChange, value, moduleClassName, ...otherProps }, ref) => {

  let childIndex = 0;
  const children = Children.map(childrenProp, (child) => {
    if (!isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    const active = childValue === value;

    childIndex += 1;
    return cloneElement(child, {
      active,
      onChange,
      value: childValue,
      ...child.props
    });
  });

  return (
    <div
      moduleClassName={cx(
        'tabs',
        moduleClassName
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  )
});

const Tab = forwardRef(({ children, moduleClassName, disabled, active, icon, onChange, value, classNames, ...otherProps }, ref) => (
  <Fragment>
    <button
      onClick={() => !disabled && onChange(value)}
      moduleClassName={cx(
        'tab',
        moduleClassName,
        {
          'active': active,
          'disabled': disabled
        }
      )}
      className={cx(
        'gdm-label gdm-btn-override',
        classNames
      )}
      disabled={disabled}
      ref={ref}
      {...otherProps}
    >
      {children}
    </button>
    {icon}
  </Fragment>
));

const Panel = forwardRef(({ children, moduleClassName, active, ...otherProps }, ref) => (
  <div
    moduleClassName={cx(
      'panel',
      moduleClassName,
      {
        'active': active,
      }
    )}
    ref={ref}
    {...otherProps}
  >
    {children}
  </div>
));

const Icon = forwardRef(({ children, moduleClassName, ...otherProps }, ref) => (
  <div moduleClassName={cx('icon', moduleClassName)} ref={ref} {...otherProps}>
    {children}
  </div>
));

Tabs.Tab = Tab;
Tabs.Icon = Icon;
Tabs.Panel = Panel;

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  moduleClassName: PropTypes.string,
  info: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
};

export default Tabs;