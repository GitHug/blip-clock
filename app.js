module.exports = {

  /**
   * Creates a blip-clock and starts the clock

   * @param  {HTMLElement} canvas - The canvas to render in
   * @return {HTMLElement} - The canvas
   */
  blip: function(canvas) {
    return require('./js/blipclock').blip(canvas);
  }
};
