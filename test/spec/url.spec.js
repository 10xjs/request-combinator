import { expect } from 'chai';

import {
  url,
  protocol,
  auth,
  host,
  hostname,
  port,
  path,
  pathname,
  prepend,
  append,
  hash,
  search,
  rebase,
} from '../../src/url';

// console.log(_url('https://user:pass@www.test.com:1234/path?foo=bar#test'));

describe('url', () => {
  describe('url', () => {
    let original;
    let _url;

    beforeEach(() => {
      original = 'https://user:pass@www.test.com:1234/path?foo=bar#test';
      _url = url(original);
    });
    it('should parse protocol', () => {
      expect(_url.protocol).to.equal('https:');
    });

    it('should parse slashes', () => {
      expect(_url.slashes).to.be.true;
    });

    it('should parse auth', () => {
      expect(_url.auth).to.equal('user:pass');
    });

    it('should parse host', () => {
      expect(_url.host).to.equal('www.test.com:1234');
    });

    it('should parse port', () => {
      expect(_url.port).to.equal(1234);
    });

    it('should parse hostname', () => {
      expect(_url.hostname).to.equal('www.test.com');
    });

    it('should parse hash', () => {
      expect(_url.hash).to.equal('#test');
    });

    it('should parse search', () => {
      expect(_url.search).to.equal('?foo=bar');
    });

    it('should parse query', () => {
      expect(_url.query).to.equal('foo=bar');
    });

    it('should parse pathname', () => {
      expect(_url.pathname).to.equal('/path');
    });

    it('should parse path', () => {
      expect(_url.path).to.equal('/path?foo=bar');
    });

    it('should parse href', () => {
      expect(_url.href).to.equal(original);
    });
  });

  describe('protocol', () => {
    it('should set the protocol property', () => {
      expect(protocol('https')().protocol).to.equal('https:');
      expect(protocol('https')('http://test.com').protocol).to.equal('https:');
    });

    it('should set the href property', () => {
      expect(protocol('https')('http://test.com').href)
        .to.equal('https://test.com/');
    });
  });

  describe('auth', () => {
    it('should set the auth property', () => {
      expect(auth('foo:bar')().auth).to.equal('foo:bar');
      expect(auth('foo:bar')('http://test.com').auth).to.equal('foo:bar');
    });

    it('should set the href property', () => {
      expect(auth('foo:bar')('http://test.com').href)
        .to.equal('http://foo:bar@test.com/');
    });
  });

  describe('host', () => {
    it('should set the host property', () => {
      expect(host('test:1234')().host).to.equal('test:1234');
      expect(host('test:1234')('http://test.com').host).to.equal('test:1234');
    });

    it('should set the hostname property', () => {
      expect(host('test:1234')().hostname).to.equal('test');
      expect(host('test:1234')('http://test.com').hostname).to.equal('test');
    });

    it('should set the port property', () => {
      expect(host('test:1234')().port).to.equal(1234);
      expect(host('test:1234')('http://test.com').port).to.equal(1234);
    });

    it('should set the href property', () => {
      expect(host('test:1234')('http://test.com').href)
        .to.equal('http://test:1234/');
    });
  });

  describe('hostname', () => {
    let _url;

    beforeEach(() => {
      _url = host('foo:1234')();
    });

    it('should set the host property', () => {
      expect(hostname('test')().host).to.equal('test');
      expect(hostname('test')(_url).host).to.equal('test:1234');
    });

    it('should set the hostname property', () => {
      expect(hostname('test')().hostname).to.equal('test');
      expect(hostname('test')(_url).hostname).to.equal('test');
    });

    it('should not change the port property', () => {
      expect(hostname('test')().port).to.equal(null);
      expect(hostname('test')(_url).port).to.equal(_url.port);
    });

    it('should set the href property', () => {
      expect(hostname('test')('http://test.com').href)
        .to.equal('http://test/');
    });
  });

  describe('port', () => {
    let _url;

    beforeEach(() => {
      _url = host('foo:1234')();
    });

    it('should set the host property', () => {
      expect(port(3456)().host).to.equal(':3456');
      expect(port(3456)(_url).host).to.equal('foo:3456');
    });

    it('should set the port property', () => {
      expect(port(3456)().port).to.equal(3456);
      expect(port(3456)(_url).port).to.equal(3456);
    });

    it('should not change the hostname property', () => {
      expect(port(3456)().hostname).to.equal('');
      expect(port(3456)(_url).hostname).to.equal(_url.hostname);
    });

    it('should set the href property', () => {
      expect(port(3456)('http://test.com').href)
        .to.equal('http://test.com:3456/');
    });
  });

  describe('path', () => {
    it('should set the path property', () => {
      expect(path('/')().path).to.equal('/');
      expect(path('/foo/bar?foo=bar')().path).to.equal('/foo/bar?foo=bar');
    });
    it('should set the pathname property', () => {
      expect(path('/')().pathname).to.equal('/');
      expect(path('/foo/bar?foo=bar')().pathname).to.equal('/foo/bar');
    });
    it('should set the search property', () => {
      expect(path('/foo/bar')().search).to.equal(null);
      expect(path('/foo/bar?foo=bar')().search).to.equal('?foo=bar');
    });
    it('should set the query property', () => {
      expect(path('/foo/bar')().query).to.equal(null);
      expect(path('/foo/bar?foo=bar')().query).to.equal('foo=bar');
    });

    it('should set the href property', () => {
      expect(path('/foo/bar')('http://test.com').href)
        .to.equal('http://test.com/foo/bar');
    });
  });

  describe('pathname', () => {
    let _url;

    beforeEach(() => {
      _url = path('/foo?bar=foo')();
    });

    it('should set the path property', () => {
      expect(pathname('/foo/bar')(_url).path).to.equal('/foo/bar?bar=foo');
    });

    it('should set the pathname property', () => {
      expect(pathname('/foo/bar')(_url).pathname).to.equal('/foo/bar');
    });

    it('should set the href property', () => {
      expect(pathname('/foo/bar')('http://test.com').href)
        .to.equal('http://test.com/foo/bar');
    });
  });

  describe('prepend', () => {
    let _url;

    beforeEach(() => {
      _url = path('/foo?bar=foo')();
    });

    it('should set the path property', () => {
      expect(prepend('bar')(_url).path).to.equal('/bar/foo?bar=foo');
    });

    it('should set the pathname property', () => {
      expect(prepend('bar')(_url).pathname).to.equal('/bar/foo');
    });

    it('should not change the query or search properties', () => {
      expect(prepend('bar')(_url).query).to.equal(_url.query);
      expect(prepend('bar')(_url).search).to.equal(_url.search);
    });

    it('should handle multiple arguments', () => {
      expect(prepend('1', '2')(_url).pathname).to.equal('/1/2/foo');
    });

    it('should set the href property', () => {
      expect(prepend('bar')('http://test.com/foo').href)
        .to.equal('http://test.com/bar/foo');
    });
  });

  describe('append', () => {
    let _url;

    beforeEach(() => {
      _url = path('/foo?bar=foo')();
    });

    it('should set the path property', () => {
      expect(append('bar')(_url).path).to.equal('/foo/bar?bar=foo');
    });

    it('should set the pathname property', () => {
      expect(append('bar')(_url).pathname).to.equal('/foo/bar');
    });

    it('should not change the query or search properties', () => {
      expect(append('bar')(_url).query).to.equal(_url.query);
      expect(append('bar')(_url).search).to.equal(_url.search);
    });

    it('should handle multiple arguments', () => {
      expect(append('1', '2')(_url).pathname).to.equal('/foo/1/2');
    });

    it('should set the href property', () => {
      expect(append('bar')('http://test.com/').href)
        .to.equal('http://test.com/bar');
    });
  });

  describe('hash', () => {
    it('should set the hash property', () => {
      expect(hash('foo')().hash).to.equal('#foo');
    });

    it('should set the href property', () => {
      expect(hash('foo')('http://test.com/').href)
        .to.equal('http://test.com/#foo');
    });
  });

  describe('search', () => {
    it('should set the search property', () => {
      expect(search('foo')().search).to.equal('?foo');
    });
    it('should set the query property', () => {
      expect(search('foo')().query).to.equal('foo');
    });

    it('should set the href property', () => {
      expect(search('foo')('http://test.com/#hash').href)
        .to.equal('http://test.com/?foo#hash');
    });
  });

  describe('rebase', () => {
    let _url;

    beforeEach(() => {
      _url = url('https://foo.bar:30/api/path?foo');
    });

    it('should set the protocol property', () => {
      expect(rebase('http://bar.com')(_url).protocol).to.equal('http:');
    });

    it('should set the host property', () => {
      expect(rebase('http://bar.com:60')(_url).host).to.equal('bar.com:60');
    });

    it('should set the path property', () => {
      expect(rebase('http://bar.com/path')(_url).path)
        .to.equal('/path/api/path?foo');
    });
  });
});
