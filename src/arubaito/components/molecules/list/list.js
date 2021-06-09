import React from 'react';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import {
  SIZE_LINE_HEIGHT_DROPDOWN_LIST_ITEM as inputHeight,
  SIZE_PADDING_SELECT_SM_LEFT as inputPadding,
  SIZE_PADDING_SELECT_SM_RIGHT as optionPadding,
  FONT_FAMILY_INPUT_DEFAULT as fontFamily,
  COLOR_BASE_BRAND_PRIMARY as primary,
  COLOR_BASE_INTERACTIONS_10 as primary25,
  COLOR_BASE_INTERACTIONS_30 as primary50,
  COLOR_BASE_INTERACTIONS_DEFAULT as primary75,
  COLOR_BASE_BRAND_SECONDARY as secondary,
  COLOR_BASE_LIGHT as neutral0,
  COLOR_BASE_BOX as neutral5,
  COLOR_BORDER_INPUT_DEFAULT as neutral10,
  COLOR_BASE_STEEL as neutral50,
  COLOR_BASE_DARK as neutral90
} from '@tokens/variables.js';

const colors = {
  primary,
  primary25,
  primary50,
  primary75,
  neutral0,
  neutral5,
  neutral10,
  neutral20: neutral10,
  neutral30: neutral10,
  neutral40: neutral10,
  neutral50,
  neutral60: neutral50,
  neutral70: neutral50,
  neutral80: neutral90,
  neutral90
};

const styles = {
  loadingMessage: (props, _) => ({ ...props, fontFamily }),
  noOptionsMessage: (props, _) => ({ ...props, fontFamily }),
  option: (props, _) => ({
    ...props,
    cursor: 'pointer',
    fontFamily,
    padding: optionPadding
  }),
  control: (props, _) => ({
    ...props,
    border: `2px solid ${neutral10}`,
    borderRadius: 0,
    fontFamily,
    height: 45,
    paddingLeft: inputPadding
  })
}

/**
 * @visibleName List
 *
**/
const List = ({ asynchronous = false, ...props }) => {
  const SelectComponent = asynchronous ? AsyncSelect : Select;

  return (
    <SelectComponent {...props}
                     styles={styles}
                     theme={theme => ({ ...theme, colors })} />
  );
};

List.propTypes = {
  /** Render an asynchronous List component. */ 
  asynchronous: PropTypes.bool,
  /** The default set of options to show before the user starts searching. */
  defaultOptions: PropTypes.object,
  /** Handle change events on the List component. */
  onChange: PropTypes.func,
  /** Default selected option */
  defaultValue: PropTypes.object,
  /** Current selected option */
  value: PropTypes.object,
  /** If cacheOptions is truthy, then the loaded data will be cached. */
  cacheOptions: PropTypes.bool,
  /** Defines if the selected option is clearable. */
  isClearable: PropTypes.bool,
  /** Function that returns a promise, which is the set of options to be used once the promise resolves. */
  loadOptions: PropTypes.func
};

/* @component */
export default List;
