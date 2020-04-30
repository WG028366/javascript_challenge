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
    var inputValue = inputElement.property("value").toLowerCase();

    var filteredData = tableData.filter(value => value.datetime === inputValue ||
                                                 value.city === inputValue ||
                                                 value.state === inputValue ||
                                                 value.country === inputValue ||
                                                 value.shape === inputValue ||
                                                 value.durationMinutes === inputValue ||
                                                 value.comments.includes(inputValue));
                                                 
                                                 

    tbody.html("");


    filteredData.forEach(function(dataSelected){
        console.log(dataSelected);
        
        var row = tbody.append("tr");
        
        Object.entries(dataSelected).forEach(function([key, value]){
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
