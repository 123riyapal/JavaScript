let randomColor = function () {
    let value = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += value[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  
  document.querySelector("#start").addEventListener("click", function (e) {
    intervalId = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000); // Change color every 1 second
  });
  
  document.querySelector("#stop").addEventListener("click", function (e) {
    clearInterval(intervalId);
  });
  