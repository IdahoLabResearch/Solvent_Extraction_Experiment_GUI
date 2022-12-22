import { createSlice } from '@reduxjs/toolkit';

const initialSystemState = {
  systemConcentrations: [
    {
      title: 'Fresh Organic',
      value: 0,
      unit: 'mM',
      label: 'Nd Concentration',
    },
    {
      title: 'Organic Recycle',
      value: 0,
      unit: 'mM',
      label: 'Nd Concentration',
    },
    {
      title: 'Aqueous Feed',
      value: 0,
      unit: 'mM',
      label: 'Dy Concentration',
    },
    {
      title: 'Strip Product',
      value: 0,
      unit: 'mM',
      label: 'Dy Concentration',
    },
  ],
};

const systemSlice = createSlice({
  name: 'system',
  initialState: initialSystemState,
  reducers: {
    //
  },
});

export const systemActions = systemSlice.actions;

export default systemSlice.reducer;
