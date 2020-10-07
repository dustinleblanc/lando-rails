/**
 * Test for customMod module.
 * @file customMod.spec.js
 */

'use strict';

const customMod = require('./../lib/customMod');
const chai = require('chai');
chai.should();

describe('customMod', () => {
  it('should do things', function() {
    customMod.doThings().should.equal('This is the return of the doThings method on the customMod module!');
  });
});
