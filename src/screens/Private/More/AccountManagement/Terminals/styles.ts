import { StyleSheet } from "react-native";
import { BOTTOM_TAB_CONTAINER_HEIGHT, MAIN_LAYOUT_HORIZONTAL_PADDING, height, width } from "../../../../../utils/Constants";
import { moderateScale, scale, scaleHeight } from "../../../../../utils/Helpers";
import Colors from "../../../../../theme/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING),
        height: height - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING),
        // maxHeight: height * 2
    },
    filterContainer: {
        paddingHorizontal: scale(4),
        paddingTop: scaleHeight(4),
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: scaleHeight(8)
    },
    filterIcon: {
        width: scale(16),
        height: scaleHeight(16),
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterArea: {
        gap: scale(16),
        flexDirection: 'row',
    },
    filter: {
        flexDirection: 'row', gap: scale(4), alignItems: 'center'
    }
    
});

export default styles;