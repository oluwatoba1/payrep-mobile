import { Pressable, View } from "react-native";
import { Button, TextInput, Typography } from "../../Forms";
import CustomModal from "..";
import { modalMainStyles } from "../styles";
import { scaleHeight } from "../../../utils/Helpers";

interface IDisputesModalProps {
    showModal: boolean;
    onClose: () => void;
    title: string;
}

export default function DisputesModal({
    showModal,
    onClose,
    title,
}: IDisputesModalProps) {
    return (
        <CustomModal visible={showModal} onClose={onClose}>
            <View style={modalMainStyles.header}>
                <Typography title={title} />
                <Pressable style={modalMainStyles.onClose} onPress={onClose}>
                    <Typography title='Close' />
                </Pressable>
            </View>

            <View style={modalMainStyles.listContainer}>
                <TextInput placeholder="Message" customInputContainerStyle={{height: scaleHeight(105)}} textBox/>

                <Button title="Submit Dispute" onPress={onClose} />
            </View>
        </CustomModal>
    );
}
