import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PrivateNavigatorParamList } from './types';
import BottomTabNavigator from './BottomNavigator';
import MessageScreen from '@screens/Private/Message';
import { useAppSelector } from '@store/hooks';
import ProfileSetupStack from './Stacks/ProfileSetupStack';

const Stack = createNativeStackNavigator<PrivateNavigatorParamList>();

enum RegistrationSteps {
  MOBILE_NUMBER_REGISTRATION = "MOBILE_NUMBER_REGISTRATION",
  EMAIL_REGISTRATION = "EMAIL_REGISTRATION",
  PASSWORD_REGISTRATION = "PASSWORD_REGISTRATION",
  NATIONALITY = "NATIONALITY",
  BVN_VERIFICATION = "BVN_VERIFICATION",
  ADDRESS_REGISTRATION = "ADDRESS_REGISTRATION",
  IDENTIFICATION_REGISTRATION = "IDENTIFICATION_REGISTRATION",
  PEP_IDENTIFICATION = "PEP_IDENTIFICATION",
  SOURCE_OF_INCOME = "SOURCE_OF_INCOME",
  REGISTERED = "REGISTERED",
}

const PrivateNavigator = () => {
  const customerStage = useAppSelector(state => state.auth.customer?.stage)
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={customerStage === RegistrationSteps.REGISTERED ? "BottomTabs" : "ProfileSetupIntro"}>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ProfileSetupIntro" component={ProfileSetupStack} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default PrivateNavigator;
