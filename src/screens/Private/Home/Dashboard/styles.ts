import {StyleSheet} from 'react-native';
import {moderateScale, scale, scaleHeight} from '../../../../utils/Helpers';
import {
  MAIN_LAYOUT_HORIZONTAL_PADDING,
  height,
  width,
} from '../../../../utils/Constants';
import Colors from '../../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    width: width - 2 * MAIN_LAYOUT_HORIZONTAL_PADDING,
  },
  main: {
    height: 'auto',
  },
  profilePicture: {
    height: scaleHeight(40),
    width: scale(40),
  },
  headerArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scaleHeight(20),
  },
  notificationArea: {
    width: 32,
    height: 32,
    backgroundColor: Colors.gray['200'],
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationIcon: {
    width: scale(16),
    height: scale(16),
  },
  profileArea: {
    flexDirection: 'row',
    gap: 8,
  },
  profileText: {
    alignSelf: 'flex-end',
  },
  notificationIndicator: {
    position: 'absolute',
    top: scaleHeight(-2),
    right: scale(-2),
    width: scale(8),
    height: scaleHeight(8),
    borderRadius: moderateScale(5),
    backgroundColor: Colors.danger.base,
  },
});

export default styles;
