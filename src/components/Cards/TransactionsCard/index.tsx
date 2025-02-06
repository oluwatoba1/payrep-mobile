import {FlatList, Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import ComponentImages from '../../../../assets/images/components';
import styles from './styles';
import {Badge, StatusIcon} from '..';
import {Typography} from '../../Forms';
import Colors from '../../../theme/Colors';
import IconImages from '../../../../assets/images/appIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabParamList } from '../../../navigation/types';

interface ITransaction {
  id: string;
  type: string;
  source: string;
  destination: string;
  date: string;
  status: STATUSES;
  amount: string;
}

interface TransactionsCardProps {
  transactions: ITransaction[];
}
interface ItemProps {
  type: "debit" | "credit";
  source: string;
  destination: string;
  amount: string;
  status: STATUSES;
  date: string;
  id: string;
}

type TransactionsScreenNavigationProp = StackNavigationProp<HomeStackParamList>;
interface ITransactionsScreenNavigationProp {
  navigation: TransactionsScreenNavigationProp;
}

type ViewTransactionsScreenNavigationProp = StackNavigationProp<HomeStackParamList>;
interface IViewTransactionsScreenNavigationProp {
  navigation: ViewTransactionsScreenNavigationProp;
}

const Item = ({
  type,
  source,
  destination,
  amount,
  status,
  date,
  id,
}: ItemProps) => {
  const formattedAmount = `₦ ${parseInt(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;


  return (
    // <TouchableOpacity style={styles.transactionCardContainer} onPress={navigation.navigate('TransactionReceiptScreen')}>
    <TouchableOpacity style={styles.transactionCardContainer} >
      <View style={styles.transactionDetailsL}>
        <StatusIcon status={status} type={type} />
        <View style={styles.transactionDetails}>
          {type === 'credit' ? (
            <Typography type='label-r' title={`Received from ${source.toUpperCase()} to ${destination.toUpperCase()}`} />
          ): (
            <Typography type='label-r' title={`Sent to ${destination.toUpperCase()} from ${source.toUpperCase()}`} />
          )}
          <Typography title={formattedAmount} type="body-r" />
        </View>
      </View>
      <View style={styles.transactionDetailsR}>
        <Badge
          type={status}
          backgroundColor="transparent"
          style={{paddingRight: 0}}
        />
        <Typography title={date} type='label-r'/>
      </View>
    </TouchableOpacity>
  );
};

type TransactionScreenProps = StackNavigationProp<BottomTabParamList, 'Transactions'>

export default function TransactionsCard({
  transactions,
}: TransactionsCardProps) {

  const navigation = useNavigation<TransactionScreenProps>()

  const handleNavigate = () => {
    navigation.navigate('Transactions', {
      screen: 'TransactionHistoryScreen'
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Typography
          title="Transactions"
          type="subheading-sb"
          color={Colors.gray[600]}
        />
      </View>

      <View>
        {transactions.length > 0 ? (
          <View style={styles.transactionsContainer}>
            <ScrollView contentContainerStyle={styles.transaction}>
              {transactions.map((transaction, index) => (
                <Item key={index} {...transaction} />
              ))}
            </ScrollView>
            <View style={styles.viewMore}>
              <TouchableOpacity style={styles.more} onPress={handleNavigate}>
                <Typography
                  title="View More"
                  type="body-r"
                  style={styles.viewMoreText}
                />
                <Image source={IconImages.arrows.circleArrowRight} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.emptyTransactionsContainer}>
            <Image
              source={ComponentImages.disputes.emptyDisputes}
              style={styles.emptyBox}
            />
            <Typography
              title="You do not have a transaction history. Start a transaction today."
              type="label-r"
              color={Colors.gray[400]}
              style={{textAlign: 'center'}}
            />
          </View>
        )}
      </View>
    </View>
  );
}
