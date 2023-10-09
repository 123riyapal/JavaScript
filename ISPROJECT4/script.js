let randomNum=parseInt(Math.random()*100 +1);
const submit=document.querySelector("#subt");
const NGuess=document.querySelector(".Guess");
const Remaining=document.querySelector(".RGuess");
const lowOrHi=document.querySelector(".lowOrHi");
const userInput=document.querySelector("#guessField");
const userShow=document.querySelector(".guessingBox")

let numGuess=1;
let palyGame=true;
let prevGuess=[];
let p =document.createElement('p');
if(palyGame){
submit.addEventListener("click",function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    validateGuess(guess);
})
}

function validateGuess(guess){
if(guess>100 || guess<1){
    alert('Guess the number between 1 to 100');
}
else if(isNaN(guess)){
    alert('Please Enter validate number')
}
else{
    prevGuess.push(guess);
    if(numGuess===11){
        dispalyGuess(guess);
        dispalymsg(`Game Over . Random Number was ${randomNum}`);
        endGame();
    }
    else{
        dispalyGuess(guess);
        checkGuess(guess);
    }
}
}
function checkGuess(guess){
    if(guess===randomNum){
        dispalymsg(`You guessed it right`);
        endGame();
    }
    else if(guess>randomNum){
        dispalymsg(`Number is too high`);
    }
    else if (guess<randomNum){
        dispalymsg(`Number is too low`);
    }

}
function dispalyGuess(guess){
    userInput.value='';
    NGuess.innerHTML+=`${guess} ,`
    numGuess++;
    Remaining.innerHTML=`${11-numGuess}`;
}
function dispalymsg(msg){
    lowOrHi.innerHTML=`<span>${msg} </span>`;

}
function endGame(){
userInput.value='';
userInput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML=`<span id="newGame"> start new game </span>`;
userShow.appendChild(p);
palyGame=false;
newGame();

}
function newGame(){
const newGame=document.querySelector("#newGame");
newGame.addEventListener("click",function(e){
randomNum=parseInt(Math.random()*100 +1);
prevGuess=[];
numGuess=1;
NGuess.innerHTML = '';
Remaining.innerHTML = `${11 - numGuess} `;
userInput.removeAttribute('disabled');
userShow.removeChild(p);

palyGame=true;
})
}