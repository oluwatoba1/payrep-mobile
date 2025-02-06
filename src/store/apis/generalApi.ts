import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {RootState} from '..';
import {BASE_URL} from '@utils/Constants';

const GeneralApi = createApi({
  reducerPath: 'generalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: ${BASE_URL}/api/v1/general/,
    prepareHeaders(headers, {getState}) {
      headers.set('Content-Type', 'application/json');
      const {token} = (getState() as RootState).auth.credentials;
      if (token) {
        headers.set('Authorization', Bearer ${token});
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    fetchStates: builder.query<AuthResponse<any>, void>({
      query: () => ({
        url: 'mobile/states',
      }),
    }),
    fetchLgas: builder.mutation<AuthResponse<any>, {state: string}>({
      query: body => ({
        url: 'mobile/lgas',
        body,
      }),
    }),
    fetchCountries: builder.query<AuthResponse<any>, void>({
      query: () => ({
        url: 'mobile/countries',
      }),
    }),
  }),
});

export const {
  useFetchStatesQuery,
  useFetchLgasMutation,
  useFetchCountriesQuery,
} = GeneralApi;

export default GeneralApi;