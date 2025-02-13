import {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import DeviceInfo from 'react-native-device-info';
import ReactNativeBiometrics from 'react-native-biometrics';

// Local
import styles from './styles';
import IconImages from '@assets/images/appIcons';
import {Button, Typography, TextInput} from '@components/Forms';
import {AuthLayout, Row} from '@components/Layout';
import {PublicNavigatorParamList} from '@navigation/types';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {setCustomer, setCredentials} from '@store/slices/authSlice';
import useToast from '@hooks/useToast';
import {useLoginMutation} from '@store/apis/authApi';
import {DEFAULT_ERROR_MESSAGE} from '@utils/Constants';
import useLoginValidation from './validator';
import {persistAppState} from '@utils/Helpers';
import {updateAppstate} from '@store/slices/appSlice';
import {useRegisterBiometricsMutation} from '../../../store/apis/authApi';
import {EnableBiometricsModal} from '@components/Modal';
import {PNB} from '@theme/Fonts';
import Colors from '@theme/Colors';

type LoginProps = StackScreenProps<PublicNavigatorParamList, 'Login'>;

export default function Login({navigation: {navigate}}: LoginProps) {
  const dispatch = useAppDispatch();
  const appState = useAppSelector(state => state.app.appState);
  const {showToast} = useToast();

  const {
    formErrors,
    formData: {username, password},
    validateForm,
    setUsername,
    setPassword,
  } = useLoginValidation();
  const [login, {isLoading}] = useLoginMutation();
  const [registerBiometrics] = useRegisterBiometricsMutation();

  const customer = appState?.customer;

  const [showRegisterDeviceModal, setShowRegisterDeviceModal] =
    useState<boolean>(false);
  const [biometricAvailable, setIsBiometricAvailable] =
    useState<boolean>(false);
  const [notYou, setNotYou] = useState<boolean>(!customer?.username);
  const [showBiometricsModal, setShowBiometricsModal] =
    useState<boolean>(false);
  const [token, setToken] = useState<string>('');

  const prepUserDetails = async ({
    status,
    message,
    data,
  }: AuthResponse<LoginResponse>) => {
    if (status) {
      // persist customer details
      await persistAppState({
        customer: {
          ...data.customer,
          username: !!username ? username : customer?.username,
        },
        hasEverLoggedIn: true,
      });
      dispatch(
        setCustomer({
          ...data.customer,
          username: !!username ? username : customer?.username,
        }),
      );
      setToken(data.token);
      // Show biometric modal if user has never logged in, or
      // Set token to navigate to dashbord or profile setup
      !appState?.hasEverLoggedIn
        ? setShowBiometricsModal(true)
        : dispatch(setCredentials({token: data.token, user_id: null}));
    }

    showToast(status ? 'success' : 'danger', message);
  };

  const handleLogin = async (
    loginType: 'password' | 'biometrics',
    signature?: string,
    payload?: string,
  ) => {
    try {
      const {status, message, data} = await login({
        username: customer?.username || username,
        password,
        device_id: DeviceInfo.getDeviceId(),
        login_type: loginType,
        signature,
        signature_payload: payload,
      }).unwrap();

      console.log(data);

      setShowRegisterDeviceModal(data.is_new_device);

      await prepUserDetails({status, message, data});
    } catch (error: ErrorResponse | any) {
      showToast(
        'danger',
        error.data?.message || error.message || DEFAULT_ERROR_MESSAGE,
        6000,
      );
    }
  };

  const handleRegisterBiometrics = async (enableBiometrics: boolean) => {
    const rnBiometrics = new ReactNativeBiometrics();

    const {keysExist} = await rnBiometrics.biometricKeysExist();

    if (!keysExist) {
      const {publicKey} = await rnBiometrics.createKeys();

      try {
        const {status, message} = await registerBiometrics({
          username,
          public_key: publicKey,
        }).unwrap();
        if (status) {
          persistAppState({
            enableBiometrics,
          });
          dispatch(
            updateAppstate({
              enableBiometrics,
            }),
          );
          return;
        }
        showToast('danger', message);
      } catch (error) {
        showToast('danger', 'Biometrics setup error');
      }
    }
  };

  const handleBiometricLogin = async () => {
    const rnBiometrics = new ReactNativeBiometrics();

    try {
      // Payload for signing
      const payload = `Login attempt for user ${
        customer?.username || username
      } at ${new Date().toISOString()}`;

      // Prompt user for biometric authentication and create a signature
      const {success, signature} = await rnBiometrics.createSignature({
        promptMessage: 'Login with Biometrics',
        payload,
      });

      // Send signature and payload to server for verification
      success && handleLogin('biometrics', signature, payload);
    } catch (error) {
      showToast('danger', 'An error occurred during biometric login');
    }
  };

  // Check for biometric sensor availability
  useEffect(() => {
    const checkBiometricSensor = async () => {
      const rnBiometrics = new ReactNativeBiometrics();
      const {available} = await rnBiometrics.isSensorAvailable();
      setIsBiometricAvailable(available && !!appState?.enableBiometrics);
    };

    checkBiometricSensor();
  }, []);

  useEffect(() => {
    setUsername(customer?.username || '');
  }, []);

  return (
    <AuthLayout isLoading={isLoading}>
      <EnableBiometricsModal
        showModal={showBiometricsModal}
        onClose={() => setShowBiometricsModal(false)}
        onProceed={() => [
          handleRegisterBiometrics(true),
          dispatch(setCredentials({token, user_id: null})),
        ]}
      />
      <View style={styles.top}>
        <Image
          source={IconImages.logo.payrepBlackWithText}
          style={styles.logo}></Image>

        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <Row>
              <Typography
                type="heading5-sb"
                title={`${
                  !notYou
                    ? `Welcome back, ${customer?.first_name || 'Customer'}`
                    : 'Login with your username and password'
                }`}
              />

              {!notYou ? (
                <Typography
                  title="Not you?"
                  type="subheading-sb"
                  style={{fontFamily: PNB}}
                  color={Colors.primary.base}
                  onPress={() => setNotYou(true)}
                />
              ) : null}
            </Row>
            <View style={styles.inputGroup}>
              {notYou ? (
                <TextInput
                  type="phone"
                  label="Username"
                  keyboardType="numeric"
                  placeholder="Ex: 8123456789"
                  maxLength={10}
                  value={username}
                  onChangeText={setUsername}
                  error={formErrors.username}
                />
              ) : null}
              <TextInput
                type="password"
                label="Password"
                value={password}
                onChangeText={setPassword}
                error={formErrors.username}
              />
            </View>
            <Button
              title="Login"
              onPress={() =>
                validateForm(() => handleLogin('password'))
              }></Button>
            <View style={styles.bottomItemContainer}>
              <View style={styles.accountButton}>
                <Typography type="body-r" title="Don't have an account?" />
                <Typography
                  type="body-sb"
                  color="#A97B00"
                  title="Create an Account"
                  onPress={() => navigate('UserType')}
                />
              </View>
              <Text
                onPress={() => navigate('ForgotPassword')}
                style={styles.forgotPass}>
                Forgot Password?
              </Text>
            </View>
            <View>
              {biometricAvailable ? (
                <TouchableOpacity
                  style={styles.biometricsContainer}
                  onPress={handleBiometricLogin}>
                  <Image
                    source={IconImages.icon.biometrics}
                    style={styles.biometricsIcon}></Image>
                </TouchableOpacity>
              ) : null}
              <View style={styles.cbnContainer}>
                <Image
                  source={IconImages.logo.cbnIcon}
                  style={styles.biometricsIcon}
                />
                <Typography title="LICENSED BY CBN" type="label-sb" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </AuthLayout>
  );
}
