import { Pressable, View } from "react-native";
import { Button, TextInput, Typography } from "../../Forms";
import CustomModal from "..";
import { modalMainStyles } from "../styles";
import CustomDatePicker from "../../Forms/DatePicker/index.tsx";

interface IFilterModalProps {
    showModal: boolean;
    onClose: () => void;
    title: string; 
}

export default function FilterModal({
    showModal,
    onClose,
    title,
}: IFilterModalProps) {
    return (
        <CustomModal visible={showModal} onClose={onClose}>
            <View style={modalMainStyles.header}>
                <Typography title={title} />
                <Pressable style={modalMainStyles.onClose} onPress={onClose}>
                    <Typography title='Close' />
                </Pressable>
            </View>

            <View style={modalMainStyles.listContainer}>
                <CustomDatePicker defaultDate="Date of Transaction"/>
                <TextInput placeholder="Time of Transaction"/>

                <Button title="Apply Filter" onPress={onClose}/>
            </View>
        </CustomModal>
    );
}
