import { createSlice } from '@reduxjs/toolkit';

const initialSystemState = {};

const flowsheetSlice = createSlice({
  name: 'flowsheet',
  initialState: initialSystemState,
  reducers: {
    //
  },
});

export const flowsheetActions = flowsheetSlice.actions;

export default flowsheetSlice.reducer;
