import React from 'react';
import { Pressable, View } from "react-native";
import SearchModal from "../SearchModal";
import { Typography } from "../../Forms";
import { modalMainStyles } from '../styles';


interface IDropdownItem {
  name: string;
  code: string;
  phoneNumber: string;
}

interface ContactModalProps {
  showModal: boolean;
  options: IDropdownItem[];
  value: string;
  onClose: () => void;
  onSelect: (item: IDropdownItem) => void;
}


export default function ContactModal({
  showModal,
  onClose,
  onSelect,
  options,
}: ContactModalProps) {

  const renderDropdownItem = (item: IDropdownItem) =>  (
    <Pressable onPress={() => onSelect(item)} style={modalMainStyles.card}>
      <View style={modalMainStyles.textContainer}>
        <Typography title={item.name} type='subheading-sb' />
        <Typography title={item.phoneNumber} type='body-r' />
      </View>
    </Pressable>
  );

  return (
    <SearchModal<IDropdownItem>
      showModal={showModal}
      onClose={onClose}
      options={options}
      value=""
      onSelect={onSelect}
      title="Select Contact"
      searchPlaceholder="Search Contact"
      renderDropdownItem={renderDropdownItem}
    />
  );
}

