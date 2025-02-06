import { configureStore } from '@reduxjs/toolkit';

import { AppSlice, AuthSlice, ComplianceSlice } from './slices/';
import { AuthApi, ComplianceApi } from './apis';

export const store = configureStore({
  reducer: {
    // add reducers here
    [AppSlice.name]: AppSlice.reducer,
    [AuthSlice.name]: AuthSlice.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
    [ComplianceSlice.name]: ComplianceSlice.reducer,
    [ComplianceApi.reducerPath]: ComplianceApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(AuthApi.middleware)
      .concat(ComplianceApi.middleware),
  // to add more middleware, simply chain `.concat(middle)` to the code above and
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
