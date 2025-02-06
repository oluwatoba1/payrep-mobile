import {NavigatorScreenParams} from '@react-navigation/native';

interface INotification {
  title: string;
  description: string;
  time: string;
  read: boolean;
}

export type PublicNavigatorParamList = {
  Splashscreen: undefined;
  Onboarding: undefined;
  Landing: undefined;
  Login: undefined;
  UserType: undefined;
  ForgotPassword: undefined;
  CreatePassword: undefined;

  CreateAccountScreen: undefined;
  MobileNumber: {userType: string};
  VerificationCode: {userType: string};
  EmailVerification: undefined;
  EmailAddress: undefined;
  ConfirmPasswordScreen: undefined;
  NewDeviceVerification: undefined;
  NewDevice: undefined;
  SuccessMessage: {
    title: string;
    subTitle: string;
  };
};
export type PrivateNavigatorParamList = {
  ProfileSetupIntro: undefined;
  BottomTabs: NavigatorScreenParams<BottomTabParamList>;
  MessageScreen: {title: string; message: string; action: () => void};
};

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Support: NavigatorScreenParams<SupportStackParamList>;
  Transactions: NavigatorScreenParams<TransactionStackParamList>;
  More: NavigatorScreenParams<MoreStackParamList>;
  Savings: NavigatorScreenParams<SavingsStackParamList>;
};

export type HomeStackParamList = {
  Dashboard: undefined;
  CommissionsScreen: undefined;
  CommissionsWithdrawalScreen: undefined;
  BonusScreen: undefined;
  BonusWithdrawalScreen: undefined;
  Earnings: undefined;
  ProfileCompletionScreen: undefined;
  NationalityScreen: undefined;
  MeansOfIdentificationScreen: undefined;
  FaceRecognitionScreen: undefined;
  BusinessDetailsScreen: undefined;
  ResidentialAddressScreen: undefined;
  PepStatusScreen: undefined;
  SourceOfIncomeScreen: undefined;
  ProfileCompletionSuccessMessageScreen: {
    title: string;
    subTitle: string;
    logo?: undefined;
  };
  NotificationsScreen: {
    notifications: INotification[];
  };

  WalletHomeScreen: undefined;
  FundWalletScreen: undefined;
  BankTransferScreen: undefined;
  PayrepBankTransferScreen: undefined;
  Beneficiaries: undefined;
  CommissionWallet: undefined;
  BonusWallet: undefined;
  ConfirmTransactionScreen: undefined;
  BillPaymentScreen: undefined;
  DSTVSubscriptionScreen: undefined;
  CableTVSubscriptionScreen: undefined;
  CableTVProviderScreen: undefined;
  ElectrictySubscriptionScreen: undefined;
  ElectricityProviderScreen: undefined;
  AirtimeScreen: undefined;
  CableScreen: undefined;
  DataScreen: undefined;
  ElectricityScreen: undefined;
  TransactionSuccessMessageScreen: {
    title: string;
    subTitle: string;
    logo?: undefined;
  };
  TransactionReceiptScreen: {
    id: string;
    type: string;
    source: string;
    destination: string;
    date: string;
    status: 'successful' | 'pending' | 'failed';
    amount: string;
  };
};

export type ProfileStackParamList = {
  ProfileCompletionIntro: undefined;
  BvnVerification: undefined;
  FacialRecognition: undefined;
  LocationDetails: undefined;
  MeansOfIdentification: undefined;
  Pep: undefined;
  SourceOfIncome: undefined;
};

export type TransactionStackParamList = {
  TransactionHistoryScreen: undefined;
  TransactionReceiptScreen: {
    id: string;
  };
  DisputeViewScreen: undefined;
  StatementRequestScreen: undefined;
};
export type MoreStackParamList = {
  Profile: undefined;
  Account: undefined;
  ListBankCardScreen: undefined;
  ViewBankCardScreen: undefined;
  AddBankCardScreen: undefined;
  ListAccountTiersScreen: undefined;
  SecuritySettingsScreen: undefined;
  ResetTransactionScreen: undefined;
  ChangePasswordScreen: undefined;
  SupportScreen: undefined;
  NotificationScreen: undefined;
  DeleteAccountScreen: undefined;
  LinkPaymentMethodScreen: undefined;
  MoreSuccessMessageScreen: {
    title: string;
    subTitle: string;
    logo?: undefined;
  };
  TierTwoVerificationScreen: undefined;
  TierThreeResidentialAddressScreen: undefined;
  NextOfKinDetailsScreen: undefined;
  TerminalsScreen: undefined;
  EditAddressScreen: undefined;
  AirtimeDataNetworkScreen: undefined;
  BankTransferNetworkScreen: undefined;
  CardPaymentNetworkScreen: undefined;
  BillsPaymentNetworkScreen: undefined;
  NetworkHomeScreen: undefined;
  ListDisputesScreen: undefined;
  ViewDisputeScreen: {
    disputeId: string;
  };
};

export type SupportStackParamList = {
  SupportScreen: undefined;
};

export type SavingsStackParamList = {
  // easy savings
  AddEasySavingsScreen: undefined;
  PreviewEasySavingsScreen: undefined;
  EditEasySavingsScreen: undefined;
  EasySavingsWithdrawScreen: undefined;
  // automated savings
  PreviewAutomatedSavingsScreen: {
    amount: string;
    date: string;
    source: string;
  };
  AutomatedSavingsScreen: undefined;
  AutomatedSavingsWithdrawScreen: undefined;
  // total savings
  TotalSavingsScreen: undefined;
  TotalSavingsWithdrawScreen: undefined;
  // locked savings
  LockedSavingsScreen: undefined;
  LockedSavingsWithdrawScreen: undefined;
  PreviewLockedSavingsScreen: undefined;
  // generic savings options
  LinkCardScreen: undefined;
  LinkBankScreen: undefined;
  SavingsSuccessMessageScreen: {
    title: string;
    subTitle: string;
  };
  SavingsScreen: undefined;
  WithdrawSavingsListsScreen: undefined;
  ConfirmSavingstransactionScreen: undefined;
  SavingsReceiptScreen: {
    id: string;
    type: string;
    source: string;
    destination: string;
    date: string;
    status: 'successful' | 'pending' | 'failed';
    amount: string;
  };
  EasySavingsListScreen: undefined;
  AutoEasySavingsListScreen: undefined;
  EditAutoEasySavingsScreen: undefined;
};
