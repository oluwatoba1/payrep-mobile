import React, { useEffect, useRef } from 'react';
import { View, Text, Pressable, Animated, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Typography } from '../Forms';
import { styles } from './styles';

interface TooltipProps {
  visible: boolean;
  onClose: () => void;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Tooltip: React.FC<TooltipProps> = ({ visible, onClose, text, containerStyle, textStyle }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  if (!visible ) return null;

  return (
    <Animated.View style={[styles.tooltip, { opacity: fadeAnim }, containerStyle]}>
      <Pressable style={styles.tooltipArrow}  />
      <View style={styles.tooltipContent}>
        <Typography type='label-r' title={text} style={[styles.text, textStyle]} />
      </View>
    </Animated.View>
  );
};


export default Tooltip;
