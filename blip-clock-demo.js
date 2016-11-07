var $ = require('jquery');

$(function() {
  var blipClock = require('blip-clock');

  var canvas = $('#blipCanvas').get(0);

  blipClock.blip(canvas);
});
