/* eslint-disable react/prop-types */
/**
 *
 * WorkExperienceField
 *
 */

import React, { memo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function WorkExperienceField(props) {
  return (
    <div>
      <br />
      <hr />
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Grid>
                <FormControl>
                  <InputLabel htmlFor="component-helper">Position</InputLabel>
                  <Input
                    required
                    id={`position-${props.index}`}
                    name="position"
                  />
                  <FormHelperText>
                    Enter the position in the company
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl>
                  <InputLabel htmlFor="component-helper">Company</InputLabel>
                  <Input
                    required
                    id={`company-name-${props.index}`}
                    name="companyName"
                  />
                  <FormHelperText>Enter the name of the company</FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item>
              <Grid>
                <FormControl>
                  <InputLabel htmlFor="component-helper">Start date</InputLabel>
                  <Input
                    required
                    type="number"
                    id={`work-start-${props.index}`}
                    name="workStart"
                  />
                  <FormHelperText>
                    Enter the date of start of this position
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid>
                <FormControl>
                  <InputLabel htmlFor="component-helper">End date</InputLabel>
                  <Input
                    required
                    id={`work-end-${props.index}`}
                    name="workEnd"
                  />
                  <FormHelperText>
                    Enter the date of end of this position
                  </FormHelperText>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            id={`responsabilities-${props.index}`}
            name="responsabilities"
            label="Responsabilities"
            placeholder="Enter the work responsabilities"
            multiline
            rows="2"
            margin="normal"
          />
        </Grid>
      </Grid>
    </div>
  );
}

WorkExperienceField.propTypes = {};

export default memo(WorkExperienceField);
