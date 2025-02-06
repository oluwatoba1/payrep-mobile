import {FlatList, Image, ImageProps, Pressable, Text, View} from 'react-native';
import {DropDownStyles} from './styles';
import CustomModal from '..';
import ComponentImages from '../../../../assets/images/components';
import {SearchInput, TextInput, Typography} from '../../Forms';
import {useEffect, useState} from 'react';
import { modalMainStyles } from '../styles';

interface IDropdownItem {
  name: string;
  code: string;
  image?: ImageProps
}

interface BankModalProps {
  showModal: boolean;
  onClose: () => void;
  options: IDropdownItem[];
  value: string;
  onSelect: (item: IDropdownItem) => void;
  bankSearchPlaceHolder?: string;
  bankModalTitle: string;

}

export default function BankModal({
  showModal,
  onClose,
  options,
  value,
  onSelect,
  bankSearchPlaceHolder = '',
  bankModalTitle = ''
}: BankModalProps) {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredDropdownOptions, setFilteredDropdownOptions] = useState<
    IDropdownItem[]
  >([]);

  const onSearch = (value: string) => {
    const escapedTerm = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    setSearchText(escapedTerm);
    if (!escapedTerm) {
      setFilteredDropdownOptions(options);
      return;
    }
    const pattern = new RegExp(escapedTerm, 'i');

    setFilteredDropdownOptions(
      options.filter((option: IDropdownItem) => pattern.test(option.name)),
    );
  };

  const handleSelect = (item: IDropdownItem) => {
    onSelect(item);
    onClose();
  };

  useEffect(() => {
    setFilteredDropdownOptions(options);
  }, [options]);

  const DropdownItem = ({...item}: IDropdownItem) => (
    <Pressable style={DropDownStyles.item} onPress={() => handleSelect(item)}>
      {/* bank icon */}
      <View style={DropDownStyles.bankTitle}>
        {item.image && <Image source={item.image} style={DropDownStyles.bankImage} />}
        <Typography title={item.name} type='subheading-sb' />
      </View>
      <View style={DropDownStyles.checkbox}>
      {value === item.code ? (
          <Image style={DropDownStyles.checkbox} source={ComponentImages.Wallet.checkMarked} />
        ) : (
          <Image style={DropDownStyles.checkbox} source={ComponentImages.Wallet.unCheckedMark} />
        )}
      </View>
    </Pressable>
  );
  return (
    <CustomModal visible={showModal} onClose={onClose}>
      <View style={DropDownStyles.modalHeader}>
        <Typography title={bankModalTitle} />
        <Pressable style={DropDownStyles.buttonClose} onPress={onClose}>
          <Typography title='Close' />
        </Pressable>
      </View>
      <View style={modalMainStyles.searchContainer}>
        <SearchInput 
          searchPlaceholder={bankSearchPlaceHolder}
          searchText={searchText}
          onSearch={onSearch}
        />
      </View>
      {filteredDropdownOptions.length > 0 ? (
        <FlatList<IDropdownItem>
          data={filteredDropdownOptions}
          renderItem={({item}) => <DropdownItem {...item} />}
          keyExtractor={item => item.code}
        />
      ) : (
        <View style={DropDownStyles.emptyContainer}>
          <Image source={ComponentImages.transactions.emptyBox} style={DropDownStyles.emptyIcon} />
          <Typography title={`Sorry!, you do not have a  bank added`} type="body-r" />
        </View>
      )}
    </CustomModal>
  );
}
