import { Dimensions, StyleSheet } from "react-native";
import { scale, scaleHeight } from "../../../utils/Helpers";

export const styles = StyleSheet.create({
    container: {
      paddingVertical: scaleHeight(16),
      paddingHorizontal: scale(24),
      maxHeight: Dimensions.get('window').height * 0.8,
      flex: 1
    },
    title: {
      marginBottom:scaleHeight(12),
    },
    description: {
      marginBottom:scaleHeight(16),
    },
    list: {
      marginBottom:scaleHeight(24),
    },
    listItemContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom:scaleHeight(8),
    },
    numbering: {
      marginRight: scale(8),
    },
    listItemText: {
      flex: 1,
    },
    buttonContainer: {
      paddingHorizontal: scale(24),
      paddingBottom:scaleHeight(16),
    },
  });
  