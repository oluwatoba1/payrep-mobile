import { StyleSheet } from "react-native";
import { moderateScale, scale, scaleHeight } from "../../../utils/Helpers";
import Colors from "../../../theme/Colors";

export const styles = StyleSheet.create({
    limitContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#434F56",
        paddingHorizontal: scale(4),
        paddingVertical:scaleHeight(12),
        borderRadius:moderateScale(4),
    },
    labelStyle: {
        color: Colors.white,
    },

    tierLogo: {
        width: scale(24),
        height: scaleHeight(24)
    },
    upgradeTierColor: {
        color: Colors.success.base
    }
})