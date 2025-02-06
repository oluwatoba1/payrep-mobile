import {StyleSheet} from 'react-native';
import {moderateScale, scale, scaleHeight} from '@utils/Helpers';
import Colors from '@theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    gap: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(282),
  },

  btnContainer: {
    bottom: scaleHeight(37),
    width: scale(343),
  },
  image: {
    width: scale(100),
    height: scaleHeight(100),
  },
  text: {
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
  receipt: {
    borderBottomColor: Colors.primary.base,
    borderBottomWidth: scale(1.5),
    marginTop: scaleHeight(12),
  },
});
