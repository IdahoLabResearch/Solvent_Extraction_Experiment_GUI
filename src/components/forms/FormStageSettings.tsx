// React
import * as React from 'react';

// Hooks
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

// MUI Components
import {
  Box,
  Grid,
  FormControl,
  Button,
  TextField,
} from '@mui/material';

// Import Redux Actions
import { stagesActions } from '../../app/store/stages';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

const FormStageSettings = () => {
  const dispatch = useAppDispatch();

  const defaultItem = {
    id: 0,
    row: 1,
    section: 'extraction',
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
        title: 'Locations of Interest',
        value: 'Inlet',
      },
      {
        "title": "Anomaly Strength",
        "value": "Strong"
      },
      {
        title: 'Nd Concentration',
        value: '0mM, Predicted 0mM, Modeled',
      },
      {
        title: 'Response',
        value: 'Further Investigation',
      },
    ],
  };
  type stageList = Array<{ [key: string]: any; }>;
  const stageList: stageList = useAppSelector((state) => state.stages.stageList);

  // useEffect(() => {
  //   const data = window.localStorage.getItem('MY_APP_STATE');

  //   if ( data !== null ) {
  //     setRowsData(JSON.parse(data));
  //   } else {
  //     setRowsData(stageList);
  //     window.localStorage.setItem('MY_APP_STATE', JSON.stringify(rowsData));
  //   }
  // }, []);

  let filteredRowsExtraction;
  let filteredRowsScrub;
  let filteredRowsStrip;
  let filteredRowsWash;
  let filteredRowsRinse;

  filteredRowsExtraction = stageList.filter((stage: any) => stage.section === 'extraction');
  filteredRowsScrub = stageList.filter((stage: any) => stage.section === 'scrub');
  filteredRowsStrip = stageList.filter((stage: any) => stage.section === 'strip');
  filteredRowsWash = stageList.filter((stage: any) => stage.section === 'wash');
  filteredRowsRinse = stageList.filter((stage: any) => stage.section === 'rinse');
  
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

    const stageNumbers = [
      {title: 'extraction', value: parseInt(extraction)},
      {title: 'scrub', value: parseInt(scrub)},
      {title: 'strip', value: parseInt(strip)},
      {title: 'wash', value: parseInt(wash)},
      {title: 'rinse', value: parseInt(rinse)}
    ];

    type newStageList = Array<{ [key: string]: any; }>;
    let newStageList: newStageList = [];
    stageNumbers.forEach((formEntry) => {
      for(let i = 0; i < formEntry.value; i++) {
        const newItem = {...defaultItem, section: formEntry.title}
        newStageList.push(newItem);
      }
    });

    newStageList.forEach((stage, index) => {
      stage.id = index;
    })

    dispatch(stagesActions.updateStageList(newStageList))
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

export default FormStageSettings;