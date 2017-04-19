'use strict';

const assert = require('assert');
const parcel = require('../lib/call-apply');

describe('parcel', function() {
  describe('#call-apply.js', function() {
    let bucket = new parcel.MegaCookie('Snickerdoodle', 'Small');
    it('should return a MegaCookie object with three properties including Snickerdoodle, Small, True', function() {
      assert.equal(bucket.type, 'Snickerdoodle');
      assert.equal(bucket.size, 'Small');
    });
    let cookieArray = ['oreo', 'choclate', 'vanilla'];
    let box = new parcel.DietCookie(cookieArray);
    it('should return an array of three different objects', function() {
      assert.equal(box.)
    })
  });
});
