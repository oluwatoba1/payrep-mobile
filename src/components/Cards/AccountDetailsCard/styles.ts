import {Platform, StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import {scale} from '../../../utils/Helpers';
import {MAIN_LAYOUT_HORIZONTAL_PADDING, width} from '../../../utils/Constants';

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    gap: scale(32),
  },
  main: {
    backgroundColor: Colors.primary['base'],
    width: width - scale(2 * MAIN_LAYOUT_HORIZONTAL_PADDING),
    gap: scale(32),
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingVertical: scale(24),
    borderRadius: scale(8),
  },
  top: {
    gap: scale(24),
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  bottom: {
    flexDirection: 'row',
  },
  bottom1: {
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    width: '100%',
  },
  balanceContainer: {
    gap: scale(8),
    alignItems: 'center',
    alignSelf: 'stretch',
    width: '100%',
  },
  balance: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  nairaBalanceArea: {
    flexDirection: 'row',
    gap: scale(8),
  },
  accountDetailsContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexDirection: 'row',
    width: '100%',
    gap: 8
  },
  accountNumberContainer: {
    flexDirection: 'row',
    gap: scale(4),
  },
  copyIcon: {
    width: scale(16),
    height: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  hideIcon: {
    width: scale(24),
    height: scale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsContainer: {
    alignItems: 'center',
    gap: scale(4),
  },
  actionsIcon: {
    borderWidth: 0.3,
    height: scale(48),
    width: scale(48),
    borderRadius: scale(32),
    paddingVertical: scale(12),
    paddingRight: scale(10.191),
    paddingLeft: scale(11.125),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: scale(24),
    width: scale(25.263),
    flexShrink: scale(0),
  },
  iconText: {
    color: Colors.black
  },
  action:{
    backgroundColor: Colors.white,
    borderRadius: 100,
    height: scale(48),
    width: scale(48),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 8,
    shadowRadius: 0.1,
    elevation: 4
  }
});


export {styles}
