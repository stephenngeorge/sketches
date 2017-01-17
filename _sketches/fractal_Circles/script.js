canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

width = canvas.getAttribute('width');
height = canvas.getAttribute('height');
circles = [];
//circle CONFIGURATION
centreX = width / 2;
centreY = height / 2;
Radius = (height / 2)-2;
border = 5;
angR = (Math.PI / 2) * .8;
angL = (-Math.PI / 3);
generations = 6;

//draw background
ctx.fillStyle = '#d3d3d3';
ctx.fillRect(0, 0, width, height);

//constructor function
function Circle (x, y, r, depth, weight) {
  this.x = x;
  this.y = y;
  this.r = r;
  ctx.lineWidth = weight;

  this.show = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(178, 34, 34, .7)';
    ctx.stroke();
    if (depth > 0) {
      this.gen(this.r, 0);
      this.gen(-this.r, 0);
      this.gen(0, 0);
      this.gen(this.r, angR);
      this.gen(-this.r, angL);
      this.gen(0, angR);
    }
  }
  this.gen = function (translation, rotation) {
        ctx.save();
        ctx.translate(this.x + translation, this.y);
        ctx.rotate(rotation);
        crcle = new Circle(0, 0, this.r / 2, depth - 1, weight * .5);
        circles.push(crcle);
        crcle.show();
        crcle.drawn = true;
        ctx.restore();
    }
}

circle = new Circle(centreX, centreY, Radius, generations, border);
circles[0] = circle;
circles[0].show();
alert(circles.length);
