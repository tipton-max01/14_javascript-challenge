// from data.js
var tableData = data;

// YOUR CODE HERE!
// reference the table body
var tbody = d3.select("tbody");

//console.log our data.js
console.log(data);

// Append one table row `tr` to the table body
var row = tbody.append("tr");

// Step 1: Loop Through `data` and console.log each data object
data.forEach(function(ufo) {
    console.log(ufo);
  });
