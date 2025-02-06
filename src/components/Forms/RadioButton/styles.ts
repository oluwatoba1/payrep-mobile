import { StyleSheet, ViewStyle,  ImageStyle, Animated } from "react-native";
import { moderateScale, scale, scaleHeight } from "../../../utils/Helpers";
import Colors from "../../../theme/Colors";

interface Styles {
  container: ViewStyle;
  optionContainer: ViewStyle;
  image: ImageStyle;
  checkbox: ViewStyle;
  checkedCheckbox: ViewStyle;
  uncheckedCheckbox: ViewStyle;
  checkboxContainer: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: moderateScale(16),
  },
  optionContainer: {
    height: scaleHeight(44),
    borderRadius: moderateScale(8),
    borderWidth: moderateScale(1),
    paddingHorizontal: scale(16),
    paddingVertical: scaleHeight(8),
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between'
  },
  image: {
    width: scale(20),
    height: scaleHeight(20),
  },
  checkbox: {
    width: scale(20),
    height: scaleHeight(20),
    borderRadius: moderateScale(10), 
    borderWidth: moderateScale(1),
    borderColor: Colors.black, 
    marginRight: scale(8),
  },
  checkedCheckbox: {
    backgroundColor: Colors.black, 
  }, 
  uncheckedCheckbox: {
    backgroundColor: 'transparent',  
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export const getAnimatedViewStyles = (animatedScale: Animated.Value): ViewStyle => ({
    transform: [{ scale: animatedScale }],
    marginRight: scale(8),
  });

export default styles;
