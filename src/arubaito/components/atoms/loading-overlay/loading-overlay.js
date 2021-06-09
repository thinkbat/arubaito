import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './loading-overlay.scss';

/**
 * @visibleName LoadingOverlay
 *
**/
const LoadingOverlay = forwardRef(({ moduleClassName, light, ...otherProps }, ref) => (
  <div moduleClassName={cx('loading-overlay', moduleClassName, {'light': light})} ref={ref} {...otherProps}>
    <span className='gdm-icon gdm-icon-xl gdm-icon-loading-spinner' moduleClassName='loading-spinner'/>
  </div>
));

LoadingOverlay.propTypes = {
  /** Light mode for dark backgrounds */
  light: PropTypes.bool,
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string,
};

/* @component */
export default LoadingOverlay;