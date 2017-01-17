//create empty array
var balls = [];


function setup() {
  createCanvas(960, 540);
  for (i = 0; i < 2; i++) {
    balls[i] = new Ball();
  }
}

function draw() {
  background('#2a2a2a');

  //loop array
  for (var i = balls.length - 1; i >= 0; i--) {
    balls[i].show();
    balls[i].move();
    balls[i].bounce();
    if (balls[i].dead()) {
      balls.splice(i, 1);
    }
  }

}


//populate array with mouse press or mouse drag
function mousePressed() {
  balls.push(new Ball(mouseX, mouseY));
}
function mouseDragged() {
  balls.push(new Ball(mouseX, mouseY));
}