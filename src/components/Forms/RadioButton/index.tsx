import React, { useEffect, useRef } from "react";
import { Animated, Image, ImageProps, Pressable, PressableProps, TextStyle, View, ViewStyle } from "react-native";
import Typography from "../Typography";
import  styles, { getAnimatedViewStyles } from "./styles";
import LinearGradient from "react-native-linear-gradient";
import { Circle, RadialGradient, Stop, Svg } from "react-native-svg";
import Colors from "../../../theme/Colors";

interface Option {
  value: string | number;
  title: string;
  width?: "auto" | number;
  buttonIcon?: ImageProps;
  description?: string;
}

interface ButtonTabProps extends PressableProps {
  options: Option[];
  selectedValue: string | number | undefined;
  onSelect: (value: string | number | undefined) => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  optionContainerStyle?: ViewStyle;
}

export default function ButtonTab({
  options,
  selectedValue,
  onSelect,
  containerStyle,
  textStyle,
  optionContainerStyle,
  ...props
}: ButtonTabProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((option) => {
        const isChecked = option.value === selectedValue;
        const animatedScale = useRef(new Animated.Value(1)).current;
        const animatedOpacity = useRef(new Animated.Value(0)).current;

        useEffect(() => {
          Animated.timing(animatedOpacity, {
            toValue: isChecked ? 1 : 1,
            duration: 300,
            useNativeDriver: true,
          }).start();

          Animated.spring(animatedScale, {
            toValue: isChecked ? 1.1 : 1,
            friction: 5,
            useNativeDriver: true,
          }).start();
        }, [isChecked]);

        return (
          <Pressable
            key={option.value}
            style={[
              styles.optionContainer,
              { width: option.width || "auto" },
              optionContainerStyle,
            ]}
            onPress={() => onSelect(option.value)}
            {...props}
          >
            <View style={styles.checkboxContainer}>
              <Animated.View style={getAnimatedViewStyles(animatedScale)}>
                { isChecked ? (<Svg width={20} height={20}>
                  <RadialGradient
                    id="grad1"
                    cx="50%"
                    cy="50%"
                    r="50%"
                    fx="50%"
                    fy="50%"
                    gradientUnits="userSpaceOnUse"
                  >
                    <Stop offset="30%" stopColor={Colors.primary.base} />
                    <Stop offset="50%" stopColor="black" />
                  </RadialGradient>
                  <Circle cx="50%" cy="50%" r="50%" fill="url(#grad1)" />
                </Svg>
                ): <View style={[styles.checkbox, { backgroundColor: 'white' }]} />
                }
              </Animated.View>
              <View>
                <Typography title={option.title} type="label-sb" style={textStyle} />
                {option.description && <Typography title={option.description} type="body-r" style={textStyle} />}
              </View>
            </View>
            {option.buttonIcon && <Image source={option.buttonIcon} style={styles.image} />}
          </Pressable>
        );
      })}
    </View>
  );
}
