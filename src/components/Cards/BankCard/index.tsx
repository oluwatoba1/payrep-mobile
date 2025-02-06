import {Image, ImageSourcePropType, Pressable, View} from 'react-native';
import {Typography} from '../../Forms';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {height, width} from '../../../utils/Constants';
import ComponentImages from '../../../../assets/images/components';
import { useRef, useState } from 'react';
import CustomModal from '../../Modal';
import { useNavigation } from '@react-navigation/native';
interface BankCardProps {
  index: number;
  handleCardPress?: () => void;
  cardType: "MASTERCARD" | "VERVE" | "VISA";
  cardHolderName: string;
  cardHolderNumber: string;
  numberOfTransactions?: number;
  amount?: string;
  commission?: string;

}

export default function BankCard({
  index,
  handleCardPress,
  cardType,
  cardHolderName,
  cardHolderNumber,
  numberOfTransactions = 0,
  amount = 'N20,000',
  commission = 'N30,000'
}: BankCardProps) {

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalPosition, setModalPosition] = useState<{ top: number, left: number } | null>(null);
  const cardRef = useRef<View | null>(null);
  const navigation = useNavigation()

  const toggleModal = () => {
    if (cardRef.current) {
      cardRef.current.measure((x, y, width, height, pageX, pageY) => {
        setModalPosition({ top: pageY + 20, left: pageX + width - 120 }); // Adjust position as needed
        setModalVisible(!modalVisible);
      });
    }
  };

  const cardBackground = cardType === "MASTERCARD" ? ComponentImages.BankCards.masterCardBg :
                         cardType === "VERVE" ? ComponentImages.BankCards.verveCardBg : "";

  const cardLogo = cardType === "MASTERCARD" ? ComponentImages.BankCards.MasterCardIcon :
                   cardType === "VERVE" ? ComponentImages.BankCards.VerveIcon : "";

                   
  return (
    <Pressable
      key={index}
      onPress={handleCardPress}
      style={styles.cardContainer} ref={cardRef}>
      <Image source={cardBackground} style={styles.cardImage} />
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.60)', 'rgba(255, 255, 255, 0.10)']}
        start={{x: 0.15, y: 0}}
        end={{x: 0.7, y: 0.6}}
      />
      <View style={styles.cardDetails}>
        <View style={{flexDirection:'row', justifyContent:"space-between", alignItems:"center"}}>
          <Typography
            title={cardType}
            type="subheading"
            style={styles.cardTitle}
          />
          <Pressable onPress={toggleModal}>
            <Typography
              title="..."
              type="heading4-sb"
              style={styles.cardTitle}
            />
          </Pressable>
        </View>
        <View style={styles.cardBody}>
          <DetailRow label="Number of Transactions:" value={`${numberOfTransactions}`} />
          <DetailRow label="Amount:" value={`${amount}`} />
          <DetailRow label="Commission:" value={`${commission}`} />
        </View>
        <Typography
          title={cardHolderNumber}
          type="text"
          style={styles.cardNumber}
        />
        <View style={styles.cardFooter}>
          <Typography
            title={cardHolderName.toUpperCase()}
            type="subheading"
            style={styles.cardName}
          />
          <Image source={cardLogo} style={styles.cardLogo} />
        </View>
      </View>
      <CustomModal animationType='fade' modalContainerStyle={styles.modalOverlay} modalContentStyle={modalPosition ? [styles.modal, { top: modalPosition.top, left: modalPosition.left }]:{}}  visible={modalVisible} onClose={() => setModalVisible(false)}>
        <View>
          <Typography title='More Option' type='label-sb'/>
        </View>
        <View style={{gap:16}}>
          <Pressable>
            <Typography title='Edit' type='body-r' onPress={()=> navigation.navigate('ViewBankCardScreen')} />
          </Pressable>
          <Pressable>
            <Typography title='Savings' type='body-r' onPress={()=> navigation.navigate('Savings') }/>
          </Pressable>
        </View>
      </CustomModal>
    </Pressable>
  );
}

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.detailRow}>
    <Typography title={label} type="body-r" style={styles.cardNumber} />
    <Typography title={value} type="body-r" style={styles.cardNumber} />
  </View>
);