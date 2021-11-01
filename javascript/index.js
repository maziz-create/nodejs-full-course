
//1 => modul.js
// const foo = require('./modul.js'); //.js yazıp yazmaması çok önemli değil.

// console.log(foo());



// 2 => modul.js
// const foo = require('./modul').foo;
// const bar = require('./modul').bar;

// console.log(foo());
// console.log(bar());



// 3 => modul.js
const {fooFunction, barFunction} = require('./modul');

console.log(fooFunction());
console.log(barFunction());













