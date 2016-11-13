(function() {
  "use strict";

  exports.config = function(newConfig) {
    if (newConfig && isValid(newConfig)) {
      apply(newConfig);
    }

    return config;
  }

  function isValid(newConfig) {
    var incorrectProps = [];

    for (var prop in newConfig) {
      // skip loop if the property is from prototype
      if (!newConfig.hasOwnProperty(prop)) continue;

      // If an unknown property has been supplied then it is not validated
      if (!config.hasOwnProperty(prop)) incorrectProps.push(prop);
    }

    if (incorrectProps.length > 0) {
      console.warn('Unknown property ['
        + incorrectProps.toString()
        + ']. No config applied');

        return false;
    }
    return true;
  }

  function apply(newConfig) {
    var incorrectProps = [];

    for (var prop in newConfig) {
      // skip loop if the property is from prototype
      if (!newConfig.hasOwnProperty(prop)) continue;
      if (!config.hasOwnProperty(prop)) continue;

      config[prop] = newConfig[prop];
    }
  }


  var config = {
    colorOn: '#C63D0F',
    colorOff: '#FDF3E7'
  };
})();
