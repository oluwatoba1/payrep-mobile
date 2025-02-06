import {Image, ScrollView, View} from 'react-native';
import ComponentImages from '../../../../../assets/images/components';
import {MainLayout} from '../../../../components/Layout';
import {styles} from './styles';
import {SettingsOverviewCard} from '../../../../components/Cards';
import {Button, Typography} from '../../../../components/Forms';
import {useState} from 'react';
import CustomModal from '../../../../components/Modal';
import { StackScreenProps } from '@react-navigation/stack';
import { MoreStackParamList } from '../../../../navigation/types';

type ProfileScreenProps = StackScreenProps<MoreStackParamList>

export default function ProfileScreen() {
  const fullName = 'Musa Abdullahi';
  const email = 'moosaabdullahi@gmail.com';
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [isSavingsToggle, setIsSavingsToggle] = useState<boolean>(false)
  const handleSavingsToggle = () => {
    setIsSavingsToggle(prev => !prev)
  }
  const profileData = [
    {
      id: '1',
      title: 'My Profile',
      description: 'Basic information',
      profileIcon: ComponentImages.ProfileIcons.UserFillIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'Account',
      showToggle: false,
      isToggle: false,
    },
    {
      id: '2',
      title: 'Bank Cards',
      description: 'View cards, Add Cards',
      profileIcon: ComponentImages.ProfileIcons.BankIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'ListBankCardScreen',
       showToggle: false,
      isToggle: false,
    },
    {
      id: '3',
      title: 'Account Limits',
      description: 'Know your tier, Upgrade your tier',
      profileIcon: ComponentImages.ProfileIcons.PieChartIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'ListAccountTiersScreen',
       showToggle: false,
      isToggle: false,
    },
    {
      id: '4',
      title: 'Terminals',
      description: 'Manage your terminals efficiently',
      profileIcon: ComponentImages.ProfileIcons.TerminalsIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'TerminalsScreen',
       showToggle: false,
      isToggle: false,
    },
    {
      id: '5',
      title: 'Security Settings',
      description: 'Password, Reset PIN, Enable biometrics',
      profileIcon: ComponentImages.ProfileIcons.PadlockIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'SecuritySettingsScreen',
       showToggle: false,
      isToggle: false,
    },
  ];

 

  const accountManagement = [
    {
      id: '1',
      title: 'Network',
      description: 'Check network stability',
      profileIcon: ComponentImages.ProfileIcons.InformationFillIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'NetworkHomeScreen',
      showToggle: false,
      isToggle: false,
    },
    {
      id: '2',
      title: 'Savings',
      description: 'Enable or disable savings interest',
      profileIcon: ComponentImages.ProfileIcons.SavingsIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'SupportScreen',
      isToggle: isSavingsToggle,
      showToggle: true,
      toggleSwitch: handleSavingsToggle
    },
    {
      id: '3',
      title: 'Dispute',
      description: 'Manage your disputes',
      profileIcon: ComponentImages.ProfileIcons.DisputesIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'ListDisputesScreen',
    },
    {
      id: '4',
      title: 'Notification Prefences',
      description: 'Turn on notifications',
      profileIcon: ComponentImages.ProfileIcons.NotificationIcon,
      rightIcon: ComponentImages.ProfileIcons.ArrowRightIcon,
      screen: 'NotificationScreen',
    },
    {
      id: '5',
      title: 'Delete Account',
      description: 'Erase all details',
      profileIcon: ComponentImages.ProfileIcons.DeleteBinIcon,
      screen: 'DeleteAccountScreen',
    },

    {
      id: '6',
      title: 'Logout',
      profileIcon: ComponentImages.ProfileIcons.LogoutIcon,
      onPress: () => setIsLogoutModalVisible(true),
    },
  ];

  const handleLogout = () => {
    console.log('User logged out successfully');
    setIsLogoutModalVisible(false);
  };

  const handleCloseModal = () => {
    setIsLogoutModalVisible(false);
  };

  return (
    <MainLayout backAction={() => null}>

      <View style={styles.profileContainerStyle}>
        <View style={{marginBottom:24}}>
          <Typography title='More' type='heading5-sb' />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.profileImageStyle}
            source={ComponentImages.BottomNav.ProfileIcon}
          />
          <View style={styles.userDetailStyles}>
            <Typography title="Musa Abdullahi" />
            <Typography title="moosaabdullahi45@gmail.com" type="subheading" />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsHorizontalScrollIndicator={false}>
          <SettingsOverviewCard data={profileData} cardTitle="General" />
          <SettingsOverviewCard
            data={accountManagement}
            cardTitle="Account Management"
          />
        </ScrollView>
      </View>
      <CustomModal
        visible={isLogoutModalVisible}
        onClose={() => setIsLogoutModalVisible(false)}>
        <View style={styles.modalContainer}>
          <Typography title="Logout" />
          <Typography
            title="Are you sure you want to Log out of your account? "
            type="body-r"
          />
          <View style={styles.modalButtonContainer}>
            <Button
              title="Cancel"
              containerStyle={styles.cancelButton}
              onPress={handleCloseModal}
            />
            <Button title="Logout" containerStyle={styles.logoutButton} />
          </View>
        </View>
      </CustomModal>
    </MainLayout>
  );
}
