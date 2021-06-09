Table:
```jsx
    import Icons from '@tokens/assets-icons-nested.json';
    import InputField from 'components/molecules/input-field';

    initialState = { lastname: ''};

    const handleChange = (e) => setState({ [e.target.name]: e.target.value });

    <table className='gdm-table gdm-table-reset gdm-table-alternating gdm-text-center gdm-w-24'>
      <tbody className='gdm-overflow-hidden'>
        <tr>
          <th className='gdm-w-8 gdm-text-left'>Number of Users</th>
          <th className='gdm-w-8'>
            <span className='gdm-icon gdm-icon-sm gdm-icon-info'/>
            Base CPL
          </th>
          <th className='gdm-w-8'>
            <span className='gdm-icon gdm-icon-sm gdm-icon-info'/>
            Something else
          </th>
        </tr>
        <TableRowSelect>
          <td className='gdm-w-8 gdm-text-left'>
            <TableRowSelect.Button onClick={() => console.log('Single User click')}>Select</TableRowSelect.Button>
            Single User
          </td>
          <td className='gdm-w-8'>$35</td>
          <td className='gdm-w-8'>$45</td>
        </TableRowSelect>
        <TableRowSelect>
          <td className='gdm-w-8 gdm-text-left'>
            <TableRowSelect.Button onClick={() => console.log('2 to 4 Users click')}>Select</TableRowSelect.Button>
            2 to 4 Users
          </td>
          <td className='gdm-w-8'>$60</td>
          <td className='gdm-w-8'>$70</td>
        </TableRowSelect>
      </tbody>
    </table>
```
