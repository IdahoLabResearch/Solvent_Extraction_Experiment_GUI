import { createSlice } from '@reduxjs/toolkit';

const initialSectionsState = {
  selectedSection: {},
  sectionInfoState: 'readings',
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState: initialSectionsState,
  reducers: {
    changeSection(state, action) {
      const store = state;
      store.selectedSection = action.payload;
    },

    resetSection(state) {
      const store = state;
      store.selectedSection = {};
    },

    changeSectionInfoState(state, action) {
      const store = state;
      store.sectionInfoState = action.payload;
    },
  },
});

export const sectionsActions = sectionsSlice.actions;

export default sectionsSlice.reducer;
