Plotly.d3.csv("https://raw.githubusercontent.com/marianagcruset/Stock-Markets/main/updatedb.csv", function(err, rows){

    function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
  }

var data1 = unpack(rows, "Gain_3");
var PANEL = d3.select("#myDiv3");

Plotly.plot(hist, [{x: data1, type: 'histogram' }]);
})
