import { createSlice, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import componentReducer from './components';
import systemReducer from './system';
import sectionsReducer from './sections';
import contactorsReducer from './contactors';
import { contactorsDataApi } from '../services/contactorsDataApi';
import { sectionsDataApi } from '../services/sectionsDataApi';
import { componentsDataApi } from '../services/componentsDataApi';

const initialState = {
  openDrawerLeft: false,
  openDrawerLeftWidth: 64,
  status: 'good',
  contactorCurrentlySelected: false,
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

    makeContactorSelection(state) {
      const store = state;
      store.contactorCurrentlySelected = true;
      store.sectionCurrentlySelected = false;
    },

    makeSectionSelection(state) {
      const store = state;
      store.contactorCurrentlySelected = false;
      store.sectionCurrentlySelected = true;
    },

    cancelSelection(state) {
      const store = state;
      store.sectionCurrentlySelected = false;
      store.contactorCurrentlySelected = false;
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
    system: systemReducer,
    sections: sectionsReducer,
    contactors: contactorsReducer,
    graphInfo: graphInfoSlice.reducer,
    [contactorsDataApi.reducerPath]: contactorsDataApi.reducer,
    [sectionsDataApi.reducerPath]: sectionsDataApi.reducer,
    [componentsDataApi.reducerPath]: componentsDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(contactorsDataApi.middleware)
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
