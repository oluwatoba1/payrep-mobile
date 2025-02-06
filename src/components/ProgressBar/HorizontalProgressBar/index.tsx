import React from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';
import { styles } from "./styles"


interface HorizontalProgressBarProps {
    progress: number; 
    text?: string; 
    textStyle?: TextStyle; 
    containerStyle?: ViewStyle 
    barBackgroundContainerStyle?: ViewStyle[] | ViewStyle; 
    progressBarStyle?: ViewStyle[] | ViewStyle; 
}

const HorizontalProgressBar: React.FC<HorizontalProgressBarProps> = ({
    progress,
    text,
    textStyle,
    containerStyle,
    barBackgroundContainerStyle,
    progressBarStyle,
}) => {
    
    const clampedProgress = Math.max(0, Math.min(progress, 100));
    console.log(clampedProgress);
    

    return (
        <View style={[styles.container, containerStyle]}>
            <View
                style={[styles.backgroundBar, barBackgroundContainerStyle]}
            >
                <View
                    style={[
                        styles.progressBar,
                        progressBarStyle,
                        { width: `${clampedProgress}%` },
                    ]}
                />
            </View>
            {text && (
                <Text style={[styles.text, textStyle]}>{`${clampedProgress}% ${text}`}</Text>
            )}
        </View>
    );
};

export default HorizontalProgressBar;
