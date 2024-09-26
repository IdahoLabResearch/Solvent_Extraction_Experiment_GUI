{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';

// Hooks
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

// API calls
import { useFetchStagesQuery } from '../../app/services/stagesDataApi';
import { useFetchSectionsQuery } from '../../app/services/sectionsDataApi';

// Import Packages
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

// Import Redux Actions
import { appStateActions } from '../../app/store/index';
import { sectionsActions } from '../../app/store/sections';

// MUI Components
import {
  Tooltip,
  Typography,
  Box,
  Button
} from '@mui/material';

// Custom Components
import Stage2DModel from '../models/Stage2DModel';

// Import Styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

export default function Card2DModel() {
  type stageList = Array<{ [key: string]: any; }>;
  const { data: stageList } = useFetchStagesQuery();
  type sectionsList = Array<{ [key: string]: any; }>;
  const { data: sectionsList } = useFetchSectionsQuery();

  type selectedSection = {
    title?: string;
  };
  type sectionCurrentlySelected = boolean;

  const currentSection: selectedSection = useAppSelector((state) => state.sections.selectedSection);
  const currentSectionSelectionExists: sectionCurrentlySelected = useAppSelector((state: any) => state.appState.sectionCurrentlySelected);

  type stageListDefault = Array<{ [key: string]: any; }>;
  const stageListDefault: stageListDefault = useAppSelector((state) => state.stages.stageListDefaults);

  let data;
  if (stageList?.length !== 0) {
    data = stageList;
  } else {
    data = stageListDefault;
  }

  let filteredRow1 = data?.filter((stage: any) => stage.row === 1);
  let filteredRow2 = data?.filter((stage: any) => stage.row === 2);
  let filteredRowsCombined = [filteredRow1, filteredRow2];

  const dispatch = useAppDispatch();

  return (
    <Box
      component="div"
    >
      <Typography
        sx={{
          marginBottom: '16px',
        }}
      >
        Select
        {' '}
        <strong className="text--blue">stage</strong>
        {' '}
        or
        {' '}
        <strong className="text--blue">section</strong>
        {' '}
        below to view its information. Hover over arrows to see terms relating to the flow. Dashed lines are Organic Flow. Solid lines entering and exiting the stages are Aqueous Flow.
      </Typography>

      <Box
        component="div"
        sx={{
          width: '100%', display: 'grid', gridAutoRows: '1fr',
        }}
      >

      {/* Create row of stages if stages have that row designation in their data. */}
      {filteredRowsCombined.map((row: any) => {
        const key = uuidv4();
        if (row?.length !== 0) {
          return (
            <Box
              component="div"
              key={key}
              sx={{
                position: 'relative',
                display: 'flex',
                flex: '1 1 50%'
              }}
            >
              

                <Box
                  component="div"
                  sx={{ position: 'absolute', zIndex: 0, width: '100%'}}
                >
                  <Box
                    component="div"
                    sx={{ position: 'absolute', top: '0px', left: '50%', height: '12px', width: '40px',}}
                  >
                    <Tooltip title="Organic Recycle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{height: '100%', width: '100%'}}
                      >
                        <polygon x="0" y="0" style={{fill:'white'}} points="0,5.81 5.03,2.91 10.06,0 10.06,5.81 10.06,11.62 5.03,8.72 "/>
                        <line style={{stroke:'white', strokeWidth: '4px'}} x1="8" y1="5.81" x2="40" y2="5.81" />
                      </svg>
                    </Tooltip>
                  </Box>
                  <Box
                    component="div"
                    sx={{ position: 'absolute', bottom: '0px', left: '50%', height: '12px', width: '40px', transform: 'rotate(180deg)'}}
                  >
                    <Tooltip title="Loaded Organic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{height: '100%', width: '100%'}}
                      >
                        <polygon x="0" y="0" style={{fill:'white'}} points="0,5.81 5.03,2.91 10.06,0 10.06,5.81 10.06,11.62 5.03,8.72 "/>
                        <line style={{stroke:'white', strokeWidth: '4px'}} x1="8" y1="5.81" x2="40" y2="5.81" />
                      </svg>
                    </Tooltip>
                  </Box>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin meet"
                    style={{marginTop: '10px', marginLeft:'10px', height: '40px', width: 'calc(100% - 20px)'}}
                  >
                      <rect 
                        x="0"
                        y="0"
                        style={{fill:'none', stroke:`${COLORS.colorGrayLight}`, strokeDasharray: 4, strokeWidth: '8px', height: '100%', width: '100%'}}
                      />
                  </svg>
                </Box>
              {/* Loop through sections to see if stages in the filtered row have each section. 
              If there is a match, create a new element for that section. 
              That element is a container for all stages that match the section. */}
              {sectionsList?.map((section: any, sectionIndex) => {
                if (row?.find((o: any) => o.section === section.title)) {
                  const key = uuidv4();
                  return (
                    <Box
                      component="div"
                      key={key}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingTop: '50px',
                        overflowX: 'hidden',
                        flexGrow: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      className={classNames(
                        {
                          'section-background-1': sectionIndex === 0,
                          'section-background-2': sectionIndex === 1,
                          'section-background-3': sectionIndex === 2,
                          'section-background-4': sectionIndex === 3,
                          'section-background-5': sectionIndex === 4,
                        },
                      )}
                    >
                      <Box
                        component="div"
                        sx={{ display: 'flex' }}
                      >

                        {/* Create a stage for each entry in the filtered row. */}
                        {row.filter((stage: any) => stage.section === section.title).map((stage: any, index: number) => {
                          const key = uuidv4();
                          const rowLen = row.filter((stage: any) => stage.section === section.title).length;
                          return (
                            <Box
                              component="div"
                              key={key}
                              sx={{ display: 'flex' }}
                            >
                              <Stage2DModel
                                id={stage.id}
                                section={stage.section}
                                statuses={stage.statuses}
                                mlStatus={stage.mlStatus}
                                ml={stage.ml}
                                firstItem={
                                  index === 0 ? true : false
                                }
                                lastItem={
                                  index === rowLen - 1 ? true : false
                                }
                              />
                            </Box>
                          );
                        })}
                      </Box>
                      <Box
                        component="div"
                        sx={{
                          display: 'flex',
                          padding: '16px 4px',
                          justifyContent: 'center',
                          overflowX: 'hidden'
                        }}
                      >
                        <Button
                          className={classNames(
                            'capital-btn',
                            {
                              'btn-section-unselected': currentSection.title !== section.title || !currentSectionSelectionExists,
                              'btn-section-selected': currentSection.title === section.title && currentSectionSelectionExists,
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
                              sectionsActions.changeSection({
                                id: section.id,
                                title: section.title,
                                statuses: section.statuses,
                                mlStatus: section.mlStatus,
                                ml: section.ml,
                                timeseries: section.timeseries
                              }),
                            );
                            dispatch(appStateActions.makeSectionSelection());
                          }}
                        >
                          <span>{section.title}</span>
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
