
let additional=20;
function sum(first,second) {
    let result=first+second;//+additional
    return result;
}

const output=sum(4,6)+additional;
console.log(output);
//console.log(result);
//let and const is scope variable 
// var is like globle , get from outside of scope(block) but for let or const is not possible from outside of scope
//its called  hoasting 
