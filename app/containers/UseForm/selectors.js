import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the useForm state domain
 */

const selectUseFormDomain = state => state.useForm || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by UseForm
 */

const makeSelectUseForm = () =>
  createSelector(
    selectUseFormDomain,
    substate => substate,
  );

export default makeSelectUseForm;
export { selectUseFormDomain };
