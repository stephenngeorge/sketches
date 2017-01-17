function Ball (x, y) {
  //dimensions
  this.x = x;
  this.y = y;
  this.radius = random(30, 60);
  
  this.yspeed = 80/this.radius;
  this.xspeed = 80/this.radius;
  
  

  //continually increment co-ordinate points
  this.move = function () {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    this.o -= 0.2;
    this.radius -= 0.05;
  };
  
  //set colour values
  this.r = random(100, 255);
  this.b = random(100, 255);
  this.o = random(50, 230);
  
  //draw circle
  this.show = function () {
    fill(this.r, 0, this.b, this.o);
    noStroke();    
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  };
  
  
  //define circle behaviour: not allowed outside bounds of canvas
  this.bounce = function () {
    if (this.x > (width-this.radius) || this.x < (0 + this.radius)) {
      this.xspeed = this.xspeed * -1;
    }
    if (this.y > (height-this.radius) || this.y < (0 + this.radius)) {
      this.yspeed = this.yspeed * -1;
    }
  };
  
  //remove ball from array
  this.dead = function () {
    if (this.o <= 0 || this.radius <= 0) {
      return true;
    } else {
      return false;
    }
  };
};