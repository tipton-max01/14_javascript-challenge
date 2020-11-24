// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference the table body
var tbody = d3.select("tbody");

//console.log our data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each ufo object
data.forEach(function(ufo) {
  console.log(ufo);
// Step 2:  Use d3 to append one table row `tr` for each ufo object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
  var row = tbody.append("tr");
// Step 3:  Use `Object.entries` to console.log each ufo value:
  Object.entries(ufo).forEach(function([key, value]) {
    console.log(key, value);
// Step 4: Use d3 to append 1 cell per ufo value (date/time, city, state, country, shape, duration, & comment)
// Append a cell to the row for each value in the ufo object
    var cell = row.append("td");
// Step 5: Use d3 to update each cell's text with
// Append a cell to the row for each value
    cell.text(value);
  });
});


//Create event listener
// Select the button
var button = d3.select("#filter-btn");

// Getting a reference to the input element on the page
var inputField = d3.select("#datetime");

// Create event handlers 
button.on("click", handleClick);
inputField.on("submit", handleClick);

// This function is triggered when the button is clicked
function handleClick() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

//   // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target);
// }

// // We can use the `on` function in d3 to attach an event to the handler function
// button.on("click", handleClick);

// // Input fields can trigger a change event when new text is entered.
// inputField.on("change", function() {
//   var newText = d3.event.target.value;
//   console.log(newText);
// });
};