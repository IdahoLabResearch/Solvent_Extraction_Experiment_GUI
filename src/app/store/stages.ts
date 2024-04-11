import { createSlice } from '@reduxjs/toolkit';

const initialStagesState = {
  selectedStage: {},
  stageInfoState: 'readings',
  stageList: [],
  stageListDefaults: [
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
          value: 'Unexpected High Nd Concentration',
        },
        {
          title: 'Locations of Interest',
          value: 'Raffinate',
        },
        {
          title: 'Anomaly Strength',
          value: 'Strong'
        },
        {
          title: 'Nd Concentration',
          value: '10.5 mM Expected = 0.0002 mM',
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
          value: 'Unexpected High Nd Concentration',
        },
        {
          title: 'Locations of Interest',
          value: 'Raffinate',
        },
        {
          title: 'Anomaly Strength',
          value: 'Strong'
        },
        {
          title: 'Nd Concentration',
          value: '10.5 mM Expected = 0.0002 mM',
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
          value: 'Unexpected High Nd Concentration',
        },
        {
          title: 'Locations of Interest',
          value: 'Raffinate',
        },
        {
          title: 'Anomaly Strength',
          value: 'Strong'
        },
        {
          title: 'Nd Concentration',
          value: '10.5 mM Expected = 0.0002 mM',
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
          value: 'Unexpected High Nd Concentration',
        },
        {
          title: 'Locations of Interest',
          value: 'Raffinate',
        },
        {
          title: 'Anomaly Strength',
          value: 'Strong'
        },
        {
          title: 'Nd Concentration',
          value: '10.5 mM Expected = 0.0002 mM',
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
          value: 'Unexpected High Nd Concentration',
        },
        {
          title: 'Locations of Interest',
          value: 'Raffinate',
        },
        {
          title: 'Anomaly Strength',
          value: 'Strong'
        },
        {
          title: 'Nd Concentration',
          value: '10.5 mM Expected = 0.0002 mM',
        },
        {
          title: 'Response',
          value: 'Further Investigation',
        },
      ],
    },
  ],
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
