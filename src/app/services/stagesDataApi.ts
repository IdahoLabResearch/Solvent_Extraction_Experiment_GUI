{/* Copyright 2024, Battelle Energy Alliance, LLC */}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type StagesResponse = Array<{ [key: string]: any; }>

export const stagesDataApi = createApi({
  reducerPath: 'stagesData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints: (builder) => ({
      fetchStages: builder.query<StagesResponse, void>({
        query: () => ({ url: 'stages' }),
      }),
  }),
});

export const {
  useFetchStagesQuery
} = stagesDataApi;
