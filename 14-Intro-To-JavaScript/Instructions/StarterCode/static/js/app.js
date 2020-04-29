// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(ufoReport){
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]){
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn")
var form = d3.select("form")

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(dateSelected){
        console.log(dateSelected);
        var row = tbody.append("tr");
        Object.entries(dateSelected).forEach(function([key, value]){
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
};
