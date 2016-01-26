import { assign } from './index';
import { REDIRECT } from './constant';

/**
 * Set the request redirect type.
 *
 * @function
 *
 * @param { string } redirect A request redirect type string.
 *
 * @returns { Request } A request object.
 */
export const redirect = (redirect) => assign({ redirect });

/**
 * Set the request redirect type to 'follow'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const followRedirect = redirect(REDIRECT.FOLLOW);

/**
 * Set the request redirect type to 'error'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const errorRedirect = redirect(REDIRECT.ERROR);

/**
 * Set the request redirect type to 'manual'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const manualRedirect = redirect(REDIRECT.MANUAL);
