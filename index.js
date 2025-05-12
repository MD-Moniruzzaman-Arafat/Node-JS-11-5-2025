const fs = require('fs');


// Synchronous-(Blocking Code)
// const textIn = fs.readFileSync('./text/input.txt', 'utf-8');
// console.log(`Read File : ${textIn}`);

// const writeText = `write file : ${textIn}`;
// const textOut = fs.writeFileSync('./text/output.txt', writeText, 'utf-8');

// const output = fs.readFileSync('./text/output.txt', 'utf-8');
// console.log(`${output}`);

// Asynchronous-(Non-Blocking Code)
fs.readFile('./text/input.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error : ', err);
        return;
    }
    console.log(`Read File : ${data}`);
})


const writeText = `This is some dummy text for testing purposes.`;
fs.writeFile('./text/output2.txt', writeText, 'utf-8', (err) => {
    if (err) {
        console.log('Error : ', err);
        return;
    }
    console.log('File written successfully');
})