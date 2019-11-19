/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
/* eslint-disable react/prop-types */
/**
 *
 * EmployeeInfo
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import logo from './resources/10pearls-logo.png';
import './css/styles.css';
import './css/normalize.css';

export function EmployeeInfo(props) {
  useInjectReducer({ key: 'employeeInfo', reducer });
  useInjectSaga({ key: 'employeeInfo', saga });

  const getEmployee = employeeId => {
    const specificEmployee = props.employee.filter(
      employee => employee.id.toString() === employeeId,
    );
    return specificEmployee;
  };

  const employee = getEmployee(props.match.params.idEmployee);

  return (
    <div>
      <main id="main">
        <section id="container">
          {/* <!-- header section --> */}
          <section className="content-header">
            <header id="header">
              <div className="personal-image">
                <img
                  src={employee[0].localImageUrl}
                  alt="profile"
                  className="profile-picture"
                  height="124px"
                />
              </div>
              <div className="title">
                <h1 className="name">{employee[0].fullName}</h1>
                <p>{employee[0].mainSkill}</p>
              </div>
              <div className="place">
                <img src={logo} alt="logo" />
                <span>Medellin-Colombia</span>
              </div>
            </header>
          </section>
          {/* <!-- end header section --> */}
          {/* <!-- summary section --> */}
          <section>
            <div className="title-section summary">
              <h2>Summary</h2>
              <span />
            </div>
            <div className="summary-content">
              <p className="summary-info">{employee[0].summary}</p>
            </div>

            <section className="skills-section">
              <div className="title-section skills">
                <h2>Skills</h2>
                <span className="line" />
              </div>
              {employee[0].skill.skillHability.map((value, index) => {
                const listFill = [];
                for (let i = 0; i < 10; i++) {
                  if (i < parseInt(value)) {
                    listFill.push(<li key={index} className="fill" />);
                  } else {
                    listFill.push(<li key={index} className="empty" />);
                  }
                }
                return (
                  <div className="skills-content">
                    <div className="skills-title">
                      <h3>{employee[0].skill.skillName[index]}</h3>
                    </div>
                    <div className="skills-ranking">
                      <ul>{listFill}</ul>
                    </div>
                  </div>
                );
              })}
            </section>
          </section>
          {/* <!-- end summary section --> */}
          {/* <!-- work experience section --> */}
          <section>
            <div className="title-section experience">
              <h2>Work experience</h2>
              <span />
            </div>
            <div className="experience-content">
              {employee[0].work.workCompany.map((value, index) => (
                <div className="places">
                  <div className="title-experience">
                    <h3>{employee[0].work.workPosition[index]}</h3>
                    <h4>
                      {employee[0].work.workStart[index]} -{' '}
                      {employee[0].work.workEnd[index]}
                    </h4>
                  </div>
                  <div className="company">
                    <h4>{value}</h4>
                  </div>
                  <div>
                    <p>{employee[0].work.workResponsabilities[index]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* <!-- end work experience section --> */}
          {/* <!-- education section --> */}
          <section>
            <div className="title-section education">
              <h2>Education</h2>
              <span />
            </div>
            <div className="education-content">
              {employee[0].education.educationDegree.map((value, index) => (
                <div className="places">
                  <div className="title-experience">
                    <h3>{value}</h3>
                    <h4>
                      {employee[0].education.educationStart[index]} -{' '}
                      {employee[0].education.educationEnd[index]}
                    </h4>
                  </div>
                  <div className="company">
                    <h4>{employee[0].education.institutionName[index]}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* <!-- end education section --> */}
          {/* <!-- certifications section --> */}
          <section>
            <div className="title-section certification">
              <h2>Certifications</h2>
              <span />
            </div>
            <div className="certification-content">
              {employee[0].certification.certificationInstitute.map(
                (value, index) => (
                  <div className="places">
                    <div className="company certifications">
                      {employee[0].certification.certificationGrouped[
                        index
                      ].map(certValue => (
                        <h3>{certValue}</h3>
                      ))}
                      <h4>{value}</h4>
                      <br />
                    </div>
                  </div>
                ),
              )}
            </div>
          </section>
          {/* <!-- end certifications section --> */}
        </section>
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  employee: state.employee,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EmployeeInfo);
