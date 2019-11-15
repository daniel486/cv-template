/* eslint-disable react/prop-types */
/**
 *
 * WorkExperienceField
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function WorkExperienceField(props) {
  return (
    <div>
      <label htmlFor="label">Position</label>
      <input
        required
        type="text"
        id={`position-${props.index}`}
        name="position"
        placeholder="Enter the position in the company"
      />
      <label htmlFor="label">Work time</label>
      <input
        required
        type="text"
        id={`work-time-${props.index}`}
        name="workTime"
        placeholder="Enter the period of this position"
      />
      <label htmlFor="label">Company</label>
      <input
        required
        type="text"
        id={`company-name-${props.index}`}
        name="companyName"
        placeholder="Enter the name of the company"
      />
      <label htmlFor="label">Responsabilities</label>
      <textarea
        required
        name="responsabilities"
        id={`responsabilities-${props.index}`}
        placeholder="Enter the work responsabilities"
      />
    </div>
  );
}

WorkExperienceField.propTypes = {};

export default memo(WorkExperienceField);
