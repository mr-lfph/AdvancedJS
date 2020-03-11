/*
//every number is true without 0 and every string is true without null
// if not assigned any value then also return false (undefined - false ) 
const name="";
if(name)
console.log("condition is true");
else
console.log("condition is false");
//Falsy :  0 "" undefined null NaN 
//Truthy '0' ' ' [] {}  any string without null;

//undefiend vs null

let bird;
console.log(bird);

function add(num1,num2){
    console.log(num1+num2);
    return  num1+num2;// if not return it will return undefiend 
}
const result= add(13,12);
console.log(result);

const boy={name:"abul", phone:1234};
console.log(boy.notinObject);// return undefined !! 

function doSomething(x, y){

    console.log('whats happened!!');
    console.log(y);
    
}
doSomething(32);
// === 
const first=2;
const second=3;
//const second="2";
if(first===second){ console.log("condition is true");
    // === check value &  type 
}
else{console.log("condition is false");}


if ('2'===2){
    console.log('Inside if');
  }
  
  else{
    console.log('Inside else');
  }


// 
const numbers=[3,4,5,6,7,8];
output=[];
for (let i = 0; i < numbers.length ; i++) {
    const element= numbers[i];
    const result= element* element;
    output.push=(result);
    
}
console.log(output);

//smarter way of Map
function square(element){
    return element*element;
}
//numbers.map(square(5));

//numbers.map(function(element,index,array){
  const result=  numbers.map(function(element){
    //console.log(element,index,array);
    return element*element;
})
const result =numbers.map(x => x * x) ;
console.log(result);

//javascript array map arrow function 
//filter find 
const bigger=numbers.filter(x=>x>5)
const biggerFind=numbers.find(x=>x>5) //return only one value 
console.log(bigger);
*/











