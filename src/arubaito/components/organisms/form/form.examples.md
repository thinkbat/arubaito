Form:
```jsx
  import InputField from 'components/molecules/input-field';
  import Button from 'components/atoms/button';

  <Form
    initialInputsData={{
      firstname: {
        value: 'Max',
        validate: value => value.length > 0,
        statusMsg: "First Name can't be empty.",
      },
      lastname: {
        value: 'Mustermann',
        validate: value => value.length > 0,
        statusMsg: "Last Name can't be empty.",
      },
      email: {
        value: '',
        validate: value => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
        statusMsg: "Please enter a valid Email.",
      },
      address: {
        value: '',
        validate: value => value.length > 0,
        statusMsg: "Please enter a valid Address."
      },
      additional: {
        value: ''
      },
      password: {
        value: '',
        validate: value => value.length >= 6,
        statusMsg: "Password must be at least 6 characters long."
      },
      country: {
        value: '',
        validate: value => value.length > 0,
        statusMsg: "Please select a country."
      }
    }}
    onSubmit={(inputsData, setFormMessage, setIsSubmitting, handleReset) => {
      setIsSubmitting(true);
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            // status: 400, msg: 'An Error occurred while submitting the form.'
            status: 200, msg: 'Sucessfully submitted form.'
          })
        }, 20000)
      }).then((result) => {
        if (result.status === 200) {
          handleReset();
          setFormMessage({status: 'success', msg: result.msg})
        } else {
          setFormMessage({status: 'error', msg: result.msg})
        }
      }).finally(() => {
        setIsSubmitting(false);
      })
    }}
    render={(handleSubmit, handleChange, handleBlur, handleReset, inputsData, errors, invalidForm, isSubmitting) => (
      <React.Fragment>
        <InputField
          status={errors['firstname']}
          className='gdm-w-12 gdm-p-left-xs gdm-p-right-xs'
          render={(id, status) => (
            <React.Fragment>
              <InputField.Label>
                First Name
              </InputField.Label>
              <InputField.Input
                status={status}
                id={id}
                value={inputsData['firstname'].value}
                name='firstname'
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <InputField.AlertMessage status={status}>
                {inputsData['firstname'].statusMsg}
              </InputField.AlertMessage>
            </React.Fragment>
          )}/>

        <InputField
          status={errors['lastname']}
          className='gdm-w-12 gdm-p-left-xs gdm-p-right-xs'
          render={(id, status) => (
            <React.Fragment>
              <InputField.Label>
                Last Name
              </InputField.Label>
              <InputField.Input
                status={status}
                id={id}
                value={inputsData['lastname'].value}
                name='lastname'
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <InputField.AlertMessage status={status}>
                {inputsData['lastname'].statusMsg}
              </InputField.AlertMessage>
            </React.Fragment>
          )}/>

        <InputField
          status={errors['email']}
          className='gdm-w-24 gdm-p-left-xs gdm-p-right-xs'
          render={(id, status) => (
            <React.Fragment>
              <InputField.Label>
                Email
              </InputField.Label>
              <InputField.Input
                status={status}
                id={id}
                value={inputsData['email'].value}
                name='email'
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <InputField.AlertMessage status={status}>
                {inputsData['email'].statusMsg}
              </InputField.AlertMessage>
            </React.Fragment>
          )}/>

        <InputField
          status={errors['address']}
          className='gdm-w-12 gdm-p-left-xs gdm-p-right-xs'
          render={(id, status) => (
            <React.Fragment>
              <InputField.Label>
                Address
              </InputField.Label> 
              <InputField.Input
                status={status}
                id={id}
                value={inputsData['address'].value}
                name='address'
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <InputField.AlertMessage status={status}>
                {inputsData['address'].statusMsg}
              </InputField.AlertMessage>
            </React.Fragment>
          )}/>

        <InputField
          status={errors['additional']}
          className='gdm-w-12 gdm-p-left-xs gdm-p-right-xs'
          render={(id, status) => (
            <React.Fragment>
              <InputField.Label>
                Address Additional
              </InputField.Label>
              <InputField.Input
                status={status}
                id={id}
                value={inputsData['additional'].value}
                name='additional'
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <InputField.AlertMessage status={status}>
                {inputsData['additional'].statusMsg}
              </InputField.AlertMessage>
            </React.Fragment>
          )}/>

        <InputField
          status={errors['password']}
          className='gdm-w-12 gdm-p-left-xs gdm-p-right-xs'
          render={(id, status) => (
            <React.Fragment>
              <InputField.Label>
                Password
              </InputField.Label>
              <InputField.Input
                status={status}
                id={id}
                value={inputsData['password'].value}
                name='password'
                type='password'
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <InputField.AlertMessage status={status}>
                {inputsData['password'].statusMsg}
              </InputField.AlertMessage>
            </React.Fragment>
          )}/>

          <InputField
            status={errors['country']}
            className='gdm-w-12 gdm-p-left-xs gdm-p-right-xs'
            render={(id, status) => (
              <React.Fragment>
                <InputField.Label htmlFor={id}>
                  Country
                </InputField.Label>
                <InputField.Select
                  id={id}
                  value={inputsData['country'].value}
                  name='country'
                  onChange={handleChange}
                  disabled={isSubmitting}
                >
                  <option disabled value=''>Please select a country</option>
                  <option value='germany'>Germany</option>
                  <option value='costarica'>Costa Rica</option>
                  <option value='unitedstatesofamerica'>United States of America</option>
                </InputField.Select>
              <InputField.AlertMessage status={status}>
                {inputsData['country'].statusMsg}
              </InputField.AlertMessage>
              </React.Fragment>
            )}/>

        <div className="m-top-xs">
          <Button
            variant='primary'
            type='submit'
            onClick={handleSubmit}
            disabled={invalidForm || isSubmitting}
          >
            Submit
          </Button>

          <Button
            variant='tertiary'
            type='reset'
            disabled={isSubmitting}
            onClick={handleReset}
            disabled={isSubmitting}
          >
            Clear
          </Button>
        </div>
      </React.Fragment>
    )
  }/>
```