"use strict";

var blipClock = require('./js/blipclock'),
    blipConfig = require('./js/blipconfig');

/**
 * Creates a blip-clock and starts the clock
 *
 * @param {HTMLElement} canvas - The canvas to render in
 * @param {BlipConfig} [newConfig] - Optional {@link BlipConfig} that can modify
 * the default configuration. It does not have to include all properties.
 * @return {HTMLElement} - The canvas that has been rendered in
 */
module.exports = function(canvas, newConfig) {
  blipConfig.config(newConfig);
  return blipClock.blip(canvas);
}

/**
 * Changes the default configuration for blip-clock
 *
 * @param {BlipConfig} [newConfig] - Optional {@link BlipConfig} that can modify
 * the default configuration. It does not have to include all properties.
 * @return {BlipConfig} - The currently active configuration for blip-clock.
 * If no newConfig has been supplied then it returns the default configuration.
 */
module.exports.config = function(newConfig) {
  return blipConfig.config(newConfig);
}
