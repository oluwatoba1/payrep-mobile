import {TextStyle, ViewStyle} from 'react-native';
import {scale} from '../../../utils/Helpers';
import {baseDP} from '../../../utils/Constants';
import Colors from '../../../theme/Colors';
import {PNB} from '../../../theme/Fonts';

interface ButtonContainerFunctionStyle {
  (backgroundColor: string): ViewStyle;
}

type ButtonStyle = {
  buttonContainer: ButtonContainerFunctionStyle;
  buttonText: TextStyle;
};

export const styles: ButtonStyle = {
  buttonContainer: (backgroundColor: string) => ({
    backgroundColor,
    borderRadius: scale(baseDP * 2.4),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scale(8),
    paddingHorizontal: scale(16),
    height: scale(48),
  }),
  buttonText: {
    color: Colors.gray[700],
    fontFamily: PNB,
    fontSize: 14,
  },
};
