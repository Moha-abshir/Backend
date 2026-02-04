const { readFile, writeFile } = require('fs');

readFile('./text1.txt', 'utf8', (err, result)=>{
   if(err){
      console.log(err);
      return;
   }
   console.log('Reading starting!!')
   console.log(`The result is: ${result}`);

   //If we place a writeFile outside of this callback, it might finish first before the readFile. So we just place it within the readfile to prevent it.
   const addedContent = "\nAdditional message"
   writeFile('./text1.txt', addedContent, {
      encoding: 'utf8',
      flag: 'a'
   },(err)=>{ //As you can see, writeFile has no return.
      if (err){
         console.log(err);
         return;
      }
      console.log("Writing starting!!")
   })
   //Lets see if the content of the file changed.
   readFile('./text1.txt', {
      encoding: 'utf8',
      flag: 'r'
   }, (err, result)=>{
      if(err){
         console.log(err);
         return;
      }
      console.log(`The new result is: ${result}`)
   })
})