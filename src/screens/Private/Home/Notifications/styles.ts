import {StyleSheet} from 'react-native';
import {
  width,
  MAIN_LAYOUT_HORIZONTAL_PADDING,
} from '../../../../utils/Constants';
import {scale, scaleHeight} from '../../../../utils/Helpers';
import Colors from '../../../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    width: width - 2 * MAIN_LAYOUT_HORIZONTAL_PADDING,
    gap: scaleHeight(18),
  },
  headerArea: {},
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flexDirection: 'row',
    gap: scale(16),
  },
  iconBackground: {
    backgroundColor: Colors.black,
    width: scale(32),
    height: scaleHeight(32),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    gap: scaleHeight(4),
    width: scale(244),
  },
  icon: {
    width: scale(20),
    height: scaleHeight(20),
  },
  indicatorArea: {
    justifyContent: 'center',
  },
  readIndicator: {
    backgroundColor: Colors.primary['base'],
    borderRadius: 24,
    width: scale(10),
    height: scaleHeight(10),
  },
});

export default styles;
