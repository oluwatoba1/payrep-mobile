import { useState } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { MainLayout } from '@components/Layout';
import { Button, TextInput, Typography } from '@components/Forms';
import { PublicNavigatorParamList } from '@navigation/types';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { mainRegisterStyles } from '../styles';
import { DEFAULT_ERROR_MESSAGE } from '@utils/Constants';
import useRegisterEmailValidation from './validator';
import useToast from '@hooks/useToast';
import { useVerifyEmailMutation } from '@store/apis/authApi';
import { setRegistrationDetails } from '@store/slices/authSlice';

type EmailAddressProps = StackScreenProps<
  PublicNavigatorParamList,
  'EmailAddress'
>;

export default function EmailAddress({
  navigation: { navigate, goBack },
}: EmailAddressProps) {
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const {
    formErrors,
    formData: { email },
    validateForm,
    setEmail
  } = useRegisterEmailValidation();
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();

  const mobileNumber = useAppSelector(state => state.auth.registration.mobileNumber)

  const submit = async () => {
    try {
      const { status } = await verifyEmail({ email }).unwrap();
      if (status) {
        dispatch(setRegistrationDetails({ mobileNumber, email }));
        navigate('EmailVerification');
      }
    } catch (error: any) {
      console.log(error);
      showToast('danger', error.data?.message || error.message || DEFAULT_ERROR_MESSAGE)
    }
  };

  const handleSkip = () => {
    navigate('CreatePassword');
  };
  return (
    <MainLayout
      backAction={goBack}
      rightTitle="Skip this step"
      rightAction={handleSkip}
      isLoading={isLoading}>
      <View style={mainRegisterStyles.mainContainer}>
        <View style={mainRegisterStyles.titleContainer}>
          <Typography title="Email Address" type="heading4-sb" />
          <Typography
            title="Please enter a valid email address"
            type="subheading"
          />
        </View>

        <View style={mainRegisterStyles.textInputContainer}>
          <TextInput
            type="text"
            label="Email"
            placeholder="Email Address (optional)"
            value={email}
            onChangeText={setEmail}
            error={formErrors.email}
          />
        </View>
        <View>
          <Button title="Continue" onPress={() => validateForm(submit)} />
        </View>
      </View>
    </MainLayout>
  );
}
