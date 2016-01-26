import { assign } from './index';
import { REFERRER } from './constant';

/**
 * Set the request referrer.
 *
 * @function
 *
 * @param { string } referrer A request referrer string.
 *
 * @returns { Request } A request object.
 */
export const referrer = (referrer) => assign({ referrer });

/**
 * Set the request referrer to 'follow'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const noReferrer = referrer(REFERRER.NO_REFERRER);

/**
 * Set the request referrer to 'client'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const clientReferrer = referrer(REFERRER.CLIENT);
