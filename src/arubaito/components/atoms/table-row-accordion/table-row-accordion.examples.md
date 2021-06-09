<style>
  .table-example td {
      width: 16.66666667%
  }
  .table-example th {
      width: 16.66666667%
  }
</style>

```jsx
import Icons from '@tokens/assets-icons-nested.json';
import { COLOR_BASE_BRAND_SECONDARY as bgcolor, COLOR_BASE_BRAND_PRIMARY as color } from '@tokens/variables.js';
import InputField from 'components/molecules/input-field';

initialState = { lastname: ''};

const handleChange = (e) => setState({ [e.target.name]: e.target.value });

<table className='table-example gdm-table gdm-table-reset gdm-text-center gdm-w-24'>
  <thead>
    <tr>
      <th className='gdm-text-left'>Product</th>
      <th><span className='gdm-icon gdm-icon-sm gdm-icon-info'/>Base CPL</th>
      <th><span className='gdm-icon gdm-icon-sm gdm-icon-info'/>Max. Market Bid</th>
      <th><span className='gdm-icon gdm-icon-sm gdm-icon-info'/>Default Bid</th>
      <th><span className='gdm-icon gdm-icon-sm gdm-icon-info'/>Custom Bids</th>
      <th><span className='gdm-icon gdm-icon-sm gdm-icon-info'/>Something Else</th>
    </tr>
  </thead>
  <TableRowAccordion rowsLength='9' render={(onToggle, open) => (
    <React.Fragment>
      <tr>
        <td>
          <TableRowAccordion.ToggleButton onClick={onToggle} className='gdm-w-4 gdm-text-left'>
            Product 1
          </TableRowAccordion.ToggleButton>
        </td>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
      <tr>
        <td/>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
      <tr>
        <td/>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
      <tr>
        <td/>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
      <tr>
        <td/>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
      <tr>
        <td/>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
      <tr>
        <td/>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
      <tr>
        <td/>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
      <tr>
        <td/>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
    </React.Fragment>
  )}/>
  <tbody>
    <tr>
      <td className='gdm-text-left'>Product 2 Very Long Name</td>
      <td>$35</td>
      <td>$45</td>
      <td>test</td>
      <td>4</td>
      <td><a className='gdm-link-dark'>Add</a></td>
    </tr>
    <tr>
      <td className='gdm-text-left'>Product 3</td>
      <td>$35</td>
      <td>$45</td>
      <td>test</td>
      <td>4</td>
      <td><a className='gdm-link-dark'>Add</a></td>
    </tr>
    <tr>
      <td className='gdm-text-left'>Product 4</td>
      <td>$35</td>
      <td>$45</td>
      <td>test</td>
      <td>4</td>
      <td><a className='gdm-link-dark'>Add</a></td>
    </tr>
    <tr>
      <td className='gdm-text-left'>Product 5</td>
      <td>$35</td>
      <td>$45</td>
      <td>test</td>
      <td>4</td>
      <td><a className='gdm-link-dark'>Add</a></td>
    </tr>
    <tr>
      <td className='gdm-text-left'>Product 6</td>
      <td>$35</td>
      <td>$45</td>
      <td>test</td>
      <td>4</td>
      <td><a className='gdm-link-dark'>Add</a></td>
    </tr>
  </tbody>
  <TableRowAccordion rowsLength='3' render={(onToggle, open) => (
    <React.Fragment>
      <tr>
        <td>
          <TableRowAccordion.ToggleButton onClick={onToggle} className='gdm-w-4 gdm-text-left'>
            Product 1
          </TableRowAccordion.ToggleButton>
        </td>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
      <tr>
        <td/>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
      <tr>
        <td/>
        <td>$35</td>
        <td>$45</td>
        <td>test</td>
        <td>4</td>
        <td><a className='gdm-link-dark'>Add</a></td>
      </tr>
    </React.Fragment>
  )}/>
</table>
```