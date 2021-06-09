import React, { Fragment } from 'react';
import Tokens from '@tokens/variables-module.js';
import { transformTokens } from 'design-system/utils/helpers';
import '../utils/token-table.scss';
import './tokens.scss';

/** 
 * @visibleName Tokens
 *
**/
const TokensMapped = () => {
  if (!Tokens) return "Could not find any Tokens, please check the Token Library."
  return (
    <Fragment>
      {
        Object.keys(Tokens).map((category) => {
          if (!Tokens[category]) return;
          const tokenArr = transformTokens(Tokens, category);
          return (
            <table key={category} moduleClassName='token-table'>
              <tbody>
                <tr>
                  <th>
                    <h2 className='gdm-heading-lg gdm-uppercase'>{`TOKEN ${category}`}</h2>
                  </th>
                  {
                    category === 'color' &&
                      <th>
                        <h2 className='gdm-heading-lg gdm-uppercase'>COLOR</h2>
                      </th>
                  }
                  <th>
                    <h2 className='gdm-heading-lg gdm-uppercase'>VALUE</h2>
                  </th>
                </tr>
                {
                  tokenArr && tokenArr.map((token) => {
                    return (
                      <tr key={`${category}-${token.key}`}>
                        <td>
                          <h3 className='gdm-heading-sm'>SCSS:<span style={{marginLeft: '18px'}}>{`$TOKEN_${token.name}`}</span></h3>
                          <h3 className='gdm-heading-sm'>JS:<span className='m-left-xl'>{token.name}</span></h3>
                          <p className='gdm-notification-lg'>{token.description}</p>
                        </td>
                        {
                          category === 'color' &&
                            <td style={{textAlign: 'center'}}>
                              <span moduleClassName='color-box' style={{backgroundColor: token.value}}/>
                            </td>
                        }
                        <td className='gdm-heading-sm'>{token.value}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          )
        })
      }
    </Fragment>
  );
};

export default TokensMapped;