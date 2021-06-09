import React, { useState, createContext, useContext, forwardRef, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './stepper.scss';

/**
 * @visibleName Stepper
**/

const minSteps = 2;
const maxSteps = 5;
const StepperContext = createContext();

const Stepper = forwardRef(({
  activeStep = 0,
  children,
  moduleClassName,
  ...otherProps
}, ref) => {
  const [allStepCompleted, setAllStepCompleted] = useState(false);

  useEffect(() => {
    setAllStepCompleted(activeStep === children.length);
  }, [activeStep]);

  return (
    <StepperContext.Provider value={{ activeStep, allStepCompleted, totalSteps: children.length }}>
      <div moduleClassName="stepper-container">
        { allStepCompleted && <span className="gdm-label" moduleClassName="complete-label">Complete</span> }
        <div
          moduleClassName="stepper"
          className="gdm-w-24"
          ref={ref}
          {...otherProps}
        >
          {children}
        </div>
      </div>
    </StepperContext.Provider>
  );
});

/**
 * StepContext is used to store the Step Level information
 * e.g., Each step status
 * */
const StepContext = createContext();

// Connector is responsible to connect Steps
const Connector = animated(() => {
  const { stepStatus, connectorTopPosition } = useContext(StepContext);
  const [styleProps, setStyleProps] = useSpring(() => ({ width: '0%' }));

  useEffect(() => {
    setStyleProps({ width: stepStatus === 'complete' ? '100%' : '0%' });
  }, [stepStatus]);
  return (
    <div
      style={{ top: `${connectorTopPosition}px` }}
      moduleClassName="step-connector"
      className="gdm-w-24"
    >
      <animated.div style={styleProps} moduleClassName="progress-bar" />
    </div>
  );
});

// Step is a wrapper around the Connector and the StepLabel
const Step = ({ index, children, ...otherProps }) => {
  const { activeStep, totalSteps } = useContext(StepperContext);
  const [stepStatus, setStepStatus] = useState(index === 0 ? 'active' : 'incomplete');
  const [connectorTopPosition, setConnectorTopPosition] = useState(0);

  const isLastStep = index + 1 === totalSteps;

  useEffect(() => {
    if (activeStep === index) {
      setStepStatus('active');
    } else if (activeStep > index) {
      setStepStatus('complete');
    } else {
      setStepStatus('incomplete');
    }
  }, [activeStep]);

  const stepConnector = <Connector />;

  return (
    <StepContext.Provider value={{ stepStatus, index, connectorTopPosition, setConnectorTopPosition }}>
      <div moduleClassName="step-container" {...otherProps}>
        { children }
        { !isLastStep && stepConnector }
      </div>
    </StepContext.Provider>
  );
};

/**
 * StepLabel contains Circle Icon, top and bottom label.
 * Steplabel is also responsible to connect the connector from the center of each step
 *  if steplabel's height changes we need to recalculate the center position of connector
 *  we have handled this case in the useEffect hook.
 */
const StepLabel = ({ children }) => {
  const { allStepCompleted } = useContext(StepperContext);
  const { stepStatus, index, setConnectorTopPosition } = useContext(StepContext);
  const stepIconRef = useRef();

  useEffect(() => {
    setConnectorTopPosition(stepIconRef.current.offsetTop + Math.floor(stepIconRef.current.offsetHeight / 2));
  }, [allStepCompleted]);

  const getLabelStyles = position => cx(`step-label-${position}`);
  const labelStyles = cx('gdm-label', { 'gdm-color-rules': stepStatus !== 'active' });

  return (
    <div moduleClassName="step-label">
      {!allStepCompleted && <span className={labelStyles} moduleClassName={getLabelStyles('top')}>Step {index+1}</span>}
      <div ref={stepIconRef} moduleClassName={cx('step-icon', stepStatus)} />
      {children && <span className={labelStyles} moduleClassName={getLabelStyles('bottom')}>{children}</span>}
    </div>
  );
};

Stepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  children: (props, propName, componentName) => {
    const childrenLength = (props[propName] && props[propName].length) || 0;
    if (childrenLength < minSteps || childrenLength > maxSteps ) {
      return new Error(
        `${propName} of ${componentName} component should have a length between ${minSteps} to ${maxSteps}`
      );
    }
  },
  moduleClassName: PropTypes.string,
};

Stepper.defaultProps = {
  moduleClassName: '',
};

Step.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

StepLabel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
};

StepLabel.defaultProps = {
  children: '',
};

Stepper.Step = Step;
Stepper.StepLabel = StepLabel;

export default Stepper;
