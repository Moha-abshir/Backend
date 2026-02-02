const num1 = 12;
const num2 = 13;

const add = ()=>{console.log(`Total sum is : ${num1 + num2}`)};
add();
//there is no need to use module.export because the require() will execute it.
// in the file that is going to require it: 
//     console.log(require('./invokingMethod')); The output will be => Total sum is : 25