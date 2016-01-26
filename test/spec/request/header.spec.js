import { expect } from 'chai';

import { header } from '../../../src/request/header';

describe('request', () => {
  describe('header', () => {
    it('should set a headers property', () => {
      expect(header()().headers).to.be.an.object;
    });

    it('should set a header property', () => {
      expect(header('test', 'foo-bar')().headers.test).to.equal('foo-bar');
    });

    it('should remove a header property', () => {
      const request = header('test', 'foo-bar')();
      expect(request.headers.test).to.equal('foo-bar');
      expect(header('test', false)(request).headers.test).to.be.undefined;
    });
  });
});
