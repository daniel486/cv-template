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
import { Container, Paper, Grid } from '@material-ui/core';
import reducer from './reducer';
import saga from './saga';
import Employee from '../Employee/Loadable';

export function EmployeeList(props) {
  useInjectReducer({ key: 'employeeList', reducer });
  useInjectSaga({ key: 'employeeList', saga });

  return (
    <div>
      <Container>
        <Paper>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
              <h1>Employees</h1>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={3}
              >
                {props.employees.employee.map(employee => (
                  <Grid item xs={3}>
                    <Employee key={employee.id} employee={employee} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  employees: state,
});

export default connect(mapStateToProps)(EmployeeList);
