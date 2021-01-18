
    Plotly.d3.csv("https://raw.githubusercontent.com/marianagcruset/Stock-Markets/main/updatedb.csv", function(err, rows){

        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
      }
      
      var dates_moment_formatted = []

      dates = unpack(rows, 'date')

      for(x in dates){
        // console.log(moment(dates[x]).format("YYYY-M-D"))
        dates_moment_formatted.push(moment(dates[x]).format("YYYY-MM-DD"))
      }

      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'BTC Open',
        x: unpack(rows, 'date'),
        y: unpack(rows, 'open'),
        line: {color: '#17BECF'}
      }
      
      var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'BTC Close',
        x: dates_moment_formatted,
        y: unpack(rows, 'close'),
        line: {color: '#7F7F7F'}
      }
      
      var data = [trace2];
      
      var layout = {
        title: 'BTC Closing Prices',
        xaxis: {
          autorange: true,
          range: ['9-17-2014', '9-23-2020'],
          rangeselector: {buttons: [
              {
                count: 1,
                label: '1m',
                step: 'month',
                stepmode: 'backward'
              },
              {
                count: 6,
                label: '6m',
                step: 'month',
                stepmode: 'backward'
              },
              {step: 'all'}
            ]},
          rangeslider: {range: ['9-17-2014', '9-23-2020']},
          type: 'date'
        },
        yaxis: {
          autorange: true,
          range: [86.8700008333, 138.870004167],
          type: 'linear'
        }
      };
      
      Plotly.newPlot('myDiv', data, layout);
      })
   