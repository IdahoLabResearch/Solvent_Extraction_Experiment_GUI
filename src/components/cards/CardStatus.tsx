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

  return (
    <>
      {typeof data.value === 'number'
        && (
        <Box className="status-number pt-0 pb-3">
          <Typography
            className="status-info-display"
            align="center"
          >
            {data.value}
            <span
              className="status-info-display-unit"
            >
              {data.unit}
            </span>
          </Typography>
          <Typography
            className="status-number-title text-h6 d-block px-3"
            align="center"
          >
            {data.label}
          </Typography>
        </Box>
        )}
      {Array.isArray(data.value)
        && (
        <Grid
          container
          spacing={2}
          sx={{
            display: 'flex',
            alignContent: 'space-around',
            height: '100%',
          }}
        >
          {data.value.map((object: any) => {
            const key = uuidv4();
            return (
              <Grid
                item
                xs={12}
                md={6}
                key={key}
                sx={{
                  '&:nth-of-type(odd):last-child': {
                    maxWidth: '100%',
                    flexBasis: '100%',
                  },
                }}
              >
                <Box className="status-number pt-0 pb-3">
                  <Typography
                    className="status-info-display"
                    align="center"
                  >
                    {object.value}
                    <span
                      className="status-info-display-unit"
                    >
                      {object.unit}
                    </span>
                  </Typography>
                  <Typography
                    className="status-number-title text-h6 d-block px-3"
                    align="center"
                  >
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

// CardStatus.propTypes = {
//   data: PropTypes.shape({
//     value: PropTypes.oneOfType([
//       PropTypes.number,
//       PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
//     ]),
//     label: PropTypes.string,
//     unit: PropTypes.string,
//   }).isRequired,
// };
