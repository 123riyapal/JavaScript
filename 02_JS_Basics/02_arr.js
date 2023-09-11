const arr= new Array(1,2,33);
console.log(arr);
console.log(Array.isArray("2"));
console.log(Array.from("Riya"));
let name1="Riya";
let name2="Shagun";
let name3="Khushi";
let name4="Chavvi";
console.log(Array.of(name1,name2,name3,name4))
const arr2=[...arr]; 
// if we do copy like this array so 
// it make shallow copy make if we change arr so change also reflect arr2 thats why it is not good practice so we use it spread Operator[... arr]

// arr2.push(arr);//if we push array in another array like this so it push arr in arr2 like array it does not push element it push whole array
const arr3=arr2.concat(arr);// it give new arr to concat both array without  changing exist array 
console.log(arr.includes(4));
console.log(arr3);
// we also use spread operator to concat

const arr4=[...arr ,...arr2];
console.log(arr4);
// // ForIn loop
// for (const key in arr) {
//         const element = arr[key];
//         console.log(element);
    
// }
// // for of loop
// for (const i of arr) {
//     console.log(i);
// }
// // foreach loop
// arr.forEach(i => {
//  console.log(i);   
// });