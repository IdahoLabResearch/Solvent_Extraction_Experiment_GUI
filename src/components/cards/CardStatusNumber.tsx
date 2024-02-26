// React
import * as React from 'react';

// MUI Components
import {
  Box,
} from '@mui/material';

// Import styles
import '../../styles/App.scss';

export default function CardStatusNumber(props: any) {
  const { data } = props;

  return (
    <Box
      component="div"
      className="status-number text-center pt-0 pb-3"
    >
      <div
        className="status-info-display blue--text"
      >
        {data.title}
        <span
          className="status-info-display-unit"
        >
          mM
        </span>
      </div>
      <span className="status-number-title text-h6 d-block px-3">
        Nd Concentration
      </span>
    </Box>
  );
}
