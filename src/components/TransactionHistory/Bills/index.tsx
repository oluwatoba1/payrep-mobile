import { FlatList, Image, Text, View } from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import ComponentImages from '../../../../assets/images/components';
import styles from './styles';
import { Badge } from '../../Cards';
import { Typography } from '../../Forms';
import IconImages from '../../../../assets/images/appIcons';

interface IBill {
  id: string;
  type: string;
  source: string;
  destination: string;
  date: string;
  status: STATUSES;
  amount: string;
}

interface BillsCardProps {
  bills: IBill[];
}
interface StatusIconProps {
  status: STATUSES;
  type: string;
}
interface ItemProps {
  type: string;
  source: string;
  destination: string;
  amount: string;
  status: STATUSES;
  date: string;
  id: string;
}

const StatusIcon = ({ status, type }: StatusIconProps) => {
  let isCredit = type === 'credit';


  if (status === 'successful') {
    return (
      <View style={styles.success}>
        <Image
          source={
            isCredit
              ? IconImages.arrows.creditSuccess
              : IconImages.arrows.debitSuccess
          }
          style={styles.icon}
        />
      </View>
    );
  } else if (status === 'failed') {
    return (
      <View style={styles.error}>
        <Image
          source={
            isCredit
              ? IconImages.arrows.creditFailed
              : IconImages.arrows.debitFailed
          }
          style={styles.icon}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.pending}>
        <Image
          source={
            isCredit
              ? IconImages.arrows.creditPending
              : IconImages.arrows.debitPending
          }
          style={styles.icon}
        />
      </View>
    );
  }
};

const Item = ({
  type,
  source,
  destination,
  amount,
  status,
  date,
  id,
}: ItemProps) => {
  const formattedAmount = `₦ ${parseInt(amount).toFixed(2)}`;

  return (
    <TouchableOpacity style={styles.billsContainer}>
      <View style={styles.billsDetailsL}>
        <StatusIcon status={status} type={type} />
        <View style={styles.billsDetails}>
          <Text style={{ ...styles.LR, ...styles.transactionText }}>
            {type === 'credit'
              ? `Received from ${source} to ${destination}`
              : `Sent to ${destination} from ${source}`}
          </Text>
          <Text style={styles.transactionDate}>{date}</Text>
        </View>
      </View>
      <View style={styles.billsDetailsR}>
        <Typography title={formattedAmount} type="body-sb" />

        <Badge
          type={status}
          backgroundColor="transparent"
          style={{ paddingRight: 0 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default function Bills({
  bills,
}: BillsCardProps) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View>
        {bills.length > 0 ? (
          <View>
            <FlatList
              data={bills}
              renderItem={({ item }) => {
                return <Item {...item} />;
              }}
              keyExtractor={(item) => item['id']}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          <View style={styles.emptyTransactionContainer}>
              <Image
                source={ComponentImages.transactions.emptyBox}
                style={styles.emptyBox}
              />
                <Typography title='You do not have a bill history. Start a bill
                today.' type='label-r' style={styles.emptyTx}/>
          </View>
        )}
      </View>
    </GestureHandlerRootView>
  );
}
