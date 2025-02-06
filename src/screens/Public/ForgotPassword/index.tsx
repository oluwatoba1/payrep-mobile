import {Text, View} from 'react-native';
import {MainLayout} from '../../../components/Layout';
import styles from './styles';
import TextInput from '../../../components/Forms/TextInput';
import {Button, Typography} from '../../../components/Forms';
import {StackScreenProps} from '@react-navigation/stack';
import {PublicNavigatorParamList} from '../../../navigation/types';

type ForgotPasswordProps = StackScreenProps<
  PublicNavigatorParamList,
  'ForgotPassword'
>;

export default function ForgotPassword({
  navigation: {navigate, goBack},
}: ForgotPasswordProps) {
  const handleNavigate = () => {
    navigate('NewDeviceVerification');
  };
  return (
    <MainLayout backAction={() => goBack()}>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Typography title="Password Recovery" type="heading4-sb" />
          <Typography
            title="Please enter your email address to receive an OTP for password recovery."
            type="body-r"
          />
        </View>
        <TextInput type="text" placeholder="Email Address" />

        <Button title="Reset Password" onPress={handleNavigate} />
      </View>
    </MainLayout>
  );
}
