import { parse, format } from 'url';

const PATH_REGEXP = /^([^\?]*)((?:\?)([^#]*))?/;

export const _trimSlashes = (path = '') => path.replace(/(^[\/]+|[\/]+$)/g, '');

export const _joinPaths = (...args) => `/${args.map(_trimSlashes).join('/')}`;

export const _parseProtocol = (protocol) => {
  const url = parse('test.com');
  url.protocol = protocol;
  const parsed = parse(format(url));
  return {
    protocol: parsed.protocol,
    slashes: parsed.slashes,
  };
};

export const _formatPort = (port) => {
  const intPort = parseInt(port, 10);
  return !isNaN(intPort) ? intPort : null;
};

export const _parseHost = (host) => {
  const url = parse('http://');
  url.host = host;
  const parsed = parse(format(url));
  return {
    host: parsed.host,
    hostname: parsed.hostname,
    port: _formatPort(parsed.port),
  };
};

export const _parsePath = (_path) => {
  const [ ,
    _pathname,
    _search,
    _query,
  ] = (PATH_REGEXP.exec(_path) || []);

  const pathname = _pathname ? _joinPaths(_pathname) : null;
  const search = _search || null;
  const query = _search ? (_query || '') : null;

  const path = ((pathname || '') + (search || '')) || null;

  return {
    path,
    pathname,
    query,
    search,
  };
};

export const _formatHash = (hash) => {
  const url = parse('http://');
  url.hash = hash;
  return parse(format(url)).hash;
};

export const _parseSearch = (search) => {
  const url = parse('http://');
  url.search = search;
  const parsed = parse(format(url));
  return {
    search: parsed.search,
    query: parsed.query,
  };
};

export const _formatUrl = (url) => {
  const {
    protocol = null,
    slashes = null,
    auth = null,
    host = null,
    port = null,
    hostname = null,
    hash = null,
    search = null,
    query = null,
    pathname = null,
    path = null,
    href = null,
  } = url;

  return {
    protocol,
    slashes,
    auth,
    host,
    port: _formatPort(port),
    hostname,
    hash,
    search,
    query,
    pathname,
    path,
    href,
  };
};
