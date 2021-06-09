import { createContext, useContext } from 'react';

/**
 * @ignore - internal component.
 */
const RadioContext = createContext();

export const useRadioGroup = () => useContext(RadioContext);

export default RadioContext;