import { FlatList, Image, Pressable, View } from "react-native";
import { Typography } from "../../Forms";
import ComponentImages from "../../../../assets/images/components";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import SearchInput from "../../Forms/SearchInput";
import CustomModal from "..";
import { modalMainStyles } from "../styles";

interface ISearchModalProps<T> {
  showModal: boolean;
  onClose: () => void;
  options: T[];
  value: string;
  onSelect: (item: T) => void;
  title: string;
  searchPlaceholder?: string;
  renderDropdownItem: (item: T) => JSX.Element;
  showSearchInput?: boolean;  // New flag to control the search input visibility
}

export default function SearchModal<T extends { name: string }>({
  showModal,
  onClose,
  options,
  value,
  onSelect,
  title,
  searchPlaceholder,
  renderDropdownItem,
  showSearchInput = true, 
}: ISearchModalProps<T>) {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<T[]>([]);

  const onSearch = (value: string) => {
    const escapedTerm = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    setSearchText(escapedTerm);
    if (!escapedTerm) {
      setFilteredOptions(options);
      return;
    }
    const pattern = new RegExp(escapedTerm, 'i');
    setFilteredOptions(options.filter(option => pattern.test(option.name)));
  };

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  return (
    <CustomModal visible={showModal} onClose={onClose}>
      <View style={modalMainStyles.header}>
        <Typography title={title} />
        <Pressable style={modalMainStyles.onClose} onPress={onClose}>
          <Typography title='Close' />
        </Pressable>
      </View>

      {/* Conditionally render the search input field */}
      {showSearchInput && (
        <View style={modalMainStyles.searchContainer}>
          <SearchInput
            searchPlaceholder={searchPlaceholder}
            searchText={searchText}
            onSearch={onSearch}
          />
        </View>
      )}

      <View style={modalMainStyles.listContainer}>
        {filteredOptions.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Image source={ComponentImages.transactions.emptyBox} style={modalMainStyles.icon} />
            <Typography title="Sorry you do not have beneficiary added!" type='body-r' />
          </View>
        ) : (
          <FlatList<T>
            data={filteredOptions}
            renderItem={({ item }) => renderDropdownItem(item)}
            keyExtractor={item => item.code}
          />
        )}
      </View>
    </CustomModal>
  );
}
