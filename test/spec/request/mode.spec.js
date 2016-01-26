import { expect } from 'chai';

import {
  coors,
  noCoors,
  coorsSameOrigin,
} from '../../../src/request/mode.js';

describe('request', () => {
  describe('mode', () => {
    describe('coors', () => {
      it('should set the mode property', () => {
        expect(coors().mode).to.equal('coors');
      });
    });

    describe('noCoors', () => {
      it('should set the mode property', () => {
        expect(noCoors().mode).to.equal('no-coors');
      });
    });

    describe('coorsSameOrigin', () => {
      it('should set the mode property', () => {
        expect(coorsSameOrigin().mode).to.equal('same-origin');
      });
    });
  });
});
