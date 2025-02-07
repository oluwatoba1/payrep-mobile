import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProfileStackParamList} from '../types';
import {
  BvnVerification,
  ProfileCompletionIntro,
  FacialRecognition,
  LocationDetails,
  MeansOfIdentification,
  Pep,
  SourceOfIncome,
} from '@screens/Private/ProfileSetup';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileSetupStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ProfileCompletionIntro">
      <Stack.Screen
        name="ProfileCompletionIntro"
        component={ProfileCompletionIntro}
      />
      <Stack.Screen name="BvnVerification" component={BvnVerification} />
      <Stack.Screen name="FacialRecognition" component={FacialRecognition} />
      <Stack.Screen name="LocationDetails" component={LocationDetails} />
      <Stack.Screen
        name="MeansOfIdentification"
        component={MeansOfIdentification}
      />
      <Stack.Screen name="Pep" component={Pep} />
      <Stack.Screen name="SourceOfIncome" component={SourceOfIncome} />
    </Stack.Navigator>
  );
}
