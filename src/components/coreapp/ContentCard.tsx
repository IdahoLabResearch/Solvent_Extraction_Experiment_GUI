import * as React from 'react';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CancelIcon from '@mui/icons-material/Cancel';

import { appStateActions } from '../../app/store/index';
import { contactorsActions } from '../../app/store/contactors';

import '../../styles/App.scss';
import COLORS from '../../styles/variables';

export default function ContentCard(props: any) {
  const { title, children, className } = props;

  type selectedContactor = {
    id?: number;
    stage?: string;
  };

  type selectedStage = {
    id?: number;
    title?: string;
  };

  const [activeButton, setActiveButton] = useState('readings');

  const dispatch = useAppDispatch();

  const returnReadableId = (id: any) => id + 1;

  const clickedButtonHandler = (e: React.ChangeEvent<any>): void => {
    // console.log(e.target);
    const { name } = e.target;
    setActiveButton(name);
    // console.log(activeButton);
    dispatch(contactorsActions.changeContactorInfoState(name));
  };

  const cancelSelection = () => {
    dispatch(appStateActions.cancelSelection());
  };

  const currentContactor: selectedContactor = useAppSelector((state) => state.contactors.selectedContactor);
  const currentStage: selectedStage = useAppSelector((state) => state.stages.selectedStage);

  const classes = `card ${className}`;

  return (
    <Card
      sx={{
        paddingTop: '10px',
        textAlign: 'left',
        minWidth: 275,
        overflow: 'initial',
        height: '100%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
      className={classes}
    >
      {title === 'Selected Contactor' ? (
        <Box
          className="card-title-container"
          sx={{
            marginTop: '-16px',
            marginBottom: '6px',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: COLORS.colorPrimary,
              padding: '.25rem 0px .25rem .6rem',
            }}
          >
            <Typography
              sx={{
                backgroundColor: COLORS.colorPrimary,
                whiteSpace: 'nowrap',
              }}
              variant="h3"
            >
              {title}
            </Typography>
          </Box>
          <Box className="card-title-arrow-out" />
          <Box className="card-title-arrow-in-container">
            <Box className="card-title-arrow-in-top" />
            <Box className="card-title-arrow-in-bottom" />
          </Box>
          <Box
            sx={{
              backgroundColor: COLORS.colorPrimary,
              padding: '.25rem .6rem',
              marginLeft: '1.25rem;',
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <Typography
              sx={{
                backgroundColor: COLORS.colorPrimary,
              }}
              variant="h4"
            >
              <span>
                Stage&nbsp;
                {returnReadableId(currentContactor.id)}
              </span>
              <span style={{ borderLeft: '1px solid white', marginLeft: '8px', paddingLeft: '8px' }}>{currentContactor.stage?.replace(/\b\w/, (c) => c.toUpperCase())}</span>
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: COLORS.colorPrimary,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <ButtonGroup variant="contained" size="small" aria-label="small button group">
              <Button
                name="readings"
                sx={{ whiteSpace: 'nowrap', padding: '0px 12px' }}
                key="readings"
                onClick={clickedButtonHandler}
                className={activeButton === 'readings' ? 'btn-active' : ''}
              >
                Contactor Readings
              </Button>
              <Button
                name="results"
                sx={{ whiteSpace: 'nowrap', padding: '0px 12px' }}
                key="results"
                onClick={clickedButtonHandler}
                className={activeButton === 'results' ? 'btn-active' : ''}
              >
                Machine Learning Results
              </Button>
            </ButtonGroup>
          </Box>
          <Box
            sx={{
              backgroundColor: COLORS.colorPrimary,
              display: 'flex',
              alignItems: 'center',
              padding: '0 0.25rem 0 0.4rem',
            }}
          >
            <IconButton
              color="inherit"
              edge="start"
              sx={{ }}
              size="small"
              onClick={cancelSelection}
            >
              <CancelIcon />
            </IconButton>
          </Box>
        </Box>
      ) : title === 'Selected Stage' ? (
        <Box
          className="card-title-container"
          sx={{
            marginTop: '-16px',
            marginBottom: '6px',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: COLORS.colorPrimary,
              padding: '.25rem 0px .25rem .6rem',
            }}
          >
            <Typography
              sx={{
                backgroundColor: COLORS.colorPrimary,
                display: 'inline',
              }}
              variant="h3"
            >
              {title}
            </Typography>
          </Box>
          <Box className="card-title-arrow-out" />
          <Box className="card-title-arrow-in-container">
            <Box className="card-title-arrow-in-top" />
            <Box className="card-title-arrow-in-bottom" />
          </Box>
          <Box
            sx={{
              backgroundColor: COLORS.colorPrimary,
              padding: '.25rem .6rem',
              marginLeft: '1.25rem;',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                backgroundColor: COLORS.colorPrimary,
                display: 'inline',
              }}
              variant="h4"
            >
              <span style={{ }}>{currentStage.title?.replace(/\b\w/, (c) => c.toUpperCase())}</span>
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: COLORS.colorPrimary,
              display: 'flex',
              alignItems: 'center',
              paddingRight: '.25rem',
            }}
          >
            <IconButton
              color="inherit"
              edge="start"
              sx={{ }}
              size="small"
              onClick={cancelSelection}
            >
              <CancelIcon />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box
          className="card-title-container"
          sx={{
            marginTop: '-16px',
            marginBottom: '6px',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: COLORS.colorPrimary,
              padding: '.25rem 10px .25rem',
            }}
          >
            <Typography
              sx={{
                backgroundColor: COLORS.colorPrimary,
                display: 'inline',
              }}
              variant="h3"
            >
              {title}
            </Typography>
          </Box>
        </Box>
      )}

      <CardContent
        sx={{
          '&:last-child': {
            padding: 'unset',
          },
          padding: '10px 16px 16px !important',
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
}
