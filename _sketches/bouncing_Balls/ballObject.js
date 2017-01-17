//configuration
width = canvas.getAttribute('width');
height = canvas.getAttribute('height');
rightBndry = width - 100;
bottomBndry = height - 100;
radMin = 20;
radMax = 50;
clrRange = 155;
clrMin = 100;


//constructor function for Ball
function Ball (x, y) {
  this.x = x;
  this.y = y;
  //this.x = Math.floor(Math.random() * (rightBndry - 100 + 1) + 100);
  //this.y = Math.floor(Math.random() * (bottomBndry - 100 + 1) + 100);
  this.radius = Math.floor(Math.random() * (radMax - radMin + 1) + radMin);
  this.xspeed = 120/this.radius;
  this.yspeed = 120/this.radius;

  //colour
  this.r = Math.floor(Math.random() * (clrRange + 1) + clrMin);
  this.g = 0;
  this.b = Math.floor(Math.random() * (clrRange + 1) + clrMin);
  this.a = Math.random();

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = "rgba("+this.r+", "+this.g+", "+this.b+", "+this.a+")";
    ctx.fill();
  }
  this.move = function () {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  this.bounce = function () {
    if (this.x > (width - this.radius) || this.x < (0 + this.radius)) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.y > (height - this.radius) || this.y < (0 + this.radius)) {
      this.yspeed = this.yspeed * -1;
    }
  }
  this.decay = function () {
    this.radius -= 0.05;
    this.a -= 0.001;
  }
}
