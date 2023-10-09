var timer=60;
var hitrn;
var score=0;


function timerChange(){
    var timerclock=  setInterval(function(){
          if(timer>0){
              timer--;
              document.querySelector("#timerValue").textContent=timer;
          }
          else{
              clearInterval(timerclock);
              document.querySelector("#pannelBottom").innerHTML=`<h1>Game over !<h1>
              <h1>Your Highest Score=${score}`;



          }
      },1000)
  }
  
function getNewScore(){
    score+=10;
    document.querySelector("#scoreValue").textContent=score;
}
function getNewhit(){ 
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitrn;
}
document.querySelector("#pannelBottom").addEventListener("click",function (dets){
    if(Number(dets.target.textContent)===hitrn){
        getNewScore();
        getNewhit();
        makeBubble();
    }
});
function makeBubble() {
    var clutter = "";
for (var i = 1; i <= 250; i++) {
    var val=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${val}</div>`;
}
document.querySelector("#pannelBottom").innerHTML=clutter;

}
getNewhit();
makeBubble();
getNewScore();
timerChange();