import React, {useRef, useEffect} from 'react';
import {
  Animated,
  Image,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  Pressable,
} from 'react-native';
import Typography from '../Typography';
import IconImages from '../../../../assets/images/appIcons';
import {styles} from './styles';
import {Row} from '@components/Layout';

interface CheckboxProps {
  label: string;
  value: boolean;
  onPress: () => void;
}

export default function Checkbox({label, value, onPress}: CheckboxProps) {
  return (
    <Row alignItems="center" gap={5} containerStyle={{width: '90%'}}>
      <Pressable onPress={onPress} style={styles.checkbox}>
        {value ? <View style={styles.check} /> : <View />}
      </Pressable>
      <Typography title={label} type="body-r" />
    </Row>
  );
}
