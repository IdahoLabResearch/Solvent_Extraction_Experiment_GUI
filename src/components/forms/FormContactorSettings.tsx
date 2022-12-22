import * as React from 'react';
import { useEffect, useState, useRef } from "react";
import { flushSync } from 'react-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import NativeSelect from '@mui/material/NativeSelect';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import COLORS from '../../styles/variables';

import { contactorsActions } from '../../app/store/contactors';

const FormContactorSettings = () => {
  const dispatch = useAppDispatch();

  const [defaultItem, setDefaultItem] = useState({
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
  });
  type contactorList = Array<{ [key: string]: any; }>;
  const contactorList: contactorList = useAppSelector((state) => state.contactors.contactorListDefaults);

  const [rowsData, setRowsData] = useState<Array<{}>>(contactorList);
  const [isRowEditing, setRowEditing] = useState(false);
  const [rowEditingIndex, setRowEditingIndex] = useState<number | null>(null);
  const [rowEditingContactor, setRowEditingContactor] = useState(null);
  const [isRowText, setRowText] = useState(true);
  let [editedItemId, setEditedItemId] = useState<any | null>(null);
  let [editedItemRow, setEditedItemRow] = useState<any | null>(null);
  let [editedItemStage, setEditedItemStage] = useState<any | null>(null);

  // useEffect(() => {
  //   window.localStorage.setItem('MY_APP_STATE', JSON.stringify(rowsData));
  // }, [rowsData])
  let newState;
  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');

    if ( data !== null ) {
      setRowsData(JSON.parse(data));
    } else {
      setRowsData(contactorList);
      window.localStorage.setItem('MY_APP_STATE', JSON.stringify(rowsData));
    }
  }, []);

  let filteredRowsExtraction;
  let filteredRowsScrub;
  let filteredRowsStrip;
  let filteredRowsWash;
  let filteredRowsRinse;

  filteredRowsExtraction = rowsData.filter((contactor: any) => contactor.stage === 'extraction');
  filteredRowsScrub = rowsData.filter((contactor: any) => contactor.stage === 'scrub');
  filteredRowsStrip = rowsData.filter((contactor: any) => contactor.stage === 'strip');
  filteredRowsWash = rowsData.filter((contactor: any) => contactor.stage === 'wash');
  filteredRowsRinse = rowsData.filter((contactor: any) => contactor.stage === 'rinse');

  let filteredRowsArray = [
    {
      name: 'Extraction',
      indexStart: function() {
        return 0;
      },
      data: filteredRowsExtraction
    },
    {
      name: 'Scrub',
      indexStart: filteredRowsExtraction.length,
      data: filteredRowsScrub
    },
    {
      name: 'Strip',
      indexStart: filteredRowsExtraction.length + filteredRowsScrub.length,
      data: filteredRowsStrip
    },
    {
      name: 'Wash',
      indexStart: filteredRowsExtraction.length + filteredRowsScrub.length + filteredRowsStrip.length,
      data: filteredRowsWash
    },
    {
      name: 'Rinse',
      indexStart: filteredRowsExtraction.length + filteredRowsScrub.length + filteredRowsStrip.length + filteredRowsWash.length,
      data: filteredRowsRinse
    }
  ];



  // useEffect(() => {
  //   window.localStorage.setItem('MY_APP_STATE', JSON.stringify(rowsData));
  // }, [rowsData]);

  // const filteredRowsExtraction = rowsData.filter((contactor: any) => contactor.stage === 'extraction');
  // const filteredRowsScrub = rowsData.filter((contactor: any) => contactor.stage === 'scrub');
  // const filteredRowsStrip = rowsData.filter((contactor: any) => contactor.stage === 'strip');
  // const filteredRowsWash = rowsData.filter((contactor: any) => contactor.stage === 'wash');
  // const filteredRowsRinse = rowsData.filter((contactor: any) => contactor.stage === 'rinse');
  // const filteredRowsArray = [
  //   {
  //     name: 'Extraction',
  //     indexStart: function() {
  //       return 0;
  //     },
  //     data: filteredRowsExtraction
  //   },
  //   {
  //     name: 'Scrub',
  //     indexStart: filteredRowsExtraction.length,
  //     data: filteredRowsScrub
  //   },
  //   {
  //     name: 'Strip',
  //     indexStart: filteredRowsExtraction.length + filteredRowsScrub.length,
  //     data: filteredRowsStrip
  //   },
  //   {
  //     name: 'Wash',
  //     indexStart: filteredRowsExtraction.length + filteredRowsScrub.length + filteredRowsStrip.length,
  //     data: filteredRowsWash
  //   },
  //   {
  //     name: 'Rinse',
  //     indexStart: filteredRowsExtraction.length + filteredRowsScrub.length + filteredRowsStrip.length + filteredRowsWash.length,
  //     data: filteredRowsRinse
  //   }
  // ];
  
  // const ContactorsGet = () => {
  //   fetch("https://")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setContactors(result)
  //       }
  //     )
  // }

  // const UpdateContactor = (id: any) => {
  //   window.location.href = '/update/'+id
  // }

  // const ContactorDelete = (id: any) => {
  //   var data = {
  //     'id': id
  //   }
  //   fetch('https://', {
  //     method: 'DELETE',
  //     headers: {
  //       Accept: 'application/form-data',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       alert(result['message'])
  //       if (result['status'] === 'ok') {
  //         ContactorsGet();
  //       }
  //     }
  //   )
  // }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  //
  // CRUD Action Items
  //
  const handleContactorAdd = (stageIndexStart: any, stage: any) => {
    setRowEditing((isVisible) => !isVisible);
    setRowEditingIndex(stageIndexStart);
    setRowText((isVisible) => !isVisible);
    setRowsData([defaultItem, ...rowsData]);
    console.log(rowsData);
    // setRowsData(rowsData => rowsData[stageIndexStart].stage = stage);
  }
  // useEffect(() => {
  //   console.log("rowsData", rowsData)
  //   console.log("contactorList", contactorList)
  //   dispatch(
  //     contactorsActions.updateContactorList([...rowsData]),
  //   );
  // }, [rowsData])

  const handleContactorEdit = (contactor: any, index: number) => {
    setRowEditing((isVisible) => !isVisible);
    setRowEditingIndex(prevState => index);
    setRowText((isVisible) => !isVisible);
  }

  const handleContactorSave = (contactor: any, index: number) => {
    setRowText((isVisible) => !isVisible);
    setRowEditing((isVisible) => !isVisible);
    let saveItemId;
    let saveItemRow;
    let saveItemStage;

    if (editedItemId === null) {
      saveItemId = contactor.id;
    } else {
      saveItemId = editedItemId;
    }
    if (editedItemRow === null) {
      saveItemRow = contactor.row;
    } else {
      saveItemRow = editedItemRow;
    }
    if (editedItemStage === null) {
      saveItemStage = contactor.stage;
    } else {
      saveItemStage = editedItemStage;
    }
    
    const newEditedItem = {
      ...defaultItem,
      id: saveItemId,
      row: saveItemRow,
      stage: saveItemStage
    }  

    newState = rowsData.map((obj, i) => {    
      if (rowEditingIndex === i) {
        let data = newEditedItem;
        return data;
      }
      
      return obj;
    });

    setRowsData(newState);

    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(rowsData));

    // console.log("rowsData", rowsData)
    // console.log("contactorList", contactorList)
    // if (window.performance) {
    //   if (performance.navigation.type == 1) {
    //     alert( "This page is reloaded" );
    //   } else {
    //     alert( "This page is not reloaded");
    //   }
    // }
  }

  // dispatch(
  //   contactorsActions.updateContactorList([...rowsData]),
  // );

  const handleOpenContactorDeleteDialog = (contactor: any, itemIndex: number) => {
    setRowEditingIndex(itemIndex);
    setRowEditingContactor(contactor);
    handleClickOpen()
  }

  const handleContactorConfirmDelete = () => {


    // const newState = rowsData.map((obj, i) => {    
    //   if (rowEditingContactor !== obj) {
    //     return obj;
    //   }
    //   else {
    //     return;
    //   }
    // });
    // newState = rowsData.filter((prevItem) => prevItem !== rowEditingContactor)
    let newArray = [...rowsData.slice(0, rowEditingIndex), ...rowsData.slice(rowEditingIndex + 1)]
    setRowsData(function() {
      window.localStorage.setItem('MY_APP_STATE', JSON.stringify(rowsData));

      return newArray;
    });
    // console.log('newState', newState)
    console.log('rowsData', rowsData)

    setRowEditingIndex(null);
    setRowEditingContactor(null);
    handleClose();
  }

  const handleContactorClose = (id: number) => {
    setRowEditing((isVisible) => !isVisible);
    setRowText((isVisible) => !isVisible);
    setRowEditingIndex(null);
  }

  return (
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        {/* <Box display="flex">
          <Box>
              <Button variant="contained" color="primary" onClick={(e)=> {e.preventDefault(); handleContactorAdd();}}>
                Add Contactor
              </Button>
          </Box>
        </Box> */}
        {filteredRowsArray.map((group: any, tableIndex: number) => {
          return (
            <Box key={tableIndex} sx={{
              paddingTop: '20px',
              '&:first-of-type': {
                paddingTop: 0
              }}}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h3" sx={{textAlign: 'left', paddingBottom: '10px'}}>
                  {group.name}
                </Typography>
                <Box>
                    <Button variant="contained" color="primary" onClick={(e)=> {e.preventDefault(); handleContactorAdd(group.indexStart, group.name);}}>
                      Add Contactor
                    </Button>
                </Box>
              </Box>
              <Box sx={{backgroundColor: COLORS.colorGrayDarkest, padding: '10px 20px 5px', borderRadius: '4px'}}>
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="contactor table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Index</TableCell>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Row</TableCell>
                        {/* <TableCell align="left">Stage</TableCell> */}
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {group.data.map((contactor: any, index: number) => {
                        return (
                          <TableRow key={index} sx={{
                            '&:last-child td': {
                              borderBottom: 'none!important',
                            },
                          }}>
                            
                            {
                            (filteredRowsArray[tableIndex-1] === undefined)
                            ? (
                              <TableCell align="left">{index}</TableCell>
                            ) : (
                              <TableCell align="left">
                                {group.indexStart + index}
                              </TableCell>
                            )
                            }
                            {isRowEditing && (index === rowEditingIndex)
                              ? (
                                <>
                                  <TableCell align="left">
                                    <TextField
                                      defaultValue={contactor.id}
                                      id="standard-basic"
                                      variant="standard"
                                      placeholder="#"
                                      type="number"
                                      onChange={event => setEditedItemId(event.target.value)}
                                    />
                                  </TableCell>
                                  <TableCell align="left">
                                    <NativeSelect
                                      defaultValue={contactor.row}
                                      inputProps={{
                                        name: 'row',
                                      }}
                                      onChange={event => setEditedItemRow(event.target.value)}
                                    >
                                      <option value={1}>1</option>
                                      <option value={2}>2</option>
                                    </NativeSelect>
                                  </TableCell>
                                  {/* <TableCell align="left">
                                    <NativeSelect
                                      defaultValue={contactor.stage}
                                      inputProps={{
                                        name: 'stage',
                                      }}
                                      onChange={event => setEditedItemStage(event.target.value)}
                                    >
                                      <option value={'extraction'}>extraction</option>
                                      <option value={'scrub'}>scrub</option>
                                      <option value={'strip'}>strip</option>
                                      <option value={'wash'}>wash</option>
                                      <option value={'rinse'}>rinse</option>
                                    </NativeSelect>
                                  </TableCell> */}
                                </>
                              )
                              : (
                              <>
                                <TableCell align="left">{contactor.id}</TableCell>
                                <TableCell align="left">{contactor.row}</TableCell>
                                {/* <TableCell align="left">{contactor.stage}</TableCell> */}
                              </>
                              )
                            }

                            <TableCell align="center">
                              <ButtonGroup color="primary" aria-label="outlined primary button group">
                                {isRowEditing && (index === rowEditingIndex)
                                  ? (
                                    <>
                                      <IconButton
                                        color="primary"
                                        aria-label="save contactor"
                                        component="label"
                                        onClick={(e)=> {e.preventDefault(); handleContactorSave(contactor, index)}}
                                      >
                                        <SaveIcon color={'success'} />
                                      </IconButton>
                                      <IconButton
                                        color="primary"
                                        aria-label="close contactor"
                                        component="label"
                                        onClick={() => handleContactorClose(contactor.id)}
                                      >
                                        <CloseIcon color={'error'} />
                                      </IconButton>
                                    </>
                                  )
                                  : (
                                    <>
                                      <IconButton
                                        color="primary"
                                        aria-label="edit contactor"
                                        component="label"
                                        onClick={() => handleContactorEdit(contactor, index)}
                                      >
                                        <EditIcon color={'success'} />
                                      </IconButton>
                                      <IconButton
                                        color="primary"
                                        aria-label="delete contactor"
                                        component="label"
                                        onClick={() => handleOpenContactorDeleteDialog(contactor, index)}
                                      >
                                        <DeleteIcon color={'error'} />
                                      </IconButton>
                                    </>
                                  )
                                }
                              </ButtonGroup>
                            </TableCell>
                          </TableRow>
                        )
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          )
        })}
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure that you would like to delete this contactor? This cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleContactorConfirmDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormContactorSettings;