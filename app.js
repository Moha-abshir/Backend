const names = require('./sharing&secret');//require is how Node.js loads code from somewhere else(sharing&secret) and uses it in the current running app.
const sayHi = require('./utils');
console.log(names);
const data = require("./alternative-syntax")
console.log(data);
console.log(data)

sayHi(names.john);
sayHi(names.peter);