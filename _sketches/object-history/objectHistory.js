//set canvas variables
canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

width = canvas.width;
height = canvas.height;

var boundary = 20;
// initialize empty array - will push Ball objects here
var balls = [];

// constructor function for Ball object
function Ball () {
  // ball dimensions
  this.x = Math.floor(Math.random() * ((width - boundary) - boundary) + boundary);
  this.y = Math.floor(Math.random() * ((height - boundary) - boundary) + boundary);
  this.r = Math.floor(Math.random() * (12 - 2)) + 4;
  // ball movement
  this.xspeed = 10 / this.r;
  this.yspeed = 10 / this.r;
  //ball colour (random number between 100 & 255)
  this.red = Math.floor(Math.random() * (255 - 100) + 100);
  this.blue = Math.floor(Math.random() * (255 - 100) + 100);

  // draw ball object to screen
  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r * 2, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(" + this.red + ", 74, " + this.blue + ")";
    ctx.fill();
  };

  // animate ball by updating this.x & this.y
  this.move = function () {
    if (this.x >= width - this.r) {
      this.x = width - this.r;
    } else if (this.x <= 0 + this.r) {
      this.x = 0 + this.r;
    } else if (this.y >= height - this.r) {
      this.y = height - this.r;
    } else if (this.y <= 0 + this.r) {
      this.y = 0 + this.r;
    }
    this.x += Math.floor(Math.random() * (8) -3.5);
    this.y += Math.floor(Math.random() * (8) -3.5);
  };

  // initialize empty array - will push this.x & this.y co-ordinate pairs here
  this.history = [];

} // end BALL CONSTRUCTOR

// constructor function for Vector object
function Vector(x, y) {
  this.x = x;
  this.y = y;
}


// get user input for number of balls to be drawn to the screen
var numBalls = prompt("How many balls would you like?");
// push above number of balls to this 'balls' array
for (var i = 0; i < numBalls; i++) {
  balls.push(new Ball());
}

// render each ball to the screen & animate
function render () {
  //draw background
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);
  //ball stuff
  for (var j = 0, ballsLength = balls.length; j < ballsLength; j++) {
    balls[j].draw();
    balls[j].move();
    //get current position & push to history array
    var pos = new Vector(balls[j].x, balls[j].y);
    balls[j].history.push(pos);
    // keep length of history array to maximum 100 vectors
    if (balls[j].history.length > 100) {
      balls[j].history.splice(0, 1);
    }
    // draw small balls for each history vector
    var currBallHist = balls[j].history;
    for (var s = 0, historyLength = currBallHist.length; s < historyLength; s++) {
      ctx.beginPath();
      ctx.arc(currBallHist[s].x, currBallHist[s].y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + balls[j].red + ", 74, " + balls[j].blue + ", .2)";
      ctx.fill();
    }
  }
}

// call render 30 times per second
setInterval(render, 1000 / 30);
