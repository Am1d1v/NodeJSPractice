

const {myName, myHobbies, email} = require('./multipleExports.js');
const greeting = require('./singleExport.js');
const {myName: myOtherName, myFriendsName} = require('./exportAndImport.js');


//console.log(exportedObj);

console.log(myName);
console.log(email);

greeting(myName);
greeting(myOtherName);
greeting(myFriendsName);