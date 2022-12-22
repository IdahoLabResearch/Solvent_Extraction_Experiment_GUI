import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import '../../styles/App.scss';
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
      }}
      className={classes}
    >
      {title
        && (
        <Box
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

// ContentCardInline.defaultProps = {
//   title: '',
//   className: '',
// };

// ContentCardInline.propTypes = {
//   data: PropTypes.object,
//   title: PropTypes.string,
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
// };
