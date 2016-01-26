import { expect } from 'chai';

import {
  defaultCache,
  noStoreCache,
  reloadCache,
  noCache,
  forceReloadCache,
  cacheOnlyIfCached,
} from '../../../src/request/cache';

describe('request', () => {
  describe('cache', () => {
    describe('defaultCache', () => {
      it('should set the cache property', () => {
        expect(defaultCache().cache).to.equal('default');
      });
    });

    describe('noStoreCache', () => {
      it('should set the cache property', () => {
        expect(noStoreCache().cache).to.equal('no-store');
      });
    });

    describe('reloadCache', () => {
      it('should set the cache property', () => {
        expect(reloadCache().cache).to.equal('reload');
      });
    });

    describe('noCache', () => {
      it('should set the cache property', () => {
        expect(noCache().cache).to.equal('no-cache');
      });
    });

    describe('forceReloadCache', () => {
      it('should set the cache property', () => {
        expect(forceReloadCache().cache).to.equal('force-cache');
      });
    });

    describe('cacheOnlyIfCached', () => {
      it('should set the cache property', () => {
        expect(cacheOnlyIfCached().cache).to.equal('only-if-cached');
      });
    });
  });
});
