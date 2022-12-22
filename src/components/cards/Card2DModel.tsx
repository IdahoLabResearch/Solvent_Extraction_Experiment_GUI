import * as React from 'react';
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import '../../styles/App.scss';
import { Typography, Box, Button } from '@mui/material';
import classNames from 'classnames';

import { appStateActions } from '../../app/store/index';
import { stagesActions } from '../../app/store/stages';

import Contactor2DModel from '../models/Contactor2DModel';

export default function Card2DModel() {
  type selectedStage = {
    title?: string;
  };
  type stageCurrentlySelected = boolean;
  type stagesList = Array<{ [key: string]: any; }>;

  const currentStage: selectedStage = useAppSelector((state) => state.stages.selectedStage);
  const currentStageSelectionExists: stageCurrentlySelected = useAppSelector((state) => state.appState.stageCurrentlySelected);
  const stagesList: stagesList = useAppSelector((state) => state.stages.stagesList);
  type contactorListDefault = Array<{ [key: string]: any; }>;
  const contactorListDefault: contactorListDefault = useAppSelector((state) => state.contactors.contactorListDefaults);
  type contactorList = Array<{ [key: string]: any; }>;
  const contactorList: contactorList = useAppSelector((state) => state.contactors.contactorList);

  let data = window.localStorage.getItem('MY_APP_STATE');
  
  const [rowsData, setRowsData] = useState<Array<{}>>(data);
  console.log('blah', rowsData)
  let parsedData = JSON.parse(rowsData);

  let filteredRow1 = parsedData.filter((contactor: any) => contactor.row === 1);
  let filteredRow2 = parsedData.filter((contactor: any) => contactor.row === 2);


  const dispatch = useAppDispatch();



  return (
    <Box>
      <Typography
        sx={{
          marginBottom: '16px',
        }}
      >
        Select
        {' '}
        <strong className="text--blue">process block</strong>
        {' '}
        or
        {' '}
        <strong className="text--blue">contactor</strong>
        {' '}
        below to view its information
      </Typography>
      <Box sx={{
        width: '100%', display: 'flex', flexDirection: 'row', marginBottom: '16px',
      }}
      >
        {stagesList.map((stage: any) => {
          if (filteredRow1.find((o: any) => o.stage === stage.title)) {
            const key = stage.title;
            return (
              <Box
                key={key}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '16px',
                  overflowX: 'hidden'
                }}
                className={classNames(
                  {
                    'stage-background-1': stage.title === 'extraction',
                    'stage-background-2': stage.title === 'scrub',
                    'stage-background-3': stage.title === 'strip',
                    'stage-background-4': stage.title === 'wash',
                    'stage-background-5': stage.title === 'rinse',
                  },
                )}
              >
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                  {filteredRow1.filter((contactor: any) => contactor.stage === stage.title).map((contactor: any) => {
                    const contactorKey = Math.random();
                    return (
                      <Box key={contactorKey} sx={{ display: 'flex' }} id='toprowcontainer'>
                        <Contactor2DModel id={contactor.id} stage={contactor.stage} statuses={contactor.statuses} mlStatus={contactor.mlStatus} ml={contactor.ml} />
                      </Box>
                    );
                  })}
                </Box>
                <Box sx={{ display: 'flex', padding: '16px 4px', justifyContent: 'center', overflowX: 'hidden' }}>
                  <Button
                    className={classNames(
                      'capital-btn',
                      {
                        'btn-stage-unselected': currentStage.title !== stage.title || !currentStageSelectionExists,
                        'btn-stage-selected': currentStage.title === stage.title && currentStageSelectionExists,
                      },
                    )}
                    sx={{
                      color: 'white',
                      marginRight: '4px',
                      marginLeft: '4px',
                      '& span': {
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                      }
                    }}
                    variant="contained"
                    onClick={() => {
                      dispatch(
                        stagesActions.changeStage({
                          id: stage.id,
                          title: stage.title,
                          statuses: stage.statuses,
                        }),
                      );
                      dispatch(appStateActions.makeStageSelection());
                    }}
                  >
                    <span>{stage.title}</span>
                  </Button>
                </Box>
              </Box>
            );
          }
        })}
      </Box>
      <Box sx={{
        width: '100%', display: 'flex', flexDirection: 'row',
      }}
      >
        {stagesList.map((stage: any) => {
          if (filteredRow2.find((o: any) => o.stage === stage.title)) {
            const key = stage.title;
            return (
              <Box
                key={key}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '16px',
                }}
                className={classNames(
                  {
                    'stage-background-1': stage.title === 'extraction',
                    'stage-background-2': stage.title === 'scrub',
                    'stage-background-3': stage.title === 'strip',
                    'stage-background-4': stage.title === 'wash',
                    'stage-background-5': stage.title === 'rinse',
                  },
                )}
              >
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                  {filteredRow2.filter((contactor: any) => contactor.stage === stage.title).map((contactor: any) => {
                    const contactorKey = Math.random();
                    return (
                      <Box key={contactorKey} sx={{display: 'flex' }}>
                        <Contactor2DModel id={contactor.id} stage={contactor.stage} statuses={contactor.statuses} mlStatus={contactor.mlStatus} ml={contactor.ml} />
                      </Box>
                    );
                  })}
                </Box>
                <Box sx={{ display: 'flex', padding: '16px 4px', justifyContent: 'center', overflowX: 'hidden' }}>
                  <Button
                    className={classNames(
                      'capital-btn',
                      {
                        'btn-stage-unselected': currentStage.title !== stage.title || !currentStageSelectionExists,
                        'btn-stage-selected': currentStage.title === stage.title && currentStageSelectionExists,
                      },
                    )}
                    sx={{
                      color: 'white',
                      '& span': {
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',    
                      }
                    }}
                    variant="contained"
                    onClick={() => {
                      dispatch(
                        stagesActions.changeStage({
                          id: stage.id,
                          title: stage.title,
                          statuses: stage.statuses,
                        }),
                      );
                      dispatch(appStateActions.makeStageSelection());
                    }}
                  >
                    <span>{stage.title}</span>
                  </Button>
                </Box>
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
}
