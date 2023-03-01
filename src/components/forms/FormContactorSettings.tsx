import * as React from 'react';
import { useEffect, useState, useRef } from "react";
import { flushSync } from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

import {
  Box,
  Grid,
  FormControl,
  Button,
  TextField,
} from '@mui/material';

import COLORS from '../../styles/variables';

import { contactorsActions } from '../../app/store/contactors';

const FormContactorSettings = () => {
  const dispatch = useAppDispatch();

  const defaultItem = {
    id: 0,
    row: 1,
    stage: 'extraction',
    statuses: [
      {
        title: 'RPM',
        value: 3000,
        unit: '',
        label: '',
      },
      {
        title: 'Temperature',
        value: 23,
        unit: '\xB0C',
        label: '',
      },
      {
        title: 'Expected Concentration',
        value: [
          {
            title: '',
            value: 8.3,
            unit: 'mM',
            label: 'Dy Nitrate: HNO\u2083',
          },
          {
            title: '',
            value: 8.3,
            unit: 'mM',
            label: 'Dy Nitrate: HNO\u2083',
          },
          {
            title: '',
            value: 8.3,
            unit: 'mM',
            label: 'Dy Nitrate: HNO\u2083',
          },
          {
            title: '',
            value: 8.3,
            unit: 'mM',
            label: 'Dy Nitrate: HNO\u2083',
          },
          {
            title: '',
            value: 8.3,
            unit: 'mM',
            label: 'Dy Nitrate: HNO\u2083',
          },
        ],
        unit: '',
        label: '',
      },
      {
        title: 'Predicted Concentration',
        value: [
          {
            title: '',
            value: 8.3,
            unit: 'mM',
            label: 'Dy Nitrate: HNO\u2083',
          },
          {
            title: '',
            value: 8.3,
            unit: 'mM',
            label: 'Dy Nitrate: HNO\u2083',
          },
          {
            title: '',
            value: 8.3,
            unit: 'mM',
            label: 'Dy Nitrate: HNO\u2083',
          },
          {
            title: '',
            value: 8.3,
            unit: 'mM',
            label: 'Dy Nitrate: HNO\u2083',
          },
          {
            title: '',
            value: 8.3,
            unit: 'mM',
            label: 'Dy Nitrate: HNO\u2083',
          },
        ],
        unit: '',
        label: '',
      },
    ],
    mlStatus: 'alarm',
    ml: [
      {
        title: 'Findings',
        value: 'Unexpected Low Concentration',
      },
      {
        title: 'Sensors of Interest',
        value: 'VNIR',
      },
      {
        title: 'Temporal Trend',
        value: 'Fast',
      },
      {
        title: 'Process Upset Indicators',
        value: 'Yes',
      },
      {
        title: 'Response',
        value: 'Further Investigation',
      },
    ],
  };
  type contactorList = Array<{ [key: string]: any; }>;
  const contactorList: contactorList = useAppSelector((state) => state.contactors.contactorList);

  // useEffect(() => {
  //   const data = window.localStorage.getItem('MY_APP_STATE');

  //   if ( data !== null ) {
  //     setRowsData(JSON.parse(data));
  //   } else {
  //     setRowsData(contactorList);
  //     window.localStorage.setItem('MY_APP_STATE', JSON.stringify(rowsData));
  //   }
  // }, []);

  let filteredRowsExtraction;
  let filteredRowsScrub;
  let filteredRowsStrip;
  let filteredRowsWash;
  let filteredRowsRinse;

  filteredRowsExtraction = contactorList.filter((contactor: any) => contactor.stage === 'extraction');
  filteredRowsScrub = contactorList.filter((contactor: any) => contactor.stage === 'scrub');
  filteredRowsStrip = contactorList.filter((contactor: any) => contactor.stage === 'strip');
  filteredRowsWash = contactorList.filter((contactor: any) => contactor.stage === 'wash');
  filteredRowsRinse = contactorList.filter((contactor: any) => contactor.stage === 'rinse');
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    type extraction = any;
    type scrub = any;
    type strip = any;
    type wash = any;
    type rinse = any;
    let extraction: extraction = data.get('extraction');
    let scrub: scrub = data.get('scrub');
    let strip: strip = data.get('strip');
    let wash: wash = data.get('wash');
    let rinse: rinse = data.get('rinse');

    const contactorNumbers = [
      {title: 'extraction', value: parseInt(extraction)},
      {title: 'scrub', value: parseInt(scrub)},
      {title: 'strip', value: parseInt(strip)},
      {title: 'wash', value: parseInt(wash)},
      {title: 'rinse', value: parseInt(rinse)}
    ];

    type newContactorList = Array<{ [key: string]: any; }>;
    let newContactorList: newContactorList = [];
    contactorNumbers.forEach((formEntry) => {
      for(let i = 0; i < formEntry.value; i++) {
        const newItem = {...defaultItem, stage: formEntry.title}
        newContactorList.push(newItem);
      }
    });

    newContactorList.forEach((contactor, index) => {
      contactor.id = index;
    })

    dispatch(contactorsActions.updateContactorList(newContactorList))
  };

  return (
    <Box
      component="form"
      sx={{
        flexGrow: 1,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Grid
        container
        spacing={2}
      >
        <Grid item xs={12} lg={2}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="extraction"
              label="Extraction"
              name="extraction"
              type="text"
              defaultValue={filteredRowsExtraction.length}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={2}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="scrub"
              label="Scrub"
              name="scrub"
              type="text"
              defaultValue={filteredRowsScrub.length}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={2}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="strip"
              label="Strip"
              name="strip"
              type="text"
              defaultValue={filteredRowsStrip.length}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={2}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="wash"
              label="Wash"
              name="wash"
              type="text"
              defaultValue={filteredRowsWash.length}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} lg={2}>
          <FormControl fullWidth>
            <TextField
              margin="normal"
              required
              id="rinse"
              label="Rinse"
              name="rinse"
              type="text"
              defaultValue={filteredRowsRinse.length}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" type="submit">
        Save Changes
      </Button>
    </Box>
  );
}

export default FormContactorSettings;