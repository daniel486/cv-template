/* eslint-disable react/prop-types */
/**
 *
 * SkillField
 *
 */

import React, { memo, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { RadioGroup } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SkillField(props) {
  const [skillLevel, setSkillLevel] = useState('1');

  const skillHability = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = e => {
    setSkillLevel(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <Grid
        container
        direction="column"
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
          <RadioGroup
            onChange={handleChange}
            value={skillLevel}
            id={`skill-hability-${props.index}`}
          >
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              spacing={0}
            >
              {skillHability.map(value => (
                <Grid item>
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                    labelPlacement="bottom"
                  />
                </Grid>
              ))}
            </Grid>
          </RadioGroup>
          <Input
            type="hidden"
            id={`skill-hability-${props.index}`}
            name="skillHability"
            value={skillLevel}
          />
          {/* <label htmlFor="label">Skill level</label>
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
          </select> */}
        </Grid>
      </Grid>
    </div>
  );
}

SkillField.propTypes = {};

export default memo(SkillField);
