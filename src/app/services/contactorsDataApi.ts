import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type ContactorsResponse = Array<{ [key: string]: any; }>

export const contactorsDataApi = createApi({
  reducerPath: 'contactorsData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005'
  }),
  endpoints: (builder) => ({
      fetchContactors: builder.query<ContactorsResponse, void>({
        query: () => ({ url: 'contactors' }),
      }),
  }),
});

export const {
  useFetchContactorsQuery
} = contactorsDataApi;
