import React from 'react';
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import CustomModal from '..';
import Checkbox from '../../Forms/Checkbox';
import { Button, Typography } from "../../Forms";
import { modalMainStyles } from '../styles';
import { styles } from './styles';
// import { styles } from './styles';

interface ListItemProps {
    numbering: number;
    item: string;
}

interface IndemnityModalProps {
  showModal: boolean;
  onClose: () => void;
  title: string;
  description: string;
  listItems: string[];
  onSubmit: () => void;
}

const ListItem = ({ numbering, item }: ListItemProps) => (
  <View style={styles.listItemContainer}>
    <Typography title={`${numbering}.`} type="label-r" style={styles.numbering} />
    <Typography title={item} type="label-r" style={styles.listItemText} />
  </View>
);

export default function AttestationModal({
  showModal,
  onClose,
  title,
  description,
  listItems,
  onSubmit
}: IndemnityModalProps) {
  return (
    <CustomModal visible={showModal} onClose={onClose}>
      <View style={[modalMainStyles.modalContent, styles.container]}>
        <Typography title={title} type="heading5-sb" style={styles.title} />
        <Typography title={description} type="label-r" style={styles.description} />
        
        <FlatList
          data={listItems}
          renderItem={({ item, index }) => <ListItem numbering={index + 1} item={item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Submit' onPress={onSubmit} />
      </View>
    </CustomModal>
  );
}
