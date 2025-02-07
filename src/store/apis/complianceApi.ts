import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {RootState, store} from '..';
import {BASE_URL} from '@utils/Constants';

const ComplianceApi = createApi({
  reducerPath: 'complianceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/v1/compliance/`,
    prepareHeaders(headers, {getState}) {
      const {token, user_id} = (getState() as RootState).auth.credentials;
      if (token && user_id) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    bvnLookup: builder.mutation<AuthResponse<any>, BvnLookupCredentials>({
      query: body => {
        const customerId: string = store.getState().auth.customer?.id || '';
        return {
          url: 'mobile/bvn_lookup',
          method: 'POST',
          body: {...body, customer: customerId},
        };
      },
    }),
    verificationCheck: builder.mutation<
      AuthResponse<VerificationLogsResponse[]>,
      VerificationLogsCredentials
    >({
      query: body => {
        return {
          url: 'mobile/verification_check',
          method: 'POST',
          body,
        };
      },
    }),
    uploadMeansofIdentification: builder.mutation<AuthResponse<null>, FormData>(
      {
        query: body => {
          const customerId: string = store.getState().auth.customer?.id || '';
          return {
            url: `mobile/documents/${customerId}`,
            method: 'POST',
            body,
          };
        },
      },
    ),
  }),
});

export const {
  useBvnLookupMutation,
  useVerificationCheckMutation,
  useUploadMeansofIdentificationMutation,
} = ComplianceApi;

export default ComplianceApi;
