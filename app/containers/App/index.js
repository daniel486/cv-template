/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NewEmployeeInfo from 'containers/NewEmployeeInfo/Loadable';
import EmployeeList from 'containers/EmployeeList/Loadable';
import EmployeeInfo from '../EmployeeInfo';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/create-employee" component={NewEmployeeInfo} />
        <Route
          exact
          path="/employee-info/:idEmployee"
          component={EmployeeInfo}
        />
        <Route exact path="/employee-list" component={EmployeeList} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
