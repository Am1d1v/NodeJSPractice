

// Event Loop Events 

console.log('Program Start');

setTimeout(() => {
    console.log('TimeOut 1')
}, 4000);

Promise.resolve().then(() => console.log('Promise resolved'));

console.log('Program End');