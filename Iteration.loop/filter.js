// filter used inplace of forEach loop if we want to use some condition on array  and return  some value 
const coding=["js","cpp","c","perl","swift","rubby"];
const i=coding.filter(item =>{
    if(item==="perl"){
        return;
    }
    return item;
})
console.log(i);
const arr=[1,2,3,4,5,6];
const val=arr.filter(item=>{
    if(item>4){
        return item;
    }
})
console.log(val);