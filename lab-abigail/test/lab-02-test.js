'use strict';

const assert = require('assert');
const lab = require('../lib/lab-02.js');

describe('lab-02.js', function() {
  describe('#call Dog Object', function(){
    it('should return, Spot is a Beagle. S/he is 4 years old and is from Seattle. Woof!', function() {
      assert.equal(lab.WinningDog('Spot', 'Beagle', 4, 'Seattle', 'Woof'), 'Spot is a Beagle. S/he is 4 years old and is from Seattle. Woof!');
    });
    it('should return a string', function() {
      assert.equal(typeof lab.WinningDog('Spot', 'Beagle', 4, 'Seattle', 'Woof'), 'string');
    });
  });
});

describe('lab-02.js', function() {
  describe('#apply Animal Object', function(){
    it('should return a string', function() {
      assert.equal(typeof lab.WinningCat('Kathy', 'Dalmation', 3 , 'Denver'), 'string');
    });

    it('should return, Congrats to Kathy! S/he is a Black Cat, 3 years old, and is from Denver. Purrr!', function() {
      assert.equal(lab.WinningCat('Kathy', 'Black Cat', 3 , 'Denver', 'Purrr'), 'Congrats to Kathy! S/he is a Black Cat, 3 years old, and is from Denver. Purrr!');
    });
  });
});
