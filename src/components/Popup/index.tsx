import { Image, ImageURISource, Modal, View } from "react-native";
import styles from "./styles";
import { Button, Typography } from "../Forms";

interface LoaderProps {
    title: string;
    content: string;
    isVisible: boolean;
    icon: ImageURISource;
    buttonText?: string;
    onPressButton?: () => void;
}

// export default function LogoLoader (){
export default function Popup({ title, isVisible, icon, buttonText='Continue', content, onPressButton }: LoaderProps) {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={isVisible}>
            <View style={styles.loaderPage}>
                <View style={styles.loaderContainer}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'}}>
                        <Image source={icon} style={styles.icon} />
                        <View style={styles.textContainer}>
                            <Typography title={title} type="heading5-sb" style={{textAlign:'center'}}/>
                            <Typography title={content} type="body-r" style={{textAlign:'center'}}/>
                        </View>
                    </View>
                    
                    <Button title={buttonText} onPress={onPressButton}/>
                </View>
            </View>
        </Modal>

    );
}