// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(originalSandwichMaker) {

  // Private variable to store the different Bread prices
  var breadPrices = {
    wheat: 0.99,
    hoagie: 0.99,
    rye: 1.09,
    sourdough: 1.09,
    bagel: 0.99,
    bowl: 0
  };

  // Augment the original object with another method
  SandwichMaker.addBread = function(breadPick) {
    return breadPrices[breadPick];
  };

  // Return the new, augmented object with the new method on it
  return originalSandwichMaker;
})(SandwichMaker || {});