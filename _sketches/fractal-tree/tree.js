$(function () {

  //define canvas with dimensions
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  width = 960;
  height = 540;

  //tree configuration
  ang = Math.PI / 4;
  lngthMult = 0.75;
  weightMult = 0.8;

  //SETUP
  //draw background
  ctx.fillStyle = '#d3d3d3';
  ctx.fillRect(0, 0, width, height);
  ctx.translate((width/3)*2, height);

  function branch (lngth, weight) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -lngth);
    ctx.lineWidth = weight;
    ctx.strokeStyle = 'rgba(178, 34, 34, 1)';
    ctx.stroke();
    ctx.translate(0, -lngth);

    function genesis (rotation) {
      ctx.save();
      ctx.rotate(rotation);
      branch(lngth * lngthMult, weight * weightMult);
      ctx.restore();
    }

    if (lngth > 2) {
      genesis(ang);
      genesis(-ang * 0.65);
    }
  }

  branch(110, 6);
  });
