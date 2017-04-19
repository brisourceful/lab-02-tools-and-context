'use strict';

const product = require('./lib/call-apply.js');
console.log(product);

let packet = new product.MegaCookie('Chocolate Chip', 'Large');
console.log(packet);

product.places.addToCountries('Canada','UK', 'France');
console.log(product.places);
