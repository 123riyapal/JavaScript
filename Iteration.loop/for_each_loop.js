const coding=["js","cpp","c","perl","swift","rubby"];
coding.forEach(function(item){
    console.log(item);
})

// we also write for each loop usibg arrow function

const value= coding.forEach((item,index,coding)=>{
    console.log(item ,index ,coding);
})
// console.log(value); it give us undefined because for each loop does not return any value;

const map = new Map();
map.set( "IN","INDIA");
 map.set("USA","UNITED STATE OF AMERICA");
map.set( "FR","FRANCE");
map.forEach((item ,key ,map) =>{
    console.log(`${key} => ${item} Map=${map}`);
})
// for each work for string array and map. for each loop does not return value;