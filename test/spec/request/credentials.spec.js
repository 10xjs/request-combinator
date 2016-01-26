import { expect } from 'chai';

import {
  omitCredentials,
  sameOriginCredentials,
  includeCredentials,
} from '../../../src/request/credentials';

describe('request', () => {
  describe('credentials', () => {
    describe('omitCredentials', () => {
      it('should set the credentials property', () => {
        expect(omitCredentials().credentials).to.equal('omit');
      });
    });

    describe('sameOriginCredentials', () => {
      it('should set the credentials property', () => {
        expect(sameOriginCredentials().credentials).to.equal('same-origin');
      });
    });

    describe('includeCredentials', () => {
      it('should set the credentials property', () => {
        expect(includeCredentials().credentials).to.equal('include');
      });
    });
  });
});
