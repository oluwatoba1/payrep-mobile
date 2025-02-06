import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProfileStackParamList } from '../types';
import { BvnVerification, ProfileCompletionIntro, FacialRecognition } from '@screens/Private/ProfileSetup';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileSetupStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ProfileCompletionIntro'>
            <Stack.Screen name="ProfileCompletionIntro" component={ProfileCompletionIntro} />
            <Stack.Screen name="BvnVerification" component={BvnVerification} />
            <Stack.Screen name="FacialRecognition" component={FacialRecognition} />

        </Stack.Navigator>
    );
}
