import { useState } from "react"
import { TouchableOpacity, View } from "react-native";
import { Typography } from "../../Forms";
import { styles } from "./styles";

interface UserTypeProps {
    title: string;
    value: string;

}
interface RegistrationTabProps {
    userTypes: UserTypeProps[];
    value: string;
    onSelect: (value: string) => void;
}
export default function RegistrationTab({userTypes, value, onSelect}:RegistrationTabProps) {
   
    return (
         <View style={styles.container}>
            {userTypes.map((userType, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.tab,
                        value === userType.value && styles.activeTab,
                    ]}
                    onPress={() => onSelect(userType.value)}
                >
                    <Typography title={`${userType.title}`} style={[styles.tabText, value === userType.value && styles.activeTabText]} />
                </TouchableOpacity>
            ))}
         </View>   
    )
}