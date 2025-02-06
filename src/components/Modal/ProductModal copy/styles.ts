import { StyleSheet } from "react-native";
import { scale, scaleHeight } from "../../../utils/Helpers";
import Colors from "../../../theme/Colors";

export const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderBottomWidth: scale(1),
        // borderBottomColor: Colors.gray[50],
        paddingVertical: scaleHeight(16),
        paddingHorizontal: scale(8),
        marginVertical: scale(4),
        backgroundColor: Colors.white,
        borderRadius: scaleHeight(8),
        
      },
      iconContainer: {
        borderWidth: 1,
        backgroundColor: Colors.primary[50],
        width: scale(44),
        height: scaleHeight(44),
        borderRadius: scaleHeight(22),
        justifyContent: 'center',
        alignItems: 'center',
        margin: scaleHeight(8),
      },
      textContainer: {
        marginLeft: scale(16),
        marginVertical: scaleHeight(4),
      },
})