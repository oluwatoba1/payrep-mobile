import {StyleSheet} from 'react-native';
import {MAIN_LAYOUT_HORIZONTAL_PADDING, width} from '../../../utils/Constants';
import {scale, scaleHeight} from '../../../utils/Helpers';

export const styles = StyleSheet.create({
  container: {
    width: width - 2 * MAIN_LAYOUT_HORIZONTAL_PADDING,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: scale(95),
    height: scaleHeight(107),
    resizeMode: 'contain',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(25),
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: scale(8),
    marginBottom: scaleHeight(24),
  },
});
