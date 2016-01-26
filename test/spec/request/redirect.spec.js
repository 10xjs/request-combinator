import { expect } from 'chai';

import {
  followRedirect,
  errorRedirect,
  manualRedirect,
} from '../../../src/request/redirect';

describe('request', () => {
  describe('redirect', () => {
    describe('followRedirect', () => {
      it('should set the redirect property', () => {
        expect(followRedirect().redirect).to.equal('follow');
      });
    });

    describe('errorRedirect', () => {
      it('should set the redirect property', () => {
        expect(errorRedirect().redirect).to.equal('error');
      });
    });

    describe('manualRedirect', () => {
      it('should set the redirect property', () => {
        expect(manualRedirect().redirect).to.equal('manual');
      });
    });
  });
});

