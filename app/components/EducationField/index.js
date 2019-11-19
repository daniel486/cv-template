/* eslint-disable react/prop-types */
/**
 *
 * EducationField
 *
 */

import React, { memo } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function EducationField(props) {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={10}
      >
        <Grid item>
          <Grid>
            <FormControl>
              <InputLabel htmlFor="component-helper">Degree</InputLabel>
              <Input required id={`degree-${props.index}`} name="degree" />
              <FormHelperText>Enter the degree name</FormHelperText>
            </FormControl>
          </Grid>
          <Grid>
            <FormControl>
              <InputLabel htmlFor="component-helper">Degree start</InputLabel>
              <Input
                required
                id={`degree-start-${props.index}`}
                name="degreeStart"
              />
              <FormHelperText>Enter the date of start</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item>
          <Grid>
            <FormControl>
              <InputLabel htmlFor="component-helper">Degree end</InputLabel>
              <Input
                required
                id={`degree-end-${props.index}`}
                name="degreeEnd"
              />
              <FormHelperText>Enter the date of end</FormHelperText>
            </FormControl>
          </Grid>
          <Grid>
            <FormControl>
              <InputLabel htmlFor="component-helper">Institution</InputLabel>
              <Input
                required
                id={`institution-name-${props.index}`}
                name="institutionName"
              />
              <FormHelperText>Enter the name of the institution</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

EducationField.propTypes = {};

export default memo(EducationField);
