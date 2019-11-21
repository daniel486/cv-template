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
import { Link } from 'react-router-dom';
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const validateAllFields = e => {
    if (e.target.photoFile.value === '') {
      return [false, 'You must have to upload an image of the employee.'];
    }
    if (e.target.skillName === undefined) {
      return [false, 'You must have to enter at least one skill.'];
    }
    if (e.target.position === undefined) {
      return [false, 'You must have to enter at least one previous job.'];
    }
    if (e.target.degree === undefined) {
      return [false, 'You must have to enter at least one educational title.'];
    }
    if (e.target.certification === undefined) {
      return [false, 'You must have to enter at least one certification.'];
    }
    return [true];
  };

  const handleDialogOpen = message => {
    setErrorMessage(message);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
    setErrorMessage('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validation = validateAllFields(e);
    if (validation[0]) {
      // Image upload
      const file = e.target.photoFile.files[0];
      const localImageUrl = window.URL.createObjectURL(file);
      // End image upload

      const fullName = e.target.fullName.value;
      const mainSkill = e.target.mainSkill.value;
      const summary = e.target.summary.value;

      // SKILLS

      let skillName;
      let skillHability;
      if (e.target.degree.length === undefined) {
        skillName = [e.target.skillName.value];
        skillHability = [e.target.skillHability.value];
      } else {
        skillName = Object.values(e.target.skillName).map(
          skills => skills.value,
        );

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
        educationDegree = Object.values(e.target.degree).map(
          degree => degree.value,
        );

        educationStart = Object.values(e.target.degreeStart).map(
          time => time.value,
        );

        educationEnd = Object.values(e.target.degreeEnd).map(
          time => time.value,
        );

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
        const quantityElements = Object.values(e.target.certification).map(
          quantity => quantity.id.split('-'),
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
      e.target.fullName.value = '';
      e.target.mainSkill.value = '';
      e.target.summary.value = '';
      e.target.photoFile.value = '';
      setSkill([]);
      setWorkExperience([]);
      setEducation([]);
      setCertification([]);

      props.history.push('/employee-list');
    } else {
      handleDialogOpen(validation[1]);
    }
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

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Lack of information</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Container>
        <Paper>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
          >
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                >
                  Menu
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleMenuClose}>
                    <Link to="/employee-list">Employee List</Link>
                  </MenuItem>
                </Menu>
              </Grid>
              <Grid item>
                <h1>New employee:</h1>
              </Grid>
            </Grid>
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
                    <Input required error={false} name="mainSkill" />
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
                    color="secondary"
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
                    color="secondary"
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
                    color="secondary"
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
                    color="secondary"
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
