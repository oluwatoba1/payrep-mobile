import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { MainLayout } from '../../../../components/Layout';
import { mainProfileCompletionStyles } from '../mainProfileCompletionStyles';
import { Button, RadioButton, TextInput, Typography } from '../../../../components/Forms';
import IconImages from '../../../../../assets/images/appIcons';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { setKycTypeField } from '../../../../store/slices/profileCompletionSlice';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../../../../navigation/types';
import { LogoLoader, Popup, ToolTip } from '../../../../components';
import DashedProgressBar from '../../../../components/ProgressBars/DashedProgressBar';


type CompleteProfileScreenProps = StackScreenProps<HomeStackParamList>
export default function MeansOfVerification({ navigation }: CompleteProfileScreenProps) {
  const [selectedKyc, setSelectedKyc] = useState<'nin' | 'bvn' | undefined>(undefined);
  const [showTooltip, setShowTooltip] = useState<{ visible: boolean; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false)

  const { kycType } = useAppSelector(state => state.profileCompletion);
  const dispatch = useAppDispatch();

  const handleOpenTooltip = (text: string) => {
    setShowTooltip({
      visible: !showTooltip?.visible,
      text
    });
  };

  const handlePopUp = () => {
    setIsPopupVisible(false)
    navigation.navigate("FaceRecognitionScreen")
  }

  const handleKycSelect = (value: string | undefined | number) => {
    if (value === 'nin' || value === 'bvn') {
      setSelectedKyc(value);
      dispatch(setKycTypeField({ key: 'type', value: value }));
    }
  };

  const handleNavigation = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsPopupVisible(true)
    }, 3000)
  }

  return (
    <MainLayout backAction={() => { }}>
      <Popup
        isVisible={isPopupVisible}
        title="BVN Verified!"
        icon={IconImages.popup.successDone}
        content="Your Bank Verification Number (BVN) was verified successfully."
        buttonText="Continue"
        onPressButton={handlePopUp}

      />
      <View style={mainProfileCompletionStyles.container}>
        <View style={mainProfileCompletionStyles.titleContainer}>
          <Typography type="heading4-sb" title="Means of Verification" />
          <DashedProgressBar progress={3} />
          <Typography type="body-r" title="Select your identity verification method" />
        </View>

        <View style={{ gap: 16 }}>
          <RadioButton
            options={[
              { value: 'nin', title: 'NIN', width: 180 },
              { value: 'bvn', title: 'BVN', width: 180 },
            ]}
            selectedValue={selectedKyc}
            onSelect={handleKycSelect}
            containerStyle={{ justifyContent: 'space-between' }}
            optionContainerStyle={{ borderColor: '#ddd' }}
          />
          {selectedKyc === 'bvn' && (
            <View>
              <TextInput
                placeholder="Bank Verification Number"
                value={kycType.bvn}
                onChangeText={(text) => dispatch(setKycTypeField({ key: 'bvn', value: text }))}
              />
              <Pressable
                onPress={() => handleOpenTooltip('If you don\'t know your BVN, you can easily retrieve it by dialling *565*0# on the phone number registered with your BVN and following the on-screen instructions. Your BVN will be displayed on your screen. Keep your BVN safe and secure, as it\'s crucial for your banking transactions and identity verification.')}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
              >
                <Image source={IconImages.popup.informationLine} style={{ width: 16, height: 16 }} />
                <Typography type="label-sb" title="Check out the code to retrieve your BVN" />
              </Pressable>
              {showTooltip?.visible && selectedKyc === 'bvn' && (
                <ToolTip
                  visible={showTooltip.visible}
                  onClose={() => setShowTooltip(null)}
                  text={showTooltip.text}
                  containerStyle={{ position: 'absolute', top: '110%', left: -10 }}

                />
              )}
            </View>
          )}
          {selectedKyc === 'nin' && (
            <View>
              <TextInput
                placeholder="National Identity Number"
                value={kycType.nin}
                onChangeText={(text) => dispatch(setKycTypeField({ key: 'nin', value: text }))}
              />
              <Pressable
                onPress={() => handleOpenTooltip('If you don\'t know your NIN, you can easily retrieve it by dialling *565*0# on the phone number registered with your NIN and following the on-screen instructions. Your NIN will be displayed on your screen. Keep your NIN safe and secure, as it\'s crucial for your banking transactions and identity verification.')}
                style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}
              >
                <Image source={IconImages.popup.informationLine} style={{ width: 16, height: 16 }} />
                <Typography type="label-sb" title="Check out the code to retrieve your NIN" />
              </Pressable>
              {showTooltip?.visible && selectedKyc === 'nin' && (
                <ToolTip
                  visible={showTooltip.visible}
                  onClose={() => setShowTooltip(null)}
                  text={showTooltip.text}
                  containerStyle={{ position: 'absolute', top: '110%', left: -10 }}
                />
              )}
            </View>
          )}
          <LogoLoader
            title={`Verifying ${selectedKyc?.toUpperCase()}`}
            isLoading={isLoading}
          />
        </View>
        <View style={mainProfileCompletionStyles.buttonContainer} >
          <Button title="Save" onPress={handleNavigation} />
        </View>
      </View>
    </MainLayout>
  );
}
