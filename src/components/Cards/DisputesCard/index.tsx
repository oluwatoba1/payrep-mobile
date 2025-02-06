import ComponentImages from '../../../../assets/images/components';
import styles from './styles';
import {FlatList, Image, Pressable, ScrollView, Text, View} from 'react-native';
import Colors from '../../../theme/Colors';
import {Typography} from '../../Forms';
import {Badge} from '..';
import IconImages from '../../../../assets/images/appIcons';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../navigation/types';
import { useNavigation } from '@react-navigation/native';

interface IDispute {
  id: string;
  date: string;
  status: STATUSES;
}

interface DisputeProps {
  disputes: IDispute[];
}

interface ItemProps {
  id: string;
  status: STATUSES;
  date: string;
}

const Item = ({status, date, id}: ItemProps) => {
  return (
    <View style={styles.disputeCardContainer}>
      <Badge type={status} />
      <View style={styles.disputeDetailsContainer}>
        <View style={styles.disputeTrackingID}>
          <Typography title='Tracking No:' type='body-sb' color={Colors.gray['base']}/>
          <Typography title={id} type='body-r' color={Colors.gray['base']}/>
        </View>
        <View style={styles.disputeDate}>
          <Typography title='Date:' type='body-sb' color={Colors.gray['base']} />
          <Typography title={date} type='body-r' color={Colors.gray['base']} />
        </View>
      </View>
    </View>
  );
};

type DisputeScreenProps = StackNavigationProp<BottomTabParamList, "More">

export default function Disputes({disputes}: DisputeProps) {

  const navigation = useNavigation<DisputeScreenProps>()

  const handleNavigate = () => {
    navigation.navigate('More', {
      screen: 'ListDisputesScreen'
    })
  }
  return (
    <View style={styles.disputeContainer}>
      <Typography
        title="Disputes"
        type="subheading-sb"
        color={Colors.gray[600]}
      />

      {disputes.length ? (
        <View style={styles.disputeCardsContainer}>
          <View style={styles.disputeCard}>
            <ScrollView
              contentContainerStyle={styles.disputeItemContainer}
              horizontal
              showsHorizontalScrollIndicator={false}>
              {disputes.map((dispute, index) => (
                <Item key={index} {...dispute} />
              ))}
            </ScrollView>
          </View>
          <Pressable onPress={handleNavigate} style={styles.more}>
            <Typography
              title="View More"
              type="body-sb"
              color={Colors.gray[700]}
              style={styles.viewMoreText}
            />
            <Image source={IconImages.arrows.circleArrowRight} style={styles.arrowIcon} />
          </Pressable>
        </View>
      ) : (
        <View style={styles.emptyDisputesContainer}>
            <Image
              source={ComponentImages.disputes.emptyDisputes}
              style={styles.emptyBox}
            />
            <Typography
              title="Sorry! You do not have an ongoing dispute running."
              type="label-r"
              color={Colors.gray[400]}
            />
        </View>
      )}
    </View>
  );
}
