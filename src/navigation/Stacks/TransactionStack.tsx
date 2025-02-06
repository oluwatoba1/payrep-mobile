import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { TransactionStackParamList } from '../types';
import { StatementRequest, TransactionHistory, TransactionReceipt, DisputeView } from '../../screens/Private/Transactions';

const Stack = createNativeStackNavigator<TransactionStackParamList>();

export default function TransactionStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TransactionHistoryScreen" component={TransactionHistory}/>
      <Stack.Screen name="DisputeViewScreen" component={DisputeView}/>
      <Stack.Screen name="StatementRequestScreen" component={StatementRequest}/>
      <Stack.Screen name="TransactionReceiptScreen" component={TransactionReceipt} />
    </Stack.Navigator>
  );
}
