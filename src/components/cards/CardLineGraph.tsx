import * as React from 'react';
import Plot from 'react-plotly.js';

import '../../styles/App.scss';

export default function CardLineGraph() {
  type data = any;
  type layout = any;
  const data: data = [
    {
      type: 'scatter', mode: 'lines', x: [1, 2, 3], y: [2, 5, 3]
    }
  ];
  const layout: layout = {
    autosize: true,
    plot_bgcolor: 'transparent',
    paper_bgcolor: 'transparent',
    font: {
      family: 'Source Sans Pro, sans-serif',
      color: '#ffffff',
    },
    responsive: true,
    margin: {
      t: 20,
      l: 50,
      b: 50,
      r: 20,
    },
    title: '',
    xaxis: {
      title: {
        text: 'Wavelength (nm)',
      },
      autorange: true,
      linecolor: '#ffffff',
      ticks: 'outside',
      rangemode: 'tozero',
    },
    yaxis: {
      title: {
        text: 'Absorbance',
      },
      autorange: true,
      linecolor: '#ffffff',
      ticks: 'outside',
      rangemode: 'tozero',
    },
    hovermode: 'closest',
  };

  return (
    <Plot
      data={data}
      layout={layout}
      style={{
        width: '100%',
        height: '100%',
      }}
      useResizeHandler
    />
  );
}
