/**
 *
 * Asynchronously loads the component for EmployeeInfo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
