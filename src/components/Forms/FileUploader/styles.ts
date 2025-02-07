import { StyleSheet } from "react-native";
import { moderateScale, scale, scaleHeight } from "../../../utils/Helpers";
import Colors from "../../../theme/Colors";

export const styles = StyleSheet.create({

    imagePickerContainer: { 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    imageButton: {
        borderWidth: 1,
        borderColor: Colors.primary[300],
        padding: scaleHeight(16),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: moderateScale(16),
        borderRadius: moderateScale(8),
        marginVertical: scaleHeight(16)
    },
    imageIcon: {
        width: scale(40),
        height: scaleHeight(40),
    },
    imageText: {
        paddingRight: scale(91),
    },
    imagePreview: {
        width: scale(200),
        height: scaleHeight(300),
        borderRadius: moderateScale(8),
        marginTop: scaleHeight(16),
    },
});
