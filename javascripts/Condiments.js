// This SandwichMaker IIFE augments the original one
var SandwichCondiment = (function(SandwichMaker) {

  // Private variable to store the different Condiment prices
  var condimentPrices;

  // Augment the original object with another method
  SandwichMaker.addCondiment = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return SandwichMaker;
})(SandwichMaker);