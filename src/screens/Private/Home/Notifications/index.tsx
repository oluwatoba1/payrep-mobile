import React, {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {MainLayout} from '../../../../components/Layout';
import styles from './styles';
import {Typography} from '../../../../components/Forms';
import Colors from '../../../../theme/Colors';
import IconImages from '../../../../../assets/images/appIcons';
import Pad from '../../../../components/Pad';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../../../../navigation/types';
import {RouteProp} from '@react-navigation/native';
import {
  getRelativeTime,
  groupNotificationsByDate,
} from '../../../../utils/Helpers';

type ScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'Dashboard'
>;

interface IScreenProps {
  navigation: ScreenNavigationProp;
  route: RouteProp<HomeStackParamList, 'NotificationsScreen'>;
}

interface INotification {
  title: string;
  description: string;
  time: string;
  read: boolean;
}

interface NotificationProps {
  notifications: INotification[];
}

const Item = ({
  title,
  description,
  time,
  read = false,
  onReadUpdate,
}: INotification & {onReadUpdate: (updatedRead: boolean) => void}) => {
  const newTime = new Date(time);
  const relativeTime = getRelativeTime(newTime);

  const clickToRead = () => {
    onReadUpdate(true);
  };

  return (
    <TouchableOpacity style={styles.item} onPress={clickToRead}>
      <View style={styles.detailsContainer}>
        <View style={styles.iconBackground}>
          <Image source={IconImages.logo.payrepLogo} style={styles.icon} />
        </View>
        <View style={styles.details}>
          <Typography title={title} type="body-sb" />
          <Typography
            title={description}
            type="body-r"
            color={Colors.gray['base']}
          />
          <Typography
            title={relativeTime}
            type="label-r"
            color={Colors.gray['400']}
          />
        </View>
      </View>
      <View style={styles.indicatorArea}>
        {read && <View style={styles.readIndicator} />}
      </View>
    </TouchableOpacity>
  );
};

export default function Notifications({route}: IScreenProps) {
  const [notifications, setNotifications] = useState<INotification[]>(
    route.params?.notifications || [],
  );

  const groupedNotifications = groupNotificationsByDate(notifications);

  const handleReadUpdate = (index: number, groupIndex: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.map((notification, i) =>
        i === index ? {...notification, read: true} : notification,
      ),
    );
  };

  return (
    <MainLayout
      backAction={() => {
        null;
      }}>
      <View style={styles.container}>
        <View>
          <Typography title="Notifications" type="heading4-sb" />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {groupedNotifications.map((group, groupIndex) => (
            <View key={groupIndex}>
              <Pad size={18} />
              <Typography
                title={group.title}
                type="body-r"
                color={Colors.gray[400]}
              />
              <Pad size={18} />
              {group.notifications.map((notification, index) => (
                <Item
                  key={index}
                  {...notification}
                  onReadUpdate={() => handleReadUpdate(index, groupIndex)}
                />
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </MainLayout>
  );
}
