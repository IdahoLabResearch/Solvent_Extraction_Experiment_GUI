{/* Copyright 2024, Battelle Energy Alliance, LLC */}

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
import COLORS from '../../styles/variables';

export default function ContentCardInline(props: any) {
  const { data, title, children, className } = props;

  const classes = `card ${className}`;

  return (
    <Card
      sx={{
        overflow: 'visible',
        backgroundColor: 'var(--color-gray-darkest)',
        height: '100%',
        minHeight: '190px',
        position: 'relative'
      }}
      className={classes}
    >
      {title
        && (
        <Box
          component="div"
          sx={{
            marginTop: '-3px',
            marginBottom: '6px',
            zIndex: 2,
            position: 'absolute',
          }}
        >
          <Typography
            sx={{
              backgroundColor: COLORS.colorPrimary,
              display: 'inline',
              padding: '5px 10px',
              lineHeight: '1rem',
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
            padding: '30px 16px 16px 16px !important',
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
