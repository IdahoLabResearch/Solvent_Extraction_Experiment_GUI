{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';
import { Fragment } from 'react';

// Import Packages
import Plot from 'react-plotly.js';

// MUI Components
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Slider,
  TextField,
  Typography
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

// Mui Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

// Custom Components
import PlotlyLineGraph from '../wrappers/PlotlyLineGraph';
import ContentCardInline from '../coreapp/ContentCardInline';

type Props = {
  // data: any
};

const CardLineGraph: React.FC<Props> = ({
  // data
}) => {
  const wavelengthData: any = [
    {
      type: 'scatter', mode: 'lines', x: [1, 2, 3], y: [2, 5, 3]
    },
    {
      type: 'scatter', mode: 'lines', x: [1, 2, 3], y: [2, 5, 3]
    },
    {
      type: 'scatter', mode: 'lines', x: [1, 2, 3], y: [2, 5, 3]
    },
    {
      type: 'scatter', mode: 'lines', x: [1, 2, 3], y: [2, 5, 3]
    },
    {
      type: 'scatter', mode: 'lines', x: [1, 2, 3], y: [2, 5, 3]
    },
    {
      type: 'scatter', mode: 'lines', x: [1, 2, 3], y: [2, 5, 3]
    },
  ];
  const wavelengthLayout: any = {
    autosize: true,
    plot_bgcolor: 'transparent',
    paper_bgcolor: 'transparent',
    font: {
      family: 'Source Sans Pro, sans-serif',
      color: '#ffffff',
    },
    responsive: true,
    margin: {
      t: 20,
      l: 50,
      b: 50,
      r: 20,
    },
    title: '',
    xaxis: {
      title: {
        text: 'Wavelength (nm)',
      },
      autorange: true,
      linecolor: '#ffffff',
      ticks: 'outside',
      rangemode: 'tozero',
    },
    yaxis: {
      title: {
        text: 'Absorbance',
      },
      autorange: true,
      linecolor: '#ffffff',
      ticks: 'outside',
      rangemode: 'tozero',
    },
    hovermode: 'closest',
  };

  const marks = [
    {
      value: 0,
      label: '0sec',
    },
    {
      value: 100,
      label: '100sec',
    },
  ];

  function valuetext(value: number) {
    return `${value}sec`;
  }

  type timePointSlots = number;
  type value = Array<number>;
  type infoType = Array<string>;

  const [timePointSlots, setTimePointSlots] = React.useState(1);
  const [infoType, setInfoType] = React.useState(['specific', 'specific', 'specific']);
  const [value, setValue] = React.useState([0]);

  const handleSelectChange = (event: SelectChangeEvent, selectIndex: number) => {
    setInfoType((infoType) => {
      const ret = infoType.slice(0);
      ret[selectIndex] = event.target.value as string;
      return ret;
    })
  };

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    setValue((prevState) => {
      const newArray = [...prevState];
      newArray.splice(index, 1, parseInt(event.target.value));
      return newArray;
    }) 
  }

  const handleAddTimePointSlot = () => {
    if (timePointSlots < 3) {
      setTimePointSlots(timePointSlots + 1)
      setInfoType([...infoType, ''])
      setValue((prevState) => {
        const newArray = [...prevState];
        newArray.push(0);
        return newArray;
      }) 
    } else {
      console.log('max time points added')
    }
  };

  const handleRemoveTimePointSlot = (index: number) => {
    setTimePointSlots(timePointSlots - 1);
    setInfoType(prevState => prevState.filter((value, i) => i !== index))
    setValue(prevState => prevState.filter((value, i) => i !== index))
  };

  return (
    <>
      <Box
        component="div"
        sx={{ padding: '30px 20px' }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {[...Array(timePointSlots)].map((e, i) => {
                return (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <Card sx={{ padding: '16px', position: 'relative' }}>
                        <Typography sx={{ marginTop: '-4px', marginBottom: '16px' }} variant="h3">Time Point { i + 1 }</Typography>
                        {timePointSlots > 1 && 
                          <IconButton sx={{ position: 'absolute', right: '8px', top: '8px' }} onClick={() => handleRemoveTimePointSlot(i)}>
                            <RemoveCircleIcon sx={{ color: COLORS.colorError }} />
                          </IconButton>
                        }
                          
                        <Box
                          component="div"
                          sx={{
                            minWidth: 120,
                            display: 'flex',
                            flexDirection: 'column'
                          }}
                        >
                          <FormControl sx={{ minWidth: '120px', marginBottom: '12px' }} size="small">
                            <InputLabel id="demo-simple-select-label">Time Point</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={infoType[i]}
                              label="Time Point"
                              onChange={(e) => handleSelectChange(e, i)}
                            >
                              <MenuItem value={'specific'}>Specific Time Point</MenuItem>
                              <MenuItem value={'present'}>Present Time Point</MenuItem>
                              <MenuItem value={'start'}>Start Time Point</MenuItem>
                              <MenuItem value={'end'}>End Time Point</MenuItem>
                              {/* <MenuItem value={'alternate'}>Alternate Data Set Time Point</MenuItem> */}
                            </Select>
                          </FormControl>
                          <TextField
                            value={value[i]}
                            size="small"
                            label="Seconds"
                            onChange={(e) => handleTextFieldChange(e, i)}
                            inputProps={{
                              step: 1,
                              min: 0,
                              max: 100,
                              type: 'number',
                              'aria-labelledby': 'input-slider',
                            }}
                          />
                        </Box>
                      </Card>
                    </Grid>
                )
              })}
              {timePointSlots < 3 &&
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ display: 'flex', height: '100%', backgroundColor: COLORS.colorPrimaryBackground }}>
                    <CardActionArea sx={{ display: 'flex', height: '100%'}} onClick={() => handleAddTimePointSlot()}>
                      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AddCircleIcon sx={{ marginRight: '8px', color: COLORS.colorSuccess }} />
                        <Typography>Add Time Point</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              }
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={0}>
              <Grid item xs={12} sx={{ marginTop: '20px'}}>
                <ContentCardInline title='Concentration Over Time'>
                  <PlotlyLineGraph title='' data={wavelengthData} xAxis='Time (seconds)' yAxis='Concentration in mM (milli-Molar)'/>
                </ContentCardInline>
              </Grid>
              <Grid item xs={12} sx={{ marginTop: '20px'}}>
                <ContentCardInline title='Wavelength'>
                  <PlotlyLineGraph title='' data={wavelengthData} xAxis='Wavelength (nm)' yAxis='Absorbance'/>
                </ContentCardInline>
              </Grid>
              <Grid item xs={12} sx={{ marginTop: '20px'}}>
                <ContentCardInline title='UV/Vis'>
                  <PlotlyLineGraph title='' data={wavelengthData} xAxis='Time (seconds)' yAxis='Concentration in mM (milli-Molar)'/>
                </ContentCardInline>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CardLineGraph;
