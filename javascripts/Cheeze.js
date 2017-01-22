// This SandwichMaker IIFE augments the original one
var SandwichCheeze = (function(SandwichMaker) {

  // Private variable to store the different Cheeze prices
  var cheezePrices;

  // Augment the original object with another method
  SandwichMaker.addCheeze = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return SandwichMaker;
})(SandwichMaker);