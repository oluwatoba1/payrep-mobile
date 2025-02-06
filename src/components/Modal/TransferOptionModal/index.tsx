import React from "react";
import { FlatList, Pressable, View, StyleSheet, Image } from "react-native";
import { Typography } from "../../Forms";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PrivateNavigatorParamList } from "../../../navigation/types";
import { modalMainStyles } from "../styles";
import IconImages from "../../../../assets/images/appIcons";
import { scale, scaleHeight } from "../../../utils/Helpers";
import Colors from "../../../theme/Colors";
import ModalWrapper from "../ModalWrapper";


interface IDropdownItem {
    id: number;
    title: string;
    screen: string;
}

interface TransferOptionModalProps {
    showModal: boolean;
    onClose: () => void;
    // onSelect: (item: IDropdownItem) => void;
}


const TransferOptionModal: React.FC<TransferOptionModalProps> = ({ showModal, onClose }) => {
    const navigation = useNavigation<StackNavigationProp<PrivateNavigatorParamList>>();

    const ITEMS: IDropdownItem[] = [
        { id: 1, title: "Transfer to a Payrep Account", screen: "PayrepBankTransferScreen" },
        { id: 2, title: "Transfer to Other Banks", screen: "BankTransferScreen" },

    ]

    const handleSelect = (item: IDropdownItem) => {
        navigation.navigate('BottomTabs', {
            screen: 'Home',
            params: {
                screen: item.screen,
            },
        });
        onClose();
    };

    const renderItem = ({ item }: { item: IDropdownItem }) => (
        <Pressable style={modalMainStyles.item} onPress={() => handleSelect(item)}>
            <Typography title={item.title} type="body-r" color={Colors.gray['base']} />
            <Image source={IconImages.arrows.blackRightArrow} style={{ width: scale(24), height: scaleHeight(24) }} />
        </Pressable>
    );

    return (
        <ModalWrapper visible={showModal} onClose={onClose}>
            <View style={modalMainStyles.container}>
                <View style={modalMainStyles.header}>
                    <Typography title="Select Send Options" type="body-sb" />
                    <Pressable onPress={onClose} style={modalMainStyles.onClose}>
                        <Typography title="Close" type="body-sb" />
                    </Pressable>
                </View>
                <View style={modalMainStyles.listContainer}>
                    <FlatList
                        data={ITEMS}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </ModalWrapper>
    );
};



export default TransferOptionModal;
