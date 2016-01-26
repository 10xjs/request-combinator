import { assign } from './index';
import { MODE } from './constant';

/**
 * Set the cross origin resoures sharing mode.
 *
 * @function
 *
 * @param { string } mode A cors mode string.
 *
 * @returns { Request } A request object.
 */
export const mode = (mode) => assign({ mode });
export default mode;

/**
 * Set the coors mode to "coors".
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const coors = mode(MODE.COORS);

/**
 * Set the coors mode to "no-coors".
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const noCoors = mode(MODE.NO_COORS);

/**
 * Set the coors mode to "same-origin".
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const coorsSameOrigin = mode(MODE.SAME_ORIGIN);
