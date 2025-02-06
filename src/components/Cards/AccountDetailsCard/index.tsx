import {useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import ComponentImages from '../../../../assets/images/components';
import  {styles } from './styles';
import {Typography} from '../../Forms';
import Colors from '../../../theme/Colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { PrivateNavigatorParamList } from '../../../navigation/types';
import TransferOptionModal from '../../Modal/TransferOptionModal';
import IconImages from '../../../../assets/images/appIcons';
interface ItemProps {
  actions: string;
}

interface AcctDetailsProps {
  accountNumber: string;
  walletBalance: string;
  actionIds?: string[];
  showDetails?: boolean;
  showActions?: boolean;
}

interface ActionItemProps {
  actionId: string;
  onPressAction: (actionId: string) => void;
}

const ACTIONS_DATA = [
  { id: '01', title: 'Send Money', icon: ComponentImages.accountDetailsCard.send},
  { id: '02', title: 'Bills', icon: ComponentImages.accountDetailsCard.bills},
  { id: '03', title: 'Earnings', icon: ComponentImages.accountDetailsCard.earnings },
  { id: '04', title: 'My Cards', icon: ComponentImages.accountDetailsCard.cards },
];

const ActionItem = ({ actionId, onPressAction }: ActionItemProps) => {
  const action = ACTIONS_DATA.find(item => item.id === actionId);

  if (!action) return null;

  return (
    <View style={styles.actionsContainer}>
      <TouchableOpacity onPress={() => onPressAction(actionId)}>
        <View style={styles.action}>
          <Image source={action.icon} style={styles.icon} />
        </View>
      </TouchableOpacity>
      <Typography title={action.title} type='body-r' style={styles.iconText}  />
    </View>
  );
};

export default function AcctDetailsCard({
  accountNumber,
  walletBalance,
  actionIds,
  showDetails = true,
  showActions = true,
}: AcctDetailsProps) {
  
  const [isBalanceHidden, setIsBalanceHidden] = useState(true);
  
  const [isTransferOptionModalVisible, setIsTransferOptionModalVisible] = useState<boolean>(false);

  const navigation = useNavigation<StackNavigationProp<PrivateNavigatorParamList>>();

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden);
  };

  const handleActionPress = (actionId:string) => {
    switch (actionId) {
      case '01':
        setIsTransferOptionModalVisible(true);
        break;
      case '02':
        navigation.navigate('BottomTabs', {
          screen: 'Home',
          params: {
            screen: 'BillPaymentScreen'
          }
        })
        
        break;
      case '03':
        navigation.navigate('BottomTabs', {
          screen: 'Home',
          params: {
            screen: 'Earnings'
          }
        })
        break;
      case '04':
        navigation.navigate('BottomTabs', {
          screen: 'More',
          params: {
            screen: 'ListBankCardScreen'
          }
        })
        break;
      default:
        break;
    }
  };

  const filteredActions = ACTIONS_DATA?.filter(action => actionIds?.includes(action.id));
  
  return (
    <View style={{gap: 24}}>
    <View style={styles.main}>
      <View style={styles.top}>
        <View style={styles.balanceContainer}>
          <View>
            <Typography
              title="Balance"
              type="label-sb"
            />
          </View>
          <View style={styles.balance}>
            <View style={styles.nairaBalanceArea}>
              <Typography title="₦" type="heading3-b" color={Colors.black} />
              <Typography
                title={isBalanceHidden ? '**************' : walletBalance}
                type="heading4-b"
                color={Colors.black}
                style={{verticalAlign: 'middle'}}
              />
            </View>
            <TouchableOpacity onPress={toggleBalanceVisibility}>
              <Image
                source={IconImages.icon.eye}
                style={styles.hideIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
       {showDetails && (
          <>
            <View style={styles.accountDetailsContainer}>
              <Typography
                title="Account Number"
                type="body-r"
                color={Colors.black}
              />
              <View style={styles.accountNumberContainer}>
                <Typography
                  title={accountNumber}
                  type="body-sb"
                  color={Colors.black}
                />
                <TouchableOpacity
                  onPress={() => Clipboard.setString(accountNumber)}>
                  <Image
                    source={IconImages.icon.copyDark}
                    style={styles.copyIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
       )}
      </View>
      
    </View>
    {showActions && (
        
        <View style={styles.bottom}>
          
            <FlatList
              data={filteredActions}
              renderItem={({ item }) => <ActionItem actionId={item.id} onPressAction={handleActionPress} />}
              keyExtractor={item => item.id}
              horizontal
              contentContainerStyle={styles.bottom1}
            />
            <TransferOptionModal
              showModal={isTransferOptionModalVisible}
              onClose={() => setIsTransferOptionModalVisible(false)}
            />
        </View>
      )} 
      </View>
  );
  
}