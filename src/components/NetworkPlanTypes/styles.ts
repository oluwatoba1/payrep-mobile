import { StyleSheet } from "react-native";
import { scale, scaleHeight } from "../../utils/Helpers";
import Colors from "../../theme/Colors";

export const styles = StyleSheet.create({
    container: {
      borderWidth: scale(1),
      borderColor: Colors.gray[50],
      borderRadius: scaleHeight(8),
      padding: scaleHeight(12),
      alignItems: 'center',
      justifyContent: 'center'
    },
    list: {
      paddingBottom: scaleHeight(12),
    },
    row: {
      justifyContent: 'space-between',
    },
    itemContainer: {
      margin: 5,
      paddingVertical: scaleHeight(12),
      paddingHorizontal: scale(12),
      borderRadius: scaleHeight(8),
      alignItems: 'center',
      // justifyContent: 'center',
      flexDirection: 'row',
      gap: scale(8),
      backgroundColor: Colors.gray[50],
      width: '50%'
    },
    icon: {
      width: scale(24),
      height: scaleHeight(24),
      resizeMode: 'contain',
    },
  });