import {StyleSheet} from 'react-native';
import {scale} from '../../utils/Helpers';
import Colors from '../../theme/Colors';

export const styles = StyleSheet.create({
  textStyle: {
    fontSize: scale(14),
    
    color: Colors.gray[700],
  },
});
