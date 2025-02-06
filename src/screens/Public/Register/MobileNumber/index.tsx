import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { Button, TextInput, Typography } from '@components/Forms';
import { MainLayout } from '@components/Layout';
import { PublicNavigatorParamList } from '@navigation/types';
import { useAppDispatch } from '@store/hooks';
import { mainRegisterStyles } from '../styles';
import useToast from '@hooks/useToast';
import useRegisterMobileValidation from './validator';
import { setRegistrationDetails } from '@store/slices/authSlice';
import { useVerifyMobileNumberMutation } from '@store/apis/authApi';
import { DEFAULT_ERROR_MESSAGE } from '@utils/Constants';

type MobileNumberProps = StackScreenProps<
  PublicNavigatorParamList,
  'MobileNumber'
>;

export default function MobileNumber({
  navigation: { navigate, goBack },
  route
}: MobileNumberProps) {
  const dispatch = useAppDispatch();
  const { showToast } = useToast();
  const {
    formErrors,
    formData: { mobileNumber },
    validateForm,
    setMobileNumber,
  } = useRegisterMobileValidation();
  const [verifyMobileNumber, { isLoading }] = useVerifyMobileNumberMutation()

  const submit = async () => {
    try {
      const { status } = await verifyMobileNumber({ mobile_number: mobileNumber }).unwrap();
      if (status) {
        dispatch(setRegistrationDetails({ mobileNumber, email: '' }))
        navigate('VerificationCode', { userType: route.params.userType });
      }
    } catch (error: any) {
      showToast('danger', error.data?.message || error.message || DEFAULT_ERROR_MESSAGE)
    }
  };

  return (
    <MainLayout backAction={goBack} isLoading={isLoading}>
      <View style={mainRegisterStyles.mainContainer}>
        <View style={mainRegisterStyles.titleContainer}>
          <Typography title="Create your Account" type="heading4-sb" />
          <Typography
            title="Register with the phone number associated with your Bank Verification Number (BVN)"
            type="subheading"
          />
        </View>

        <View style={mainRegisterStyles.textInputContainer}>
          <TextInput
            type="phone"
            label="Mobile Number"
            keyboardType="numeric"
            placeholder="Ex: 08123456789"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            maxLength={11}
            error={formErrors.mobileNumber}
          />
        </View>
        <View>
          <Button title="Continue" onPress={() => validateForm(submit)} />
        </View>
      </View>
    </MainLayout>
  );
}
