declare module '@env' {
  export const APP_MODE: 'development' | 'production';
  export const APP_STATE: string;
  export const PROD_BASE_URL: string;
  export const SANDBOX_BASE_URL: string;
  export const QOREID_SANDBOX_CLIENT_ID: string;
  export const QOREID_PROD_CLIENT_ID: string;
}
