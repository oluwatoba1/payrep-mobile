import {Platform, StyleSheet} from 'react-native';
import {PNSB} from '../../theme/Fonts';
import {scale, scaleHeight, moderateScale} from '../../utils/Helpers';
import {
  BOTTOM_TAB_CONTAINER_HEIGHT,
  MAIN_LAYOUT_HORIZONTAL_PADDING,
  width,
} from '../../utils/Constants';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 0, // Removes top border
    elevation: 0,
    width,
    flexDirection: 'row',
    paddingVertical: scaleHeight(12),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    height: scaleHeight(BOTTOM_TAB_CONTAINER_HEIGHT),
    zIndex: 100,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width - 2 * scale(MAIN_LAYOUT_HORIZONTAL_PADDING)) / 5,
  },
  blankSpace: {
    flex: 1,
  },
  tabLabel: {
    color: Colors.gray.base,
    fontFamily: PNSB,
    fontSize: moderateScale(14),
    lineHeight: moderateScale(14 * 1.5),
  },
  activeTabLabel: {
    color: Colors.primary.base,
  },
  tabIcon: {
    width: scale(24),
    height: scale(24),
    resizeMode: 'contain',
  },
  activeIcon: {
    tintColor: Colors.primary.base,
  },
  homeTabItemContainer: {
    position: 'relative',
    height: scaleHeight(85),
    width: scaleHeight(85),
  },
  homeTabItemInnerContainer: {
    position: 'absolute',
    height: scaleHeight(85),
    width: scaleHeight(85),
    bottom: scaleHeight(85 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scaleHeight(85 / 2),
    backgroundColor: Colors.appBackground,
  },
  homeIconWrapper: {
    width: scaleHeight(70),
    height: scaleHeight(70),
    borderRadius: scaleHeight(35),
    backgroundColor: Colors.primary.base,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: moderateScale(4),
    borderColor: Colors.white,
  },
  curveSvg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
