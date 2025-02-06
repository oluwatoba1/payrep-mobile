import { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import styles from './styles';
import Pad from '@components/Pad';
import { MainLayout } from '@components/Layout';
import {
  AccountDetailsCard,
  DisputesCard,
  ProfileCompletionCard,
  TransactionsCard,
} from '@components/Cards';
import { Typography } from '@components/Forms';
import IconImages from '@assets/images/appIcons';
import { scale, scaleHeight } from '@utils/Helpers';
import { BOTTOM_TAB_CONTAINER_HEIGHT } from '@utils/Constants';
import { BottomTabParamList, HomeStackParamList } from '@navigation/types';
import useToast from '@hooks/useToast';

type STATUSES = 'successful' | 'pending' | 'failed';

interface ITransaction {
  id: string;
  type: string;
  source: string;
  destination: string;
  date: string;
  status: STATUSES;
  amount: string;
}

interface IDispute {
  id: string;
  date: string;
  status: STATUSES;
}

interface INotification {
  title: string;
  description: string;
  time: string;
  read: boolean;
}

type TerminalScreenNavigationProps = StackNavigationProp<HomeStackParamList>;
interface TerminalScreenProps {
  navigation: TerminalScreenNavigationProps;
}

const notifications: INotification[] = [
  {
    title: 'Payment Received',
    description: 'You have received a payment of $150',
    time: '2024-08-23T14:35:00.000Z',
    read: false,
  },
  {
    title: 'New Message',
    description: 'You have a new message from support',
    time: '2024-08-23T09:15:00.000Z',
    read: false,
  },
  {
    title: 'Update Available',
    description: 'A new update for the app is available',
    time: '2024-08-22T18:00:00.000Z',
    read: true,
  },
  {
    title: 'Security Alert',
    description: 'A new login was detected from an unknown device',
    time: '2024-08-21T20:45:00.000Z',
    read: true,
  },
  {
    title: 'Scheduled Maintenance',
    description: 'The system will be under maintenance tomorrow',
    time: '2024-09-16T12:00:00.000Z',
    read: false,
  },
  {
    title: 'Promotion',
    description: 'Get 20% off on your next purchase',
    time: '2024-08-16T10:30:00.000Z',
    read: true,
  },
  {
    title: 'Welcome!',
    description: 'Thank you for joining our platform',
    time: '2024-09-18T16:20:00.000Z',
    read: true,
  },
  {
    title: 'Weekly Summary',
    description: 'Here is your weekly account summary',
    time: '2024-09-18T08:00:00.000Z',
    read: false,
  },
  {
    title: 'Transfer Request',
    description: 'You have a new transfer request',
    time: '2024-09-16T14:00:00.000Z',
    read: false,
  },
  {
    title: 'Invoice Ready',
    description: 'Your invoice for September is ready',
    time: '2024-09-18T10:00:00.000Z',
    read: true,
  },
];

type DashboardProps = CompositeScreenProps<
  StackScreenProps<HomeStackParamList, 'Dashboard'>,
  BottomTabScreenProps<BottomTabParamList, 'More'>
>;

export default function Dashboard({ navigation: { navigate } }: DashboardProps) {
  const { showToast } = useToast();
  const [refresh, setRefresh] = useState<string>(new Date().toISOString());
  const profileCompletionMessage = {
    title: 'Mandatory profile completion',
    body: 'In compliance with CBN policies, providing the remaining details is mandatory to complete a transaction. Rest assured, your personal information is stored securely.',
    progress: 55,
  };
  const actions = ['01', '02', '03', '04'];

  const User = {
    id: '101',
    name: 'Muhammad',
    acctNumber: '2260173542',
    walletBalance: '96,570,000.96',
    earnings: {
      commission: 'N100,000',
      terminals: 'N500,000',
      bonus: 'N10,000',
    },
    profilePicture: IconImages.users.careUser,
  };

  const transactionsData: ITransaction[] = [
    {
      id: '092320',
      type: 'credit',
      source: 'Temitope Lawal',
      destination: 'Oluwatoba Fola',
      date: '18/12/2023',
      status: 'pending',
      amount: '350000',
    },
    {
      id: '092310',
      type: 'debit',
      source: 'Musa',
      destination: 'Junaid',
      date: '18/05/2024',
      status: 'successful',
      amount: '35000',
    },
    {
      id: '092350',
      type: 'debit',
      source: 'Musa',
      destination: 'Junaid',
      date: '18/05/2024',
      status: 'failed',
      amount: '700000',
    },
    {
      id: '092360',
      type: 'debit',
      source: 'Musa',
      destination: 'Junaid',
      date: '18/05/2024',
      status: 'successful',
      amount: '59000',
    },
    {
      id: '092310',
      type: 'debit',
      source: 'Musa',
      destination: 'Junaid',
      date: '18/05/2024',
      status: 'successful',
      amount: '35000',
    },
  ];
  const trimmedTransactions = transactionsData.slice(0, 3);

  const disputesData: IDispute[] = [
    {
      id: '092320',
      date: '18/12/2023',
      status: 'pending',
    },
    {
      id: '092321',
      date: '18/12/2023',
      status: 'successful',
    },
    {
      id: '092322',
      date: '18/12/2023',
      status: 'successful',
    },
  ];
  const trimmedDisputes = disputesData.slice(0, 3);

  const handleNotifications = () => {
    navigate('NotificationsScreen', { notifications: notifications });
  };

  const handleNavigateToProfile = () => {
    navigate('More', {
      screen: 'Account',
    });
  };

  return (
    <MainLayout showHeader={false} keyboardAvoidingType="scroll-view">
      <View style={styles.headerArea}>
        <View style={styles.profileArea}>
          <TouchableOpacity onPress={handleNavigateToProfile}>
            <Image source={User.profilePicture} style={styles.profilePicture} />
          </TouchableOpacity>
          <Typography
            title={`Hello, ${User.name} 🖐`}
            type="subheading-sb"
            style={styles.profileText}
          />
        </View>

        <View style={styles.notificationArea}>
          <TouchableOpacity
            style={styles.notificationIcon}
            onPress={handleNotifications}>
            <Image
              style={styles.notificationIcon}
              source={IconImages.icon.notification}
            />
            {notifications.length > 0 && (
              <View style={styles.notificationIndicator} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Pad size={24} />
      <View>
        <Typography title="Tier 1 Account" type="body-r" />
      </View>
      <Pad size={8} />
      <AccountDetailsCard
        accountNumber={User.acctNumber}
        walletBalance={User.walletBalance}
        actionIds={actions}
      />
      <Pad size={24} />

      <ProfileCompletionCard
        title={profileCompletionMessage.title}
        body={profileCompletionMessage.body}
        progress={profileCompletionMessage.progress}
        handleNavigation={() => { }}
      />
      <Pad size={24} />

      <TransactionsCard transactions={trimmedTransactions} />
      <Pad size={24} />
      <DisputesCard disputes={trimmedDisputes} />
      <Pad size={scaleHeight(BOTTOM_TAB_CONTAINER_HEIGHT * 1.5)} />
    </MainLayout>
  );
}
