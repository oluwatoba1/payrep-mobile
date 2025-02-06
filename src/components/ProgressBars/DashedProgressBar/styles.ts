import { StyleSheet } from "react-native";
import { moderateScale, scale } from "../../../utils/Helpers";
import Colors from "../../../theme/Colors";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    dash: {
      width: scale(26.88),
      height: 8,
      backgroundColor: Colors.gray['100'],
      borderRadius: moderateScale(24)
    },
    dashFilled: {
      backgroundColor: Colors.success['1000'], 
    },
  });