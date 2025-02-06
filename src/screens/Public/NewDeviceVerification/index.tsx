import {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button, Typography} from '../../../components/Forms';
import {StackScreenProps} from '@react-navigation/stack';

import {MainLayout} from '@components/Layout';
import {PublicNavigatorParamList} from '@navigation/types';
import PinPad from '@components/Forms/PinPad';
import {useAppSelector} from '@store/hooks';
import {setPhoneCode} from '@store/slices/registrationSlice';
import {mainRegisterStyles} from '../Register/styles';
import {formatCountdown} from '@utils/Helpers';
import {RESEND_COUNTDOWN} from '@utils/Constants';
import Pad from '@components/Pad';

type NewDeviceVerificationProps = StackScreenProps<
  PublicNavigatorParamList,
  'NewDeviceVerification'
>;

export default function NewDeviceVerification({
  navigation: {navigate, goBack},
}: NewDeviceVerificationProps) {
  const [currentPin, setCurrentPin] = useState('');
  const {emailOtp, emailAddress} = useAppSelector(state => state.registration);
  const [countdown, setCountdown] = useState<number>(RESEND_COUNTDOWN);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingTitle, setLoadingTitle] = useState<string>('');

  const handleCurrentPinInput = (value: string) => {
    setCurrentPin(value);
    setPhoneCode(value);
  };

  const handleNavigation = () => {
    setIsLoading(true);
    setLoadingTitle('Verifying OTP');

    setTimeout(() => {
      setIsLoading(false);
      setLoadingTitle('');
      navigate('NewDevice');
    }, 5000);
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
      <Typography title="Enter your OTP" type="heading4-sb" />

      <Pad size={16} />

      <Typography
        title={`We've sent an OTP code to email address ${
          emailAddress && emailAddress
        }.`}
        type="body-sb"
      />

      <Pad size={16} />

      <PinPad
        pin={currentPin}
        onInput={handleCurrentPinInput}
        codeLength={6}
        secure={true}
      />

      <Pad size={16} />

      <Typography
        title={
          countdown === 0
            ? 'Resend'
            : `Resend code in ${formatCountdown(countdown)}`
        }
        type="body-sb"
        onPress={() => countdown === 0 && {}}
      />

      <Pad size={176} />
      <Button title="Continue" onPress={handleNavigation} />
    </MainLayout>
  );
}
