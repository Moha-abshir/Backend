const http = require('http');
const server = http.createServer((req, res)=>{
   if(req.url === '/'){
      console.log('Home page')
      res.write('Home page');
      res.end()
   }
   else if(req.url === '/about'){
      
      //Lets do some Blocking here:
      for (let index = 0; index < 1000; index++) {
         for (let j = 0; j < 1000; j++) {   
            res.write(`${index} and ${j}\n`);
         }
      }
      console.log('About page')
      res.write('About page');
      res.end();
   }
   else{
      res.write('Error page');
      res.end();
   }
})
server.listen(5000, ()=>{
   console.log('The server runs on port 5000');
})