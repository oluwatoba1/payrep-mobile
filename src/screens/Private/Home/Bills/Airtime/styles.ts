import { StyleSheet } from "react-native";
import { width, MAIN_LAYOUT_HORIZONTAL_PADDING, height } from "../../../../../utils/Constants";
import { scale, scaleHeight } from "../../../../../utils/Helpers";
import Colors from "../../../../../theme/Colors";

const styles = StyleSheet.create({
    contactButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8),
        paddingHorizontal: scale(9)

    },
    bottomButton: {
        marginBottom: scaleHeight(24)
    },
    rechargeAmountContainer: {
        width: '100%', 
        borderStyle: 'dashed', 
        borderColor: Colors.primary['base'], 
        padding: 8, 
        borderWidth: 1, 
        borderRadius: 200, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    rechargeAmount: {
        padding: 8, 
        backgroundColor: Colors.gray[100], 
        borderRadius: 100,
    }
})

export default styles;