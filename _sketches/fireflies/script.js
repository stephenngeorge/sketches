$(function () {

  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  width = canvas.getAttribute('width');
  height = canvas.getAttribute('height');

  //dot config
  minRad = 12;
  maxRad = 24;
  clrRange = 255 - 100;

  function Dot () {
      this.x = Math.floor(Math.random() * width);
      this.y = Math.floor(Math.random() * height);
      this.radius = Math.floor(Math.random() * (maxRad-minRad+1)+minRad);
      this.alpha = .5;

      this.scale = Math.floor(((this.x/width) * 100)+1);
      this.r = Math.floor((100 + (this.scale/100)*clrRange));
      this.b = 255-(Math.floor((100 + (this.scale/100)*clrRange)));

      this.show = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "rgba("+this.r+",  0, "+this.b+", "+this.alpha+")";
        ctx.fill();
      };
  }

  var dots = [];
  function array () {
    var dot = new Dot();
    dots.push(dot);

    ctx.fillStyle = "#d3d3d3";
    ctx.fillRect(0, 0, width, height);
    for (var i = 0; i < dots.length; i++) {
      dots[i].show();
    }

  }

  setInterval(array, 40);
});
