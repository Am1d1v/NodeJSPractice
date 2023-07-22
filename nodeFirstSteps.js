

// Event Loop Events 

const fs = require('fs');


console.log('Program Start');

setTimeout(() => {
    console.log('TimeOut 1', performance.now().toFixed(2))
}, 0);

setTimeout(() => {
    console.log('TimeOut 2', performance.now().toFixed(2))
}, 10);

fs.writeFile('./NodeBeginning.txt', 'Hello', () =>{
    console.log('File written', performance.now().toFixed(2));
})

Promise.resolve().then(() => console.log('Promise resolved', performance.now().toFixed(2)));

process.nextTick(() => console.log('Next tick one', performance.now().toFixed(2)));


console.log('Program End');