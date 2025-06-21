const jsonString = '{"name" : "afra", "age": 25}'

const Obj_string = JSON.parse(jsonString);
console.log(Obj_string);

//++++ Object to JSON +++++++

const Obj = {name : "afra", "age": 25};
const objStringified = JSON.stringify(Obj); 
console.log(objStringified);
