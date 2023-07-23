

const {myName, myHobbies, email} = require('./multipleExports.js');
const greeting = require('./singleExport.js');
//console.log(exportedObj);

console.log(myName);
console.log(email);

greeting(myName);