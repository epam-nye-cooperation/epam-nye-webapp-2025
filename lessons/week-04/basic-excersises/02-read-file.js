const fs = require('fs');
const path = require('path');

// Specify the path to the text file
const filePath = path.join(__dirname, 'sample.txt');

console.log('Before reading the file asynchronously...');

// Read the contents of the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('Async File contents:', data);
});
console.log('After reading the file asynchronously....')

console.log('Before reading the file synchronously...');
// Read the contents of the file synchronously
try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log('Sync File contents:', data);
} catch (err) {
    console.error('Error reading the file:', err);
}
console.log('After reading the file synchronously....')



// Understanding the order of execution (little extra if anyone is interested)
// https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick

