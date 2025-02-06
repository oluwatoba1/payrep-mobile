import {TouchableOpacity, View, Image, ImageSourcePropType} from 'react-native';

import styles from './styles';
import {Typography} from '@components/Forms';
import {Row} from '@components/Layout';

interface UserType {
  title: string;
  description: string;
  icon: ImageSourcePropType;
  value: string;
}

interface UserTypeCardProps {
  onSelect: (value: string) => void;
  userTypes: UserType[];
}

export default function UserTypeCard({onSelect, userTypes}: UserTypeCardProps) {
  return userTypes.map((userType, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => onSelect(userType.value)}
      style={styles.userTypeCardContainer}>
      <Image source={userType.icon} style={styles.userTypeCardIcon} />
      <Typography
        type="heading-sb"
        title={userType.title}
        style={{textAlign: 'center'}}
      />
      <Typography
        type="label-r"
        title={userType.description}
        style={{textAlign: 'center'}}
      />
    </TouchableOpacity>
  ));
}
