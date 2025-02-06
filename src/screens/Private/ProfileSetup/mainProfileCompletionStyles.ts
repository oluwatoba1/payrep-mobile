import { StyleSheet } from "react-native";
import { BOTTOM_TAB_CONTAINER_HEIGHT, height, MAIN_LAYOUT_HORIZONTAL_PADDING, width } from "../../../utils/Constants";
import { moderateScale, scale, scaleHeight } from "../../../utils/Helpers";

export const mainProfileCompletionStyles = StyleSheet.create({
    container: {
        width: width - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING),
        height: height - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING),
    },

    titleContainer: {
        gap: moderateScale(16),
        marginBottom: scaleHeight(24)

    },
    buttonContainer: {
        bottom: scaleHeight(1.5 * BOTTOM_TAB_CONTAINER_HEIGHT),
        marginHorizontal: scale(1),
        position: 'absolute',
        left: 0,
        right: 0,
    }
})