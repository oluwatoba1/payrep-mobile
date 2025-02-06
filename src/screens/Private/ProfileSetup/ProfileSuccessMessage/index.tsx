import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { HomeStackParamList } from '../../../../navigation/types';
import { SuccessMessage } from '../../../../components';


type SuccessMessageScreenNavigationProp = StackNavigationProp<HomeStackParamList, "ProfileCompletionSuccessMessageScreen">;

type SuccessMessageScreenRouteProp = RouteProp<HomeStackParamList, "ProfileCompletionSuccessMessageScreen">;

interface MoreSuccessScreenProps {
  navigation: SuccessMessageScreenNavigationProp;
  route: SuccessMessageScreenRouteProp;
}

export default function MoreSuccessMessageScreen({ navigation, route }: MoreSuccessScreenProps) {
  const { title, subTitle, logo } = route.params;

  const handleNavigation = () => {
    navigation.navigate("Dashboard");
  };

  return <SuccessMessage successLogo={logo} title={title} subTitle={subTitle} onButtonPress={handleNavigation} buttonTitle='Done' />;
}
