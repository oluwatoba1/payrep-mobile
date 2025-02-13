import {TextStyle, ViewStyle} from 'react-native';
import {moderateScale, scale} from '../../../utils/Helpers';
import {PNB} from '../../../theme/Fonts';
import Colors from '../../../theme/Colors';

interface PinPadStyleFunction {
  (isFocused: boolean, isLastItem: boolean, padLength: number):
    | ViewStyle
    | TextStyle;
}

type PinPadStyle = {
  pinPadContainer: ViewStyle;
  pinPad: PinPadStyleFunction;
  error: TextStyle;
};

const styles: PinPadStyle = {
  pinPadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinPad: (isFocused, isLastItem, padLength) => {
    const _width = (70 * 4) / padLength;
    return {
      borderWidth: 1,
      borderColor: isFocused ? Colors.black : Colors.gray[400],
      borderRadius: moderateScale(4),
      width: _width,
      height: _width,
      marginRight: isLastItem ? 0 : scale(16),
      fontSize: moderateScale((20 * 4) / padLength),
      fontFamily: PNB,
      color: Colors.black,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
  error: {
    fontSize: scale(12),
    color: Colors.danger.base,
    marginTop: scale(4),
  },
};

export default styles;
