/* eslint-disable react/prop-types */
/**
 *
 * EducationField
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function EducationField(props) {
  return (
    <div>
      <label htmlFor="label">Degree</label>
      <input
        required
        type="text"
        id={`degree-${props.index}`}
        name="degree"
        placeholder="Enter the degree name"
      />
      <label htmlFor="label">Degree time</label>
      <input
        required
        type="text"
        id={`degree-time-${props.index}`}
        name="degreeTime"
        placeholder="Enter the period of study"
      />
      <label htmlFor="label">Institution</label>
      <input
        required
        type="text"
        id={`institution-name-${props.index}`}
        name="institutionName"
        placeholder="Enter the name of the institution"
      />
    </div>
  );
}

EducationField.propTypes = {};

export default memo(EducationField);
