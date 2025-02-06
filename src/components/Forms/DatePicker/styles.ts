import { StyleSheet } from "react-native";
import { scale, scaleHeight } from "../../../utils/Helpers";
import { baseDP } from "../../../utils/Constants";

export const styles = StyleSheet.create({
    pressable: {
      width: '100%',
      marginBottom: scaleHeight(16),
    },
    container: {
      borderWidth: scale(1),
      borderRadius: scaleHeight(baseDP * 1.4),
      height: scaleHeight(50),
      padding: scaleHeight(12)
    },
  });