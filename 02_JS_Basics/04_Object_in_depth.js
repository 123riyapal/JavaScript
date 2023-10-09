// using singleton
const obj= new Object();
obj.email="riya00sing99@gmail.com";
obj.name="Riya";
obj.course="MCA";
obj.isLoggedIn=false;

const obj2={
    name:"ujjawal",
    email:"ujjawal@gamil.com",
    isLoggedIn:false,
    full_name:"ujjawal sharma",
    // [myKey]:"mykey1",
}
console.log(obj.hasOwnProperty("isLoggedIn"));
// const obj3={obj,obj2};
// const obj3=Object.assign(obj,obj2);
const obj3={...obj,...obj2};
console.log(obj3)
