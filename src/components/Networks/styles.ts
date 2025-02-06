import { StyleSheet } from "react-native";
import Colors from "../../theme/Colors";
import { scale, scaleHeight } from "../../utils/Helpers";

const getDynamicStyles = (name: string) => {
    let backgroundColor:string;
    backgroundColor = Colors.white
    return StyleSheet.create({
      itemContainer: {
        backgroundColor,
      },
    });
  };
  
  const styles = StyleSheet.create({
    container: {
      // marginVertical: scaleHeight(10), 
    },
    list: {
      paddingVertical: scaleHeight(12),

    },
    itemContainer: {
      marginHorizontal: scale(8),
      paddingVertical: scaleHeight(18),
      paddingHorizontal: scale(6),
      borderRadius: scaleHeight(8),
    },
    icon: {
      width: scale(64),
      height: scaleHeight(32),
      resizeMode: "contain",
    },
  });

export {styles, getDynamicStyles}