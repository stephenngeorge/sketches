//set canvas and ctx variables, call renderTime at 30millisecond interval
function setCanvas () {
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  setInterval(renderTime, 30);
}

//convert degrees in to radians
function degToRad (degree) {
    var factor = Math.PI/180;
    return factor*degree
}


//set variables for time & draw clock circles & text
function renderTime () {
  //variables to draw circles with
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newSeconds = seconds+(milliseconds/1000);
  var newMinutes = minutes+(seconds/60);
  var newHours = hours+(minutes/60)+(seconds/3600);

  //background
  ctx.fillStyle = 'f1f1f1';
  ctx.fillRect(0,0,500,500);
  ctx.strokeStyle = '8a74a7';

  //arc method for Hours circle
  ctx.lineWidth = 30;
  ctx.beginPath();
  ctx.arc(250,250,200,degToRad(270),degToRad(newHours*(360/24)-90));
  ctx.stroke();
  //arc method for Minutes circle
  ctx.lineWidth = 20;
  ctx.beginPath();
  ctx.arc(250,250,166,degToRad(270),degToRad(newMinutes*(360/60)-90));
  ctx.stroke();
  //arc method for Seconds circle
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.arc(250,250,140,degToRad(270),degToRad(newSeconds*(360/60)-90));
  ctx.stroke();
  //arc method for milliseconds circle
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(250,250,125,degToRad(270),degToRad(milliseconds*(360/1000)-90));
  ctx.stroke();

  //text to display date
  ctx.font = 'bold 20px monaco';
  ctx.fillStyle = '8a74a7';
  ctx.fillText(today,150,230);
  //text to display time
  ctx.font = '20px monaco';
  ctx.fillStyle = '8a74a7';
  ctx.fillText(time,175,255);

}


window.addEventListener("load", setCanvas, false);
