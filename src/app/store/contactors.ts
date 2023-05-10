import { createSlice } from '@reduxjs/toolkit';

const initialContactorsState = {
  selectedContactor: {},
  contactorInfoState: 'readings',
  contactorList: [],
  contactorListDefaults: [
    {
      id: 0,
      row: 1,
      section: 'extraction',
      statuses: [
        {
          title: 'RPM',
          value: 3000,
          unit: '',
          label: '',
        },
        {
          title: 'Temperature',
          value: 23,
          unit: '\xB0C',
          label: '',
        },
        {
          title: 'Expected Concentration',
          value: [
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
          ],
          unit: '',
          label: '',
        },
        {
          title: 'Predicted Concentration',
          value: [
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
          ],
          unit: '',
          label: '',
        },
      ],
      mlStatus: 'alarm',
      ml: [
        {
          title: 'Findings',
          value: 'Unexpected Low Concentration',
        },
        {
          title: 'Sensors of Interest',
          value: 'VNIR',
        },
        {
          title: 'Temporal Trend',
          value: 'Fast',
        },
        {
          title: 'Process Upset Indicators',
          value: 'Yes',
        },
        {
          title: 'Response',
          value: 'Further Investigation',
        },
      ],
    }, 
    {
      id: 1,
      row: 1,
      section: 'scrub',
      statuses: [
        {
          title: 'RPM',
          value: 3000,
          unit: '',
          label: '',
        },
        {
          title: 'Temperature',
          value: 23,
          unit: '\xB0C',
          label: '',
        },
        {
          title: 'Expected Concentration',
          value: [
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
          ],
          unit: '',
          label: '',
        },
        {
          title: 'Predicted Concentration',
          value: [
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
          ],
          unit: '',
          label: '',
        },
      ],
      mlStatus: 'good',
      ml: [
        {
          title: 'Findings',
          value: 'Unexpected Low Concentration',
        },
        {
          title: 'Sensors of Interest',
          value: 'VNIR',
        },
        {
          title: 'Temporal Trend',
          value: 'Fast',
        },
        {
          title: 'Process Upset Indicators',
          value: 'Yes',
        },
        {
          title: 'Response',
          value: 'Further Investigation',
        },
      ],
    },
    {
      id: 2,
      row: 1,
      section: 'strip',
      statuses: [
        {
          title: 'RPM',
          value: 3000,
          unit: '',
          label: '',
        },
        {
          title: 'Temperature',
          value: 23,
          unit: '\xB0C',
          label: '',
        },
        {
          title: 'Expected Concentration',
          value: [
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
          ],
          unit: '',
          label: '',
        },
        {
          title: 'Predicted Concentration',
          value: [
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
          ],
          unit: '',
          label: '',
        },
      ],
      mlStatus: 'alarm',
      ml: [
        {
          title: 'Findings',
          value: 'Unexpected Low Concentration',
        },
        {
          title: 'Sensors of Interest',
          value: 'VNIR',
        },
        {
          title: 'Temporal Trend',
          value: 'Fast',
        },
        {
          title: 'Process Upset Indicators',
          value: 'Yes',
        },
        {
          title: 'Response',
          value: 'Further Investigation',
        },
      ],
    },
    {
      id: 3,
      row: 1,
      section: 'wash',
      statuses: [
        {
          title: 'RPM',
          value: 3000,
          unit: '',
          label: '',
        },
        {
          title: 'Temperature',
          value: 23,
          unit: '\xB0C',
          label: '',
        },
        {
          title: 'Expected Concentration',
          value: [
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
          ],
          unit: '',
          label: '',
        },
        {
          title: 'Predicted Concentration',
          value: [
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
          ],
          unit: '',
          label: '',
        },
      ],
      mlStatus: 'good',
      ml: [
        {
          title: 'Findings',
          value: 'Unexpected Low Concentration',
        },
        {
          title: 'Sensors of Interest',
          value: 'VNIR',
        },
        {
          title: 'Temporal Trend',
          value: 'Fast',
        },
        {
          title: 'Process Upset Indicators',
          value: 'Yes',
        },
        {
          title: 'Response',
          value: 'Further Investigation',
        },
      ],
    },
    {
      id: 4,
      row: 1,
      section: 'rinse',
      statuses: [
        {
          title: 'RPM',
          value: 3000,
          unit: '',
          label: '',
        },
        {
          title: 'Temperature',
          value: 23,
          unit: '\xB0C',
          label: '',
        },
        {
          title: 'Expected Concentration',
          value: [
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
          ],
          unit: '',
          label: '',
        },
        {
          title: 'Predicted Concentration',
          value: [
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
            {
              title: '',
              value: 8.3,
              unit: 'mM',
              label: 'Dy Nitrate: HNO\u2083',
            },
          ],
          unit: '',
          label: '',
        },
      ],
      mlStatus: 'good',
      ml: [
        {
          title: 'Findings',
          value: 'Unexpected Low Concentration',
        },
        {
          title: 'Sensors of Interest',
          value: 'VNIR',
        },
        {
          title: 'Temporal Trend',
          value: 'Fast',
        },
        {
          title: 'Process Upset Indicators',
          value: 'Yes',
        },
        {
          title: 'Response',
          value: 'Further Investigation',
        },
      ],
    },
  ],
};

const contactorsSlice = createSlice({
  name: 'contactors',
  initialState: initialContactorsState,
  reducers: {
    setContactors(state: any) {
      const store = state;
      store.contactorList = store.contactorListDefaults;
    },

    changeContactor(state, action) {
      const store = state;
      store.selectedContactor = action.payload;
    },

    resetContactor(state) {
      const store = state;
      store.selectedContactor = {};
    },

    changeContactorInfoState(state, action) {
      const store = state;
      store.contactorInfoState = action.payload;
    },

    updateContactorList(state, action) {
      const store = state;
      store.contactorList = action.payload;
    }
  },
});

export const contactorsActions = contactorsSlice.actions;

export default contactorsSlice.reducer;
