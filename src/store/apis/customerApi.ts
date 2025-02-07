import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {RootState, store} from '..';
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
      query: body => {
        const customerId: string = store.getState().auth.customer?.id || '';
        return {
          url: `mobile/location/${customerId}`,
          method: 'PUT',
          body,
        };
      },
    }),
    updatePep: builder.mutation<AuthResponse<null>, PepCredentials>({
      query: body => {
        const customerId: string = store.getState().auth.customer?.id || '';
        return {
          url: `mobile/pep/${customerId}`,
          method: 'PUT',
          body,
        };
      },
    }),
    updateIncome: builder.mutation<AuthResponse<null>, SourceOfIncomeCredentials>({
      query: body => {
        const customerId: string = store.getState().auth.customer?.id || '';
        return {
          url: `mobile/income/${customerId}`,
          method: 'PUT',
          body,
        };
      },
    }),
  }),
});

export const {useUpdateLocationMutation, useUpdatePepMutation, useUpdateIncomeMutation} = CustomerApi;

export default CustomerApi;
