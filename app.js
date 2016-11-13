/**
 * Creates a blip-clock and starts the clock
 *
 * @param  {HTMLElement} canvas - The canvas to render in
 * @return {HTMLElement} - The canvas
 */
module.exports = function(canvas) {
  require('./js/blipclock').blip(canvas);
}

module.exports.config = function(newConfig) {
  return require('./js/blipconfig').config(newConfig);
}

  /*blip: function(canvas) {
    return require('./js/blipclock').blip(canvas);
  },

  config: function(newConfig) {
    return require('./js/blipconfig').config(newConfig);
  }
};*/
