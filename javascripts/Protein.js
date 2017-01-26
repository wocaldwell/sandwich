// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(SandwichMaker) {

  // Private variable to store the different protein prices
  var proteinPrices = {
    tofu: 1.99,
    seitan: 1.99,
    tempeh: 1.99,
    mushroom: 1.49,
    blackbean: 1.49,
    none: 0
  };

  // Augment the original object with another method
  SandwichMaker.addProtein = function(sandwichName) {
    return proteinPrices[sandwichName];
  };

  // Return the new, augmented object with the new method on it
  return SandwichMaker;
})(SandwichMaker || {});
