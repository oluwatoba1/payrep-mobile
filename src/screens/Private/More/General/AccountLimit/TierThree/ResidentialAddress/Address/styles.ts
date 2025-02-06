import {StyleSheet} from 'react-native';
import {
  moderateScale,
  scale,
  scaleHeight,
} from '../../../../../../../../utils/Helpers';
import Colors from '../../../../../../../../theme/Colors';

export const styles = StyleSheet.create({
  inputContainer: {
    minHeight: scaleHeight(88),
    alignItems: 'flex-start',
  },
  residentialAddressInputContainer: {
    marginBottom: scaleHeight(24),
  },
  updateIconButtonContainer: {
    position: 'absolute',
    bottom: scaleHeight(-12),
    right: scale(16),
    flexDirection: 'row',
    gap: moderateScale(8),
    alignItems: 'center',
    backgroundColor: Colors.primary[200],
    paddingVertical: scaleHeight(4),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(16),
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  updateIcon: {
    width: scale(16),
    height: scaleHeight(16),
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 80,
  },
});
