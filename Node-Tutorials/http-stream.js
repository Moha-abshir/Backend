const http = require('http');
const { createReadStream } = require('fs');

const server = http.createServer((req, res)=>{
   //Create the stream first
   const stream = createReadStream('./bigFileExample.txt', {
      encoding: 'utf8',
      highWaterMark: 9000
   });

   stream.on('data', (chunk)=>{
      res.write(chunk); //There is no need to call res.end() bcoz it will immediately run after the first chunk is displayed which is what we do not want
   })
   stream.on('end', ()=>{
      res.write('End of stream');
      res.end() //This is the correct part to place res.end() since it has to be called only aftr all res.write calls for thst response are complete
   });
   stream.on('error', ()=>{
      res.write('Error occured!');
      res.end();
   })
})
server.listen(5000, ()=>{
   console.log('The server runs on port 5000');
})