

// Event Loop Events 

const fs = require('fs');
const dns = require('dns');

function timeStamp(){
    return performance.now().toFixed(2);
}

console.log('Program Start');

// Timeouts
setTimeout(() => {
    process.nextTick(() => {
        console.log('Next Tick 2', timeStamp());
    })
    console.log('TimeOut 1', timeStamp())
}, 0);

setTimeout(() => {
    console.log('TimeOut 2', timeStamp())
}, 10);


// Close Events
fs.writeFile('./NodeBeginning.txt', 'Hello', () =>{
    console.log('File written', timeStamp());
})

// Promises
Promise.resolve().then(() => console.log('Promise resolved', timeStamp()));

// Next Tick
process.nextTick(() => console.log('Next tick one', timeStamp()));

// setImmediate(Check)
setImmediate(() => console.log('Immediate One', timeStamp()));

// I/O Events
dns.lookup('google.com', (err, address, family) =>{
    console.log(err, address, family, timeStamp());
    Promise.resolve().then(() => console.log('Promise 2', timeStamp()));
});

console.log('Program End');