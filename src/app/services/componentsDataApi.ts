{/* Copyright 2024, Battelle Energy Alliance, LLC */}

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type ComponentsResponse = Array<{ [key: string]: any; }>

export const componentsDataApi = createApi({
  reducerPath: 'componentsData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints: (builder) => ({
      fetchComponents: builder.query<ComponentsResponse, void>({
        query: () => ({ url: 'components' }),
      }),
  }),
});

export const {
  useFetchComponentsQuery
} = componentsDataApi;
