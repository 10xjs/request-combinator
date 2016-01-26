import {
  METHOD,
  MODE,
  CREDENTIALS,
  CACHE,
  REDIRECT,
  REFERRER,
} from './constant';

/**
 * Update a request object with defaults.
 *
 * @function
 *
 * @param { Request } update A request object to merge with the request object.
 *
 * @returns { Function } A function that updates a request object.
 */
const request = (request = {}) => {
  const {
    method = METHOD.GET,
    headers = {},
    body = null,
    mode = MODE.CORS,
    credentials = CREDENTIALS.INCLUDE,
    cache = CACHE.DEFAULT,
    redirect = REDIRECT.MANUAL,
    referrer = REFERRER.CLIENT,
  } = request;

  return {
    method,
    headers,
    body,
    mode,
    credentials,
    cache,
    redirect,
    referrer,
  };
};
export default request;

/**
 * Merge an update object with a request object.
 *
 * @function
 *
 * @param { Request } update A request object to merge with the request object.
 *
 * @returns { Function } A function that updates a request object.
 */
export const assign = (update) => (_request = {}) => {
  return request({
    ..._request,
    ...update,
  });
};
