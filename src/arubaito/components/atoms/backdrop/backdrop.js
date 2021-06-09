import React, { Fragment, forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { animated } from 'react-spring'
import './backdrop.scss';

/**
 * @visibleName Backdrop
 *
**/
const Backdrop = forwardRef(({moduleClassName, animated: hasAnimation, ...otherProps}, ref) => {
  const moduleClasses = cx('backdrop', moduleClassName);
  
  return (
    <Fragment>
      {
        hasAnimation
        ? <animated.div moduleClassName={moduleClasses} {...otherProps} ref={ref}/>
        : <div moduleClassName={moduleClasses} {...otherProps} ref={ref}/>
      }
    </Fragment>
  );
});

Backdrop.propTypes = {
  /** if passed, backdrop will render a <animated.div/>. Use react-spring to pass the animated style property to backdrop */
  animated: PropTypes.bool,
  onClick: PropTypes.func,
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string
};

/* @component */
export default Backdrop;