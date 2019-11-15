/* eslint-disable react/prop-types */
/**
 *
 * CertificationTitleField
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CertificationTitleField(props) {
  return (
    <div>
      <label htmlFor="label">Certification</label>
      <input
        required
        type="text"
        id={`certification-${props.indexCertification}-${props.index}`}
        name="certification"
        placeholder="Enter the certification name"
      />
    </div>
  );
}

CertificationTitleField.propTypes = {};

export default memo(CertificationTitleField);
