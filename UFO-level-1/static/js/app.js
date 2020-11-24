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
  });
// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)

});