import { View } from "react-native";
import { MainLayout } from "../../../../components/Layout";
import styles from "./styles";
import { Button, TextInput, Typography } from "../../../../components/Forms";
import Pad from "../../../../components/Pad";
import Colors from "../../../../theme/Colors";
import CustomDatePicker from "../../../../components/Forms/DatePicker";

export default function Transaction() {
    let User = {
        'id': '',
        'name': '',
        'account': '2409678023'
    }
    
    const downloadStatement = () => {

    }
    return (
        <MainLayout backAction={() => null}>
            <View style={styles.container}>
                <Typography title="Request Statement" type="heading4-sb" />
                <Pad size={16} />
                <View style={styles.accountDetails}>
                    <Typography title="Account Number" type="label-sb" color={Colors.gray['400']} />
                    <Typography title={User.account} type="body-sb" color={Colors.gray[600]} />
                </View>
                <Pad size={29} />
                <View style={styles.datesContainer}>
                    {/* start date */}
                    <CustomDatePicker />
                    {/* end date */}
                    <CustomDatePicker />
                    {/* no type=email/mail */}
                    <TextInput placeholder="Send to Email Address"/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Download Statement" onPress={downloadStatement}/>
                </View>
            </View>
        </MainLayout>
    );
}