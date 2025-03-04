{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';

// Hooks
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

// Import Redux Actions
import { appStateActions } from '../../app/store/index';
import { sectionsActions } from '../../app/store/sections';

// MUI Components
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  IconButton,
  Typography
} from '@mui/material';

// MUI Icons
import CancelIcon from '@mui/icons-material/Cancel';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

export default function ContentCard(props: any) {
  const { title, children, className } = props;

  type selectedStage = {
    id?: number;
    section?: string;
  };

  type selectedSection = {
    id?: number;
    title?: string;
  };

  const dispatch = useAppDispatch();

  const returnReadableId = (id: any) => id + 1;

  const buttonLinkList = [
    {
      title: 'Chemical Readings',
      pane: 'readings'
    },
    {
      title: 'Timeseries Data',
      pane: 'timeseries'
    },
    {
      title: 'Safeguards Assessment',
      pane: 'results'
    },
  ]

  const handleSelectButtonLink = (selectedLink: string) => {
    dispatch(sectionsActions.changeSectionInfoState(selectedLink));
  };

  const cancelSelection = () => {
    dispatch(appStateActions.cancelSelection());
  };

  const currentStage: selectedStage = useAppSelector((state) => state.stages.selectedStage);
  const currentSection: selectedSection = useAppSelector((state) => state.sections.selectedSection);
  const getSectionInfoState = useAppSelector((state: any) => state.sections.sectionInfoState);

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
      {title === 'Selected Stage Information' ? (
        <Box
          component="div"
          className="card-title-container"
          sx={{
            marginTop: '-16px',
            marginBottom: '6px',
            zIndex: 2,
          }}
        >
          <Box
            component="div"
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
          <Box
            component="div"
            className="card-title-arrow-out"
          />
          <Box
            component="div"
            className="card-title-arrow-in-container"
          >
            <Box
              component="div"
              className="card-title-arrow-in-top"
            />
            <Box
              component="div"
              className="card-title-arrow-in-bottom"
            />
          </Box>
          <Box
            component="div"
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
                {returnReadableId(currentStage.id)}
              </span>
              <span style={{ borderLeft: '1px solid white', marginLeft: '8px', paddingLeft: '8px' }}>{currentStage.section?.replace(/\b\w/, (c) => c.toUpperCase())}</span>
            </Typography>
          </Box>
          <Box
            component="div"
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
      ) : title === 'Selected Section Information' ? (
        <Box
          component="div"
          className="card-title-container"
          sx={{
            marginTop: '-16px',
            marginBottom: '6px',
            zIndex: 2,
          }}
        >
          <Box
            component="div"
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
          <Box
            component="div"
            className="card-title-arrow-out"
          />
          <Box
            component="div"
            className="card-title-arrow-in-container"
          >
            <Box
              component="div"
              className="card-title-arrow-in-top"
            />
            <Box
              component="div"
              className="card-title-arrow-in-bottom"
            />
          </Box>
          <Box
            component="div"
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
              <span style={{ }}>{currentSection.title?.replace(/\b\w/, (c) => c.toUpperCase())}</span>
            </Typography>
          </Box>
          <Box
            component="div"
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
              <CancelIcon sx={{}}/>
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box
          component="div"
          className="card-title-container"
          sx={{
            marginTop: '-16px',
            marginBottom: '6px',
            zIndex: 2,
          }}
        >
          <Box
            component="div"
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
          position: 'relative',
        }}
      >
        <Box
          component="div"
          sx={{
            position: 'absolute',
            right: '16px',
            top: '-32px'
          }}
        >
          {title === 'Selected Section Information' &&
            <ButtonGroup
              variant="contained"
              size="small"
              aria-label="small button group" 
              sx={{
                '&.MuiButtonGroup-root .MuiButtonGroup-grouped': {
                  minWidth: 'unset',
                  borderColor: `${COLORS.colorCardGray} !important`
                }
              }}
            >
              {buttonLinkList.map((buttonLinkItem, index) => {
                return (
                  <Button
                    name={buttonLinkItem.pane}
                    sx={{ whiteSpace: 'nowrap', padding: '2px 12px 0px' }}
                    key={buttonLinkItem.pane}
                    onClick={() => handleSelectButtonLink(buttonLinkItem.pane)}
                    className={getSectionInfoState === buttonLinkItem.pane ? 'btn-active' : 'btn-inactive'}
                  >
                    {buttonLinkItem.title}
                  </Button>
                )
              })}
            </ButtonGroup>
          }
        </Box>
        {children}
      </CardContent>
    </Card>
  );
}
