import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the employeeList state domain
 */

const selectEmployeeListDomain = state => state.employeeList || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EmployeeList
 */

const makeSelectEmployeeList = () =>
  createSelector(
    selectEmployeeListDomain,
    substate => substate,
  );

export default makeSelectEmployeeList;
export { selectEmployeeListDomain };
