// Immediately invoked function expression
// syntax (fucntion body())(argument);

(function one(){
    console.log("Hello Riya");
})();
// in iife after function call semicolon is necessary otherwise next iife not executed and it throw error

((name)=>{
    console.log(`hello ${name}`);
})("Shagun");