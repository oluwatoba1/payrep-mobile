import { useState } from 'react';
import { View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

// Local
import { MainLayout, Row } from '@components/Layout';
import { UserTypeCard } from '@components/Cards';
import ComponentImages from '@assets/images/components';
import { styles } from './styles';
import { Typography } from '@components/Forms';
import { PublicNavigatorParamList } from '@navigation/types';
import { PNB } from '@theme/Fonts';
import Pad from '@components/Pad';
import { USER_TYPES } from '@utils/Constants';

type UserTypeProps = StackScreenProps<PublicNavigatorParamList, 'UserType'>;

export default function UserType({
  navigation: { navigate, goBack },
}: UserTypeProps) {

  const handleSelectUserType = (userType: string) => {
    navigate('MobileNumber', { userType });
  };

  return (
    <MainLayout backAction={goBack}>
      <View style={styles.userTypeContainer}>
        <Typography
          title="Select User"
          type="heading-sb"
          style={{ fontFamily: PNB }}
        />
        <Pad size={8} />
        <Typography title="What are you using Payrep for?" type="body-r" />
        <Pad size={16} />
        <Row gap={16} justifyContent="space-between">
          <UserTypeCard
            userTypes={USER_TYPES}
            onSelect={handleSelectUserType}
          />
        </Row>
      </View>
    </MainLayout>
  );
}
