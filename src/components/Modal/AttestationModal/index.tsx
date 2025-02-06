import React from 'react';
import { View } from "react-native";
import CustomModal from '..';
import Checkbox from '../../Forms/Checkbox';
import { Button, Typography } from "../../Forms";
import { modalMainStyles } from '../styles';
import { styles } from './styles';

interface AttestationModalProps {
  showModal: boolean;
  onClose: () => void;
  title: string;
  description: string;
  agreement: string;
  isChecked: boolean;
  onCheckboxChange: () => void;
  onPressSubmit?: () => void;
}

export default function AttestationModal({
  showModal,
  onClose,
  title,
  description,
  agreement,
  isChecked,
  onCheckboxChange,
  onPressSubmit
}: AttestationModalProps) {
  const handleSubmit = () => {
    if (onPressSubmit) {
      onPressSubmit()
    }
    onClose()

  }
  return (
    <CustomModal visible={showModal} onClose={onClose}>
      <View style={[modalMainStyles.modalContent, styles.container]}>
        <Typography title={title} />
        <Typography title={description} type='body-r' />
        <Checkbox
          text={agreement}
          isChecked={isChecked}
          onPress={onCheckboxChange}
        />
      </View>
      <View>
        <Button title='Submit' onPress={handleSubmit} />
      </View>
    </CustomModal>
  );
}
