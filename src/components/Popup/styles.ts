import { StyleSheet } from "react-native";
import Colors from "../../theme/Colors";
import { moderateScale, scale, scaleHeight } from "../../utils/Helpers";

// const left = (50% - 64/2)

const styles = StyleSheet.create({
    loaderPage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    loaderContainer: {
        backgroundColor: Colors.white,
        width: 'auto',
        height: scaleHeight(305),
        borderRadius: 16,
        position: 'absolute',
        padding: scale(24),
        gap: scaleHeight(24),
        marginHorizontal: scale(58)

    },
    icon: {
        width: scale(141.58),
        height: scale(112),
    },
    textContainer: {
        paddingHorizontal: scale(20),
        paddingVertical: 0,
        gap: scaleHeight(8),
        width: '100%',
        textAlign: 'left'
    }
})

export default styles;