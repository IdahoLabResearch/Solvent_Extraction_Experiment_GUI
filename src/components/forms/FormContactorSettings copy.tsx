import * as React from 'react';
import { useEffect, useState, useRef, MutableRefObject } from "react";
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

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
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function FormContactorSettings() {
  type contactorList = Array<{ [key: string]: any; }>;
  const contactorList: contactorList = useAppSelector((state) => state.contactors.contactorList);

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

  const [rowsData, setRowsData] = useState<Array<{}>>(contactorList);
  const [isRowEditing, setRowEditing] = useState(false);
  const [rowEditingIndex, setRowEditingIndex] = useState<number | null>(null);
  const [rowEditingContactor, setRowEditingContactor] = useState(null);
  const [isRowText, setRowText] = useState(true);
  let [editedItemId, setEditedItemId] = useState<any | null>(null);
  let [editedItemRow, setEditedItemRow] = useState<any | null>(null);
  let [editedItemStage, setEditedItemStage] = useState<any | null>(null);
  useEffect(() => {
    setRowsData(contactorList);
  }, [contactorList])
  
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
  const handleContactorAdd = () => {
    setRowEditing((isVisible) => !isVisible);
    setRowEditingIndex(0);
    setRowText((isVisible) => !isVisible);
    setRowsData([defaultItem, ...rowsData]);
  }

  const handleContactorEdit = (contactor: any, index: number) => {
    setRowEditing((isVisible) => !isVisible);
    setRowEditingIndex(index);
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

    const newState = rowsData.map((obj, i) => {    
      if (rowEditingIndex === i) {
        let data = newEditedItem;
        return data;
      }
      
      return obj;
    });
    setRowsData(newState);
  }

  const handleOpenContactorDeleteDialog = (contactor: any, itemIndex: number) => {
    setRowEditingIndex(itemIndex);
    setRowEditingContactor(contactor);
    handleClickOpen()
  }

  const handleContactorConfirmDelete = () => {
    setRowsData((prevState) =>
      prevState.filter((prevItem) => prevItem !== rowEditingContactor)
    );
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

          <Box display="flex">
            <Box>
                <Button variant="contained" color="primary" onClick={handleContactorAdd}>
                  Add Contactor
                </Button>
            </Box>
          </Box>
          <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="contactor table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Index</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Row</TableCell>
                <TableCell align="left">Stage</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsData.map((contactor: any, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{index}</TableCell>
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
                        <TableCell align="left">
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
                        </TableCell>
                      </>
                    )
                    : (
                    <>
                      <TableCell align="left">{contactor.id}</TableCell>
                      <TableCell align="left">{contactor.row}</TableCell>
                      <TableCell align="left">{contactor.stage}</TableCell>
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
                              aria-label="edit contactor"
                              component="label"
                              onClick={() => handleContactorSave(contactor, index)}
                            >
                              <SaveIcon color={'success'} />
                            </IconButton>
                            <IconButton
                              color="primary"
                              aria-label="edit contactor"
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
                              aria-label="edit contactor"
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
