const myDate=new Date();
// console.log(myDate.toJSON())
// console.log(typeof myDate);

console.log(myDate.getFullYear());
console.log(myDate.toLocaleString('default', {
    weekday:"long",
    month:"numeric",
}));