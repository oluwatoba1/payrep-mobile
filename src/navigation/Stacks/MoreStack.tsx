import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MoreStackParamList} from '../types';
import {
  AccountScreen,
  AddBankCardScreen,
  ListBankCardsScreen,
  Profile,
  ViewBankCardScreen,
  SecuritySettingsScreen,
  ResetTransactionScreen,
  ChangePasswordScreen,
  SupportScreen,
  NotificationScreen,
  DeleteAccountScreen,
  LinkPaymentMethodScreen,
  MoreSuccessMessageScreen,
  ListAccountTiersScreen,
  TierTwoVerificationScreen,
  NextOfKinDetailScreen,
  TerminalScreen,
  TierThreeResidentialAddressScreen,
  EditAddressScreen,
  BillsPaymentNetworkScreen,
  CardPaymentNetworkScreen,
  BankTransferNetworkScreen,
  AirtimeDataNetworkScreen,
  NetworkHomeScreen,
  ListDisputesScreen,
  ViewDisputeScreen,
} from '../../screens/Private/More';

const Stack = createNativeStackNavigator<MoreStackParamList>();

export default function MoreStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="ListBankCardScreen" component={ListBankCardsScreen} />
      <Stack.Screen name="ViewBankCardScreen" component={ViewBankCardScreen} />
      <Stack.Screen name="AddBankCardScreen" component={AddBankCardScreen} />
      <Stack.Screen name="ListAccountTiersScreen" component={ListAccountTiersScreen} />
      <Stack.Screen name="LinkPaymentMethodScreen" component={LinkPaymentMethodScreen} />
      <Stack.Screen
        name="SecuritySettingsScreen"
        component={SecuritySettingsScreen}
      />
      <Stack.Screen
        name="ResetTransactionScreen"
        component={ResetTransactionScreen}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen
        name="DeleteAccountScreen"
        component={DeleteAccountScreen}
      />
      <Stack.Screen name="MoreSuccessMessageScreen" component={MoreSuccessMessageScreen} />
      <Stack.Screen name="TierTwoVerificationScreen" component={TierTwoVerificationScreen} />
      <Stack.Screen name="TierThreeResidentialAddressScreen" component={TierThreeResidentialAddressScreen} />
      <Stack.Screen name="NextOfKinDetailsScreen" component={NextOfKinDetailScreen} />
      <Stack.Screen name="TerminalsScreen" component={TerminalScreen} />
      <Stack.Screen name="EditAddressScreen" component={EditAddressScreen} />
      <Stack.Screen name="NetworkHomeScreen" component={NetworkHomeScreen} />
      <Stack.Screen name="AirtimeDataNetworkScreen" component={AirtimeDataNetworkScreen} />
      <Stack.Screen name="BankTransferNetworkScreen" component={BankTransferNetworkScreen} />
      <Stack.Screen name="CardPaymentNetworkScreen" component={CardPaymentNetworkScreen} />
      <Stack.Screen name="BillsPaymentNetworkScreen" component={BillsPaymentNetworkScreen} />
      <Stack.Screen name="ListDisputesScreen" component={ListDisputesScreen} />
      <Stack.Screen name="ViewDisputeScreen" component={ViewDisputeScreen} />

    </Stack.Navigator>
  );
}
