import React from "react";
var ReactDOM = require('react-dom');
var LineChart = require('react-d3-basic').BarChart;

(function() {
  var generalChartData = {
    

  }
  var width = 700,
    height = 400,
    title = "Bar Chart",
    chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency'
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    xLabel = "Letter",
    yLabel = "Frequency",
    yTicks = [10, "%"];

  ReactDOM.render(
    <BarChart
      title= {title}
      data= {generalChartData}
      width= {width}
      height= {height}
      chartSeries = {chartSeries}
      x= {x}
      xLabel= {xLabel}
      xScale= {xScale}
      yTicks= {yTicks}
      yLabel = {yLabel}
    />
  , document.getElementByClassName('data_bar')
  )
})()
