/* eslint-disable react/prop-types */
/**
 *
 * EmployeeList
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import Employee from '../Employee/Loadable';

export function EmployeeList(props) {
  useInjectReducer({ key: 'employeeList', reducer });
  useInjectSaga({ key: 'employeeList', saga });

  return (
    <div>
      <h1>Employees</h1>
      {props.employees.employee.map(employee => (
        <Employee key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  employees: state,
});

export default connect(mapStateToProps)(EmployeeList);
