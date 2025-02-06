import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {RootState} from '..';
import {BASE_URL} from '@utils/Constants';

const CustomerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/v1/customer/`,
    prepareHeaders(headers, {getState}) {
      headers.set('Content-Type', 'application/json');
      const {token} = (getState() as RootState).auth.credentials;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    updateLocation: builder.mutation<AuthResponse<null>, LocationCredentials>({
      query: body => ({
        url: 'mobile/location',
        body,
      }),
    }),
    updatePep: builder.mutation<AuthResponse<null>, PepCredentials>({
      query: body => ({
        url: 'mobile/pep',
        body,
      }),
    }),
  }),
});

export const {useUpdateLocationMutation, useUpdatePepMutation} = CustomerApi;

export default CustomerApi;
