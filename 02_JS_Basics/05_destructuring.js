const obj={
    name:"Riya pal",
    courseName:"MCA",
    BranchName:"CS Branch",
    CollegeName:"Shri Ram Group of College"
}
// Destructuring in JavaScript allows you to extract values from arrays and objects and assign them to variables in a more concise and readable way.
const {CollegeName:College}=obj;// now we use college in place of CollegeName
console.log(College);

// we also it in  Array

const myArr=[1,2,3,4,5];
const [first ,second,third,...rest]=myArr;
console.log(first);
console.log(second);
console.log(third);
console.log(rest);


