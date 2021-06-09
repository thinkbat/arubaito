Simple Stepper
```jsx
  import Button from '../../atoms/button';
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Cart', 'Address', 'Payment'];
  <div>
    <Stepper activeStep={activeStep}>
      {steps.map((label, i) => (
        <Stepper.Step key={label} index={i}>
          <Stepper.StepLabel />
        </Stepper.Step>
      ))}
    </Stepper>
    <div style={{display: "flex", "justifyContent": "center"}}>
      <Button
        className='gdm-m-left-sm gdm-m-top-md'
        variant="primary"
        onClick={() => activeStep > 0 && setActiveStep((activeStep-1)%(steps.length+1))}
      >
        Back
      </Button>
      <Button
        className='gdm-m-left-sm gdm-m-top-md'
        variant="primary"
        onClick={() => setActiveStep((activeStep+1)%(steps.length+1))}
      >
        Continue
      </Button>
    </div>
  </div>
```

Stepper with Label
```jsx
  import Button from '../../atoms/button';
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ['Cart', 'Address', 'Payment'];
  <div>
    <Stepper activeStep={activeStep}>
      {steps.map((label, i) => (
        <Stepper.Step key={label} index={i}>
          <Stepper.StepLabel>{label}</Stepper.StepLabel>
        </Stepper.Step>
      ))}
    </Stepper>
    <div style={{display: "flex", "justifyContent": "center"}}>
      <Button
        className='gdm-m-left-sm gdm-m-top-md'
        variant="primary"
        onClick={() => activeStep > 0 && setActiveStep((activeStep-1)%(steps.length+1))}
      >
        Back
      </Button>
      <Button
        className='gdm-m-left-sm gdm-m-top-md'
        variant="primary"
        onClick={() => setActiveStep((activeStep+1)%(steps.length+1))}
      >
        Continue
      </Button>
    </div>
  </div>
```