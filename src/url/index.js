import compose from 'lodash/flowRight';
import identity from 'lodash/identity';
import isString from 'lodash/isString';
import { parse, format } from 'url';

import {
  _joinPaths,
  _parseProtocol,
  _parseHost,
  _parsePath,
  _formatHash,
  _parseSearch,
  _formatUrl,
} from './util';

// -----------------------------------------------------------------------------
// Url combinators.
// -----------------------------------------------------------------------------

/**
 * Set url object from a string.
 *
 * @function
 *
 * @param { string } url A url string.
 *
 * @returns { Function } A function that updates a request object.
 */
export const url = (_url = '') =>
  _formatUrl(isString(_url) ? parse(_url) : _url);
export default url;

/**
 * Merge an update object with the url object. Noramlizes the result by
 * calling `url.format` and then `url.parse`.
 *
 * @function
 *
 * @param { Url } update An object to merge with the request url object.
 *
 * @returns { Function } A function that updates a url object.
 */
export const assign = (update = {}) => (_url = {}) => {
  const updatedUrl = {
    ...url(_url),
    ...update,
  };
  return {
    ...updatedUrl,
    href: format(updatedUrl),
  };
};

/**
 * Replace the request url path with.
 *
 * @function
 *
 * @param { string } protocol A protocol `http:` or `https:`.
 *
 * @returns { Function } A function that updates a url object.
 */
export const protocol = (protocol) =>
  assign(_parseProtocol(protocol));

/**
 * Replace the url auth string.
 *
 * @function
 *
 * @param { string } auth An auth string.
 *
 * @returns { Function } A function that updates a url object.
 */
export const auth = (auth) => assign({ auth });

/**
 * Replace the url host (hostname and port number).
 *
 * @function
 *
 * @param { string } host A host composed of a hostname and a port number.
 *
 * @returns { Function } A function that updates a url object.
 */
export const host = (host) => assign(_parseHost(host));

/**
 * Replace the url hostname.
 *
 * @function
 *
 * @param { string } hostname A hostname string.
 *
 * @returns { Function } A function that updates a url object.
 */
export const hostname = (hostname) => (_url = {}) => {
  const parsedUrl = url(_url);
  const { port = null } = parsedUrl;
  return host(`${ hostname }${ port !== null ? `:${ port }` : ''}`)(parsedUrl);
};

/**
 * Replace the request url port number.
 *
 * @function
 *
 * @param { number } port A port number.
 *
 * @returns { Function } A function that updates a url object.
 */
export const port = (port) => (_url = {}) => {
  const parsedUrl = url(_url);
  return host(`${ parsedUrl.hostname || '' }:${ port }`)(parsedUrl);
};

/**
 * Replace the request url path and search string.
 *
 * @function
 *
 * @param { string } path A path.
 *
 * @returns { Function } A function that updates a url object.
 */
export const path = (path) => assign(_parsePath(path));

/**
 * Replace the request url path.
 *
 * @function
 *
 * @param { string } pathname A path.
 *
 * @returns { Function } A function that updates a url object.
 */
export const pathname = (pathname) => (_url = {}) => {
  const parsedUrl = url(_url);
  const parseResult = _parsePath(pathname + (parsedUrl.search || ''));

  return assign({
    pathname: parseResult.pathname,
    path: parseResult.path,
  })(parsedUrl);
};

/**
 * Prepend patsh[s] to the request url path.
 *
 * @function
 *
 * @param { string } base Paths to prepend to the url path.
 *
 * @returns { Function } A function that updates a url object.
 */
export const prepend = (...args) => (_url = {}) => {
  const parsedUrl = url(_url);
  return pathname(_joinPaths(...args, parsedUrl.pathname))(parsedUrl);
};

/**
 * Append path[s] to the request url pathname.
 *
 * @function
 *
 * @param { string } path Paths to join to the url pathname.
 *
 * @returns { Function } A function that updates a url object.
 */
export const append = (...args) => (_url = {}) => {
  const parsedUrl = url(_url);
  return pathname(_joinPaths(parsedUrl.pathname, ...args))(parsedUrl);
};

/**
 * Replace the hash string. Preceding `#` character is optional.
 *
 * @function
 *
 * @param { string } hash A hash string.
 *
 * @returns { Function } A function that updates a url object.
 */
export const hash = (hash) => assign({ hash: _formatHash(hash) });

/**
 * Replace the request search string. Preceding `?` character is optional.
 *
 * @function
 *
 * @param { string } search A search string.
 *
 * @returns { Function } A function that updates a url object.
 */
export const search = (search) => assign(_parseSearch(search));

/**
 * Replace the
 *
 * @function
 *
 * @param { string } base Paths to prepend to the url path.
 *
 * @returns { Function } A function that updates a url object.
 */

export const rebase = (rebase = {}) => {
  const parsed = isString(rebase) ? parse(rebase) : rebase;
  return compose(
    protocol(parsed.protocol + (parsed.slashes ? '//' : '')),
    auth(parsed.auth),
    host(parsed.host),
    parsed.pathname && prepend(parsed.pathname) || identity,
  );
};
