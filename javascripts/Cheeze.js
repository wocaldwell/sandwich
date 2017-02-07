"use strict";

  // variable to store the different Cheeze prices
  var cheezePrices = {
    cheddar: 0.69,
    mozzarella: 0.69,
    feta: 0.49,
    nacho: 0.49,
    none: 0
  };

  // return the price of the selected ingredient
  var addCheeze = function(cheezePick) {
    return cheezePrices[cheezePick];
  };

  module.exports = {addCheeze};
