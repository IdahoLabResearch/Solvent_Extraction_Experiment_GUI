import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type SectionsResponse = Array<{ [key: string]: any; }>

export const sectionsDataApi = createApi({
  reducerPath: 'sectionsData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints: (builder) => ({
      fetchSections: builder.query<SectionsResponse, void>({
        query: () => ({ url: 'sections' }),
      }),
  }),
});

export const {
  useFetchSectionsQuery
} = sectionsDataApi;
