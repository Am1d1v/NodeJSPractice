



/*

//console.log(arguments.callee.toString());
//console.log('Name');
console.log(module);
console.log(__filename);
console.log(__dirname);
console.log(exports === module.exports);

*/

function greeting(name){
    console.log('Hello,', name)
}

module.exports = greeting;