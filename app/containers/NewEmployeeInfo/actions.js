/*
 *
 * NewEmployeeInfo actions
 *
 */

import { CREATE_EMPLOYEE } from './constants';

export function createEmployee(data) {
  return {
    type: CREATE_EMPLOYEE,
    data,
  };
}
