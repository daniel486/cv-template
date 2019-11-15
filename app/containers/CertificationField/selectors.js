import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the certificationField state domain
 */

const selectCertificationFieldDomain = state =>
  state.certificationField || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CertificationField
 */

const makeSelectCertificationField = () =>
  createSelector(
    selectCertificationFieldDomain,
    substate => substate,
  );

export default makeSelectCertificationField;
export { selectCertificationFieldDomain };
