import { createSlice } from '@reduxjs/toolkit';

const initialStagesState = {
  selectedStage: {},
  stageInfoState: 'readings',
  stageList: [],

};

const stagesSlice = createSlice({
  name: 'stages',
  initialState: initialStagesState,
  reducers: {
    setStages(state: any) {
      const store = state;
      store.stageList = store.stageListDefaults;
    },

    changeStage(state, action) {
      const store = state;
      store.selectedStage = action.payload;
    },

    resetStage(state) {
      const store = state;
      store.selectedStage = {};
    },

    changeStageInfoState(state, action) {
      return {
        ...state,
        stageInfoState: action.payload
      };
    },

    updateStageList(state, action) {
      const store = state;
      store.stageList = action.payload;
    }
  },
});

export const stagesActions = stagesSlice.actions;

export default stagesSlice.reducer;
