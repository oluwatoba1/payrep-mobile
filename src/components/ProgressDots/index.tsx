// import React from 'react';
// import { View, TouchableOpacity } from 'react-native';
// import { styles } from './styles';

// interface ThreeDotProgressProps {
//   activeDotIndex: number;
//   onDotPress: (index: number) => void;
// }

// const ThreeDotProgress = ({ activeDotIndex, onDotPress }: ThreeDotProgressProps) => {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => onDotPress(0)}>
//         <View style={[styles.dot, activeDotIndex === 0 && styles.activeDot]} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => onDotPress(1)}>
//         <View style={[styles.dot, activeDotIndex === 1 && styles.activeDot]} />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => onDotPress(2)}>
//         <View style={[styles.dot, activeDotIndex === 2 && styles.activeDot]} />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ThreeDotProgress;



import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ThreeDotProgressProps {
    activeDotIndex: number;
    onDotPress: (index: number) => void;
}

export default function ThreeDotProgress ({ activeDotIndex, onDotPress }: ThreeDotProgressProps)  {
    const dots = [0, 1, 2];

    return (
        <View style={styles.container}>
            {dots.map((dotIndex) => (
                <TouchableOpacity
                    key={dotIndex}
                    style={[styles.dot, activeDotIndex === dotIndex && styles.activeDot]}
                    onPress={() => onDotPress(dotIndex)}
                />
            ))}
        </View>
    );
};


