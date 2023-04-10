// React
import * as React from 'react';

// Hooks
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

// API calls
import { useFetchContactorsQuery } from '../../app/services/contactorsDataApi';
import { useFetchStagesQuery } from '../../app/services/stagesDataApi';

// Import Packages
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

// Import Redux Actions
import { appStateActions } from '../../app/store/index';
import { stagesActions } from '../../app/store/stages';

// MUI Components
import {
  Typography,
  Box,
  Button
} from '@mui/material';

// Custom Components
import Contactor2DModel from '../models/Contactor2DModel';

// Import Styles
import '../../styles/App.scss';

export default function Card2DModel() {
  type contactorList = Array<{ [key: string]: any; }>;
  const { data: contactorList } = useFetchContactorsQuery();
  type stagesList = Array<{ [key: string]: any; }>;
  const { data: stagesList } = useFetchStagesQuery();

  type selectedStage = {
    title?: string;
  };
  type stageCurrentlySelected = boolean;

  const currentStage: selectedStage = useAppSelector((state) => state.stages.selectedStage);
  const currentStageSelectionExists: stageCurrentlySelected = useAppSelector((state: any) => state.appState.stageCurrentlySelected);

  type contactorListDefault = Array<{ [key: string]: any; }>;
  const contactorListDefault: contactorListDefault = useAppSelector((state) => state.contactors.contactorListDefaults);

  let data;
  if (contactorList?.length !== 0) {
    data = contactorList;
  } else {
    data = contactorListDefault;
  }

  let filteredRow1 = data?.filter((contactor: any) => contactor.row === 1);
  let filteredRow2 = data?.filter((contactor: any) => contactor.row === 2);
  let filteredRowsCombined = [filteredRow1, filteredRow2];

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
        width: '100%', display: 'grid', gridAutoRows: '1fr',
      }}
      >

      {/* Create row of contactors if contactors have that row designation in their data. */}
      {filteredRowsCombined.map((row: any) => {
        const key = uuidv4();
        if (row?.length !== 0) {
          return (
            <Box 
              key={key}
              sx={{

                display: 'flex',
                flex: '1 1 50%'
              }}
            >

              {/* Loop through stages to see if contactors in the filtered row have each stage. 
              If there is a match, create a new element for that stage. 
              That element is a container for all contactors that match the stage. */}
              {stagesList?.map((stage: any) => {
                if (row?.find((o: any) => o.stage === stage.title)) {
                  const key = uuidv4();
                  return (
                    <Box
                      key={key}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '16px',
                        overflowX: 'hidden',
                        flexGrow: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
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
                      <Box style={{ display: 'flex' }}>

                        {/* Create a contactor for each entry in the filtered row. */}
                        {row.filter((contactor: any) => contactor.stage === stage.title).map((contactor: any) => {
                          const key = uuidv4();
                          return (
                            <Box key={key} sx={{ display: 'flex', }}>
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
          )
        }
      })}
      </Box>
    </Box>
  );
}
