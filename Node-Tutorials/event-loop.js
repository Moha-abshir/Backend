const fs = require('fs');

console.log('1. Script starts (Synchronous)');

// --- ASYNC TASK 1: The Timer ---
// We ask for a 0ms delay. Logic says this should run immediately, right?
setTimeout(() => {
   console.log('5. Timer callback (I was trapped in the Queue!)');
}, 0);

// --- ASYNC TASK 2: Read File ---
// This takes time to go to the hard drive.
fs.readFile(__filename, () => {
   console.log('6. File read callback (I/O finished)');
});

// --- SYNC TASK: The "Blocker" ---
// Imagine this is a heavy task like processing a massive image or encryption.
console.log('2. Heavy calculation starting (BLOCKING THE STACK)...');

// We force the computer to do nothing but math for 2 full seconds.
const start = Date.now();
while (Date.now() - start < 2000) {
   // nothing happens here, just looping...
}

console.log('3. Heavy calculation finished');
console.log('4. Script ends (Stack is finally empty)');