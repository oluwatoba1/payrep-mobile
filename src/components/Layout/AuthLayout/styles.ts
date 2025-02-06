import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import {height, width} from '../../../utils/Constants';

const styles = StyleSheet.create({
  authLayoutContainer: {
    flex: 1,
    backgroundColor: Colors.primary.base,
  },
  container: {
    height: '100%',
    width,
  },
});

export default styles;
