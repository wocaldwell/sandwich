"use strict";



// variable to store the different Bread prices
var breadPrices = {
  wheat: 0.99,
  hoagie: 0.99,
  rye: 1.09,
  sourdough: 1.09,
  bagel: 0.99,
  bowl: 0
};

// add the bread price
var addBread = function(breadPick) {
  return breadPrices[breadPick];
};

module.exports = {addBread};