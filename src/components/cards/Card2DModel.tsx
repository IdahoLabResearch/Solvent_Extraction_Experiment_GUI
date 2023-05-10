// React
import * as React from 'react';

// Hooks
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

// API calls
import { useFetchContactorsQuery } from '../../app/services/contactorsDataApi';
import { useFetchSectionsQuery } from '../../app/services/sectionsDataApi';

// Import Packages
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

// Import Redux Actions
import { appStateActions } from '../../app/store/index';
import { sectionsActions } from '../../app/store/sections';

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
  type sectionsList = Array<{ [key: string]: any; }>;
  const { data: sectionsList } = useFetchSectionsQuery();

  type selectedSection = {
    title?: string;
  };
  type sectionCurrentlySelected = boolean;

  const currentSection: selectedSection = useAppSelector((state) => state.sections.selectedSection);
  const currentSectionSelectionExists: sectionCurrentlySelected = useAppSelector((state: any) => state.appState.sectionCurrentlySelected);

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
        <strong className="text--blue">section</strong>
        {' '}
        or
        {' '}
        <strong className="text--blue">stage</strong>
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

              {/* Loop through sections to see if contactors in the filtered row have each section. 
              If there is a match, create a new element for that section. 
              That element is a container for all contactors that match the section. */}
              {sectionsList?.map((section: any) => {
                if (row?.find((o: any) => o.section === section.title)) {
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
                          'section-background-1': section.title === 'extraction',
                          'section-background-2': section.title === 'scrub',
                          'section-background-3': section.title === 'strip',
                          'section-background-4': section.title === 'wash',
                          'section-background-5': section.title === 'rinse',
                        },
                      )}
                    >
                      <Box style={{ display: 'flex' }}>

                        {/* Create a contactor for each entry in the filtered row. */}
                        {row.filter((contactor: any) => contactor.section === section.title).map((contactor: any) => {
                          const key = uuidv4();
                          return (
                            <Box key={key} sx={{ display: 'flex', }}>
                              <Contactor2DModel id={contactor.id} section={contactor.section} statuses={contactor.statuses} mlStatus={contactor.mlStatus} ml={contactor.ml} />
                            </Box>
                          );
                        })}
                      </Box>
                      <Box sx={{ display: 'flex', padding: '16px 4px', justifyContent: 'center', overflowX: 'hidden' }}>
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
