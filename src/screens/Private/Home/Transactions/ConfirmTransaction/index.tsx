import {View} from 'react-native';
import {MainLayout} from '../../../../../components/Layout';
import {Button, Typography} from '../../../../../components/Forms';
import PinPad from '../../../../../components/Forms/PinPad';
import {styles} from './styles';
import {mainHomeStyles} from '../../styles';
import {StackScreenProps} from '@react-navigation/stack';
import {HomeStackParamList} from '../../../../../navigation/types';

type ConfirmTransactionScreenProps = StackScreenProps<
  HomeStackParamList,
  'TransactionSuccessMessageScreen'
>;

interface IConfirmTransactionProps {
  senderAccountName?: string;
  senderAccountNumber?: string;
  receiverAccountName?: string;
  receiverAccountNumber?: string;
  bankName?: string;
  narration?: string;
  amount?: string;
  charges?: string;
  total?: string;
}

export default function ConfirmTransaction({
  senderAccountName,
  senderAccountNumber,
  receiverAccountName,
  receiverAccountNumber,
  amount,
  charges,
  total,
  bankName,
  narration,
  navigation,
}: IConfirmTransactionProps & ConfirmTransactionScreenProps) {
  const handleNavigate = () => {
    navigation.navigate('TransactionSuccessMessageScreen', {
      title: 'Successful',
      subTitle: 'You have successfully sent N20,000',
    });
  };
  return (
    <MainLayout backAction={() => {}} keyboardAvoidingType="scroll-view">
      <View>
        <Typography title="Transaction Confirmation" />
      </View>
      <View style={styles.transactionDetailsContainer}>
        <View style={styles.detailRow}>
          <Typography title="Sender" type="label-r" />
          <Typography
            title={`${senderAccountName} - ${senderAccountNumber}`}
            type="body-sb"
          />
        </View>
        <View style={styles.detailRow}>
          <Typography title="Receiver" type="label-r" />
          <Typography
            title={`${receiverAccountName} - ${receiverAccountNumber}`}
            type="body-sb"
          />
        </View>
      </View>
      <View style={styles.detailItem}>
        <Typography title="Bank" type="label-r" />
        <Typography title={`${bankName}`} type="body-sb" />
      </View>
      <View style={styles.detailItem}>
        <Typography title="Narration" type="label-r" />
        <Typography title={`${narration}`} type="body-sb" />
      </View>
      <View style={styles.amountDetailsContainer}>
        <View style={styles.amountRow}>
          <Typography title="Amount" type="label-r" />
          <Typography title={`${amount}`} type="label-sb" />
        </View>
        <View style={styles.amountRow}>
          <Typography title="Charges (Fee & VAT)" type="label-r" />
          <Typography title={`N${charges}`} type="label-sb" />
        </View>
        <View style={styles.amountRow}>
          <Typography title="Total" type="label-r" />
          <Typography title={`N${total}`} type="label-sb" />
        </View>
      </View>

      <View style={styles.pinPadContainer}>
        <Typography title="Enter your four digit pin" type="body-sb" />
        <PinPad codeLength={4} pin="1234" onInput={() => {}} />
      </View>

      <Button title="Complete Transaction" onPress={handleNavigate} />
    </MainLayout>
  );
}
