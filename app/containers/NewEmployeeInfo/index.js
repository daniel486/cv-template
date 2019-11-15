/* eslint-disable radix */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/**
 *
 * NewEmployeeInfo
 *
 */

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createEmployee } from './actions';
import reducer from './reducer';
import SkillField from '../../components/SkillField/Loadable';
import WorkExperienceField from '../../components/WorkExperienceField/Loadable';
import EducationField from '../../components/EducationField/Loadable';
import CertificationField from '../CertificationField/Loadable';

function NewEmployeeInfo(props) {
  const key = 'employee';
  useInjectReducer({ key, reducer });

  const [skill, setSkill] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [certification, setCertification] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    // Image upload
    const file = e.target.photoFile.files[0];
    const localImageUrl = window.URL.createObjectURL(file);
    // End image upload

    const fullName = e.target.fullName.value;
    const mainSkill = e.target.mainSkill.value;
    const summary = e.target.summary.value;

    console.log('SUMMARY', e.target.summary);
    // const skillQuantity = e.target.skillName.length;
    // const workQuantity = e.target.position.length;
    // const educationQuantity = e.target.degree.length;
    // const certificationQuantity = e.target.certInst.length;

    // SKILLS
    const skillName = Object.values(e.target.skillName).map(
      skills => skills.value,
    );

    const skillHability = Object.values(e.target.skillHability).map(
      hability => hability.value,
    );

    // WORK
    const workPosition = Object.values(e.target.position).map(
      position => position.value,
    );

    const workTime = Object.values(e.target.workTime).map(time => time.value);

    const workCompany = Object.values(e.target.companyName).map(
      company => company.value,
    );

    const workResponsabilities = Object.values(e.target.responsabilities).map(
      responsabilities => responsabilities.value,
    );

    // EDUCATION

    const educationDegree = Object.values(e.target.degree).map(degree => {
      console.log('DEGREEEEE', e.target.degree.value);
      return degree.value;
    });

    const educationTime = Object.values(e.target.degreeTime).map(
      time => time.value,
    );

    const institutionName = Object.values(e.target.institutionName).map(
      institution => institution.value,
    );

    // CERTIFICATION

    // const quantityElements = Object.values(e.target.certification).map(
    //   quantity => quantity.id.split('-')[1],
    // );

    // const certificationQuantity = [];

    // let indexAux = 0;
    // let countAux = 0;

    // quantityElements.forEach((element, index, array) => {
    //   if (indexAux === parseInt(element)) {
    //     countAux += 1;
    //   } else {
    //     indexAux += 1;
    //     certificationQuantity.push(countAux);
    //     countAux = 1;
    //     if (index === array.length - 1) {
    //       certificationQuantity.push(countAux);
    //     }
    //   }
    // });

    const certificationName = Object.values(e.target.certification).map(
      certName => certName.value,
    );

    const cetificationInstitute = Object.values(e.target.certInst).map(
      institution => institution.value,
    );

    const data = {
      id: new Date(),
      fullName,
      mainSkill,
      summary,
      localImageUrl,
      file,
      skill: {
        skillName,
        skillHability,
      },
      work: {
        workPosition,
        workTime,
        workCompany,
        workResponsabilities,
      },
      education: {
        educationDegree,
        educationTime,
        institutionName,
      },
      certification: {
        // certificationQuantity,
        certificationName,
        cetificationInstitute,
      },
    };
    props.dispatch(createEmployee(data));
    console.log(createEmployee(data));
    e.target.fullName.value = '';
    e.target.mainSkill.value = '';
    e.target.summary.value = '';
    e.target.photoFile.value = '';
    // setSkill([]);
    // setWorkExperience([]);
    // setEducation([]);
    // setCertification([]);

    console.log(data);

    props.history.push('/employee-list');
  };

  const handleAddSkill = () => {
    const allSkills = skill.concat(SkillField);
    setSkill(allSkills);
  };

  const skillsRender = skill.map((Element, indexSkill) => (
    <Element key={indexSkill} index={indexSkill} />
  ));

  const handleAddWorkExperience = () => {
    const allWorks = workExperience.concat(WorkExperienceField);
    setWorkExperience(allWorks);
  };

  const worksRender = workExperience.map((Element, indexWork) => (
    <Element key={indexWork} index={indexWork} />
  ));

  const handleAddEducation = () => {
    const allEducation = education.concat(EducationField);
    setEducation(allEducation);
  };

  const educationRender = education.map((Element, indexEducation) => (
    <Element key={indexEducation} index={indexEducation} />
  ));

  const handleAddCertification = () => {
    const allCertification = certification.concat(CertificationField);
    setCertification(allCertification);
  };

  const certificationRender = certification.map(
    (Element, indexCertification) => (
      <Element key={indexCertification} index={indexCertification} />
    ),
  );

  return (
    <div>
      <h1>New employee:</h1>
      <form onSubmit={handleSubmit}>
        <h5>Employee Photo</h5>
        <input type="file" accept=".jpg, .jpeg, .png" name="photoFile" />
        <h5>Employee Information</h5>
        <label htmlFor="label">Full Name</label>
        <input
          required
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
        />
        <label htmlFor="label">Main Skill</label>
        <input
          required
          type="text"
          name="mainSkill"
          placeholder="Enter Main Skill"
        />
        <h5>Summary</h5>
        <label htmlFor="label">Summary</label>
        <textarea
          required
          name="summary"
          placeholder="Write Employee Summary"
        />
        <h5>Skills</h5>
        {skillsRender}
        <button type="button" onClick={handleAddSkill}>
          Add Skill
        </button>
        <h5>Work Experience</h5>
        {worksRender}
        <button type="button" onClick={handleAddWorkExperience}>
          Add Work
        </button>
        <h5>Education</h5>
        {educationRender}
        <button type="button" onClick={handleAddEducation}>
          Add Education
        </button>
        <h5>Certifications</h5>
        {certificationRender}
        <button type="button" onClick={handleAddCertification}>
          Add Certification
        </button>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  employees: state,
});

// const mapDispatchToProps = dispatch => ({
//   createEmployee: data => dispatch(createEmployee(data)),
// });

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(NewEmployeeInfo);
