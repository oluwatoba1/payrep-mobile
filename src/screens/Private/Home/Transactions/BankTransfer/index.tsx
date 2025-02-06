import {ActivityIndicator, Image, Pressable, View} from 'react-native';
import {
  Button,
  Dropdown,
  TextInput,
  Typography,
} from '../../../../../components/Forms';
import {MainLayout} from '../../../../../components/Layout';
import {useState} from 'react';
import ComponentImages from '../../../../../../assets/images/components';
import {styles} from './styles';
import {AccountDetailsCard} from '../../../../../components/Cards';
import {StackNavigationProp} from '@react-navigation/stack';
import {WalletStackParamList} from '../../../../../navigation/types';
import TransferBeneficiaryModal from '../../../../../components/Modal/TransferBeneficiaryModal';
import BeneficiaryCard from '../../../../../components/Cards/BeneficiaryCard';
import {mainHomeStyles} from '../../styles';
import {BankModal} from '../../../../../components';
import ScreenImages from '../../../../../../assets/images/screens';

type BankTransferScreenNavigationProp = StackNavigationProp<
  WalletStackParamList,
  'ConfirmTransactionScreen'
>;

interface IBankTransferProps {
  navigation: BankTransferScreenNavigationProp;
}
interface IBank {
  name: string;
  code: string;
  image?: string;
}
const banks: IBank[] = [
  {
    name: 'Access Bank',
    code: '044',
    image: ScreenImages.MoreScreen.bankCard,
  },
  {name: 'GTB', code: '056'},
];

const beneficiaries = [
  {
    code: 1,
    name: 'Abdullahi Musa',
    bankName: 'Access Bank',
    accountNumber: '1012123300',
  },
  {
    code: 2,
    name: 'Abdullahi Musa',
    bankName: 'Access Bank',
    accountNumber: '1012123300',
  },
  {
    code: 3,
    name: 'Abdullahi Omeiza Hakken',
    bankName: 'Access Bank',
    accountNumber: '1012123300',
  },
  {
    code: 4,
    name: 'Abdullahi Musa',
    bankName: 'Access Bank',
    accountNumber: '1012123300',
  },
  {
    code: 5,
    name: 'Abdullahi Musa',
    bankName: 'Access Bank',
    accountNumber: '1012123300',
  },
];

export default function BankTransfer({navigation}: IBankTransferProps) {
  const [showBankModal, setShowBankModal] = useState<boolean>(false);
  const [selectedBank, setSelectedBank] = useState<IBank>({name: '', code: ''});
  const [showTransferBeneficiaryModal, setShowTransferBeneficiaryModal] =
    useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [showBeneficiaryCard, setShowBeneficiaryCard] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState({
    name: '',
    code: '',
    bankName: '',
    accountNumber: '',
  });

  const handleClose = () => {
    setShowBeneficiaryCard(false);
    setAccountNumber('');
  };

  const handleBeneficiary = () => {
    setShowTransferBeneficiaryModal(!showTransferBeneficiaryModal);
  };

  const handleScreenNavigation = () => {
    console.log('hey');

    navigation.navigate('ConfirmTransactionScreen');
  };

  const handleAccountNumberChange = (text: string) => {
    setAccountNumber(text);
    if (text.length === 10) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowBeneficiaryCard(true);
      }, 2000);
    } else {
      setShowBeneficiaryCard(false);
    }
  };

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

  return (
    <MainLayout backAction={() => {}}>
      <BankModal
        showModal={showBankModal}
        onClose={() => setShowBankModal(false)}
        options={banks}
        value={selectedBank.code}
        onSelect={bank => setSelectedBank(bank)}
        bankModalTitle="Select bank"
      />
      <TransferBeneficiaryModal
        showModal={showTransferBeneficiaryModal}
        onClose={() => setShowTransferBeneficiaryModal(false)}
        onSelect={beneficiary => {
          setSelectedBeneficiary(beneficiary);
          setShowBeneficiaryCard(true);
          setShowTransferBeneficiaryModal(false);
        }}
        options={beneficiaries}
        value={selectedBeneficiary.code}
      />
      <View style={mainHomeStyles.container}>
        <View style={mainHomeStyles.titleContainer}>
          <Typography title="Transfer to Other Banks" type="heading5-sb" />
        </View>
        <View>
          <AccountDetailsCard
            acctNumber={User.acctNumber}
            walletBalance={User.walletBalance}
            showDetails={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <View>
            {!showBeneficiaryCard && (
              <View style={{marginBottom: 40}}>
                <View style={{marginBottom: 50}}>
                  <TextInput
                    type="text"
                    placeholder="Enter the account"
                    value={accountNumber}
                    onChangeText={handleAccountNumberChange}
                  />
                  <Pressable
                    style={mainHomeStyles.doubleUserTeamContainer}
                    onPress={handleBeneficiary}>
                    <Image
                      style={mainHomeStyles.doubleUserIcon}
                      source={ComponentImages.Wallet.teamLine}
                    />
                    <Typography title="Select Beneficiary" type="body-sb" />
                  </Pressable>
                </View>

                <Dropdown
                  label="Select Bank"
                  value={selectedBank.name}
                  onTrigger={() => setShowBankModal(true)}
                />
              </View>
            )}
            {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
          </View>

          {showBeneficiaryCard && !isLoading && (
            <BeneficiaryCard
              accountName={selectedBeneficiary.name}
              accountNumber={selectedBeneficiary.accountNumber}
              bankName={selectedBeneficiary.bankName}
              showCard={showBeneficiaryCard}
              onClose={handleClose}
            />
          )}
          <View style={{marginVertical: 24}}>
            <TextInput type="text" placeholder="Enter Amount" />
            <TextInput type="text" placeholder="Enter Narration" />
          </View>
        </View>
        <View style={mainHomeStyles.buttonContainer}>
          <Button
            title="Confirm Transaction"
            onPress={handleScreenNavigation}
          />
        </View>
      </View>
    </MainLayout>
  );
}
