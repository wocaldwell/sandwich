// This SandwichMaker IIFE augments the original one
var SandwichVeg = (function(SandwichMaker) {

  // Private variable to store the different Veg prices
  var vegPrices = {
    lettuce: 0,
    tomato: 0,
    pickle: 0,
    avacado: 0.19,
    pepper: 0.19,
    jalapeno: 0.19,
    mushroom: 0.19,
    sprouts: 0.19,
    basil: 0.19,
    cucumber: 0.19,
    onion: 0.19,
    none: 0
  };

  // Augment the original object with another method
  SandwichMaker.addVeg = function(vegPick) {
    return vegPrices[vegPick];
  };

  // Return the new, augmented object with the new method on it
  return SandwichMaker;
})(SandwichMaker);