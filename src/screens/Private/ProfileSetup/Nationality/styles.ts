import { StyleSheet } from "react-native";
import { scaleHeight } from "../../../../utils/Helpers";
import { MAIN_LAYOUT_HORIZONTAL_PADDING, width } from "../../../../utils/Constants";

export const styles = StyleSheet.create({
    container: {
        gap: scaleHeight(10),
        justifyContent: 'space-between'
    },
    buttonContainer: {
        justifyContent: 'flex-end', // Aligns the button at the bottom
        paddingBottom: 20, // Adjust as necessary to add space below the button
    },
})