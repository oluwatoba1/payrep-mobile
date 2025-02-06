import React, { useRef, useEffect } from "react";
import {
  Animated,
  Image,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from "react-native";
import Typography from "../Typography";
import IconImages from "../../../../assets/images/appIcons";
import { styles } from "./styles";

interface CheckboxProps {
  containerStyle?: ViewStyle;
  text: string;
  onPress: () => void;
  isChecked: boolean;
  textStyle?: TextStyle;
  checkboxStyle?: ViewStyle;
  animationDuration?: number;
  iconSize?: number;
}

const Checkbox = ({
  containerStyle,
  text,
  isChecked,
  textStyle,
  checkboxStyle,
  onPress,
  animationDuration = 500,
  iconSize = 30,
}: CheckboxProps) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, [isChecked]);

  const startAnimation = () => {
    const toValue = isChecked ? iconSize : 0;
    Animated.timing(animatedWidth, {
      toValue,
      duration: animationDuration,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <AnimatedCheckbox
        isChecked={isChecked}
        onPress={onPress}
        animatedWidth={animatedWidth}
        checkboxStyle={checkboxStyle}
        iconSize={iconSize}
      />
      <View style={styles.textContainer}>
        <Typography style={[styles.checkboxText, textStyle]} title={text} />
      </View>
    </View>
  );
};

interface AnimatedCheckboxProps {
  isChecked: boolean;
  onPress: () => void;
  animatedWidth: Animated.Value;
  checkboxStyle?: ViewStyle;
  iconSize: number;
}

const AnimatedCheckbox = ({
  isChecked,
  onPress,
  animatedWidth,
  checkboxStyle,
  iconSize,
}: AnimatedCheckboxProps) => (
  <TouchableOpacity onPress={onPress} style={[checkboxStyle]}>
    <Animated.View style={{ width: animatedWidth }}>
      <Image
        source={isChecked ? IconImages.icon.checkmark : IconImages.icon.unCheckmark}
        style={{ width: iconSize, height: iconSize }}
      />
    </Animated.View>
  </TouchableOpacity>
);



export default Checkbox;
