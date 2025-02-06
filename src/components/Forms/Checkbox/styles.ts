import { StyleSheet } from "react-native";
import { scale, scaleHeight } from "../../../utils/Helpers";

export const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: scaleHeight(40),
      
    },
    textContainer: {
        flex: 1,
    },
    checkboxText: {
      flexShrink: 1
    },
  });