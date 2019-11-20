/* eslint-disable react/prop-types */
/**
 *
 * Employee
 *
 */

import React from 'react';
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';

export function Employee(props) {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Paper>
            <Link to={`/employee-info/${props.employee.id}`}>
              <img
                src={props.employee.localImageUrl}
                alt="employee-profile"
                height="124px"
              />
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default compose()(Employee);
