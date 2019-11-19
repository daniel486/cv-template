/* eslint-disable react/prop-types */
/**
 *
 * SkillField
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

function SkillField(props) {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={10}
      >
        <Grid item>
          <FormControl>
            <InputLabel htmlFor="component-helper">Skill name</InputLabel>
            <Input required id={`skill-name-${props.index}`} name="skillName" />
            <FormHelperText>Enter the desired skill</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <label htmlFor="label">Skill level</label>
          <select id={`skill-hability-${props.index}`} name="skillHability">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </Grid>
      </Grid>
    </div>
  );
}

SkillField.propTypes = {};

export default memo(SkillField);
