"use strict";

  // variable to store the different protein prices
  var proteinPrices = {
    tofu: 1.99,
    seitan: 1.99,
    tempeh: 1.99,
    mushroom: 1.49,
    blackbean: 1.49,
    none: 0
  };

  // return the price of the selected ingredient
  var addProtein = function(sandwichName) {
    return proteinPrices[sandwichName];
  };

module.exports = {addProtein};
