window.addEventListener('keydown',function(e){
    document.querySelector('.main').innerHTML=`<div>
    <table class="color">
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</div>`
});