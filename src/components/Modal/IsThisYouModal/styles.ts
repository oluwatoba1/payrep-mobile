import { moderateScale, scaleHeight } from "@utils/Helpers";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        height: scaleHeight(300),
        width: '70%',
        resizeMode: 'contain',
        borderRadius: moderateScale(16),
    }
});

export default styles;