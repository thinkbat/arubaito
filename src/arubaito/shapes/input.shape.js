/* CURRENTLY NOT IN USE */

import {
  shape, string, func, bool, object
} from 'prop-types';

export const inputType = shape({
  /** Change Callback */
  onChange: func.isRequired,
  /** Input Value */
  value: string.isRequired,
  /** Input name */
  name: string.isRequired,
  /** Focus Callback */
  onFocus: func,
  /** text, password */
  type: string,
  /** Blur Callback */
  onBlur: func,
  /** true, false */
  disabled: bool,
  /** Input placeholder */
  placeholder: string,
  /** error, success */
  status: string,
  /** error, success */
  styles: object,
});

export const inputDefaultProps = {
  disabled: false,
  status: 'default',
  label: '',
  placeholder: '',
  stacked: true,
  type: 'text',
};
