import {StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';

import {MAIN_LAYOUT_HORIZONTAL_PADDING, width} from '../../../utils/Constants';
import {moderateScale, scale, scaleHeight} from '../../../utils/Helpers';

export const styles = StyleSheet.create({
  container: {
    marginVertical: scaleHeight(24),
    width: width - 2 * MAIN_LAYOUT_HORIZONTAL_PADDING,
  },
  profileContainer: {
    backgroundColor: Colors.white,
    padding: scaleHeight(16),
    borderRadius: scaleHeight(12),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 2,
  },
  list: {
    backgroundColor: Colors.white,
    borderRadius: scaleHeight(12),
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scaleHeight(16),
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[300],
  },
  lastCard: {
    borderBottomWidth: 0,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: scale(24),
    height: scaleHeight(24),
    marginRight: scale(16),
  },
  textContainer: {
    flex: 1,
  },
  subText: {
    fontSize: moderateScale(12),
    marginTop: scaleHeight(4),
  },
});
