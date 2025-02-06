import {Dimensions, StyleSheet} from 'react-native';
import {PNR, PNSB} from '../../../theme/Fonts';
import {scale, scaleHeight} from '../../../utils/Helpers';
import Colors from '../../../theme/Colors';
import {MAIN_LAYOUT_HORIZONTAL_PADDING, width} from '../../../utils/Constants';

const styles = StyleSheet.create({
  disputeCardsContainer: {
    flexDirection: 'column',
    gap: scale(12),
    maxHeight: scaleHeight(400),
    paddingTop: scaleHeight(12)
  },
  headerText: {
    textAlign: 'left',
    color: Colors.gray[600],
  },
  emptyDisputesContainer: {
    marginTop: scale(32),
    alignItems: 'center',
  },
  emptyBox: {
    width: scale(64),
    height: scale(64),
  },
  emptyTx: {
    color: Colors.gray[400],
    textAlign: 'center',
  },
  disputeCardContainer: {
    width: '100%',
    paddingHorizontal: scale(16),
    paddingTop: scaleHeight(16),
    paddingBottom: scaleHeight(4),
    borderWidth: scale(0.2),
    borderColor: Colors.gray[300],
    alignItems: 'flex-start',
    borderRadius: scale(4),
    backgroundColor: Colors.white,
    gap: scale(16),
  },
  Frame121111: {
    alignItems: 'flex-start',
    gap: scale(4),
    width: scale(167),
  },
  disputeDetailsContainer: {
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    width: '100%'
  },
  disputeMessageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: scale(4),
    alignSelf: 'stretch',
    paddingBottom: scaleHeight(4),
    height: scaleHeight(48),
    width: '100%',
    borderBottomWidth: scale(0.2),
    borderBottomColor: Colors.gray[200],
  },
  trackingDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
    alignSelf: 'stretch',
    paddingBottom: scaleHeight(4),
    height: scaleHeight(48),
    width: '100%',
    borderBottomWidth: scale(0.2),
    borderBottomColor: Colors.gray[200],
  },
  disputeItemContainer: {
    gap: scale(12),
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
    alignSelf: 'stretch',
    paddingBottom: scaleHeight(4),
    height: scaleHeight(48),
    width: '100%',
  },
});

export default styles;
