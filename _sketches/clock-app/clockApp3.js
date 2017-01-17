function setCanvas3 () {
  var canvas3 = document.getElementById('canvas3');
  ctx3 = canvas3.getContext('2d');

  setInterval(renderTime3, 30);
}

function renderTime3 () {
  
}

window.addEventListener("load", setCanvas3, false);
