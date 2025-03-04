{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';

// Hooks
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

// Import Packages
import classNames from 'classnames';

// MUI Components
import {
  Tooltip,
  Box,
  Button
} from '@mui/material';

// Import Redux Actions
import { appStateActions } from '../../app/store/index';
import { stagesActions } from '../../app/store/stages';

// MUI Icons
import StraightIcon from '@mui/icons-material/Straight';

// Import styles
import '../../styles/App.scss';

export default function Stage2DModel(props: any) {
  const {
    id,
    section,
    statuses,
    mlStatus,
    ml,
    firstItem,
    lastItem
  } = props;

  type selectedStage = {
    id?: number;
  };

  type stageCurrentlySelected = boolean;

  const currentStage: selectedStage = useAppSelector((state) => state.stages.selectedStage);
  const currentSelectionExists: stageCurrentlySelected = useAppSelector((state) => state.appState.stageCurrentlySelected);

  const dispatch = useAppDispatch();

  const stageClick = () => {
    dispatch(appStateActions.makeStageSelection());
    dispatch(stagesActions.changeStage({
      id,
      section,
      statuses,
      mlStatus,
      ml
    }));
  };

  const tooltipAqueousOut = (section: string) => {
    switch(section) {
      case 'extraction':
        return 'Raffinate'
      case 'strip':
        return 'Strip Product'
      case 'wash':
        return 'Wash Out'
      case 'rinse':
        return 'Rinse Out'
    } 
  }

  const tooltipAqueousIn = (section: string) => {
    switch(section) {
      case 'extraction':
        return 'Aqueous Feed'
      case 'strip':
        return 'Strip Feed'
      case 'wash':
        return 'Wash In'
      case 'rinse':
        return 'Rinse In'
    } 
  }

  return (
    <Box
      component="div"
      sx={{ position: 'relative'}}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        width="100%"
        viewBox="0 0 44.83 42.52"
        preserveAspectRatio="xMinYMin meet"
      >
        {/* eslint-disable */}
        <a className="stage-svg" onClick={stageClick}>
        {/* eslint-enable */}
          <path
            className={classNames(
              {
                'svg-stage-unselected': currentStage.id !== id || !currentSelectionExists,
                'svg-stage-selected': currentStage.id === id && currentSelectionExists,
              },
            )}
            d="M0,10.88H6.93V1c0-.55,.45-1,1-1h24.88c.55,0,1,.45,1,1V13.21l-2.03,1.99h-1.16v2.61l-1.1,1.24h9.04l5.21-8.17h1.06v4.32l-5,7.99h-10.31v1.28l2.15,1.46c.3,.24,.47,.6,.47,.98v13.71c0,1.05-.85,1.91-1.91,1.91H11.22c-1.05,0-1.91-.85-1.91-1.91v-13.68c0-.4,.19-.77,.51-1l2.31-1.46v-5.39l-1.42-1.32v-2.57H0v-4.32Z"
          />
        </a>
      </svg>
      
      {firstItem === true &&
        <Box
          component="div"
          sx={{
            position: 'absolute',
            bottom: '-1px',
            left: '-2px',
            height: '12px',
            width: '40px',
            transform: 'rotate(270deg) scale(.6)'
          }}
        >
          <Tooltip title={tooltipAqueousOut(section)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{height: '100%', width: '100%'}}
            >
              <polygon x="0" y="0" style={{fill:'white'}} points="0,5.81 5.03,2.91 10.06,0 10.06,5.81 10.06,11.62 5.03,8.72 "/>
              <line style={{stroke:'white', strokeWidth: '4px'}} x1="8" y1="5.81" x2="40" y2="5.81" />
            </svg>        
          </Tooltip>
        </Box>
      }
      {lastItem === true &&
        <Box
          component="div"
          sx={{
            position: 'absolute',
            bottom: '0px',
            right: '3px',
            height: '12px',
            width: '40px',
            transform: 'rotate(90deg) scale(.6)'
          }}
        >
          <Tooltip title={tooltipAqueousIn(section)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{height: '100%', width: '100%'}}
            >
              <polygon x="0" y="0" style={{fill:'white'}} points="0,5.81 5.03,2.91 10.06,0 10.06,5.81 10.06,11.62 5.03,8.72 "/>
              <line style={{stroke:'white', strokeWidth: '4px'}} x1="8" y1="5.81" x2="40" y2="5.81" />
            </svg>        
          </Tooltip>
        </Box>
      }
      
    </Box>
  );
}
