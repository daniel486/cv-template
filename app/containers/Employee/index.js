/* eslint-disable react/prop-types */
/**
 *
 * Employee
 *
 */

import React from 'react';
import { compose } from 'redux';

import { Link } from 'react-router-dom';

export function Employee(props) {
  return (
    <div>
      <h3>{props.employee.fullName}</h3>
      <Link to={`/employee-info/${props.employee.id}`}>
        <img
          src={props.employee.localImageUrl}
          alt="employee-profile"
          height="124px"
        />
      </Link>
    </div>
  );
}

export default compose()(Employee);
