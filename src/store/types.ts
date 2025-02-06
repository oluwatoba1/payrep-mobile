interface IAppState {
  onboarded?: boolean;
  launched?: boolean;
  showBalance?: boolean;
  enableBiometrics?: boolean;
  customer?: ICustomerInfo | null;
}

enum RegistrationSteps {
  MOBILE_NUMBER_REGISTRATION = 'MOBILE_NUMBER_REGISTRATION',
  EMAIL_REGISTRATION = 'EMAIL_REGISTRATION',
  PASSWORD_REGISTRATION = 'PASSWORD_REGISTRATION',
  NATIONALITY = 'NATIONALITY',
  BVN_VERIFICATION = 'BVN_VERIFICATION',
  ADDRESS_REGISTRATION = 'ADDRESS_REGISTRATION',
  IDENTIFICATION_REGISTRATION = 'IDENTIFICATION_REGISTRATION',
  PEP_IDENTIFICATION = 'PEP_IDENTIFICATION',
  SOURCE_OF_INCOME = 'SOURCE_OF_INCOME',
  REGISTERED = 'REGISTERED',
}

interface IAuth {
  credentials: {
    token: string | null;
    user_id: string | null;
  };
  registration: {
    mobileNumber: string;
    email: string;
  };
  customer: ICustomerInfo | null;
}

interface ICustomerInfo {
  id?: string;
  first_name?: string;
  surname?: string;
  other_name?: string;
  stage?: RegistrationSteps;
  username?: string;
}

interface IState {
  code: string;
  name: string;
  _id: string;
}

interface ICountry {
  name: string;
  flag: string;
  phoneCode: string;
  states: IState[];
}

interface IToastItem {
  position?: 'top' | 'bottom';
  type: string;
  message: string;
  duration: number;
}

type KYCStackParamList = {
  KYCIntro: undefined;
  PersonalDetails: undefined;
  LocationDetails: undefined;
  BVNVerification: undefined;
  NINVerification: undefined;
  IDVerification: undefined;
  NationalIDUpload: undefined;
  DriversLicenseUpload: undefined;
  SelfieUpload: undefined;
  PinCreation: undefined;
};

interface IApp {
  appState: IAppState;
  menu: {
    showMenu: boolean;
  };
  statusModal: {
    showStatusModal: boolean;
    statusModalType: 'success' | 'failed' | 'pending';
    statusModalTitle: string;
    statusModalDescription: string;
    statusModalHideActionState: number;
  };
  idempotency: {
    key: string;
    expiry: number;
  };
  countries: ICountry[];
  selectedCountry: ICountry | null;
  toastRequests: IToastItem[];
  kycInitialRouteName: keyof KYCStackParamList;
}

interface IUser {
  id: string;
  email: string;
  phoneNumber: string;
  phoneCode: string;
  userType: 'business' | 'admin';
  businessType: 'corporate' | 'entrepreneur';
  tier: string;
  onboard: {
    step: number;
    stage:
      | 'pending'
      | 'submitted'
      | 'approved'
      | 'basic'
      | 'address'
      | 'bvn-number'
      | 'nin-number'
      | 'id-card'
      | 'liveness-check'
      | 'transaction-pin';
    kycStage: 'pending';
  };
  kyc: {
    idData: {
      front: string;
      back: string;
    };
    liveness: {
      isLive: boolean;
      imageUrl: string;
    };
    firstName: string;
    lastName: string;
    middleName: string;
    avatar: string;
    dob: string;
    age: null;
    marital: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    utilityDoc: string;
    faceId: string;
    bvn: string;
    nin: string;
    phoneCode: string;
    phoneNumber: string;
    slug: string;
  };
  verification: {
    basic: 'approved' | 'pending';
    bvn: 'approved' | 'pending';
    nin: 'approved' | 'pending';
    ID: 'approved' | 'pending';
    face: 'approved' | 'pending';
    address: 'approved' | 'pending';
    kyc: 'approved' | 'pending';
    sms: boolean;
    email: boolean;
  };
  accounts: IAccount[];
  wallet?: Wallet;
}

interface IAccount {
  bank: {
    legalName: string;
    name: string;
    bankCode: string;
  };
  accountNo: string;
  isEnabled: boolean;
  accountName: string;
}

interface Wallet {
  balance: {
    available: number;
    locked: number;
    settlement: number;
    ledger: number;
  };
  transfer: {
    value: number;
    count: number;
  };
  withdrawal: {
    value: number;
    count: number;
  };
}

interface IBank {
  legalName: string;
  code: string;
}

interface IBusinessBank {
  accountNo: string;
  legalName: string;
  code: string;
  accountName: string;
}

interface IBeneficiary {}

interface IWallet {
  sendMoney: {
    type?: 'account' | 'terraswitch';
    amount?: string;
    users?: IUser[];
    bank?: {
      accountNo: string;
      bankCode: string;
      accountName: string;
    };
  };
  withdraw: {
    amount: string;
    selectedAccount?: IBusinessBank;
  };
  billCategoryId: string;
  billerId: string;
  billerName: string;
  subCategory: string;
  bill: {
    itemId: string;
    customerId: string;
    amount: string;
    billerId: string;
    pin: string;
  };
  banks: IBank[];
  businessBanks: IBusinessBank[];
  beneficiaries: IBeneficiary[];
}

interface IRegistration {
  mobileNumber: string;
  phoneCode: string;
  dateOfBirth: Date;
  password: string;
  confirmPassword: string;
  emailAddress?: string;
  userType: string;
  emailOtp?: string;
  pin: string;
  confirmPin: string;
}

interface IProfileCompletion {
  country: string;
  business: Business;
  kycType: KycType;
  pepStatus: string;
  income: Income;
  address: Address;
}

interface ICompliance {
  bvnData: {
    firstName: string;
    middleName: string;
    lastName: string;
    dob: string;
    bvn: string;
    phoneNumber: string;
    gender: string;
    email: string;
  };
}

interface Business {
  businessName: string;
  rcNumber: string;
  incorporationDate: string;
}

interface KycType {
  type: string;
  nin: string;
  bvn: string;
}

interface Income {
  occupation: string;
  additionalSourceOfIncome: string;
  annualIncome: string;
}

interface Address {
  houseNumber: string;
  streetNumber: string;
  city: string;
  state: string;
  lga: string;
}
interface IEasySavings {
  savingsGoal: string;
  amount: string;
  goalDeadline: string;
  deductedAmount: string;
  primarySourceFund: string;
}

interface LoginCredentials {
  username: string;
  password: string;
  device_id: string;
  login_type: 'password' | 'biometrics';
  signature?: string;
  signature_payload?: string;
}

interface LoginResponse {
  is_new_device: boolean;
  token: string;
  user_id: string;
  customer: ICustomerInfo;
}

interface RegisterBiometricsCredentials {
  username: string;
  public_key: string;
}

interface RegisterCredentials {
  type: string;
  mobile_number: string;
  email: string;
  password: string;
  otp: string;
  device_id: string;
}

interface BvnLookupCredentials {
  bvn: string;
}

interface VerificationLogsCredentials {
  verification: string;
}

interface VerificationLogsResponse {
  id: string;
  customer: string;
  type: string;
  customer_update_status: boolean;
  status: boolean;
  payload: {
    [key: string]: any;
  };
  created_at: string;
}

interface LocationCredentials {
  residential_address: string;
  state: string;
  lga: string;
  country: string;
}

interface PepCredentials {
  pep: boolean
}

interface AuthResponse<Type> {
  status: boolean;
  message: string;
  data: Type;
}

interface SuccessResponse<Type> {
  error: boolean;
  errors: string[];
  message: string;
  data: Type | Type[];
  token: string;
}

interface ErrorResponse {}
