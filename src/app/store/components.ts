import { createSlice } from '@reduxjs/toolkit';

const initialComponentsState = {
  componentsList: [
    {
      title: 'Data Historian',
      status: 'good',
      updated: '2022-10-22T21:38:00',
    },
    {
      title: 'ML Adapter',
      status: 'error',
      updated: '2022-10-22T21:38:00',
    },
    {
      title: 'Chemical Adapter',
      status: 'good',
      updated: '2022-10-22T21:38:00',
    },
  ],
};

const componentsSlice = createSlice({
  name: 'components',
  initialState: initialComponentsState,
  reducers: {
    //
  },
});

export const componentsActions = componentsSlice.actions;

export default componentsSlice.reducer;
