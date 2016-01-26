import { expect } from 'chai';

import {
  noReferrer,
  clientReferrer,
} from '../../../src/request/referrer.js';

describe('request', () => {
  describe('referrer', () => {
    describe('NoReferrer', () => {
      it('should set the referrer property', () => {
        expect(noReferrer().referrer).to.equal('no-referrer');
      });
    });

    describe('clientReferrer', () => {
      it('should set the referrer property', () => {
        expect(clientReferrer().referrer).to.equal('client');
      });
    });
  });
});
