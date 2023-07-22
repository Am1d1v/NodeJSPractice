

// Event Loop Events 

const fs = require('fs');


console.log('Program Start');

setTimeout(() => {
    console.log('TimeOut 1')
}, 0);

setTimeout(() => {
    console.log('TimeOut 2')
}, 10);

fs.writeFile('./NodeBeginning.txt', 'Hello', () =>{
    console.log('File written');
})

Promise.resolve().then(() => console.log('Promise resolved'));

console.log('Program End');