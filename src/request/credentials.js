import { assign } from './index';
import { CREDENTIALS } from './constant';

/**
 * Set the request credentials type.
 *
 * @function
 *
 * @param { string } credentials A request credentials string.
 *
 * @returns { Request } A request object.
 */
export const credentials = (credentials) => assign({ credentials });
export default credentials;

/**
 * Set the request credentials type to 'omit'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const omitCredentials = credentials(CREDENTIALS.OMIT);

/**
 * Set the request credentials type to 'same-origin'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const sameOriginCredentials = credentials(CREDENTIALS.SAME_ORIGIN);

/**
 * Set the request credentials type to 'include'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const includeCredentials = credentials(CREDENTIALS.INCLUDE);

