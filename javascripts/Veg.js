// This SandwichMaker IIFE augments the original one
var SandwichVeg = (function(SandwichMaker) {

  // Private variable to store the different Veg prices
  var vegPrices;

  // Augment the original object with another method
  SandwichMaker.addVeg = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return SandwichMaker;
})(SandwichMaker);