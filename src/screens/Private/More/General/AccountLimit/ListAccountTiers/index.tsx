import {ScrollView, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import { MoreStackParamList } from '../../../../../../navigation/types';
import { MainLayout } from '../../../../../../components/Layout';
import { Typography } from '../../../../../../components/Forms';
import { mainAccountLimitStyles } from '../styles';
import CustomCard from '../../../../../../components/Cards/CustomCard';
import { TierCard } from '../../../../../../components/Cards';
import AccountTierCard from '../../../../../../components/Cards/AccountTierCard';
import ScreenImages from '../../../../../../../assets/images/screens';


type AccountLimitScreenProps = StackScreenProps<
  MoreStackParamList>;

export default function ListAccountTiersScreen({
  navigation: {navigate, goBack},
}: AccountLimitScreenProps) {
  const agentAccount = {
    accountName: 'Musa Abdullahi Omeiza',
    accountNumber: '2190909090',
    bank: 'VFD',
    tier: 2,
    dailyLimit: 'N15,000',
    maxLimit: 'N300,000',
  };

  const handleNavigateTierTwo = () => {
    navigate('TierTwoVerificationScreen')
  }
  const handleNavigateTierThree = () => {
    navigate('TierThreeResidentialAddressScreen')
  }
  return (
    <MainLayout backAction={goBack}>
      <View style={mainAccountLimitStyles.container}>
        <View style={mainAccountLimitStyles.heading}>
            <Typography
              title="Account Limits"
              type="heading"
            />
            <Typography
              title="There are three levels of Tiers that PayRep users operates on."
              type="subheading"
            />
          </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Typography title='Current Tier' />
          <AccountTierCard
              tierImage={ScreenImages.MoreScreen.tierOneIcon}
              name="Musa Abdullahi Omeiza"
              accountNumber="2349998392"
              dailyLimit="N20,000"
              balanceLimit="Unlimited"
              isCurrentTier={true}
              tier='1'
          />
          {/* make the color and background dynamic that is use according to the card current */}
          <AccountTierCard
              tierImage={ScreenImages.MoreScreen.tierTwoIcon}
              name="Musa Abdullahi Omeiza"
              accountNumber="2349998392"
              dailyLimit="N20,000"
              balanceLimit="Unlimited"
              customContainerStyle={mainAccountLimitStyles.upgradeTierCard}
              limitCustomStyle={mainAccountLimitStyles.limitCard}
              textColor={mainAccountLimitStyles.limitText}
              isCurrentTier={false}
              tier='2'
              onNavigate={handleNavigateTierTwo}
          />
          <AccountTierCard
              tierImage={ScreenImages.MoreScreen.tierThreeIcon}
              name="Musa Abdullahi Omeiza"
              accountNumber="2349998392"
              dailyLimit="N20,000"
              balanceLimit="Unlimited"
              customContainerStyle={mainAccountLimitStyles.upgradeTierCard}
              limitCustomStyle={mainAccountLimitStyles.limitCard}
              textColor={mainAccountLimitStyles.limitText}
              isCurrentTier={false}
              tier='3'
              onNavigate={handleNavigateTierThree}
          />
        </ScrollView>
        
      </View>
    </MainLayout>
  );
}
