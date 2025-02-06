import React, { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainLayout } from '../../../../../../../components/Layout';
import { mainAccountLimitStyles } from '../../styles';
import { Button, RadioButton, TextInput, Typography } from '../../../../../../../components/Forms';
import IconImages from '../../../../../../../../assets/images/appIcons';
import { LogoLoader, ToolTip } from '../../../../../../../components';
import { MoreStackParamList } from '../../../../../../../navigation/types';



type TierTwoScreenProps = StackScreenProps<MoreStackParamList>
export default function Verification({navigation:{navigate}}:TierTwoScreenProps) {
  const [selectedKyc, setSelectedKyc] = useState<'nin' | 'bvn' | undefined>('bvn');
  const [showTooltip, setShowTooltip] = useState<{ visible: boolean; text: string} | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const handleOpenTooltip = (text: string) => {
    setShowTooltip({
      visible: !showTooltip?.visible,
      text
    });
  };

  const handleKycSelect = (value: string | undefined | number) => {
    if (value === 'nin' || value === 'bvn') {
      setSelectedKyc(value);
    }
  };

  const handleNavigate = () => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
        navigate('NextOfKinDetailsScreen')
    }, 3000)
}

  return (
    <MainLayout backAction={() => { }}>
      <View style={mainAccountLimitStyles.container}>
        <Typography type="heading4-sb" title="Upgrade to Tier 2" style={{marginBottom:16}} />
        <View style={{ gap: 16, flex:1 }}>
          <Typography type="body-r" title="Please provide your identification Verification Number" />
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
                  containerStyle={{position:'absolute', top:'110%', left:-10}}

                />
              )}
            </View>
          )}
          {selectedKyc === 'nin' && (
            <View>
              <TextInput
                placeholder="National Identity Number"
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
                  containerStyle={{position:'absolute', top:'110%', left:-10}}
                />
              )}
            </View>
          )}
        </View>
        <LogoLoader
            title={`Verifying ${selectedKyc?.toUpperCase()}`}
            isLoading={isLoading}
        />
        <View style={{}} >
            <Button title="Save" onPress={handleNavigate} />
        </View>
      </View>
    </MainLayout>
  );
}
