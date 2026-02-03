const { readFile, writeFile} = require('fs');
const util = require('util');

const readFiles = util.promisify(readFile); //Node writes the wrapper for us.
const writeFiles = util.promisify(writeFile);

const start = async()=>{
   try {
      const firstRead = await readFiles('./text1.txt','utf8');
      console.log('Read Successful')
      console.log(`${firstRead} }`);

      await writeFiles('./text1.txt', 'Modified text file.', {
         flag:'a',
         encoding:'utf8'
      })
      console.log('Write Successfull')
      console.log(await readFiles('./text1.txt', 'utf8'));
   } catch (error) {
      console.error(error)
   }
}
start();