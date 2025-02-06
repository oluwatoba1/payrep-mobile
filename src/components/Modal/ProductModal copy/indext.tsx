import { Pressable, View } from "react-native";
import SearchModal from "../SearchModal";
import { Typography } from "../../Forms";
import { styles } from "./styles";

interface IDropdownItem {
  name: string;
  code: string;
  amount: string;
}


interface ProductModalProps {
  showModal: boolean;
  options: IDropdownItem[];
  value: string;
  onClose: () => void;
  onSelect: (item: IDropdownItem) => void;

}
export default function ProductModals({
  showModal,
  onClose,
  onSelect,
  options
}:ProductModalProps) {
    const renderDropdownItem = (item: IDropdownItem) =>  (
        <Pressable onPress={() => onSelect(item)} style={styles.card}>
          <View>
            <Typography title={item.name} type='subheading-sb' />
          </View>
          <View style={styles.textContainer}>
            <Typography title={`N${item.amount}`} type='subheading-sb' />
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
          title="Select Dstv Plan"
          searchPlaceholder="Search Plan"
          renderDropdownItem={renderDropdownItem}
        />
      );
}