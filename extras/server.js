// console.log("server file is running")
// console.log("afrasiab")


// (function(){
//     console.log("Hello World")
// }());


// function callback(){
//     console.log("afra is calling a call back")
// }

const add = (a,b,callback)=>{
    let ans = a+b;
    console.log("answer is ", ans);
    callback();

}

// add(1,3,callback)
add(1,2,()=>{
    console.log("ADD is calling a callback function")
})