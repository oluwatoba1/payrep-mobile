import { StyleSheet } from "react-native";
import { width, MAIN_LAYOUT_HORIZONTAL_PADDING, BOTTOM_TAB_CONTAINER_HEIGHT, height } from "../../../../utils/Constants";

const styles = StyleSheet.create({
    container: {
        width: width - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING),
        height: height - (2 * MAIN_LAYOUT_HORIZONTAL_PADDING)
    },
    btn: {
        position: 'absolute',
        bottom: BOTTOM_TAB_CONTAINER_HEIGHT * 1.5,
        alignSelf: 'center',
        width: '100%',
    },
})

export default styles;