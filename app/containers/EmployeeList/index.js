/* eslint-disable react/prop-types */
/**
 *
 * EmployeeList
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Container, Paper, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import reducer from './reducer';
import saga from './saga';
import Employee from '../Employee/Loadable';

export function EmployeeList(props) {
  useInjectReducer({ key: 'employeeList', reducer });
  useInjectSaga({ key: 'employeeList', saga });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={10}
              >
                <Grid item>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                  >
                    Menu
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      <Link to="/create-employee">New Employee</Link>
                    </MenuItem>
                  </Menu>
                </Grid>
                <Grid item>
                  <h1>Employees</h1>
                </Grid>
              </Grid>
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
