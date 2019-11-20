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
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
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

    console.log('SUMMARY', e.target.skillHability.value);
    // const skillQuantity = e.target.skillName.length;
    // const workQuantity = e.target.position.length;
    // const educationQuantity = e.target.degree.length;
    // const certificationQuantity = e.target.certInst.length;

    // SKILLS

    let skillName;
    let skillHability;
    if (e.target.degree.length === undefined) {
      skillName = [e.target.skillName.value];
      skillHability = [e.target.skillHability.value];
    } else {
      skillName = Object.values(e.target.skillName).map(skills => skills.value);

      skillHability = Object.values(e.target.skillHability).map(
        hability => hability.value,
      );
    }

    // WORK
    let workPosition;
    let workStart;
    let workEnd;
    let workCompany;
    let workResponsabilities;

    if (e.target.position.length === undefined) {
      workPosition = [e.target.position.value];
      workStart = [e.target.workStart.value];
      workEnd = [e.target.workEnd.value];
      workCompany = [e.target.companyName.value];
      workResponsabilities = [e.target.responsabilities.value];
    } else {
      workPosition = Object.values(e.target.position).map(
        position => position.value,
      );

      workStart = Object.values(e.target.workStart).map(time => time.value);

      workEnd = Object.values(e.target.workEnd).map(time => time.value);

      workCompany = Object.values(e.target.companyName).map(
        company => company.value,
      );

      workResponsabilities = Object.values(e.target.responsabilities).map(
        responsabilities => responsabilities.value,
      );
    }

    // EDUCATION

    let educationDegree;
    let educationStart;
    let educationEnd;
    let institutionName;

    if (e.target.degree.length === undefined) {
      educationDegree = [e.target.degree.value];
      educationStart = [e.target.degreeStart.value];
      educationEnd = [e.target.degreeEnd.value];
      institutionName = [e.target.institutionName.value];
    } else {
      educationDegree = Object.values(e.target.degree).map(degree => {
        console.log('DEGREEEEE', e.target.degree.value);
        return degree.value;
      });

      educationStart = Object.values(e.target.degreeStart).map(
        time => time.value,
      );

      educationEnd = Object.values(e.target.degreeEnd).map(time => time.value);

      institutionName = Object.values(e.target.institutionName).map(
        institution => institution.value,
      );
    }

    // CERTIFICATION

    let certificationGrouped;

    if (e.target.certification.length === undefined) {
      certificationGrouped = [[e.target.certification.value]];
    } else {
      const certificationName = Object.values(e.target.certification).map(
        certName => certName.value,
      );

      // const certificationQuantity = [];

      // This is used to get the elements position
      console.log('quantityBefore', e.target.certification.length);
      const quantityElements = Object.values(e.target.certification).map(
        quantity => {
          console.log('quantity', quantity.length);
          return quantity.id.split('-');
        },
      );

      certificationGrouped = [];
      let singleCertificationGroup = [];
      let indexAux = 0;
      quantityElements.forEach((element, index, array) => {
        if (parseInt(element[1]) === indexAux) {
          singleCertificationGroup.splice(
            element[1],
            0,
            certificationName[index],
          );
          if (index === array.length - 1) {
            certificationGrouped.push(singleCertificationGroup);
          }
        } else {
          certificationGrouped.push(singleCertificationGroup);
          indexAux += 1;
          singleCertificationGroup = [];
          singleCertificationGroup.splice(
            element[1],
            0,
            certificationName[index],
          );
          if (index === array.length - 1) {
            certificationGrouped.push(singleCertificationGroup);
          }
        }
      });
    }

    // let indexAux = 0;
    // let countAux = 0;

    // // This is used to make sure wich is the ammount of certifications
    // // per institution
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
    let certificationInstitute;

    if (e.target.certInst.length === undefined) {
      certificationInstitute = [e.target.certInst.value];
    } else {
      certificationInstitute = Object.values(e.target.certInst).map(
        institution => institution.value,
      );
    }

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
        workStart,
        workEnd,
        workCompany,
        workResponsabilities,
      },
      education: {
        educationDegree,
        educationStart,
        educationEnd,
        institutionName,
      },
      certification: {
        certificationGrouped,
        certificationInstitute,
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
      <Container>
        <Paper>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <h1>New employee:</h1>
            <form onSubmit={handleSubmit}>
              <h5>Employee Photo</h5>
              <Button variant="contained" component="label">
                Upload photo
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  name="photoFile"
                  style={{ display: 'none' }}
                />
              </Button>
              <h5>Employee Information</h5>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <FormControl>
                    <InputLabel htmlFor="component-helper">
                      Full Name
                    </InputLabel>
                    <Input required name="fullName" />
                    <FormHelperText>Enter Full Name</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <InputLabel htmlFor="component-helper">
                      Main Skill
                    </InputLabel>
                    <Input required name="mainSkill" />
                    <FormHelperText>Enter Main Skill</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item>
                  <TextField
                    name="summary"
                    label="Summary"
                    placeholder="Write Employee Summary"
                    multiline
                    margin="normal"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
                spacing={3}
              >
                <Grid item>
                  <h5>Skills</h5>
                  {skillsRender}
                  <Button
                    variant="contained"
                    size="small"
                    type="button"
                    onClick={handleAddSkill}
                  >
                    Add Skill
                  </Button>
                </Grid>
                <Grid item>
                  <h5>Work Experience</h5>
                  {worksRender}
                  <Button
                    variant="contained"
                    size="small"
                    type="button"
                    onClick={handleAddWorkExperience}
                  >
                    Add Work
                  </Button>
                </Grid>
                <Grid item>
                  <h5>Education</h5>
                  {educationRender}
                  <Button
                    variant="contained"
                    size="small"
                    type="button"
                    onClick={handleAddEducation}
                  >
                    Add Education
                  </Button>
                </Grid>
                <Grid item>
                  <h5>Certifications</h5>
                  {certificationRender}
                  <Button
                    variant="contained"
                    size="small"
                    type="button"
                    onClick={handleAddCertification}
                  >
                    Add Certification
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    type="submit"
                  >
                    Create
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Container>
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
