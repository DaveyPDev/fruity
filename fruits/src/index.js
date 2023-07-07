
let fruits = require('./fruits');
let { choice, remove } = require('./helpers.js');

let rFruit = choice(fruits);

console.log(`I'd like one ${rFruit}, please.`);

console.log(`Here you go: ${rFruit}`);

console.log('Delicious! May I have another?');

remove(fruits, rFruit);

console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);
