"use strict";

  // Private variable to store the different Veg prices
  var vegPrices = {
    lettuce: 0,
    tomato: 0,
    pickle: 0,
    avacado: 0.19,
    pepper: 0.19,
    jalapeno: 0.19,
    mushroom: 0.19,
    sprouts: 0.19,
    basil: 0.19,
    cucumber: 0.19,
    onion: 0.19,
    none: 0
  };

  // return the price of the selected ingredient
  var addVeg = function(vegPick) {
    return vegPrices[vegPick];
  };

module.exports = {addVeg};
