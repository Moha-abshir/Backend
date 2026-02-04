const names = require('./sharing&secret');//require is how Node.js loads code from somewhere else(sharing&secret) and uses it in the current running app.
const sayHi = require('./utils');
console.log(names);
const data = require("./alternative-syntax")
console.log(data);
console.log(data)
require('./invokingMethod'); // This code will run because we run the code inside the file located inside the require.
sayHi(names.john);
sayHi(names.peter);