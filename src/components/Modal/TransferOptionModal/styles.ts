import { StyleSheet } from "react-native";
import { scale, scaleHeight } from "../../../utils/Helpers";
import Colors from "../../../theme/Colors";

export const styles = StyleSheet.create({
    container: {
        padding: scaleHeight(16),
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: scaleHeight(16),
    },
    item: {
        paddingVertical: scaleHeight(16),
        paddingHorizontal: scaleHeight(8),
        borderWidth: scaleHeight(1),
        borderColor: Colors.gray[300],
        backgroundColor: Colors.gray[100],
        borderRadius: scaleHeight(8),
        marginBottom: scaleHeight(8)
      },
      listContainer: {
        flex: 1,
        maxHeight: scaleHeight(300), 
    },
    onClose: {
        borderWidth: scaleHeight(1),
        borderColor: Colors.gray[300],
        borderRadius: scaleHeight(16),
        paddingVertical: scaleHeight(4),
        paddingHorizontal: scale(8)
    }
})