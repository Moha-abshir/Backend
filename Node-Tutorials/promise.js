const { readFile, writeFile } = require('fs');
const multipleFileRead = (filePath)=>{
   return new Promise((resolve, reject)=>{
      readFile(filePath, 'utf8', (err, result)=>{
         if(err){
            reject(err);
         }
         resolve(result);
      })
   });
};
const start = async () => {
   try {
      const firstResult = await multipleFileRead('./text0.txt');
      console.log(`**Success. First Read**: \n${firstResult}`);
      const secondResult = await multipleFileRead('./text2.txt');
      console.log(`**Success. Second read:** \n${secondResult}`);
   } catch (err) {
      console.log(`Error: ${err}`);
   }
};

start();
