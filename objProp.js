const students=[
    {id:123, name:'Rose'},
    {id:124, name:'Rosa'},
    {id:125, name:'Tulip'},
    {id:126, name:'Water Lili'}
];


 const names=students.map(s=> s.name);
 const ids=students.map(s=> s.id);
 const bigger=students.filter(s=> s.id > 40);
 const biggerOne=students.find(s=> s.id > 40);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);
console.log("Thank you ");






