import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the employee state domain
 */

const selectEmployeeDomain = state => state.employee || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Employee
 */

const makeSelectEmployee = () =>
  createSelector(
    selectEmployeeDomain,
    substate => substate,
  );

export default makeSelectEmployee;
export { selectEmployeeDomain };
