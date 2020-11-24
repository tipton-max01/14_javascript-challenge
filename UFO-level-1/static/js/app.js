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

//select form
var form = d3.select("#form");

// Create event handlers 
button.on("click", handleClick);
form.on("submit", handleClick);

// This function is triggered when the button is clicked
function handleClick() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
};