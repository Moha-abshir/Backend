const http = require('http');
const { readFile, writeFile } = require('fs');
const { isContext } = require('vm');

const server = http.createServer((req, res)=>{
   if(req.url === '/'){
      readFile('./index.html', (err, result)=>{
         if(err){
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('<h1>404</h1> <p><strong>File Not found</strong></p>');
            res.end();
         }
         res.writeHead(200, {'Content-Type': 'text/html' });//It is supposed to be text/html  because what we are displaying a HTML file.
         res.write(result);
         res.end();//crucial. Do not forget it.
      })
   }
   else{
      res.write(`
         <h1>404 not found.</h1>
         <p>The page you are looking for cannot be found.</p>
         <p><a href="/">Back to home page.</a></p>
      `);
      res.end();
   }
})
server.listen(5000,()=>{
   console.log('Server is running on port 5000');
})