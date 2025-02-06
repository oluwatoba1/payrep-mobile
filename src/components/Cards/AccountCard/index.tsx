import {Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {Typography} from '../../Forms';
import {formatLabel} from '../../../utils/Helpers';
import CustomCard from '../CustomCard';
import ChangePhoneNumberModal from '../../Modal/ChangePhoneNumberModal';
import { useState } from 'react';

interface AccountCardProps {
  title: string;
  accountInfo: {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    dateOfBirth?: string;
    emailAddress?: string;
    phoneNumber?: string;
    bvn?: string;
    nin?: string;
    accountName?: string;
    accountNumber?: string;
    bank?: string;
    homeAddress?: string;
    stateOfOrigin?: string;
    lga?: string;
    country?: string;
  };
}

export default function AccountCard({title, accountInfo}: AccountCardProps) {
  const [showChangePhoneNumberModal, setChangePhoneNumberModal] = useState<boolean>(false)
  return (
     <CustomCard visible={true} customContainerStyle={styles.container}>
         <Typography title={title} style={styles.cardTitle} type="subheading" />
        {Object.keys(accountInfo).map(key => (
          <View key={key} style={styles.accountDetailRow}>
            <Typography
              style={styles.accountDetailLabel}
              type="subheading"
              title={formatLabel(key)}
            />
            <View style={styles.changePhoneNumberContainer}>
              <Typography
                style={styles.accountDetailValue}
                type="subheading"
                title={(accountInfo as any)[key]}
              />
              {key === "phoneNumber" && (
                <>
                  <Pressable onPress={() => setChangePhoneNumberModal(prev => !prev)}>
                    <Typography title='(Change Phone Number)' type='label-sb' style={styles.changePhoneNumberTextColor} />
                  </Pressable>
                  <ChangePhoneNumberModal showModal={showChangePhoneNumberModal} onClose={() => setChangePhoneNumberModal(false)} title='Change Phone Number' />
                </>
              )}
            </View>
          </View>
        ))}
     </CustomCard>
  );
}
