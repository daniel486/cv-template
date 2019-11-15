import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the newEmployeeInfo state domain
 */

const selectNewEmployeeInfoDomain = state =>
  state.newEmployeeInfo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by NewEmployeeInfo
 */

const makeSelectNewEmployeeInfo = () =>
  createSelector(
    selectNewEmployeeInfoDomain,
    substate => substate,
  );

export default makeSelectNewEmployeeInfo;
export { selectNewEmployeeInfoDomain };
