/* eslint-disable react/prop-types */
/**
 *
 * CertificationTitleField
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

function CertificationTitleField(props) {
  return (
    <div>
      <Grid item>
        <FormControl>
          <InputLabel htmlFor="component-helper">Certification</InputLabel>
          <Input
            required
            id={`certification-${props.indexCertification}-${props.index}`}
            name="certification"
          />
          <FormHelperText>Enter the certification name</FormHelperText>
        </FormControl>
      </Grid>
    </div>
  );
}

CertificationTitleField.propTypes = {};

export default memo(CertificationTitleField);
