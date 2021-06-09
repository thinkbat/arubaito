Table:
```jsx
    import Icons from '@tokens/assets-icons-nested.json';
    import { COLOR_BASE_BRAND_SECONDARY as bgcolor, COLOR_BASE_BRAND_PRIMARY as color } from '@tokens/variables.js';
    import InputField from 'components/molecules/input-field';

    initialState = { lastname: ''};

    const handleChange = (e) => setState({ [e.target.name]: e.target.value });

    <table className='gdm-table gdm-table-alternating gdm-table-inputs gdm-text-center gdm-w-24'>
      <tbody>
        <tr>
          <th className='gdm-w-5 gdm-text-left'>Number of Users</th>
          <th className='gdm-w-3'>
            <span className='gdm-icon gdm-icon-sm gdm-icon-info'/>
            Base CPL
          </th>
          <th className='gdm-w-3'>
            <span className='gdm-icon gdm-icon-sm gdm-icon-info'/>
            Max. Market Bid
          </th>
          <th className='gdm-w-5'>
            <span className='gdm-icon gdm-icon-sm gdm-icon-info'/>
            Default Bid
          </th>
          <th className='gdm-w-2'>
            <span className='gdm-icon gdm-icon-sm gdm-icon-info'/>
            Custom Bids
          </th>
          <th className='gdm-w-2'>
            <span className='gdm-icon gdm-icon-sm gdm-icon-info'/>
            Max Cost
          </th>
          <th className='gdm-w-2'>
            <span className='gdm-icon gdm-icon-sm gdm-icon-info'/>
            Avg. Position
          </th>
          <th className='gdm-w-2'>
            <span className='gdm-icon gdm-icon-sm gdm-icon-info'/>
            Rec. Rate
          </th>
        </tr>
        <tr>
          <td className='gdm-text-left'>Single User</td>
          <td>$35</td>
          <td>$45</td>
          <td className='gdm-allow-overflow'>
            <InputField
              status='error'
              className='gdm-m-top-none'
              render={(id, status) => (
                <React.Fragment>
                  <InputField.Input
                    status={status}
                    id={id}
                    value={state['singleUser']}
                    name='singleUser'
                    onChange={handleChange}
                    className='gdm-m-bottom-none'
                    small
                  />
                  <InputField.AlertMessage status={status} inline>
                    Invalid Bid. Value must be in increments of $5.
                  </InputField.AlertMessage>
                </React.Fragment>
              )}/>
          </td>
          {
            false
            ? <React.Fragment>
                <td><a className='gdm-link-default'>Add</a></td>
                <td>$60</td>
                <td>1</td>
                <td>20%</td>
              </React.Fragment>
            :
              <React.Fragment>
                <td className='gdm-keep-border'/>
                <td className='gdm-keep-border'/>
                <td className='gdm-keep-border'/>
                <td className='gdm-keep-border'/>
              </React.Fragment>
          }
        </tr>
        <tr>
          <td className='gdm-text-left'>2 to 4 Users</td>
          <td>$60</td>
          <td>$80</td>
          <td className='gdm-allow-overflow'>
            <InputField
              status='success'
              className='gdm-m-top-none'
              render={(id, status) => (
                <React.Fragment>
                  <InputField.Input
                    status={status}
                    id={id}
                    value={state['2to4users']}
                    name='2to4users'
                    onChange={handleChange}
                    className='gdm-m-bottom-none'
                    small
                  />
                  <InputField.AlertMessage status={status} inline/>
                </React.Fragment>
              )}/>
          </td>
          <td><a className='gdm-link-default'>Add</a></td>
          <td>$60</td>
          <td>4</td>
          <td>20%</td>
        </tr>
        <tr>
          <td className='gdm-text-left'>5 to 10 Users</td>
          <td>$80</td>
          <td>$95</td>
          <td className='gdm-allow-overflow'>
            <InputField
              className='gdm-m-top-none'
              render={(id, status) => (
                <React.Fragment>
                  <InputField.Input
                    status={status}
                    id={id}
                    value={state['5to10users']}
                    name='5to10users'
                    onChange={handleChange}
                    className='gdm-m-bottom-none'
                    small
                  />
                  <InputField.AlertMessage status={status} inline>
                    Invalid Bid. Value must be in increments of $5.
                  </InputField.AlertMessage>
                </React.Fragment>
              )}/>
          </td>
          <td><a className='gdm-link-default'>Add</a></td>
          <td>$80</td>
          <td>5</td>
          <td>20%</td>
        </tr>
        <tr>
          <td className='gdm-text-left'>11 to 15 Users</td>
          <td>$110</td>
          <td>$130</td>
          <td className='gdm-allow-overflow'>
            <InputField
              className='gdm-m-top-none'
              render={(id, status) => (
                <React.Fragment>
                  <InputField.Input
                    status={status}
                    id={id}
                    value={state['11to15users']}
                    name='11to15users'
                    onChange={handleChange}
                    className='gdm-m-bottom-none'
                    small
                  />
                  <InputField.AlertMessage status={status} inline>
                    Invalid Bid. Value must be in increments of $5.
                  </InputField.AlertMessage>
                </React.Fragment>
              )}/>
          </td>
          <td><a className='gdm-link-default'>Add</a></td>
          <td>$110</td>
          <td>3</td>
          <td>20%</td>
        </tr>
        <tr>
          <td className='gdm-text-left'>16 to 20 Users</td>
          <td>$140</td>
          <td>$150</td>
          <td className='gdm-allow-overflow'>
            <InputField
              className='gdm-m-top-none'
              render={(id, status) => (
                <React.Fragment>
                  <InputField.Input
                    status={status}
                    id={id}
                    value={state['16to20users']}
                    name='16to20users'
                    onChange={handleChange}
                    className='gdm-m-bottom-none'
                    small
                  />
                  <InputField.AlertMessage status={status} inline>
                    Invalid Bid. Value must be in increments of $5.
                  </InputField.AlertMessage>
                </React.Fragment>
              )}/>
          </td>
          <td><a className='gdm-link-default'>Add</a></td>
          <td>$140</td>
          <td>2</td>
          <td>20%</td>
        </tr>
      </tbody>
    </table>
```
