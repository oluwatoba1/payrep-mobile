import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import ComponentImages from '../../../../assets/images/components';
import styles from './styles';
import { Badge, StatusIcon } from '../../Cards';
import { Typography } from '../../Forms';
import Colors from '../../../theme/Colors';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { BottomTabParamList } from '../../../navigation/types';
import { useNavigation } from '@react-navigation/native';

interface ITransaction {
  id: string;
  type: "credit" | "debit";
  source: string;
  destination: string;
  date: string;
  status: STATUSES;
  amount: string;
}

interface TransactionsProps {
  transactions: ITransaction[];
  title?: string;
  onItemPress?: () => void
}

type TransactionsNavigationProp = StackNavigationProp<BottomTabParamList, "Transactions">;


const Item = ({ transaction }: { transaction: ITransaction }) => {
  const formattedAmount = `₦ ${parseInt(transaction.amount).toFixed(2)}`;

  const navigation = useNavigation<TransactionsNavigationProp>()

  const handleNavigate = () => {
    // navigation.navigate('Transactions', {
    //   screen:'TransactionReceiptScreen', {
    //     params: {
    //       id: '1'
    //     }
    //   }
    // })
  }
  return (
    <TouchableOpacity style={styles.transactionContainer} onPress={handleNavigate}>
      <View style={styles.transactionDetailsL}>
        <StatusIcon status={transaction.status} type={transaction.type} />
        <View style={styles.transactionDetails}>
          <Text style={{ ...styles.LR, ...styles.txText }}>
            {transaction.type === 'credit'
              ? `Received from ${transaction.source} to ${transaction.destination}`
              : `Sent to ${transaction.destination} from ${transaction.source}`}
          </Text>
          <Typography title={transaction.date} style={styles.transactionDate} />
        </View>
      </View>
      <View style={styles.transactionDetailsR}>
        <Typography title={formattedAmount} type="body-sb" />
        <Badge
          type={transaction.status}
          backgroundColor="transparent"
          style={{ paddingRight: 0 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default function Transactions({transactions, title='', onItemPress}: TransactionsProps) {
  
  return (
    <View style={styles.container}>
      <View>
        {transactions.length > 0 ? (
          <View>
            <FlatList
              data={transactions} 
              renderItem={({ item }) => {
                return <Item {...item} transaction={item} />; 
              }}
              keyExtractor={(item) => item['id']} 
              showsVerticalScrollIndicator={false} 
            />
          </View>
        ) : (
          <View style={styles.emptyTransactionsContainer}>
            <Image
              source={ComponentImages.transactions.emptyBox}
              style={styles.emptyBox}
            />
              <Typography title='You do not have a transaction history. Start a transaction
              today.' color={Colors.gray[400]} style={{textAlign: 'center'}} type='label-r'/>
          </View>
        )}
      </View>
    </View>
  );
}
