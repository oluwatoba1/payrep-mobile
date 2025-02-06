import {configureStore} from '@reduxjs/toolkit';

import {AppSlice, AuthSlice, ComplianceSlice} from './slices/';
import {AuthApi, ComplianceApi, GeneralApi, CustomerApi} from './apis';

export const store = configureStore({
  reducer: {
    // add reducers here
    [AppSlice.name]: AppSlice.reducer,
    [AuthSlice.name]: AuthSlice.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [GeneralApi.reducerPath]: GeneralApi.reducer,
    [CustomerApi.reducerPath]: CustomerApi.reducer,
    [ComplianceSlice.name]: ComplianceSlice.reducer,
    [ComplianceApi.reducerPath]: ComplianceApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(AuthApi.middleware)
      .concat(ComplianceApi.middleware)
      .concat(GeneralApi.middleware)
      .concat(CustomerApi.middleware),
  // to add more middleware, simply chain `.concat(middle)` to the code above and
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
