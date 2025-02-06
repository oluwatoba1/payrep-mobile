import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeStackParamList } from '../types';
import {
  BonusWithdrawalScreen,
  BonussScreen,
  BusinessDetailsScreen,
  CommissionsScreen,
  CommissionsWithdrawalScreen,
  Dashboard,
  Earnings,
  FaceRegnitionScreen,
  MeansOfIdentificationScreen,
  NationalityScreen,
  PepStatusScreen,
  ProfileCompletionScreen,
  ResidenceAddressScreen,
  SourceOfIncomeScreen,
  FundWalletScreen,
  BankTransferScreen,
  ConfirmTransactionScreen,
  BillPaymentScreen,
  DSTVSubscriptionScreen,
  AirtimeScreen,
  TransactionSuccessMessageScreen,
  TransactionReceiptScreen,
  DataBills,
  ElectricityBills,
  ElectricityBillsProvider,
  CableSubscriptionScreen,
  NotificationScreen,
  ProfileCompletionSuccessMessageScreen,
  PayrepBankTransferScreen
} from '../../screens/Private/Home';
import CableTVProvider from '../../screens/Private/Home/Bills/CableTVProvider';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Dashboard'>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="CommissionsScreen" component={CommissionsScreen} />
      <Stack.Screen
        name="CommissionsWithdrawalScreen"
        component={CommissionsWithdrawalScreen}
      />
      <Stack.Screen name="BonusScreen" component={BonussScreen} />
      <Stack.Screen
        name="BonusWithdrawalScreen"
        component={BonusWithdrawalScreen}
      />
      <Stack.Screen name="ProfileCompletionScreen" component={ProfileCompletionScreen} />
      <Stack.Screen name="NationalityScreen" component={NationalityScreen} />
      <Stack.Screen name="MeansOfIdentificationScreen" component={MeansOfIdentificationScreen} />
      <Stack.Screen name="FaceRecognitionScreen" component={FaceRegnitionScreen} />
      <Stack.Screen name="BusinessDetailsScreen" component={BusinessDetailsScreen} />
      <Stack.Screen name="ResidentialAddressScreen" component={ResidenceAddressScreen} />
      <Stack.Screen name="PepStatusScreen" component={PepStatusScreen} />
      <Stack.Screen name="SourceOfIncomeScreen" component={SourceOfIncomeScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationScreen} />

      <Stack.Screen name="Earnings" component={Earnings} />
      <Stack.Screen name="FundWalletScreen" component={FundWalletScreen} />
      <Stack.Screen name="BankTransferScreen" component={BankTransferScreen} />
      <Stack.Screen name="PayrepBankTransferScreen" component={PayrepBankTransferScreen} />
      <Stack.Screen name="ConfirmTransactionScreen" component={ConfirmTransactionScreen} />
      <Stack.Screen name="BillPaymentScreen" component={BillPaymentScreen} />
      <Stack.Screen name="DSTVSubscriptionScreen" component={DSTVSubscriptionScreen} />
      <Stack.Screen name="AirtimeScreen" component={AirtimeScreen} />
      <Stack.Screen name="DataScreen" component={DataBills} />
      <Stack.Screen name="ElectrictySubscriptionScreen" component={ElectricityBills} />
      <Stack.Screen name="ElectricityProviderScreen" component={ElectricityBillsProvider} />
      <Stack.Screen name="CableTVProviderScreen" component={CableTVProvider} />
      <Stack.Screen name="TransactionSuccessMessageScreen" component={TransactionSuccessMessageScreen} />
      <Stack.Screen name="TransactionReceiptScreen" component={TransactionReceiptScreen} />
      <Stack.Screen name="CableTVSubscriptionScreen" component={CableSubscriptionScreen} />
      <Stack.Screen name="ProfileCompletionSuccessMessageScreen" component={ProfileCompletionSuccessMessageScreen} />

    </Stack.Navigator>
  );
}
