import { View } from 'react-native';
import { MainLayout } from '../../../../components/Layout';
import styles from './styles';
import { Typography } from '../../../../components/Forms';
import { Statement, Transactions } from '../../../../components/TransactionHistory';
import { CustomTabs } from '../../../../components/Miscellaneous';
import Colors from '../../../../theme/Colors';
import Pad from '../../../../components/Pad';
import { AccountDetailsCard } from '../../../../components/Cards';

const User = {
    id: '101',
    name: 'Muhammad',
    acctNumber: '2260173542',
    walletBalance: '570,000.96',
    earnings: {
        commission: 'N100,000',
        terminals: '50',
        bonus: 'N10,000',
    },
};

interface ITransaction {
    id: string;
    type: string;
    source: string;
    destination: string;
    date: string;
    status: STATUSES;
    amount: string;
}
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
        id: '092315',
        type: 'debit',
        source: 'Musa',
        destination: 'Junaid',
        date: '18/05/2024',
        status: 'pending',
        amount: '5000',
    },
    {
        id: '092318',
        type: 'debit',
        source: 'Musa',
        destination: 'Junaid',
        date: '18/05/2024',
        status: 'failed',
        amount: '35000',
    },
    {
        id: '092316',
        type: 'debit',
        source: 'Musa',
        destination: 'Junaid',
        date: '18/05/2024',
        status: 'successful',
        amount: '35000',
    },
    {
        id: '092314',
        type: 'debit',
        source: 'Musa',
        destination: 'Junaid',
        date: '18/05/2024',
        status: 'pending',
        amount: '35000',
    },
    {
        id: '092313',
        type: 'debit',
        source: 'Musa',
        destination: 'Junaid',
        date: '18/05/2024',
        status: 'failed',
        amount: '35000',
    },
    {
        id: '092312',
        type: 'debit',
        source: 'Musa',
        destination: 'Junaid',
        date: '18/05/2024',
        status: 'failed',
        amount: '35000',
    },
];

const tabs = [
    { title: 'Transactions', component: Transactions, props: { transactions: transactionsData } },
    { title: 'Statement', component: Statement },
];

export default function TransactionHistory() {

    return (
        <MainLayout backAction={() => null} backgroundColor={Colors.appBackground}>
            <View style={styles.container}>
                <Typography title='Transactions' type='heading5-sb' />
                <Pad size={13}/>
                <AccountDetailsCard
                    accountNumber={User.acctNumber}
                    walletBalance={User.walletBalance}
                    showDetails={false}
                />
                <Pad size={24} />
                <CustomTabs tabs={tabs} screen='transactions' />
            </View>
        </MainLayout>
    );
}