import { Text, TextStyle, View } from "react-native";
import { styles } from "./styles";

interface PayrepTextProps {
    text?: string;
    textStyle?: TextStyle;
}
export default function PayrepText({text, textStyle}:PayrepTextProps) {
    return (
            <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
    )
}