import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the employeeInfo state domain
 */

const selectEmployeeInfoDomain = state => state.employeeInfo || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EmployeeInfo
 */

const makeSelectEmployeeInfo = () =>
  createSelector(
    selectEmployeeInfoDomain,
    substate => substate,
  );

export default makeSelectEmployeeInfo;
export { selectEmployeeInfoDomain };
