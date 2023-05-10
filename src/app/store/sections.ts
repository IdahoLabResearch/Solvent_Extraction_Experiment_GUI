import { createSlice } from '@reduxjs/toolkit';

const initialSectionsState = {
  selectedSection: {}
};

const sectionsSlice = createSlice({
  name: 'sections',
  initialState: initialSectionsState,
  reducers: {
    changeSection(state, action) {
      const store = state;
      store.selectedSection = action.payload;
    },

    resetSsection(state) {
      const store = state;
      store.selectedSection = {};
    },
  },
});

export const sectionsActions = sectionsSlice.actions;

export default sectionsSlice.reducer;
