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
                    console.log('OBJECT', <li key={index} className="fill" />);
                    listFill.push(<li key={index} className="fill" />);
                  } else {
                    listFill.push(<li key={index} className="empty" />);
                  }
                }
                console.log(listFill);
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
              <div className="places">
                <div className="title-experience">
                  <h3>Software Developer</h3>
                  <h4>June 2017 - October 2019</h4>
                </div>
                <div className="company">
                  <h4>Intergrupo</h4>
                </div>
                <div>
                  <h5>
                    <strong> Outline:</strong>
                  </h5>
                  <br />
                  <p>
                    • Maintenance and developing components components for
                    sharepoint intranet with C, C.NET,HTML5, JQuery, Angular and
                    Javascript
                    <br />• Creating new websites for employees fund with .NET
                    MVC, HTML5, JQuery and Javascript and SQL Database
                    <br /> • Migrating Sharepoint 2013 Intranet to Share point
                    online
                    <br />• Implementing CSS design to sharepoint Intranet and
                    websites
                    <br />• Project estimations
                  </p>
                </div>
                <div />
              </div>
              <div className="places">
                <div className="title-experience">
                  <h3>Software Developer</h3>
                  <h4> December 2014 - May 2017</h4>
                </div>
                <div className="company">
                  <h4>Software Estrategico</h4>
                </div>
                <div>
                  <h5>
                    <strong> Outline:</strong>
                  </h5>
                  <br />
                  <p>
                    •Making websites with MVC, HTML5, JQuery, javascript and
                    SQLDatabase
                    <br />• Implementing design to sites with CSS
                    <br />• Maintenance and developing components for sharepoint
                    intranet with C,HTML5,CSS,JQuery and javascript
                    <br />• Project estimations
                    <br />• Maintenance and developing components for software
                    made with .NETWPF and SQL,Oracle and Informix Database
                  </p>
                </div>
              </div>
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
              <div className="places">
                <div className="title-experience">
                  <h3>Bachelors degree Computer Science Engineering</h3>
                  <h4>2014- </h4>
                </div>

                <div className="company">
                  <h4>Salazar y Herrera University</h4>
                </div>
              </div>

              <div className="title-experience">
                <h3>Technician in software development</h3>
                <h4>2014</h4>
              </div>

              <div className="company">
                <h4>Servicion Nacional de Aprendizaje, SENA</h4>
                <br />
                <br />
              </div>

              <div className="places">
                <div className="title-experience">
                  <h3>Certifications</h3>
                  <span />
                </div>
                <div className="company certifications">
                  <h4>Scrum Team Member</h4>
                  <h4>Scrum Agile Institute</h4>
                </div>
                <br />
                <div className="company certifications">
                  <h4>Exam486: Developing ASP.NET MVC Web Applications</h4>
                  <h4>Intelligent Training</h4>
                </div>
                <br />
                <div className="company certifications">
                  <h4>Exam480:Programming in HTML5 with JavaScript and CSS3</h4>
                  <h4>Microsoft</h4>
                </div>
                <br />
              </div>
            </div>
          </section>
          {/* <!-- end education section --> */}
          {/* <!-- skills section --> */}

          {/* <!-- end skills section --> */}
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
