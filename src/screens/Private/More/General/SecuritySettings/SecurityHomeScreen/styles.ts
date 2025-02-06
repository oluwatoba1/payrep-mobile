import { StyleSheet } from "react-native";
import Colors from "../../../../../../theme/Colors";

export const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: 'transparent',
        shadowColor: Colors.black,
        shadowOffset: {
        width: 0,
        height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        padding: 0
    },
    cardContainer: {
        borderBottomWidth: 0
    }
})