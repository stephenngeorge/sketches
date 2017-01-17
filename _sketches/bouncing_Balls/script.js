$(function () {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  balls = [];

  $('#canvas').click(function (e) {
    var mouseX = e.pageX - $('#canvas').offset().left - 5;
    var mouseY = e.pageY - $('#canvas').offset().top - 5;
    var ball = new Ball(mouseX, mouseY);
    balls.push(ball);
  });

  $('#canvas').mousedown(function (e) {
    var mouseX = e.pageX - $('#canvas').offset().left - 5;
    var mouseY = e.pageY - $('#canvas').offset().top - 5;
    interval = setInterval(function () {
      var ball = new Ball(mouseX, mouseY);
      balls.push(ball);
    }, 100);
  });
  $('#canvas').mouseup(function (e) {
    clearInterval(interval);
  });


  function animate () {
    //canvas background
    ctx.fillStyle = "#2a2a2a";
    ctx.fillRect(0, 0, width, height);
    for (var i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].move();
      balls[i].bounce();
      balls[i].decay();
      if (balls[i].a < 0 || balls[i].radius <= 0) {
        balls.splice(i, 1);
      }
    }
  }

  setInterval(animate, 30);
});
