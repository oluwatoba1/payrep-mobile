import styles from './styles';
import { Image, View } from 'react-native';
import Colors from '../../../theme/Colors';
import { Typography } from '../../Forms';
import { TouchableOpacity } from 'react-native-gesture-handler';
import IconImages from '../../../../assets/images/appIcons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TransactionStackParamList } from '../../../navigation/types';


export default function Statement() {
  const navigation = useNavigation<StackNavigationProp<TransactionStackParamList>>()

  return (
    <TouchableOpacity style={styles.requestStatementContainer} onPress={() => { navigation.navigate('StatementRequest') }}>
      <View style={styles.requestStatement}>
        <Image source={IconImages.icon.download} style={styles.downloadIcon} />
        <Typography title='Request for your account statement' type='body-sb' color={Colors.gray['base']} />
      </View>
      <Image source={IconImages.arrows.right} style={styles.icon} />
    </TouchableOpacity>
  );
}
