{/* Copyright 2024, Battelle Energy Alliance, LLC */}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type FlowsheetResponse = Array<{ [key: string]: any; }>

export const flowsheetDataApi = createApi({
  reducerPath: 'flowsheetData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints: (builder) => ({
      fetchFlowsheet: builder.query<FlowsheetResponse, void>({
        query: () => ({ url: 'flowsheet' }),
      }),
  }),
});

export const {
  useFetchFlowsheetQuery
} = flowsheetDataApi;
