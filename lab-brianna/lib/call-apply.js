'use strict';

module.exports = exports = {};

exports.Cookie = function (type, size){
  this.type = type;
  this.size = size;
};

exports.MegaCookie = function (type, size){
  exports.Cookie.call(this, type, size);
  this.forBrianna = true;
};

exports.DietCookie = function ([]) {
  exports.Cookie.apply(this, arr);
  this.forWeightWatchers = true;
};

// exports.places = {
//   countries: [],
//   addToCountries: function(countries) {
//     Array.prototype.push.apply(this.countries, countries);
//   },
// };
