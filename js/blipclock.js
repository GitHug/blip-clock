(function() {
  "use strict";

  var ctx;
  var originX;
  var originY;

  var blipConfig = require('./blipconfig').config();

  exports.blip = function(canvas) {
    if(!('getContext' in canvas)){
  		console.warn('Sorry, BlipClock can\'t render because your browser does'
        + ' not support Canvas!');
  		return canvas;
  	}

    setDefaultSize(canvas);
    drawBlipClock(canvas);
    var runEverySecond = function() {
      drawBlipClock(canvas);
    };
    window.setInterval(runEverySecond, 1000);

    return canvas;
  };

  function setDefaultSize(canvas) {
    if (!canvas.getAttribute('width')) {
      canvas.setAttribute('width', 400);
      canvas.width = 400;
    }

    if (!canvas.getAttribute('height')) {
      canvas.setAttribute('height', 400);
      canvas.height = 400;
    }
  };

  function drawBlipClock(canvas) {
    ctx = canvas.getContext('2d');
    originX = canvas.width/2;
    originY = canvas.height/2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var currentDate = new Date();

    var hours = currentDate.getHours() % 12;
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    drawHours(hours, canvas);
    drawMinutes(minutes, canvas);
    drawSeconds(seconds, canvas);
  }

  function drawHours(hours, canvas) {
    var radius = canvas.width/2;
    var outerMargin = radius*0.1;
    var innerMargin = radius*0.2;
    var arcDegree = Math.PI/12.0;

    var outerRadius = radius - outerMargin;
    var innerRadius = radius - innerMargin;

    for(var i = 1; i <= 12; i++) {
      var active = i <= hours + 1
      drawPath(outerRadius, innerRadius, arcDegree, active, i);
    }
  };

  function drawMinutes(minutes, canvas) {
    var radius = canvas.width/2;
    var outerMargin = radius*0.25;
    var innerMargin = radius*0.35;

    var arcDegree = Math.PI/60.0;

    var outerRadius = radius - outerMargin;
    var innerRadius = radius - innerMargin;

    for(var i = 1; i <= 60; i++) {
      var active = i <= minutes + 1;
      drawPath(outerRadius, innerRadius, arcDegree, active, i);
    }
  }

  function drawSeconds(seconds, canvas) {
    var radius = canvas.width/2;
    var outerMargin = radius*0.4;
    var innerMargin = radius*0.5;

    var arcDegree = Math.PI/60.0;

    var outerRadius = radius - outerMargin;
    var innerRadius = radius - innerMargin;

    for(var i = 1; i <= 60; i++) {
      var active = i <= seconds + 1;
      drawPath(outerRadius, innerRadius, arcDegree, active, i);
    }
  }

  function drawPath(outerRadius, innerRadius, arcDegree, active, i) {
    var startDegree = (Math.PI*1.5 - arcDegree/2);

    var offset = arcDegree;
    var startAngle = startDegree + (arcDegree + offset) * i;
    var endAngle = startAngle + arcDegree;

    ctx.beginPath();
    ctx.arc(originX, originY, outerRadius, startAngle, endAngle);
    ctx.arc(originX, originY, innerRadius, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = active ? blipConfig.colorOn : blipConfig.colorOff;
    ctx.fill();
  };

})();
