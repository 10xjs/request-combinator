import * as request from './index';
import * as _url from '../url';

export const _lift = (func) => (_request = {}) => {
  const { _url } = _request;
  return request.assign({ url: func(_url)})(_request);
};

export const url = _lift(_url.set);
export default url;
export const assign = _lift(_url.assign);
export const protocol = _lift(_url.protocol);
export const auth = _lift(_url.auth);
export const host = _lift(_url.host);
export const hostname = _lift(_url.hostname);
export const port = _lift(_url.port);
export const path = _lift(_url.pathname);
export const rebaseUrlPath = _lift(_url.rebasePath);
export const joinPath = _lift(_url.joinPath);
export const hash = _lift(_url.hash);
export const search = _lift(_url.search);
export const rebase = _lift(_url.rebase);
export const formatUrl = _lift(_url.format);
