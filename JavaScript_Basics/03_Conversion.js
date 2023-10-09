// let score= "33";
// it is a string if we want score in number format so we convert it into number using typecasting
// score=Number(score);
// console.log(typeof(score));
// let suppose if it is string like this

// let score= "33a";
// score=Number(score);
// console.log(typeof score);
// console.log(score);// it gives a NaN means not a number bacause it include som eaplhabet so we want to do double check before conversion like this


// some more investigation on conversion
// let age=null;
// age=Number(age);
// console.log(age);
// console.log(typeof age);//it convert age int  a number 0

// let isTrue=true;
// isTrue=Number(isTrue);
// console.log(typeof isTrue);
// console.log(isTrue);//it convert isTrue int  a number 1

let num=0;
let isBoolena=Boolean(num);
console.log(typeof isBoolena);
console.log( isBoolena);
// Boolean represnt all value true except some value like=> 0 ,NaN, undefined ,null always represent false

// ******************operations*********************

// console.group(undefined==0);
// console.group(undefined>=0);
// console.group(undefined<=0);
// console.group(undefined>0);
// console.group(undefined<0);
// console.group(undefined!=0);


console.group(null==0);
console.group(null>=0);
console.group(null<=0);
console.group(null>0);
console.group(null<0);
console.group(null!=0);
