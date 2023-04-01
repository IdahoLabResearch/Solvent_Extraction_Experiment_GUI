import { createSlice } from '@reduxjs/toolkit';

const initialStagesState = {
  selectedStage: {}
};

const stagesSlice = createSlice({
  name: 'stages',
  initialState: initialStagesState,
  reducers: {
    changeStage(state, action) {
      const store = state;
      store.selectedStage = action.payload;
    },

    resetStage(state) {
      const store = state;
      store.selectedStage = {};
    },
  },
});

export const stagesActions = stagesSlice.actions;

export default stagesSlice.reducer;
