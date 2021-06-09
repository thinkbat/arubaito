import React, { Fragment } from 'react';
import cx from 'classnames';
import './text-styles.scss';
import Tokens from '@tokens/variables-module.js';
import { PREFIX_BASE_DEFAULT as prefix } from '@tokens/variables.js';

/** 
 * @visibleName Text Styles
 *
**/
const TextStyles = () => {
  if (!Tokens) return "Could not find any Tokens for text styles, please check the Token Library.";
  const text = Tokens.font.family.gdm.text;
  const mapText = (obj, parentKey) => {
    return Object.keys(obj).map((textKey) => {
      if (obj[textKey] && obj[textKey].value) {
        return {
          name: parentKey ? `${parentKey} ${textKey}` : textKey,
          className: parentKey ? `${parentKey}-${textKey}` : textKey,
          font: obj[textKey].value,
          background: obj[textKey].background,
          description: obj[textKey].description
        };
      } else {
        return mapText(obj[textKey], textKey);
      };
    });
  }
  const textMapped = mapText(text).flat();
  return (
    <Fragment>
      {textMapped.map((textObj) => {
        const { name, className, font, background, description } = textObj;
        return (
          <div key={className} className='gdm-m-top-xl gdm-p-bottom-xl' moduleClassName='text-style-wrapper'>
            <h3 className='gdm-heading-lg gdm-uppercase gdm-inline-block'>{name}</h3>
            {
              description && <span className='gdm-notification-lg gdm-m-left-sm'>{description}</span>
            }
            <div className='gdm-heading-sm'>{font}</div>
            <div className='gdm-heading-sm' moduleClassName='class-box'>{`.${prefix}${className}`}</div>
            <div className='gdm-p-top-xs gdm-block'>
              <div moduleClassName={cx('copy-inner-wrapper',{'dark': background === 'dark'})}>
                <span className={`${prefix}${className}`}>The quick brown fox jumps over the lazy dog.</span>
              </div>
            </div>
          </div>
        )
      })}
    </Fragment>
  );
};

export default TextStyles;