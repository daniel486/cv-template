/**
 *
 * Asynchronously loads the component for EmployeeList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
