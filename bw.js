Plotly.d3.csv("https://raw.githubusercontent.com/marianagcruset/Stock-Markets/main/btcanalysis.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

var datahistogram = unpack(rows, "Gain_3");
var longgains= []
var shortgains= []
var datachoices= unpack(rows, "Choice_3");

for (i in datachoices){
    if (datachoices[i] == "SHORT"){
        shortgains.push(parseFloat(datahistogram[i]))
    } 
    else {
        longgains.push(parseFloat(datahistogram[i]))
    }
}
var trace1 = {
    y: shortgains,
    type: 'box',
    name: 'Short 3 days gains',
    marker:{
      color: 'rgb(214,12,140)'
    }
  };
  
  var trace2 = {
    y: longgains,
    type: 'box',
    name: 'Long 3 days gains',
    marker:{
      color: 'rgb(0,128,128)'
    }
  };
  

var data = [trace1, trace2];

var layout = {
    title: 'Theoretical 3 days gain %',
    showlegend: false}
    
Plotly.newPlot("myDiv4", data, layout);


})
