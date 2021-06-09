import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './footnote.scss'

/**
 * @visibleName Footnote
 *
**/

const Footnote = forwardRef(({
  moduleClassName,
  children,
  ...otherProps
}, ref) => {
  const moduleClasses = cx('footnote', moduleClassName);
  return (
    <div moduleClassName={moduleClasses} ref={ref} {...otherProps}>
      {children}
    </div>
  );
});

const FootnoteIcon = forwardRef(({className, ...otherProps}, ref) => <span className={cx('gdm-m-bottom-sm gdm-icon gdm-icon-xl', className)} ref={ref} {...otherProps}/>);
const FootnoteHeader = forwardRef(({className, ...otherProps}, ref) => <h2 className={cx('gdm-subtitle', className)} ref={ref} {...otherProps}/>);
const FootnoteBody = forwardRef(({className, ...otherProps}, ref) => <span className={cx('gdm-paragraph-lg gdm-color-brand-primary', className)} ref={ref} {...otherProps}/>);

Footnote.Icon = FootnoteIcon;
Footnote.Header = FootnoteHeader;
Footnote.Body = FootnoteBody;

Footnote.propTypes = {
  children: PropTypes.node.isRequired,
  /** Class names are for utility classes */
  className: PropTypes.string,
  /** Module class names are for component scoped css */
  moduleClassName: PropTypes.string
};

/* @component */
export default Footnote;