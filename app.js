const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./text1.txt', 'utf8')
console.log(first);

const newAddedContent = 'This is the new content after the file has been changed.'
writeFileSync('./text2.txt', 
   newAddedContent,
   {
      encoding: 'utf8', //Node translates the text to utf8
      flag: 'a',//This one here adds the new content at the end of the old text.
      //flag: 'w', This one here overrites the entire file.
      //flag: 'r', It opens the file in reading mode. You will get an error if you try to edit/write in this file in the future
   } 
);
console.log(readFileSync('./text2.txt','utf8'))