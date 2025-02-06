import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState, store } from '..';
import { BASE_URL } from '@utils/Constants';

const ComplianceApi = createApi({
    reducerPath: 'complianceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/v1/compliance/`,
        prepareHeaders(headers, { getState }) {
            headers.set('Content-Type', 'application/json');
            const { token, user_id } = (getState() as RootState).auth.credentials;
            if (token && user_id) {
                headers.set('Authorization', `Bearer ${token}`);
                headers.set('USERID', user_id);
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
                    body: { ...body, customer: customerId },
                }
            },
        }),
        verificationCheck: builder.mutation<AuthResponse<VerificationLogsResponse[]>, VerificationLogsCredentials>({
            query: body => {
                return {
                    url: 'mobile/verification_check',
                    method: 'POST',
                    body,
                }
            },
        }),
    }),
});

export const { useBvnLookupMutation, useVerificationCheckMutation } =
    ComplianceApi;

export default ComplianceApi;
