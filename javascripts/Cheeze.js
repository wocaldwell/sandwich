// This SandwichMaker IIFE augments the original one
var SandwichCheeze = (function(originalSandwichMaker) {

  // Private variable to store the different Cheeze prices
  var cheezePrices = {
    cheddar: 0.69,
    mozzarella: 0.69,
    feta: 0.49,
    nacho: 0.49,
    none: 0
  };

  // Augment the original object with another method
  SandwichMaker.addCheeze = function(cheezePick) {
    return cheezePrices[cheezePick];
  };

  // Return the new, augmented object with the new method on it
  return originalSandwichMaker;
})(SandwichMaker || {});