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




