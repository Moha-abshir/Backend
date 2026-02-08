const express = require('express');
const app = express();

app.get('/', (req, res)=>{
   res.send('Welcome home');
});
//Getting variables from parameters.
app.get('/products/:productId', (req, res)=>{
   console.log(req.params);
   res.send(`The product you are searching for is here: ${req.params.productId}`);
});
//Useful when constructing searching logic
app.get('/search', (req, res)=>{
   console.log(req.query);
   if(req.query.name && req.query.age){
      res.send(`${req.query.name} and ${req.query.age}`);
   }
   else{
      res.send('Enter your name and age');
   }
});
//Useful when you want to perform different methods on a single page
app.route('/items')
   .get((req, res)=>{
      res.send('Get a random item');
   })
   .post((req,res)=>{
      res.send('Add a item');
   })
   .put((req, res)=>{
      res.send('Update an item');
   });
app.listen(5000, ()=>{console.log('server runs on port 5000')});