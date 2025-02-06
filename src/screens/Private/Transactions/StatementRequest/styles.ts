import { StyleSheet } from "react-native";
import { BOTTOM_TAB_CONTAINER_HEIGHT, MAIN_LAYOUT_HORIZONTAL_PADDING, height, width } from "../../../../utils/Constants";
import { moderateScale, scale, scaleHeight } from "../../../../utils/Helpers";

const styles = StyleSheet.create({
    container: {
        width: width - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING),
        height: height - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING)

    },
    accountDetails: {
        width: '100%',
        paddingHorizontal: scale(12),
        paddingVertical: scaleHeight(12),
        gap: scaleHeight(8),
        borderRadius: scale(8),
        backgroundColor: 'rgba(254, 184, 0, 0.15)'
    },
    datesContainer: {
        // gap: scaleHeight(24)
    },
    buttonContainer: {
        left: 0,
        right: 0,
        position: 'absolute',
        bottom: scaleHeight(BOTTOM_TAB_CONTAINER_HEIGHT * 1.3),
    }
});

export default styles;