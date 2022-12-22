import { createSlice } from '@reduxjs/toolkit';

const initialContactorsState = {
  selectedContactor: {},
  contactorInfoState: 'readings',
  contactorList: [],
  contactorListDefaults: [
    {
      id: 0,
      row: 1,
      stage: 'extraction',
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
    // {
    //   id: 1,
    //   row: 1,
    //   stage: 'extraction',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   row: 1,
    //   stage: 'extraction',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   row: 1,
    //   stage: 'extraction',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'alarm',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   row: 1,
    //   stage: 'extraction',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 5,
    //   row: 1,
    //   stage: 'extraction',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 6,
    //   row: 1,
    //   stage: 'extraction',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 7,
    //   row: 1,
    //   stage: 'extraction',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 8,
    //   row: 1,
    //   stage: 'extraction',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'alarm',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 9,
    //   row: 1,
    //   stage: 'extraction',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    {
      id: 10,
      row: 1,
      stage: 'scrub',
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
    // {
    //   id: 11,
    //   row: 1,
    //   stage: 'scrub',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 12,
    //   row: 1,
    //   stage: 'scrub',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 13,
    //   row: 1,
    //   stage: 'scrub',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 14,
    //   row: 1,
    //   stage: 'scrub',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 15,
    //   row: 1,
    //   stage: 'scrub',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 16,
    //   row: 1,
    //   stage: 'scrub',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 17,
    //   row: 1,
    //   stage: 'scrub',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 18,
    //   row: 1,
    //   stage: 'scrub',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 19,
    //   row: 1,
    //   stage: 'scrub',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    {
      id: 20,
      row: 1,
      stage: 'strip',
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
    // {
    //   id: 21,
    //   row: 1,
    //   stage: 'strip',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 22,
    //   row: 1,
    //   stage: 'strip',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 23,
    //   row: 1,
    //   stage: 'strip',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 24,
    //   row: 1,
    //   stage: 'strip',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 25,
    //   row: 1,
    //   stage: 'strip',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 26,
    //   row: 2,
    //   stage: 'strip',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    {
      id: 27,
      row: 1,
      stage: 'wash',
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
    // {
    //   id: 28,
    //   row: 2,
    //   stage: 'wash',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 29,
    //   row: 2,
    //   stage: 'wash',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 30,
    //   row: 2,
    //   stage: 'wash',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 31,
    //   row: 2,
    //   stage: 'wash',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 32,
    //   row: 2,
    //   stage: 'wash',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 33,
    //   row: 2,
    //   stage: 'wash',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    {
      id: 34,
      row: 1,
      stage: 'rinse',
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
    // {
    //   id: 35,
    //   row: 2,
    //   stage: 'rinse',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 36,
    //   row: 2,
    //   stage: 'rinse',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 37,
    //   row: 2,
    //   stage: 'rinse',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 38,
    //   row: 2,
    //   stage: 'rinse',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
    // {
    //   id: 39,
    //   row: 2,
    //   stage: 'rinse',
    //   statuses: [
    //     {
    //       title: 'RPM',
    //       value: 3000,
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Temperature',
    //       value: 23,
    //       unit: '\xB0C',
    //       label: '',
    //     },
    //     {
    //       title: 'Expected Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //     {
    //       title: 'Predicted Concentration',
    //       value: [
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //         {
    //           title: '',
    //           value: 8.3,
    //           unit: 'mM',
    //           label: 'Dy Nitrate: HNO\u2083',
    //         },
    //       ],
    //       unit: '',
    //       label: '',
    //     },
    //   ],
    //   mlStatus: 'good',
    //   ml: [
    //     {
    //       title: 'Findings',
    //       value: 'Unexpected Low Concentration',
    //     },
    //     {
    //       title: 'Sensors of Interest',
    //       value: 'VNIR',
    //     },
    //     {
    //       title: 'Temporal Trend',
    //       value: 'Fast',
    //     },
    //     {
    //       title: 'Process Upset Indicators',
    //       value: 'Yes',
    //     },
    //     {
    //       title: 'Response',
    //       value: 'Further Investigation',
    //     },
    //   ],
    // },
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
