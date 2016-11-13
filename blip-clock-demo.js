var $ = require('jquery');

$(function() {
  var blipClock = require('blip-clock');

  var canvas = $('#blipCanvas').get(0);

  blipClock(canvas, {
    colorOn: '#CCFF99',
    colorOff: '#000'
  });
});
