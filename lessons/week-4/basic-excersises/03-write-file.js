const fs = require('fs');
const path = require('path');

const content = 'This is the new content of the file.';
const newFilePath = path.join(__dirname, 'new-file.txt');

// Write to the file, if not exists, it will create it
fs.writeFile(newFilePath, content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
        return;
    }
    console.log('File has been written successfully.');
});
