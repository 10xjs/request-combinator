import { assign } from './index';
import * as url from '../url';

export const _lift = (func) => (request = {}) => {
  const { url } = request;
  return assign({ url: func(url)})(request);
};

export const url = _lift(url.set);
export default url;
export const assign = _lift(url.assign);
export const protocol = _lift(url.protocol);
export const auth = _lift(url.auth);
export const host = _lift(url.host);
export const hostname = _lift(url.hostname);
export const port = _lift(url.port);
export const path = _lift(url.pathname);
export const rebaseUrlPath = _lift(url.rebasePath);
export const joinPath = _lift(url.joinPath);
export const hash = _lift(url.hash);
export const search = _lift(url.search);
export const rebase = _lift(url.rebase);
export const formatUrl = _lift(url.format);
