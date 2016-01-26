import { assign } from './index';
import { CACHE } from './constant';

/**
 * Set the request cache type.
 *
 * @function
 *
 * @param { string } cache A request cache type string.
 *
 * @returns { Request } A request object.
 */
export const cache = (cache) => assign({ cache });

/**
 * Set the request cache type to 'default'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const defaultCache = cache(CACHE.DEFAULT);

/**
 * Set the request cache type to 'no-store'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const noStoreCache = cache(CACHE.NO_STORE);

/**
 * Set the request cache type to 'reload'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const reloadCache = cache(CACHE.RELOAD);

/**
 * Set the request cache type to 'no-cache'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const noCache = cache(CACHE.NO_CACHE);

/**
 * Set the request cache type to 'force-cache'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const forceReloadCache = cache(CACHE.FORCE_CACHE);

/**
 * Set the request cache type to 'only-if-cached'.
 *
 * @function
 *
 * @param { Request } request A request object.
 *
 * @returns { Request } A request object.
 */
export const cacheOnlyIfCached = cache(CACHE.ONLY_IF_CACHED);
