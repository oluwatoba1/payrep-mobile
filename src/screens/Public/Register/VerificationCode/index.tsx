import {ActivityIndicator, View} from 'react-native';
import {MainLayout} from '@components/Layout';
import {Button, HybridTypography, Typography} from '@components/Forms';
import {StackScreenProps} from '@react-navigation/stack';
import {PublicNavigatorParamList} from '@navigation/types';
import {useEffect, useState} from 'react';
import PinPad from '@components/Forms/PinPad';
import {mainRegisterStyles} from '../styles';
import Pad from '@components/Pad';
import {formatCountdown} from '@utils/Helpers';
import {DEFAULT_ERROR_MESSAGE, RESEND_COUNTDOWN} from '@utils/Constants';
import {useAppSelector} from '@store/hooks';
import useToast from '@hooks/useToast';
import useVerifyMobileValidation from './validators';
import {
  useRegisterMobileNumberMutation,
  useVerifyMobileNumberMutation,
} from '@store/apis/authApi';
import Colors from '@theme/Colors';

type VerificationCodeProps = StackScreenProps<
  PublicNavigatorParamList,
  'VerificationCode'
>;

export default function VerificationCode({
  navigation: {navigate, goBack},
  route,
}: VerificationCodeProps) {
  const {showToast} = useToast();
  const {
    formErrors,
    formData: {otp},
    validateForm,
    setOtp,
  } = useVerifyMobileValidation();
  const [verifyMobileNumber, {isLoading: isResending}] =
    useVerifyMobileNumberMutation();

  const [registerMobileNumber, {isLoading}] = useRegisterMobileNumberMutation();

  const mobileNumber = useAppSelector(
    state => state.auth.registration.mobileNumber,
  );

  const [countdown, setCountdown] = useState<number>(RESEND_COUNTDOWN);
  const [loadingTitle, setLoadingTitle] = useState<string>('');

  const submit = async () => {
    setLoadingTitle('Verifying OTP');
    try {
      const {status} = await registerMobileNumber({
        mobile_number: mobileNumber,
        type: route.params.userType,
        otp,
      }).unwrap();
      if (status) {
        navigate('EmailAddress');
      }
    } catch (error: any) {
      showToast(
        'danger',
        error.data?.message || error.message || DEFAULT_ERROR_MESSAGE,
      );
    }
  };

  const resend = async () => {
    try {
      const {status} = await verifyMobileNumber({
        mobile_number: mobileNumber,
      }).unwrap();
      status && setCountdown(RESEND_COUNTDOWN)
    } catch (error: any) {
      console.log(error);
      showToast(
        'danger',
        error.data?.message || error.message || DEFAULT_ERROR_MESSAGE,
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <MainLayout
      backAction={goBack}
      isLoading={isLoading}
      loadingTitle={loadingTitle}>
      <View style={mainRegisterStyles.mainContainer}>
        <Typography title="Enter your code" type="heading4-sb" />

        <Pad size={16} />

        <HybridTypography
          textTray={[
            {text: 'We sent an OTP to ', bold: false},
            {text: `${mobileNumber} `, bold: true},
            {text: 'Please enter the code', bold: false},
          ]}
        />

        <Pad size={16} />

        <PinPad
          pin={otp}
          onInput={setOtp}
          codeLength={6}
          secure={true}
          error={formErrors.otp}
        />

        {!isResending ? (
          <Typography
            title={
              countdown === 0
                ? 'Resend'
                : `Resend code in ${formatCountdown(countdown)}`
            }
            type="body-sb"
            color={countdown === 0 ? Colors.primary.base : Colors.black}
            onPress={() => countdown === 0 && resend()}
          />
        ) : (
          <ActivityIndicator size={16} color={Colors.black} />
        )}

        <Pad size={176} />

        <Button title="Continue" onPress={() => validateForm(submit)} />
      </View>
    </MainLayout>
  );
}
