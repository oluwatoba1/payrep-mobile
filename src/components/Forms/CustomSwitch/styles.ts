import { StyleSheet } from "react-native";
import { scale, scaleHeight } from "../../../utils/Helpers";


export const styles = StyleSheet.create({
    switch: {
        width: scale(28), 
        height: scaleHeight(16),
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    },
  });