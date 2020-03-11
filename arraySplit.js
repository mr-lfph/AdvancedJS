const nums=[1,2,3,4,5,6,7,8];
const part =nums.slice(2,5);// from index 2 to 5 

const removed =nums.splice(2,3);
const addafterremoved =nums.splice(2,3,13,14,15); 
// remove from main array index 2 to next 3 element  

console.log(part);
console.log(nums);

console.log(removed);
const together=nums.join(",");//join every element 
console.log(together);






