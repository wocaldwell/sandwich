// This SandwichMaker IIFE augments the original one
var SandwichCondiment = (function(originalSandwichMaker) {

  // Private variable to store the different Condiment prices
  var condimentPrices = {
    veganaise: 0.49,
    mustard: 0.29,
    louisiana: 0.29,
    vinegar: 0.29,
    none: 0
  };

  // Augment the original object with another method
  SandwichMaker.addCondiment = function(condimentPick) {
    return condimentPrices[condimentPick];
  };

  // Return the new, augmented object with the new method on it
  return originalSandwichMaker;
})(SandwichMaker);