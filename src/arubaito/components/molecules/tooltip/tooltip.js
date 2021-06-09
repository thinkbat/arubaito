import React, {
  Fragment, cloneElement, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { createPortal } from 'react-dom';
import { Popper } from 'react-popper';
import './tooltip.scss';

 const ToolTip = ({ children, trigger, open, placement = 'top', targetId = 'portal', moduleClassName, ...otherProps }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [triggerNode, setTriggerNode] = useState(null);

  const triggerRef = useCallback((node) => {
    if (!node) return;

    setTriggerNode(node);

    node.addEventListener('mouseenter', e => e.target === node && setIsHovering(true));
    node.addEventListener('mouseleave', e => e.target === node && setIsHovering(false));
  }, []);

  const isOpen = open === true || (open !== false && isHovering);

  const modifiers = { preventOverflow: { boundariesElement: 'viewport' }};

  return (
    <Fragment>
      {cloneElement(trigger, { ref: triggerRef })}
      {isOpen && createPortal(
        <Popper placement={placement} referenceElement={triggerNode} modifiers={modifiers}>
          {({ ref, style, placement, arrowProps }) => (
            <div ref={ref} style={style} data-placement={placement} moduleClassName={cx('tooltip', moduleClassName)} {...otherProps}>
              <p className='gdm-paragraph-sm'>
                {children}
              </p>
              <div ref={arrowProps.ref} moduleClassName='tooltipArrow' style={arrowProps.style} />
            </div>
          )}
        </Popper>,
        document.getElementById(targetId)
      )}
    </Fragment>
  );
}

ToolTip.propTypes = {
  trigger: PropTypes.element.isRequired,
  open: PropTypes.bool,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
};

export default ToolTip;
