import React, { Fragment } from 'react';
import IconTokens from '@tokens/assets-icons-nested.json';
import Tokens from '@tokens/variables-module.js';
import { prepareTokenCategory } from 'design-system/utils/helpers';
import '../utils/token-table.scss';
import './icons.scss';

/** 
 * @visibleName Dictionary
 *
**/


const Icons = () => {
  if (!IconTokens) return "Could not find any Tokens for icons, please check the Token Library."

  const { gdm } = prepareTokenCategory(IconTokens.asset.icon);
  const iconSizeValues = Object.values(Tokens.size.width.gdm.icons);
  
  return (
    <Fragment>
      <p className='gdm-paragraph-sm gdm-m-bottom-sm'>Icons can be directly imported from the token library from:</p>
      <p className='gdm-paragraph-sm gdm-m-bottom-xl' moduleClassName='class-box'>import IconTokens from '@tokens/assets-icons-nested.json'</p>

      <p className='gdm-paragraph-sm gdm-m-bottom-sm'>Or via className from:</p>
      <p className='gdm-paragraph-sm gdm-m-bottom-xl' moduleClassName='class-box'>@import 'arubaito/utility.min.css'</p>
      <table moduleClassName='token-table'>
        <tbody>
          <tr>
            <th className='gdm-w-10'>
              <h2 className='gdm-heading-lg gdm-uppercase'>ICONS</h2>
            </th>
            <th className='gdm-w-7'>
              <h2 className='gdm-heading-lg gdm-uppercase'>CLASSNAME</h2>
            </th>
            <th className='gdm-w-7'>
              <h2 className='gdm-heading-lg gdm-uppercase'>SIZES</h2>
            </th>
          </tr>
          {
            Object.keys(gdm).map((key) => (
              <tr key={gdm[key].key}>
                <td>
                  <h3 className='gdm-heading-sm'>JSON: {gdm[key].name}</h3>
                  <p className='gdm-notification-lg'>{gdm[key].description}</p>
                </td>
                <td className='gdm-p-top-sm gdm-p-bottom-sm'>
                  <div className='gdm-heading-sm gdm-block gdm-m-top-xs gdm-m-bottom-xs' moduleClassName='class-box'>{`.gdm-icon .gdm-icon-${gdm[key].subitem}`}</div>
                  {
                    iconSizeValues.map((size) => {
                      if (size.attributes.state == 'default') return;
                      return (
                        <div key={size.value} className='gdm-heading-sm gdm-block gdm-m-top-xs gdm-m-bottom-xs' moduleClassName='class-box'>{`.gdm-icon-${size.attributes.state}`}</div>
                      )
                    })
                  }
                </td>
                <td>
                  {
                    iconSizeValues.map((size) => {
                      if (size.attributes.state == 'default') return;
                      return <span key={size.value} className={`gdm-m-left-md gdm-icon gdm-icon-${size.attributes.state} gdm-icon-${gdm[key].subitem}`} moduleClassName='icon'/>
                    })
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Fragment>
  )
};

export default Icons;