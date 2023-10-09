// Hoisting in JavaScript moves variable and function declarations to the top of their containing scope during compilation, allowing you to use them before their actual code placement.

console.log(name);
var name="riya";

// function hoisting
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
// it is allow only this typw of function if we use this array function it not allow

// console.log(con(1,2)); it throw ReferenceError: Cannot access 'con' before initialization

let con= (num1,num2)=> (num1+num2);

console.log(con(1,2));