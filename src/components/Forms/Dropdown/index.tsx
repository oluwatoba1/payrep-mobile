import React, {useEffect, useState} from 'react';
import {Pressable, View, Image, TextInputProps, FlatList} from 'react-native';
import styles from './styles';
import ComponentImages from '@assets/images/components';
import Colors from '@theme/Colors';
import {ModalWrapper} from '@components/Modal';
import TextInput from '../TextInput';
import Pad from '@components/Pad';
import Typography from '../Typography';

interface Option {
  label: string;
  value: string;
}

interface DropdownModalProps {
  showModal: boolean;
  onClose: () => void;
  onSelect: (option: Option) => void;
  options: Option[];
}

interface DropDownProps extends TextInputProps {
  label: string;
  selectedOption?: Option;
  options?: Option[];
  onSelect?: (option: Option) => void;
  isCustomModal?: boolean;
  isLoading?: boolean;
  onTrigger?: () => void;
  error?: string;
  customDropDownStyles?: object;
}

const DropdownModal = ({
  showModal,
  onClose,
  onSelect,
  options,
}: DropdownModalProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  const onSearch = (value: string) => {
    const escapedTerm = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    setSearchText(escapedTerm);
    if (!escapedTerm) {
      setFilteredOptions(options);
      return;
    }
    const pattern = new RegExp(escapedTerm, 'i');
    setFilteredOptions(options.filter(option => pattern.test(option.label)));
  };
  return (
    <ModalWrapper visible={showModal} onClose={onClose}>
      <TextInput
        label=""
        placeholder="Search here..."
        placeholderTextColor="#828A8E"
        value={searchText}
        onChangeText={onSearch}
        leftNode={
          <Image
            source={ComponentImages.dropdDown.search}
            style={styles.searchIcon}
          />
        }
      />

      <Pad />
      <FlatList<Option>
        data={filteredOptions}
        renderItem={({item}) => (
          <Pressable
            style={styles.modalOptionContainer}
            onPress={() => onSelect(item)}>
            <Typography title={item.label} type="body-sr" />
          </Pressable>
        )}
        keyExtractor={(item, i) => String(i)}
      />
    </ModalWrapper>
  );
};

export default function Dropdown({
  label,
  selectedOption,
  onSelect = () => {},
  isCustomModal = false,
  options = [],
  onTrigger = () => {},
  error = '',
  customDropDownStyles = {},
  ...props
}: DropDownProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const _onTrigger = () => {
    setShowModal(!showModal);
  };

  return (
    <View>
      <Pressable onPress={() => (!isCustomModal ? _onTrigger() : onTrigger())}>
        <TextInput
          {...props}
          label={label}
          editable={false}
          value={selectedOption?.label || ''}
          placeholder={
            !!selectedOption?.value
              ? selectedOption?.value
              : selectedOption?.label
          }
          placeholderTextColor={
            props.placeholderTextColor || Colors.gray['base']
          }
          rightNode={<Image source={ComponentImages.dropdDown.arrowDown} />}
          error={error}
        />
      </Pressable>
      <DropdownModal
        showModal={showModal}
        onClose={_onTrigger}
        options={options}
        onSelect={option => [onSelect(option), _onTrigger()]}
      />
    </View>
  );
}
