// function
// simple function 
function myfunction(){
    console.log("hello");

}
myfunction();

function sum(num1,num2){// when we give variable at function definition time it is called parameter
    // in js before adding we check the type of both var is same or not
    if(num1===num2)
    return num1+num2;
else
return -1;
}
let ans= sum(2,"3");//when we give variable at execution time so it is called argumnet 
console.log(ans);

// FUNCTION WITH OBJECTS;

// if we want to push object in fuction 
function objectPrinting(user){
    return user;
}
let user = objectPrinting({name:"riya",course:"MCA"});
console.log(user);
// default parameter
function adding(...num){
    return num;
}
let summ=adding([200,300,400]);
console.log(summ);

// global and local Space
// var is not  have block space propert
// let and const are bolck space 

// scope level function ex;
print("RIYA");
function print(username){
    if(typeof username){
        console.log(username);
    }
    function web(){
        const website="youtube";
        console.log(`username : ${username} websiteName: ${website}`);
    }
    // console.log(website);
    web();
}
// print("riya");