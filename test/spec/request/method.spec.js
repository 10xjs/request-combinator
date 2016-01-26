import { expect } from 'chai';

import {
  get,
  put,
  post,
  patch,
  del,
} from '../../../src/request/method.js';

describe('request', () => {
  describe('method', () => {
    describe('get', () => {
      it('should set the method property', () => {
        expect(get().method).to.equal('GET');
      });
    });

    describe('put', () => {
      it('should set the method property', () => {
        expect(put().method).to.equal('PUT');
      });
    });

    describe('post', () => {
      it('should set the method property', () => {
        expect(post().method).to.equal('POST');
      });
    });

    describe('patch', () => {
      it('should set the method property', () => {
        expect(patch().method).to.equal('PATCH');
      });
    });

    describe('del', () => {
      it('should set the method property', () => {
        expect(del().method).to.equal('DELETE');
      });
    });
  });
});
