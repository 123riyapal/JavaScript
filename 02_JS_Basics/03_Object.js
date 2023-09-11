// we define object using two method first one is singleton and second one is object literals

// object literals
// In object all keys are treated like as a string and we give value as choice
const obj={
    name:"Riya",
    email:"riya00singh99@gmail.com",
    isLoggedIn:false,
    hobbies:["painting","reading","crafting"],
    location:"Muzaffarnagar",
    "full name":"Riya Pal"

}
// console.log(obj);
// if we want to access a particular key value so we ue two method
// first method
// console.log(obj.email);// it method does no use too much because it create issue if we define as tring personally like an ex;
// console.log(obj.full name);// it throw erroe so we always use square bracket method
// 2 method
// console.log(obj["name"]);/

// if we want to define symbol in oject so we define it is using a method 
const myKey=Symbol("key1");
const obj2={
    name:"ujjawal",
    email:"ujjawal@gamil.com",
    isLoggedIn:false,
    full_name:"ujjawal sharma",
    [myKey]:"mykey1",
}
// console.log(obj2);
// we also define object in object 
const obj3={
    name:"Shagun",
    email:"shagunRana@gmail.com",
    isLoggedIn:false,
    full_name:"Shagun pundir",
    location:{
        vilage:{
            district : "SharanPur",
            village_name:"rankhandi"
        }
    },
   greetings: function myfunction(){
        console.log("hello");
    }
}
console.log(obj3.location.vilage)
// console.log(Object.keys(obj)); to know how many keys are we define in obj 
console.log(Object.values(obj)); //to know how many value are we define in obj 
console.log(Object.entries(obj)); //to know how many keys are we define in obj
console.log(obj.hasOwnProperty("name"))//using this we check this property is exit in obj or not it gives boolean value
console.log(obj3.greetings());