Plotly.d3.csv("https://raw.githubusercontent.com/marianagcruset/Stock-Markets/main/projection.csv", function(err, rows){

        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
      }
      console.log(unpack(rows, 'open'))
})
