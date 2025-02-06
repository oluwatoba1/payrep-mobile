import {StyleSheet} from 'react-native';
import {scale} from '../../../utils/Helpers';
import {
  BOTTOM_TAB_CONTAINER_HEIGHT,
  MAIN_LAYOUT_HORIZONTAL_PADDING,
  height,
  width,
} from '../../../utils/Constants';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 47,
  },
  subheadingContent: {
    textAlign: 'center',
  },

  btnContainer: {
    width: scale(343),
    paddingBottom: BOTTOM_TAB_CONTAINER_HEIGHT + 16,
  },
  linearGradient: {
    width,
    height,
  },
});

export default styles;
