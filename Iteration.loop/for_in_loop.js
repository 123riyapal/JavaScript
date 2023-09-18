const coding=["js","cpp","c","perl","swift","rubby"];
console.log("***********use of For in loop for array***********");

for (const key in coding) {
    console.log(coding[key])
}

const obj={
    name:"Riya",
    email:"riya00singh99@gmail.com",
    isLoggedIn:false,
    hobbies:["painting","reading","crafting"],
    location:"Muzaffarnagar",
    "full name":"Riya Pal"

}
console.log("***********use of For in loop for Object***********");
for (const key in obj) {
    console.log(`${key}:=>${obj[key]}`);
}
console.log("***********use of For in loop for map***********");

const map = new Map();
map.set( "IN","INDIA");
 map.set("USA","UNITED STATE OF AMERICA");
map.set( "FR","FRANCE");

// for (const [key] in map) {
//     console.log(map[key])
// }it does not work for map

// for in loop work for array string object 