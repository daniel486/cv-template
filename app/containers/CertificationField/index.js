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
import reducer from './reducer';
import saga from './saga';
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
      {certificationTitleRender}
      <button type="button" onClick={handleAddCertificationTitle}>
        Add Certification Title
      </button>
      <label htmlFor="label">Certification institute</label>
      <input
        required
        type="text"
        id={`cert-inst-${props.index}`}
        name="certInst"
        placeholder="Enter the certification name"
      />
    </div>
  );
}

export default connect()(CertificationField);
