import React from 'react';
import {Pressable, View, TextInput, Image, TextInputProps} from 'react-native';
import {DropDownStyles} from './styles';
import ComponentImages from '../../../../assets/images/components';
import Colors from '../../../theme/Colors';

interface DropDownProps extends TextInputProps {
  label: string;
  value: string;
  onTrigger: () => void;
  customDropDownStyles?: object
}

const DropDown: React.FC<DropDownProps> = ({
  label,
  value,
  onTrigger = () => null,
  customDropDownStyles = {},
  ...props
}) => {
  return (
    <View style={[DropDownStyles.centeredView, customDropDownStyles]}>
      <Pressable style={DropDownStyles.button} onPress={onTrigger}>
        <TextInput
          editable={false}
          style={DropDownStyles.dropdownText}
          value={value || ''}
          placeholder={!!value ? value : label}
          placeholderTextColor={props.placeholderTextColor || Colors.gray['base']}
        />
        <Image source={ComponentImages.dropdDown.arrowDown} />
      </Pressable>
    </View>
  );
};

export default DropDown;
