// This SandwichMaker IIFE augments the original one
var SandwichBread = (function(SandwichMaker) {

  // Private variable to store the different Bread prices
  var breadPrices;

  // Augment the original object with another method
  SandwichMaker.addBread = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return SandwichMaker;
})(SandwichMaker);