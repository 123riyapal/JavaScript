let randomColor = function () {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  
  function ChangeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  
  document.querySelector("#start").addEventListener("click", function (e) {
    if(!intervalId)
    intervalId = setInterval(ChangeBgColor, 1000); // Change color every 1 second
  });
  
  document.querySelector("#stop").addEventListener("click", function (e) {
    clearInterval(intervalId);intervalId=null;
  });
  