// React
import * as React from 'react';

// Import Packages
import Plot from 'react-plotly.js';

// MUI Components
import {
  Box,
} from '@mui/material';

// Import styles
import '../../styles/App.scss';

type Props = {
  data: any,
  title: any,
  xAxis: string,
  yAxis: string
};

const PlotlyLineGraph: React.FC<Props> = ({
  data,
  title,
  xAxis,
  yAxis
}) => {

  const layout: any = {
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
    title: `${title}`,
    xaxis: {
      title: {
        text: `${xAxis}`,
      },
      autorange: true,
      linecolor: '#ffffff',
      ticks: 'outside',
      rangemode: 'tozero',
    },
    yaxis: {
      title: {
        text: `${yAxis}`,
      },
      autorange: true,
      linecolor: '#ffffff',
      ticks: 'outside',
      rangemode: 'tozero',
    },
    hovermode: 'closest',
  };

  return (
    <>
      <Box
        component="div"
        sx={{}}
      >
        <Plot
          data={data}
          layout={layout}
          style={{
            width: '100%',
            height: '100%',
          }}
          useResizeHandler
        />
      </Box>
    </>
  );
}

export default PlotlyLineGraph;
