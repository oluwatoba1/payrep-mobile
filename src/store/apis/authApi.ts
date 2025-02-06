import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '..';
import { BASE_URL } from '@utils/Constants';

const AuthApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/v1/`,
    prepareHeaders(headers, { getState }) {
      headers.set('Content-Type', 'application/json');
      const { token, user_id } = (getState() as RootState).auth.credentials;
      if (token && user_id) {
        headers.set('Authorization', `Bearer ${token}`);
        headers.set('UserID', user_id);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation<AuthResponse<LoginResponse>, LoginCredentials>({
      query: body => ({
        url: 'auth/mobile/login',
        method: 'POST',
        body,
      }),
    }),
    registerEmail: builder.mutation<AuthResponse<null>, Partial<RegisterCredentials>>({
      query: body => ({
        url: 'customer/mobile/register_email',
        method: 'POST',
        body,
      }),
    }),
    verifyEmail: builder.mutation<AuthResponse<null>, Partial<RegisterCredentials>>({
      query: body => ({
        url: 'customer/mobile/verify_email',
        method: 'POST',
        body,
      }),
    }),
    registerMobileNumber: builder.mutation<AuthResponse<null>, Partial<RegisterCredentials>>({
      query: body => ({
        url: 'customer/mobile/register_mobile_number',
        method: 'POST',
        body,
      }),
    }),
    verifyMobileNumber: builder.mutation<AuthResponse<null>, Partial<RegisterCredentials>>({
      query: body => ({
        url: 'customer/mobile/verify_mobile_number',
        method: 'POST',
        body,
      }),
    }),
    registerPassword: builder.mutation<AuthResponse<null>, Partial<RegisterCredentials>>({
      query: body => ({
        url: 'customer/mobile/register_password',
        method: 'POST',
        body,
      })
    }),
    registerBiometrics: builder.mutation<AuthResponse<null>, Partial<RegisterBiometricsCredentials>>({
      query: body => ({
        url: 'customer/mobile/register_biometrics',
        method: 'POST',
        body,
      })
    }),
  }),
});

export const { useLoginMutation, useRegisterEmailMutation, useVerifyEmailMutation, useRegisterMobileNumberMutation, useVerifyMobileNumberMutation, useRegisterPasswordMutation, useRegisterBiometricsMutation } =
  AuthApi;

export default AuthApi;
