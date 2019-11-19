/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/**
 *
 * CertificationField
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import saga from './saga';
import reducer from './reducer';
import CertificationTitleField from '../../components/CertificationTitleField/Loadable';

export function CertificationField(props) {
  useInjectReducer({ key: 'certificationField', reducer });
  useInjectSaga({ key: 'certificationField', saga });

  const [certificationTitle, setCertificationTitle] = useState([]);

  const handleAddCertificationTitle = () => {
    const allCertificationTitle = certificationTitle.concat(
      CertificationTitleField,
    );
    setCertificationTitle(allCertificationTitle);
  };

  const certificationTitleRender = certificationTitle.map(
    (Element, indexCertificationTitle) => (
      <Element
        key={indexCertificationTitle}
        index={indexCertificationTitle}
        indexCertification={props.index}
      />
    ),
  );

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {certificationTitleRender}
      </Grid>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <FormControl>
            <InputLabel htmlFor="component-helper">
              Certification institute
            </InputLabel>
            <Input required id={`cert-inst-${props.index}`} name="certInst" />
            <FormHelperText>Enter the certification name</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="small"
            onClick={handleAddCertificationTitle}
          >
            Add Certification Title
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default connect()(CertificationField);
