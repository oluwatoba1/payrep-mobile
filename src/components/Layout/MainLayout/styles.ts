import {StyleSheet} from 'react-native';

// Local
import {
  BOTTOM_TAB_CONTAINER_HEIGHT,
  MAIN_LAYOUT_HORIZONTAL_PADDING,
  baseDP,
  height,
  width,
} from '@utils/Constants';
import {scale} from '@utils/Helpers';

const styles = StyleSheet.create({
  mainLayoutContainer: {
    flex: 1,
    paddingTop: scale(baseDP),
    paddingHorizontal: scale(MAIN_LAYOUT_HORIZONTAL_PADDING),
  },
  container: {
    flex: 1,
    height,
    width: width - 2 * scale(MAIN_LAYOUT_HORIZONTAL_PADDING),
  },
});

export default styles;
