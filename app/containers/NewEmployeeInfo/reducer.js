/*
 *
 * NewEmployeeInfo reducer
 *
 */
import { CREATE_EMPLOYEE } from './constants';

export const initialState = [];

const newEmployeeInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EMPLOYEE:
      return state.concat([action.data]);
    default:
      return state;
  }
};

export default newEmployeeInfoReducer;
