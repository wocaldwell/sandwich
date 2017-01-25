// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Variable to hold topping price
var toppingPrice;

// Get a reference to the <select> element that has all the options
var breadChooser = document.getElementById("bread-chooser");
var proteinChooser = document.getElementById("protein-chooser");
var cheezeChooser = document.getElementById("cheeze-chooser");
var condimentChooser = document.getElementById("condiment-chooser");
var vegChooser = document.getElementById("veg-chooser");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  toppingPrice = SandwichMaker.addBread(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += toppingPrice;
  console.log(finalSandwichPrice);
});

proteinChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  toppingPrice = SandwichMaker.addProtein(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += toppingPrice;
  console.log(finalSandwichPrice);
});

cheezeChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  toppingPrice = SandwichMaker.addCheeze(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += toppingPrice;
  console.log(finalSandwichPrice);
});

condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  toppingPrice = SandwichMaker.addCondiment(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += toppingPrice;
  console.log(finalSandwichPrice);
});

vegChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Determine the price of the topping chosen
  toppingPrice = SandwichMaker.addVeg(selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice += toppingPrice;
  console.log(finalSandwichPrice);
});
