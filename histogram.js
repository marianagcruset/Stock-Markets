Plotly.d3.csv("https://raw.githubusercontent.com/marianagcruset/Stock-Markets/main/btcanalysis.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

var datahistogram = unpack(rows, "Gain_3");
var datanumeric= []
for (i in datahistogram){
    datanumeric.push(parseFloat(datahistogram[i]))
}
var trace = {
    x: datanumeric,
    type: 'histogram',
  };
var data = [trace];
console.log(data);

var layout = {
    title: 'Theoretical 3 days gain %'}

Plotly.newPlot("myDiv3", data, layout);


})
