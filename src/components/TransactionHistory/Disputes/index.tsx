import ComponentImages from '../../../../assets/images/components';
import styles from './styles';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import Colors from '../../../theme/Colors';
import {Typography} from '../../Forms';
import { Badge } from '../../Cards';
import { scale } from '../../../utils/Helpers';

interface IDispute {
  id: string;
  date: string;
  status: STATUSES;
  message: string;
}

interface DisputeProps {
  disputes: IDispute[];
}

interface ItemProps {
  id: string;
  status: STATUSES;
  date: string;
  message: string;
}

const Item = ({message, date, id, status}: ItemProps) => {
  return (
    <View style={styles.disputeCardContainer}>
      <Badge type={status}/>
      <View style={styles.disputeDetailsContainer}>
        <View style={styles.disputeMessageContainer}>
          <Typography title='Message:' type='body-sb' color={Colors.gray['base']} style={{width: scale(64)}}/>
          <Typography title={message} type='body-r' color={Colors.gray['base']} style={{width: scale(243)}} />
        </View>
        <View style={styles.trackingDetailsContainer}>
          <Typography title='Tracking No:' type='body-sb' color={Colors.gray['base']} style={{ width: scale(82) }} />
          <Typography title={id} type='body-r' color={Colors.gray['base']} style={{ width: scale(243) }} />
        </View>
        <View style={styles.dateContainer}>
          <Typography title='Date:' type='body-sb' color={Colors.gray['base']} />
          <Typography title={date} type='body-r' color={Colors.gray['base']} style={{ width: scale(243) }} />
        </View>
      </View>
    </View>
  );
};

export default function Disputes({disputes}: DisputeProps) {
  return (
    <View style={styles.disputeCardsContainer}>
      {disputes.length ? (
            <FlatList
              data={disputes}
              renderItem={({ item }) => {
                return <Item {...item} />;
              }}
              keyExtractor={(item) => item['id']}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.disputeItemContainer}
            />
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
