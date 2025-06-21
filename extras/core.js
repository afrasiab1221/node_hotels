let _ = require('lodash');
let fs = require('fs');
let os = require('os');

let user = os.userInfo();
console.log(user.username)

///++++ Creation of a file+++++++
fs.appendFile('greeting.txt','hi'+user.username+ '!\n',()=>{
    console.log("file is created")
})


//+++++ To see what functionalities can be performed by a library+++++
// console.log(os)
// console.log(fs)


//+++++  HOW TO IMPORT A FILE +++++
const notes = require('../notes.js');

let age = notes.age;
console.log(age)


let result = notes.addNumber(age,18);
console.log(result)

//+++++++++ Loadash +++++++++++++
let data = ['person','person',1,2,1,2,'name'];
let filter = _.uniq(data)
console.log(data)

console.log(_.isString(data))
 