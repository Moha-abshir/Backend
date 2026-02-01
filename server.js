const http = require('http');
const server = http.createServer((req, res)=>{
   if(req.url === '/'){
      res.write(`
         <h1>Welcome to the homepage</h1>
      `);
      res.end();
   }
   else if(req.url === '/about'){
      res.write(`
         <h1>Welcome to the about page</h1>
      `)
      res.end();
   }
   else{
      res.write(`
         <h1>Invalid url</h1>
         <p>Go back to the hompage</p>
         <a href='/'>Back home</a>
      `)
      res.end();
   }
});
server.listen(5000, ()=>{
   console.log('The server is running on port 5000');
});