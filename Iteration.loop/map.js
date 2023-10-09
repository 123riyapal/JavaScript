const num =[1,2,3,4,5,7];
const newNum=num.map(item=>item*10);
console.log(newNum);
const newVal=num.map((item)=>(item*10)).map((item)=>(item+1)).filter((item)=>item>=25);
console.log(newVal)