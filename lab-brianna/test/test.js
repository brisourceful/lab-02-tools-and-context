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
    let box = new parcel.DietCookie('Chocolate', 'Medium');
    it('should return an array', function() {
      assert.equal(box.type, 'Chocolate');
      assert.equal(box.size, 'Medium');
    });
  });
});
