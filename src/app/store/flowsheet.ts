{/* Copyright 2024, Battelle Energy Alliance, LLC */}

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
