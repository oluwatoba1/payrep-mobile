import {useState} from 'react';
import {Image, View} from 'react-native';

// Local
import {MainLayout, Row} from '@components/Layout';
import {PinPad, Typography} from '@components/Forms';
import {styles} from './styles';
import ScreenImages from '@assets/images/screens';

export default function NewDevice() {
  const [currentPin, setCurrentPin] = useState('');

  const email = 'moosaabdullahi@gmail.com';

  const handleCurrentPinInput = (value: string) => {
    setCurrentPin(value);
  };

  return (
    <MainLayout showHeader={false}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Image
            source={ScreenImages.NewDeviceScreen.phone}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Typography title="A New Device Detected!" />
            <Typography
              style={{textAlign: 'center'}}
              title={`Kindly check your email address ${email} for an OTP sent to register the new device`}
              type="body-r"
            />
          </View>
        </View>
        <Row justifyContent="center">
          <PinPad
            pin={currentPin}
            onInput={handleCurrentPinInput}
            codeLength={6}
            secure={true}
          />
        </Row>
      </View>
    </MainLayout>
  );
}
