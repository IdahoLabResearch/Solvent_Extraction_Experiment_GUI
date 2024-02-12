// React
import * as React from 'react';

// MUI Components
import {
  Box,
  Card,
  CardContent,
  Typography
} from '@mui/material';

// Import styles
import '../../styles/App.scss';
// @ts-ignore

export default function ContentCardOutline(props: any) {
  const { data, title, children, className } = props;

  const classes = `card ${className}`;

  return (
    <Card
      sx={{
        overflow: 'visible',
        backgroundColor: '#343434',
        height: '100%',
        position: 'relative'
      }}
      className={classes}
    >
      {title
        && (
        <Box
          sx={{
            padding: '10px 10px',
            marginTop: '6px',
            marginBottom: '6px',
            zIndex: 2,
            position: 'absolute',
          }}
        >
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: 'large',
              display: 'inline',
              padding: '5px 10px',
            }}
            variant="body2"
          >
            {title}
          </Typography>
        </Box>
        )}

      <CardContent
        sx={{
          '&:last-child': {
            padding: 'unset',
          },
          padding: '16px !important',
          ...(title && {
            padding: '55px 16px 16px 16px !important',
          }),
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'space-around',
          height: '100%',
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
}
