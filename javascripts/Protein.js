// This SandwichMaker IIFE augments the original one
var SandwichProtein = (function(SandwichMaker) {

  // Private variable to store the different protein prices
  var proteinPrices;

  // Augment the original object with another method
  SandwichMaker.addProtein = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return SandwichMaker;
})(SandwichMaker);
