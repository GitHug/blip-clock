(function() {
  exports.blip = function(canvas) {
    if (!canvas.getAttribute('width')) {
      canvas.setAttribute('width', 400);
    }

    if (!canvas.getAttribute('height')) {
      canvas.setAttribute('height', 400);
    }

    if (!canvas.width) {
      canvas.width = 400;
    }

    document.body.innerHTML = 'hello';

    if (!canvas.height) {
      canvas.height = 400;
    }

    return canvas;
  };
})();

var blipclock = function() {
  /*var canvas = document.getElementById("myCanvas");
  canvas.width=400;
  canvas.height=400;*/

  var ctx = canvas.getContext("2d");
  var originX = canvas.width/2;
  var originY = canvas.height/2;

  var drawPath = function(outerRadius, innerRadius, arcDegree, active, i) {
    var startDegree = (Math.PI*1.5 - arcDegree/2);

    var offset = arcDegree;
    var startAngle = startDegree + (arcDegree + offset) * i;
    var endAngle = startAngle + arcDegree;

    ctx.beginPath();
    ctx.arc(originX, originY, outerRadius, startAngle, endAngle);
    ctx.arc(originX, originY, innerRadius, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fillStyle = active ? '#C63D0F' : '#FDF3E7';
    ctx.fill();
  };

  var drawHours = function(hours) {
    var radius = canvas.width/2;
    var outerMargin = radius*0.1;
    var innerMargin = radius*0.2;
    var arcDegree = Math.PI/12.0;

    var outerRadius = radius - outerMargin;
    var innerRadius = radius - innerMargin;

    for(i = 1; i <= 12; i++) {
      var active = i <= hours + 1
      drawPath(outerRadius, innerRadius, arcDegree, active, i);
    }
  };

  var drawMinutes = function(minutes) {
    var radius = canvas.width/2;
    var outerMargin = radius*0.25;
    var innerMargin = radius*0.35;

    var arcDegree = Math.PI/60.0;

    var outerRadius = radius - outerMargin;
    var innerRadius = radius - innerMargin;

    for(i = 1; i <= 60; i++) {
      var active = i <= minutes + 1;
      drawPath(outerRadius, innerRadius, arcDegree, active, i);
    }
  }

  var drawSeconds = function(seconds) {
    var radius = canvas.width/2;
    var outerMargin = radius*0.4;
    var innerMargin = radius*0.5;

    var arcDegree = Math.PI/60.0;

    var outerRadius = radius - outerMargin;
    var innerRadius = radius - innerMargin;

    for(i = 1; i <= 60; i++) {
      var active = i <= seconds + 1;
      drawPath(outerRadius, innerRadius, arcDegree, active, i);
    }
  }

  var drawClock = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var currentDate = new Date();

    var hours = currentDate.getHours() % 12;
    console.log(hours);

    var minutes = currentDate.getMinutes();
    console.log(minutes);

    var seconds = currentDate.getSeconds();
    console.log(seconds);

    drawHours(hours);
    drawMinutes(minutes);
    drawSeconds(seconds);
  }

  return {
    drawClock: drawClock
  };
};
