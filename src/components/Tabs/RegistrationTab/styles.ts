import { StyleSheet, ViewStyle } from "react-native";
import { scale, scaleHeight } from "../../../utils/Helpers";
import Colors from "../../../theme/Colors";



  
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.black,
        padding: scaleHeight(4),
        borderRadius: scaleHeight(24),
        gap: scaleHeight(4),
        marginHorizontal: scale(16),
        // position: 'absolute',
        // top: scaleHeight(52)

        
    },
    tab: {
        flex: 1,
        paddingVertical: scaleHeight(6),
        paddingHorizontal: scale(12),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scaleHeight(24),
    },
    activeTab: {
        backgroundColor: Colors.white,
    },
    tabText: {
        color: Colors.white,
    },
    activeTabText: {
        color: Colors.black,
    },
})