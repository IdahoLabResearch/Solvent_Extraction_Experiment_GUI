{/* Copyright 2024, Battelle Energy Alliance, LLC */}

import { createSlice, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import componentReducer from './components';
import flowsheetReducer from './flowsheet';
import sectionsReducer from './sections';
import stagesReducer from './stages';
import { flowsheetDataApi } from '../services/flowsheetDataApi';
import { stagesDataApi } from '../services/stagesDataApi';
import { sectionsDataApi } from '../services/sectionsDataApi';
import { componentsDataApi } from '../services/componentsDataApi';

const initialState = {
  openDrawerLeft: false,
  openDrawerLeftWidth: 64,
  status: 'good',
  stageCurrentlySelected: false,
  sectionCurrentlySelected: false,

  graphInfo: [
    {
      title: 'UV',
    },
    {
      title: 'Blue',
    },
    {
      title: 'Green',
    },
    {
      title: 'Red',
    },
    {
      title: 'NIR',
    },
    {
      title: 'RAMAN',
    },
  ],
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    // App functions
    toggleDrawerLeft: (state) => {
      const store = state;
      store.openDrawerLeft = !store.openDrawerLeft;
    },
    setDrawerLeftWidth: (state, action) => {
      const store = state;
      store.openDrawerLeftWidth = action.payload;
    },

    makeStageSelection(state) {
      const store = state;
      store.stageCurrentlySelected = true;
      store.sectionCurrentlySelected = false;
    },

    makeSectionSelection(state) {
      const store = state;
      store.stageCurrentlySelected = false;
      store.sectionCurrentlySelected = true;
    },

    cancelSelection(state) {
      const store = state;
      store.sectionCurrentlySelected = false;
      store.stageCurrentlySelected = false;
    },
  },
});

const graphInfoSlice = createSlice({
  name: 'graphInfo',
  initialState,
  reducers: {
    //
  },
});

export const store = configureStore({
  reducer: {
    appState: appStateSlice.reducer,
    components: componentReducer,
    flowsheet: flowsheetReducer,
    sections: sectionsReducer,
    stages: stagesReducer,
    graphInfo: graphInfoSlice.reducer,
    [flowsheetDataApi.reducerPath]: flowsheetDataApi.reducer,
    [stagesDataApi.reducerPath]: stagesDataApi.reducer,
    [sectionsDataApi.reducerPath]: sectionsDataApi.reducer,
    [componentsDataApi.reducerPath]: componentsDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(flowsheetDataApi.middleware)
      .concat(stagesDataApi.middleware)
      .concat(sectionsDataApi.middleware)
      .concat(componentsDataApi.middleware)
  },
});

setupListeners(store.dispatch);

export const appStateActions = appStateSlice.actions;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
