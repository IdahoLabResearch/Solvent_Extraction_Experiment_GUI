{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';

// Import Packages
import { v4 as uuidv4 } from 'uuid';

// MUI Components
import {
  Box,
  Grid,
  Typography
} from '@mui/material';

// Import styles
import '../../styles/App.scss';

export default function CardStatus(props: any) {
  const { data } = props;

  // getItemSize should check data.value.length if data.value is an Array
  const getItemSize = (index: number, arrayLength: number) => {
    if (arrayLength === 1) {
      return 12;
    } else if (arrayLength === 2) {
      return 6;
    } else if (arrayLength === 3) {
      return index < 2 ? 6 : 12;
    }
    // Add more conditions if you have a different requirement for more items
  };

  return (
    <>
      {(typeof data.value === 'number' || typeof data.value === 'string') && (
        <Box
          component="div"
          className="status-number pt-0 pb-3"
        >
          <Typography className="status-info-display" align="center">
            {data.value}
            <span className="status-info-display-unit">
              {data.unit}
            </span>
          </Typography>
          <Typography className="status-number-title text-h6 d-block px-3" align="center">
            {data.label}
          </Typography>
        </Box>
      )}
      {Array.isArray(data.value) && (
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            alignContent: 'space-around',
            height: '100%',
          }}
        >
          {data.value.map((object: any, index: number) => {
            const key = uuidv4();
            return (
              <Grid
                item
                xs={getItemSize(index, data.value.length)}
                key={key}
              >
                <Box
                  component="div"
                  className="status-number pt-0 pb-3"
                >
                  <Typography className="status-info-display" align="center">
                    {object.value}
                    <span className="status-info-display-unit">
                      {object.unit}
                    </span>
                  </Typography>
                  <Typography className="status-number-title text-h6 d-block px-3" align="center">
                    {object.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}