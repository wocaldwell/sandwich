"use strict";

  // variable to store the different Condiment prices
  var condimentPrices = {
    veganaise: 0.49,
    mustard: 0.29,
    louisiana: 0.29,
    vinegar: 0.29,
    none: 0
  };

  // return the price of the selected ingredient
  var addCondiment = function(condimentPick) {
    return condimentPrices[condimentPick];
  };

module.exports = {addCondiment};
