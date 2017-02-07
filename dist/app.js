(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";

  // variable to store the different Cheeze prices
  var cheezePrices = {
    cheddar: 0.69,
    mozzarella: 0.69,
    feta: 0.49,
    nacho: 0.49,
    none: 0
  };

  // return the price of the selected ingredient
  var addCheeze = function(cheezePick) {
    return cheezePrices[cheezePick];
  };

  module.exports = {addCheeze};

},{}],3:[function(require,module,exports){
"use strict";

  // variable to store the different Condiment prices
  var condimentPrices = {
    veganaise: 0.49,
    mustard: 0.29,
    louisiana: 0.29,
    vinegar: 0.29,
    none: 0
  };

  // return the price of the selected ingredient
  var addCondiment = function(condimentPick) {
    return condimentPrices[condimentPick];
  };

module.exports = {addCondiment};

},{}],4:[function(require,module,exports){
"use strict";

// Variables that "link" to the other js files
let breads = require("./Bread.js");
let cheezes = require("./Cheeze.js");
let condiments = require("./Condiments.js");
let proteins = require("./Protein.js");
let vegs = require("./Veg.js");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Variable to hold topping price
var toppingPrice;

// Variable to store toppings that are picked
var sandwichIngredients = [];

// Get a reference to the <select> element that has all the options
var breadChooser = document.getElementById("bread-chooser");
var proteinChooser = document.getElementById("protein-chooser");
var cheezeChooser = document.getElementById("cheeze-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var vegChooser = document.getElementById("veg-chooser");

// function that adds bread price, initiated on the make sandwich button click
function addBreadPrice() {
  console.log('breadChooser = ', breadChooser);
  var breadChoices = breadChooser.childNodes;
  console.log('breadChoices = ', breadChoices);
  for (var i = 0; i < breadChoices.length; i++) {
    if (breadChoices[i].checked === true) {
      console.log('breadChoices[i] = ', breadChoices[i]);
      // Determine the price of the topping chosen
      toppingPrice = breads.addBread(breadChoices[i].value);
      // // Add the topping to the SandwichMaker to increase the total price
      finalSandwichPrice += toppingPrice;
    }
  }
}

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
proteinChooser.addEventListener("change", function(event) {
  // Get the element that is chosen from the DOM
  selectedTopping = event.target;
  console.log(selectedTopping.value);
  // Determine the price of the topping chosen
  toppingPrice = proteins.addProtein(selectedTopping.value);
  if (selectedTopping.checked === true) {
    // Add the topping to the SandwichMaker to increase the total price
    finalSandwichPrice += toppingPrice;
  } else {
    // Subtract the topping price if topping is unchecked
    finalSandwichPrice -= toppingPrice;
  }
  console.log(finalSandwichPrice);
});

cheezeChooser.addEventListener("change", function(event) {
  // Get the element that is chosen from the DOM
  selectedTopping = event.target;
  console.log(selectedTopping.value);
  // Determine the price of the topping chosen
  toppingPrice = cheezes.addCheeze(selectedTopping.value);
  if (selectedTopping.checked) {
    // Add the topping to the SandwichMaker to increase the total price
    finalSandwichPrice += toppingPrice;
  } else {
    finalSandwichPrice -= toppingPrice;
  }
  console.log(finalSandwichPrice);
});

condimentChooser.addEventListener("change", function(event) {
  // Get the element that is chosen from the DOM
  selectedTopping = event.target;
  console.log(selectedTopping.value);
  // Determine the price of the topping chosen
  toppingPrice = condiments.addCondiment(selectedTopping.value);
  if (selectedTopping.checked) {
    // Add the topping to the SandwichMaker to increase the total price
    finalSandwichPrice += toppingPrice;
  } else {
    finalSandwichPrice -= toppingPrice;
  }
  console.log(finalSandwichPrice);
});

vegChooser.addEventListener("change", function(event) {
  // Get the element that is chosen from the DOM
  selectedTopping = event.target;
  console.log(selectedTopping.value);
  // Determine the price of the topping chosen
  toppingPrice = vegs.addVeg(selectedTopping.value);
  if (selectedTopping.checked) {
    // Add the topping to the SandwichMaker to increase the total price
    finalSandwichPrice += toppingPrice;
  } else {
    finalSandwichPrice -= toppingPrice;
  }
  console.log(finalSandwichPrice);
});

// Show sandwich and price on button click
var makeButton = document.getElementById("make-button");
var sandwichDisplay = document.getElementById("finishedSandwich");
makeButton.addEventListener('click', function(){
  addBreadPrice();
  displaySandwich();
});

function displaySandwich() {
  var inputElement = document.getElementsByTagName("input");
  for (var i = 0; i < inputElement.length; i++) {
    if (inputElement[i].checked === true) {
      sandwichIngredients.push(inputElement[i].value);
    }
  }
  sandwichDisplay.innerHTML = `<h2>Your sandwich with ${sandwichIngredients.join(" ")} will cost $${finalSandwichPrice.toFixed(2)}.</h2>`;
}





},{"./Bread.js":1,"./Cheeze.js":2,"./Condiments.js":3,"./Protein.js":5,"./Veg.js":6}],5:[function(require,module,exports){
"use strict";

  // variable to store the different protein prices
  var proteinPrices = {
    tofu: 1.99,
    seitan: 1.99,
    tempeh: 1.99,
    mushroom: 1.49,
    blackbean: 1.49,
    none: 0
  };

  // return the price of the selected ingredient
  var addProtein = function(sandwichName) {
    return proteinPrices[sandwichName];
  };

module.exports = {addProtein};

},{}],6:[function(require,module,exports){
"use strict";

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

  // return the price of the selected ingredient
  var addVeg = function(vegPick) {
    return vegPrices[vegPick];
  };

module.exports = {addVeg};

},{}]},{},[4]);
