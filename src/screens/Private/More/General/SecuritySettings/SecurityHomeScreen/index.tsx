import {View} from 'react-native';
import {Typography} from '../../../../../../components/Forms';
import {MainLayout} from '../../../../../../components/Layout';
import {SettingsOverviewCard} from '../../../../../../components/Cards';
import ComponentImages from '../../../../../../../assets/images/components';
import IconImages from '../../../../../../../assets/images/appIcons';
import { useState } from 'react';
import { styles } from './styles';

export default function SecuritySettings() {
  const [isToggleSecurity, setIsToggleSecurity] = useState<boolean>(false)

  const handleToggleSecurity = () => {
    setIsToggleSecurity(prev => !prev)
  }
  const accountManagement = [
    {
      id: '1',
      title: 'Change Password',
      profileIcon: ComponentImages.ProfileIcons.PadlockIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'ChangePasswordScreen',
      showToggle: false,
      isToggle: false,

    },
    {
      id: '2',
      title: 'Reset Transaction Pin',
      profileIcon: ComponentImages.ProfileIcons.NotificationIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'ResetTransactionScreen',
      showToggle: false,
      isToggle: false,


    },
    {
      id: '3',
      title: 'Enable Biometrics',
      profileIcon: IconImages.icon.biometrics,
      isToggle: isToggleSecurity,
      showToggle: true,
      toggleSwitch: handleToggleSecurity
    },
  ];
  return (
    <MainLayout backAction={() => null}>
      <View>
        <Typography title="Security Settings" type='heading4-sb' />
        <View>
          <SettingsOverviewCard data={accountManagement} customProfileContainerStyle={styles.profileContainer} customCardStyle={styles.cardContainer} />
        </View>
      </View>
    </MainLayout>
  );
}
