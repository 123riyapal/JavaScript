 const body=document.querySelector(".main");
const color=document.querySelectorAll(".color");
let check=true;
color.forEach((button)=>{
    console.log(button);
    button.addEventListener("click",function(ele){
        body.style.backgroundColor=ele.target.id;
    });

});