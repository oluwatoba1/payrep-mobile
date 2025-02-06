import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface DashedProgressBarProps {
  progress: number; 
  numberOfDashes?: number
}

const DashedProgressBar: React.FC<DashedProgressBarProps> = ({ progress, numberOfDashes=7 }) => {
  
  
  return (
    <View style={styles.container}>
      {Array.from({ length: numberOfDashes }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dash,
            index < progress && styles.dashFilled,
          ]}
        />
      ))}
    </View>
  );
};


export default DashedProgressBar;
