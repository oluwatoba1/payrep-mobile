import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import IconImages from '../../../assets/images/appIcons';
import { styles } from './styles';
import { Typography } from '../Forms';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../../navigation/types';
// import { MaterialIcons } from '@expo/vector-icons'; // Uncomment if using MaterialIcons

interface Step {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  screen: string;
}

interface ProfileStepListProps {
  steps: Step[];
  onStepPress: (id: number) => void;
}

type ProfileStepListNavigationProps = StackScreenProps<HomeStackParamList>

export const ProfileStepList: React.FC<ProfileStepListProps> = ({ steps, onStepPress }) => {
    const navigation = useNavigation<ProfileStepListNavigationProps>()
    const handleOnPress = (item:string) => {
        console.log('heyyyy');
        
        navigation.navigate(item)
    }

  return (
    <ScrollView>
      {steps.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.stepContainer}
          onPress={() => handleOnPress(item.screen)}
          
        >
          <View style={styles.iconAndLineContainer}>
            <View style={item.completed ? styles.successContainer : styles.numberContainer}>
              {item.completed ? (
                <Image source={IconImages.arrows.checkFill} style={styles.icon} />
              ) : (
                <Typography title={`${item.id}`} type='body-sb' />
              )}
            </View>
            {item.id < steps.length && (
              <View style={styles.dottedLineContainer}>
                <View style={styles.dottedLine} />
              </View>
            )}
          </View>
          <View style={styles.textContainer}>
            <Typography title={item.title} type='body-sb' />
            <Typography type='body-r' title={item.completed ? 'Completed' : item.description} />
          </View>
          {!item.completed && (
            <Image source={IconImages.arrows.yellowRightArrow} style={styles.rightIcon} />
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};


