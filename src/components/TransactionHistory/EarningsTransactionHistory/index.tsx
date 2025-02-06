import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import {
    GestureHandlerRootView,
    TouchableOpacity,
} from 'react-native-gesture-handler';

import ComponentImages from '../../../../assets/images/components';
import styles from './styles';
import { Badge } from '../../Cards';
import { Typography } from '../../Forms';
import { scale } from '../../../utils/Helpers';
import IconImages from '../../../../assets/images/appIcons';
import Colors from '../../../theme/Colors';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import { HomeStackParamList } from '../../../navigation/types';

interface ITransaction {
    id: string;
    type: string;
    date: string;
    status: STATUSES;
    amount: string;
}

interface TransactionsProps {
    transactions: ITransaction[];
}
interface ItemProps {
    id: string;
    type: string;
    date: string;
    status: STATUSES;
    amount: string;
}

type TransactionsNavigationProp = StackNavigationProp<HomeStackParamList>;
interface ITransactionsNavigationProp {
    navigation: TransactionsNavigationProp;
}

const StatusIcon = () => {
        return (
            <View style={styles.statusBackground}>
                <Image
                    source={IconImages.arrows.rightIcon}
                    style={styles.icon}
                />
            </View>
        );
};

const Item = ({
    type,
    amount,
    status,
    date,
}: ItemProps, { navigation }: ITransactionsNavigationProp) => {
    const formattedAmount = `₦ ${parseInt(amount).toFixed(2)}`;
    const formattedType = type.charAt(0).toUpperCase() + type.slice(1)
    return (
        <TouchableOpacity style={styles.transactionContainer} onPress={() => {navigation.navigate('TransactionReceiptScreen') }}>
            <View style={styles.transactionDetailsL}>
                <StatusIcon />
                <View style={styles.transactionDetails}>
                    <Text style={{ ...styles.LR, ...styles.txText }}>
                        {`${formattedType} Cashout`}
                    </Text>
                    <Typography title={date} style={styles.transactionDate} />
                </View>
            </View>
            <View style={styles.transactionDetailsR}>
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

export default function Transactions({ transactions}: TransactionsProps) {

    return (
        <GestureHandlerRootView style={styles.container}>
            <View>
                {transactions.length > 0 ? (
                    <View>
                        <FlatList
                            data={transactions}
                            renderItem={({ item }) => {
                                return <Item {...item} />;
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
              today.' color={Colors.gray[400]} style={{ textAlign: 'center' }} type='label-r' />
                    </View>
                )}
            </View>
        </GestureHandlerRootView>
    );
}
