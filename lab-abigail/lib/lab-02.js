'use strict';

module.exports = exports = {};

exports.Animal = function(name, breed, age, city) {
  this.name = name;
  this.breed = breed;
  this.age = age;
  this.city = city;
};

//Call
exports.WinningDog = function(name, breed, age, city, bark) {
  exports.Animal.call(this, name, breed, age, city);
  this.bark = bark;
  console.log(`${name} is a ${breed}. S/he is ${age} years old and is from ${city}. ${bark}!`);
  return `${name} is a ${breed}. S/he is ${age} years old and is from ${city}. ${bark}!`;
};

exports.winnerDog = new exports.WinningDog('Spot', 'Beagle', 4, 'Seattle', 'Woof');

//Apply
exports.WinningCat = function(name, breed, age, city, purr) {
  exports.Animal.apply(this, [name, breed, age, city]);
  this.purr = purr;
  console.log(`Congrats to ${name}! S/he is a ${breed}, ${age} years old, and is from ${city}. ${purr}!`);
  return `Congrats to ${name}! S/he is a ${breed}, ${age} years old, and is from ${city}. ${purr}!`;
};

exports.winnerCat = new exports.WinningCat('Kathy', 'Black Cat', 3 , 'Denver', 'Purrr');
