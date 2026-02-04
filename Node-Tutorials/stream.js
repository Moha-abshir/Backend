 const { createReadStream, createWriteStream } = require('fs');
// const stream = createReadStream('./bigFileExample.txt', {
//    encoding: 'utf8',
//    highWaterMark: 9000
// });

// stream.on('data', (chunk)=>{
//    console.log(`The first data chunk is : ${chunk}`)
// })
// stream.on('end', ()=>{
//    console.log('End of chunk');
// })
// stream.on('error', ()=>{
//    console.log('There was an error handling your request.')
// })


//LETS TRY TO DO DATA TRANSFER USING PIPE() METHOD.
const readFile = createReadStream('./bigFileExample.txt', 'utf8');
const writeFile = createWriteStream('./copyOfbigFileExample.txt');
readFile.pipe(writeFile); // Controls everything: reads, writes and manages the speed of both. Handles BACKPRESSURE