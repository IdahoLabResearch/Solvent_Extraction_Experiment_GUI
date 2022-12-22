import { createSlice } from '@reduxjs/toolkit';

const initialStagesState = {
  selectedStage: {},
  stagesList: [
    {
      id: 0,
      title: 'extraction',
      statuses: [
        {
          title: 'Flow Rate',
          value: 10,
          unit: 'ml/min',
          label: '',
        },
        {
          title: 'Density',
          value: 1.5,
          unit: 'g/cm\u0033',
          label: '',
        },
        {
          title: 'Organic In',
          value: 8.3,
          unit: 'mM',
          label: 'Nd Concentration',
        },
        {
          title: 'Organic Out',
          value: 8.3,
          unit: 'mM',
          label: 'Nd Concentration',
        },
        {
          title: 'Aqueous In',
          value: 8.3,
          unit: 'mM',
          label: 'Dy Concentration',
        },
        {
          title: 'Aqueous Out',
          value: 8.3,
          unit: 'mM',
          label: 'Dy Concentration',
        },
      ],
    },
    {
      id: 1,
      title: 'scrub',
      statuses: [
        {
          title: 'Flow Rate',
          value: 10,
          unit: 'ml/min',
          label: '',
        },
        {
          title: 'Density',
          value: 1.5,
          unit: 'g/cm\u0033',
          label: '',
        },
        {
          title: 'Organic In',
          value: 8.3,
          unit: 'mM',
          label: 'Nd Concentration',
        },
        {
          title: 'Organic Out',
          value: 8.3,
          unit: 'mM',
          label: 'Nd Concentration',
        },
        {
          title: 'Aqueous In',
          value: 8.3,
          unit: 'mM',
          label: 'Dy Concentration',
        },
        {
          title: 'Aqueous Out',
          value: 8.3,
          unit: 'mM',
          label: 'Dy Concentration',
        },
      ],
    },
    {
      id: 2,
      title: 'strip',
      statuses: [
        {
          title: 'Flow Rate',
          value: 10,
          unit: 'ml/min',
          label: '',
        },
        {
          title: 'Density',
          value: 1.5,
          unit: 'g/cm\u0033',
          label: '',
        },
        {
          title: 'Organic In',
          value: 8.3,
          unit: 'mM',
          label: 'Nd Concentration',
        },
        {
          title: 'Organic Out',
          value: 8.3,
          unit: 'mM',
          label: 'Nd Concentration',
        },
        {
          title: 'Aqueous In',
          value: 8.3,
          unit: 'mM',
          label: 'Dy Concentration',
        },
        {
          title: 'Aqueous Out',
          value: 8.3,
          unit: 'mM',
          label: 'Dy Concentration',
        },
      ],
    },
    {
      id: 3,
      title: 'wash',
      statuses: [
        {
          title: 'Flow Rate',
          value: 10,
          unit: 'ml/min',
          label: '',
        },
        {
          title: 'Density',
          value: 1.5,
          unit: 'g/cm\u0033',
          label: '',
        },
        {
          title: 'Organic In',
          value: 8.3,
          unit: 'mM',
          label: 'Nd Concentration',
        },
        {
          title: 'Organic Out',
          value: 8.3,
          unit: 'mM',
          label: 'Nd Concentration',
        },
        {
          title: 'Aqueous In',
          value: 8.3,
          unit: 'mM',
          label: 'Dy Concentration',
        },
        {
          title: 'Aqueous Out',
          value: 8.3,
          unit: 'mM',
          label: 'Dy Concentration',
        },
      ],
    },
    {
      id: 4,
      title: 'rinse',
      statuses: [
        {
          title: 'Flow Rate',
          value: 10,
          unit: 'ml/min',
          label: '',
        },
        {
          title: 'Density',
          value: 1.5,
          unit: 'g/cm\u0033',
          label: '',
        },
        {
          title: 'Organic In',
          value: 8.3,
          unit: 'mM',
          label: 'Nd Concentration',
        },
        {
          title: 'Organic Out',
          value: 8.3,
          unit: 'mM',
          label: 'Nd Concentration',
        },
        {
          title: 'Aqueous In',
          value: 8.3,
          unit: 'mM',
          label: 'Dy Concentration',
        },
        {
          title: 'Aqueous Out',
          value: 8.3,
          unit: 'mM',
          label: 'Dy Concentration',
        },
      ],
    },
  ],
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
