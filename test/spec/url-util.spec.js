import { expect } from 'chai';

import {
  _trimSlashes,
  _joinPaths,
  _parseProtocol,
  _parseHost,
  _parsePath,
  _formatHash,
  _formatUrl,
} from '../../src/url/util';

describe('url', () => {
  describe('_trimSlashes', () => {
    it('should trim leading and trailing slashes', () => {
      expect(_trimSlashes('/foo/bar/')).to.equal('foo/bar');
    });

    it('should trim multiple leading and trailing slashes', () => {
      expect(_trimSlashes('//foo/bar//')).to.equal('foo/bar');
    });

    it('should not alter strings without leading or trailing slashes', () => {
      expect(_trimSlashes('foo/bar')).to.equal('foo/bar');
    });
  });

  describe('_joinPaths', () => {
    it('should add a leading slash', () => {
      expect(_joinPaths()).to.equal('/');
      expect(_joinPaths('')).to.equal('/');
      expect(_joinPaths('foo')).to.equal('/foo');
    });

    it('should join multiple paths', () => {
      expect(_joinPaths('foo', 'bar', 'man')).to.equal('/foo/bar/man');
    });
  });

  describe('_parseProtocol', () => {
    it('should ensure a trailing colon', () => {
      expect(_parseProtocol('test:').protocol).to.equal('test:');
      expect(_parseProtocol('test').protocol).to.equal('test:');
    });

    it('should return slashes property', () => {
      expect(_parseProtocol('http://').slashes).to.be.true;
      expect(_parseProtocol('javascript').slashes).to.be.null;
    });

    it('should not add a colon to an empty string', () => {
      expect(_parseProtocol('').protocol).to.be.null;
    });
  });

  describe('_parseHost', () => {
    it('should extract host', () => {
      expect(_parseHost(':1234').host).to.equal(':1234');
      expect(_parseHost('test:1234').host).to.equal('test:1234');
      expect(_parseHost('test:').host).to.equal('test');
      expect(_parseHost('test').host).to.equal('test');
    });
    it('should extract hostname', () => {
      expect(_parseHost(':1234').hostname).to.equal('');
      expect(_parseHost('test:1234').hostname).to.equal('test');
      expect(_parseHost('test:').hostname).to.equal('test');
      expect(_parseHost('test').hostname).to.equal('test');
    });
    it('should extract port', () => {
      expect(_parseHost(':1234').port).to.equal(1234);
      expect(_parseHost('test:1234').port).to.equal(1234);
      expect(_parseHost('test:').port).to.be.null;
      expect(_parseHost('test').port).to.be.null;
    });
  });

  describe('_parsePath', () => {
    it('should extract pathname', () => {
      expect(_parsePath('').pathname).to.be.null;
      expect(_parsePath('?foo=bar').pathname).to.be.null;
      expect(_parsePath('/foo/bar?foo=bar').pathname).to.equal('/foo/bar');
      expect(_parsePath('foo/bar?').pathname).to.equal('/foo/bar');
      expect(_parsePath('foo/bar').pathname).to.equal('/foo/bar');
    });
    it('should extract query', () => {
      expect(_parsePath('?foo=bar').query).to.equal('foo=bar');
      expect(_parsePath('foo/bar?foo=bar').query).to.equal('foo=bar');
      expect(_parsePath('foo/bar?').query).to.equal('');
      expect(_parsePath('foo/bar').query).to.be.null;
    });
    it('should extract search', () => {
      expect(_parsePath('?foo=bar').search).to.equal('?foo=bar');
      expect(_parsePath('foo/bar?foo=bar').search).to.equal('?foo=bar');
      expect(_parsePath('foo/bar?').search).to.equal('?');
      expect(_parsePath('foo/bar').search).to.be.null;
    });
    it('should extract path', () => {
      expect(_parsePath('').path).to.be.null;
      expect(_parsePath('?foo=bar').path).to.equal('?foo=bar');
      expect(_parsePath('/foo/bar?foo=bar').path).to.equal('/foo/bar?foo=bar');
      expect(_parsePath('foo/bar?').path).to.equal('/foo/bar?');
      expect(_parsePath('foo/bar').path).to.equal('/foo/bar');
    });
  });

  describe('_formatHash', () => {
    it('should return a url hash or null', () => {
      expect(_formatHash('')).to.be.null;
      expect(_formatHash('test')).to.equal('#test');
      expect(_formatHash('#test')).to.equal('#test');
      expect(_formatHash('#')).to.equal('#');
    });
  });

  describe('_formatUrl', () => {
    it('should have required keys', () => {
      expect(_formatUrl({})).to.include.keys(
        'protocol',
        'slashes',
        'auth',
        'host',
        'port',
        'hostname',
        'hash',
        'search',
        'query',
        'pathname',
        'path',
        'href',
      );
    });

    it('should return port as an int or null', () => {
      expect(_formatUrl({ port: '1234' }).port).to.equal(1234);
      expect(_formatUrl({ port: 'foo' }).port).to.be.null;
    });
  });
});
