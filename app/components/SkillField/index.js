/* eslint-disable react/prop-types */
/**
 *
 * SkillField
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SkillField(props) {
  return (
    <div>
      <label htmlFor="label">Skill name</label>
      <input
        required
        type="text"
        id={`skill-name-${props.index}`}
        name="skillName"
        placeholder="Enter the desired skill"
      />
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
    </div>
  );
}

SkillField.propTypes = {};

export default memo(SkillField);
