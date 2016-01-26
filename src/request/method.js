import { assign } from './index';
import { METHOD } from './constant';

/**
 * Set the request method.
 *
 * @function
 *
 * @param { string } method A request method string.
 *
 * @returns { Request } A request object.
 */
export const method = (method) => assign({ method });
export default method;

/**
 * Set the request method to GET.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const get = method(METHOD.GET);

/**
 * Set the request method to PUT.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const put = method(METHOD.PUT);

/**
 * Set the request method to POST.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const post = method(METHOD.POST);

/**
 * Set the request method to PATCH.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const patch = method(METHOD.PATCH);

/**
 * Set the request method to DELETE.
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const del = method(METHOD.DELETE);
