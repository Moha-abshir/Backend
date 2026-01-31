const {readFileSync, writeFileSync} = require('fs');
const { encode } = require('punycode');

const first = readFileSync('./text1.txt', 'utf8')
console.log(first);

const newAddedContent = 'This is the new content after the file has been changed.'
writeFileSync('./text2.txt', 
   newAddedContent,
   {
      // encoding: 'utf8', //Node translates the text to utf8
      // flag: 'a',//This one here adds the new content at the end of the old text.
      // //flag: 'w'
      // mode: '0o666'
   } 
)