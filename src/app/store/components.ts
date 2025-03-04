{/* Copyright 2024, Battelle Energy Alliance, LLC */}

import { createSlice } from '@reduxjs/toolkit';

const initialComponentsState = {};

const componentsSlice = createSlice({
  name: 'components',
  initialState: initialComponentsState,
  reducers: {
    //
  },
});

export const componentsActions = componentsSlice.actions;

export default componentsSlice.reducer;
