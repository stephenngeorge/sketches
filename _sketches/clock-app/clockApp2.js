function setCanvas2 () {
  var canvas2 = document.getElementById('canvas2');
  ctx2 = canvas2.getContext('2d');

  setInterval(barTime, 30);
}



//drawing bar graph style clock
function barTime () {
  //set variables and draw time
  now2 = new Date();
  var today2 = now2.toDateString();
  var time2 = now2.toLocaleTimeString();
  var hours2 = now2.getHours();
  var minutes2 = now2.getMinutes();
  var seconds2 = now2.getSeconds();
  var milliseconds2 = now2.getMilliseconds();
  var newSeconds2 = seconds2+(milliseconds2/1000);
  var newMinutes2 = minutes2+(seconds2/60);
  var newHours2 = hours2+(minutes2/60)+(seconds2/3600);





  //background and line styles
  ctx2.fillStyle = 'f1f1f1';
  ctx2.fillRect(0,0,600,500);
  ctx2.lineWidth = 30;
  ctx2.strokeStyle = 'd76e61';

  //line for hours bar
  ctx2.beginPath();
  ctx2.moveTo(50, 100);
  ctx2.lineTo((newHours2*(400/24))+50, 100);
  ctx2.stroke();
  //line for minutes bar
  ctx2.beginPath();
  ctx2.moveTo(50, 150);
  ctx2.lineTo((newMinutes2*(400/60))+50, 150);
  ctx2.stroke();
  //line for seconds bar
  ctx2.beginPath();
  ctx2.moveTo(50, 200);
  ctx2.lineTo((newSeconds2*(400/60))+50, 200);
  ctx2.stroke();

  //text for time
  ctx2.font = '20px monaco';
  ctx2.fillStyle = 'd76e61';
  ctx2.fillText(hours2, 490, 110);
  ctx2.fillText('.', 496, 127);
  ctx2.fillText(minutes2, 490, 160);
  ctx2.fillText('.', 496, 177);
  ctx2.fillText(seconds2, 490, 210);

  setInterval(dateWheels, 30);
}


function degsToRads (degree) {
  ctx2.font = 'lighter 20px monaco';
  var factor = Math.PI/180;
  return factor*degree;
}
function dateWheels () {
  //re-draw background in bottom half of canvas
  ctx2.fillStyle = 'f1f1f1';
  ctx2.fillRect(0,250,600,500);


  var dayOfMonth = now2.getDate();
  var yearNum = now2.getFullYear();
  //convert getDay() value to name of day
  var weekday = new Array(7);
  weekday[0] = "SUN";
  weekday[1] = "MON";
  weekday[2] = "TUE";
  weekday[3] = "WED";
  weekday[4] = "THR";
  weekday[5] = "FRI";
  weekday[6] = "SAT";
  var dayName = weekday[now2.getDay()];
  //convert getMonth() value to name of month
  var month = new Array(12);
  month[0] = "JAN"
  month[1] = "FEB"
  month[2] = "MAR"
  month[3] = "APR"
  month[4] = "MAY"
  month[5] = "JUN"
  month[6] = "JLY"
  month[7] = "AUG"
  month[8] = "SEP"
  month[9] = "OCT"
  month[10] = "NOV"
  month[11] = "DEC"
  var monthName = month[now2.getMonth()];
  //display date

  ctx2.fillStyle = 'd76e61';
  ctx2.fillText(dayName, 100, 350);
  ctx2.fillText(dayOfMonth, 220, 350);
  ctx2.fillText(monthName, 340, 350);
  ctx2.fillText(yearNum, 460, 350);

  //arc method for day of the week
  ctx2.lineWidth = '3';
  ctx2.beginPath();
  ctx2.arc(117,345,50,degsToRads(270),degsToRads(now2.getDay()*(360/7)-90));
  ctx2.stroke();
  //arc method for day of the month
  ctx2.lineWidth = '3';
  ctx2.beginPath();
  ctx2.arc(237,345,50,degsToRads(270),degsToRads(dayOfMonth*(360/31)-90));
  ctx2.stroke();
  //arc method for month of the year
  ctx2.lineWidth = '3';
  ctx2.beginPath();
  ctx2.arc(357,345,50,degsToRads(270),degsToRads(now2.getMonth()*(360/12)-90));
  ctx2.stroke();
  //arc method for year of the century
  ctx2.lineWidth = '3';
  ctx2.beginPath();
  ctx2.arc(484,345,50,degsToRads(270),degsToRads((yearNum-2000)*(360/100)-90));
  ctx2.stroke();

  ctx2.strokeStyle = 'd76e61';
  ctx2.lineWidth = 2;
  ctx2.beginPath();
  ctx2.moveTo(50,50);
  ctx2.lineTo(550,50);
  ctx2.lineTo(550,450);
  ctx2.lineTo(50,450);
  ctx2.closePath();
  ctx2.stroke();

}


window.addEventListener("load", setCanvas2, false);
