// *************First Method to create Promise ******************
// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("riya");
//         resolve();
//     },1000)
// });
// promiseOne.then(function(){
//     console.log("Promise resolve")
// })


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("it is second method to create promise in which we do not need to crete next then function especially");
        resolve();
    },1000)
}).then(function(){
    console.log("yes you right");
})
// PROMISE 3  
const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"riya",email:"riya00singh99@gamil.com"});
    }, 1000);
})
PromiseThree.then(function(user){
    console.log(user);
})
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(error!=true){
            resolve({username:"Riya Pal",userpassword:123});
        }
        else{
            reject("Error : SOMETHING WENT WRONG");
        }
    },1000)
})
// let deatils=promiseFour.then(function(user){
//     console.log(user);
//     return user.name

// })
// console.log(deatils) it does not work it throw error because it is not a right approach of it
promiseFour.then(function(user){
    console.log(user);
    return user.name;
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("the promise is either reject or resolve")
});


// async await method
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(error==false){
            resolve({username:"Riya Pal",userpassword:123});
        }
        else{
            reject("Error : SOMETHING WENT WRONG");
        }
    }, 1000);
});
async function promiseFiveCall(){
    try{
    const response=await promiseFive;
    console.log(response);
}catch(error){
    console.log("E:",error);
}
}
promiseFiveCall();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
 
// %%%%%%%%%using then method%%%%%%%%%%%5

fetch('https://api.github.com/users/123riyapal').then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error){
    consiole.log(error)
});