const names = require('./sharing&secret');//require is how Node.js loads code from somewhere else(sharing&secret) and uses it in the current running app.
const sayHi = require('./utils');
console.log(names);

sayHi(names.john);
sayHi(names.peter);