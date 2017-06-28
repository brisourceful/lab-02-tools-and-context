'use strict';

const product = require('./lib/call-apply.js');
console.log(product);

let packet = new product.MegaCookie('Chocolate Chip', 'Large');
console.log(packet);

let dietPacket = new product.DietCookie('Skinny Bitch', 'Small')
console.log(dietPacket);
