Plotly.d3.csv("https://raw.githubusercontent.com/marianagcruset/Stock-Markets/main/projection.csv", function(err, rows){

        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
     }
     var PANEL = d3.select("#myDiv2");
     PANEL.append("h6").text("Date: " + unpack(rows, 'date'))
     PANEL.append("h6").text("Price Open: " + unpack(rows, 'open'))
     PANEL.append("h6").text("Price High: " + unpack(rows, 'high')) 
     PANEL.append("h6").text("Price Low: " + unpack(rows, 'low')) 
     PANEL.append("h6").text("Price Close: " + unpack(rows, 'close')) 
     PANEL.append("h6").text("Prediction: " + unpack(rows, 'prediction')) 
})

function buildMetadata(sample) {
    d3.json('C:\Users\marianaga\Class\plotly_deployment\samples.json').then((data) => {
      var metadata = data.metadata;
      
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      console.log(resultArray[0]);
      // Use d3 to select the panel with id of `#sample-metadata`
      
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        
      });
    });
  }