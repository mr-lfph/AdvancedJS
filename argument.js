function add (n1,n2){
    console.log(...arguments);//object is to see Extra element parametter 
    
   // var x=arguments.map(s=>s.arguments);


    return n1+n2;
}

const result=add(3,8,5);
console.log(result);


