


//console.log(module); // Error
//console.log(require); // Error
//console.log(arguments.callee.toString()); // Error

function printHello(){
    console.log('Hello');
}

function printHi(){
    console.log('Hi');
} 

export {printHello, printHi};


const URL = 'https:// ';
const USERNAME = 'admin';
const PASSWORD = 'admin_password'
export { URL, USERNAME, PASSWORD};