import { Image, View } from "react-native";
import { MainLayout } from "../../../../../components/Layout";
import { generalStyles } from "../../styles";
import { Button, Typography } from "../../../../../components/Forms";
import { styles } from "./styles";
import ScreenImages from "../../../../../../assets/images/screens";

export default function DeleteAccount() {
    return (
        <MainLayout backAction={() => {}}>
            <View style={generalStyles.container}>
                <Typography title="Delete Account" type="heading4-sb"/>
                <View style={styles.container}>
                    <Typography title="We are Sorry to see you leaving! Deleting your account will do the following. Are you sure of deleting your account?" type="subheading" />

                    <View style={styles.deleteItemContainer}>
                        <Image style={styles.deleteImageStyle} source={ScreenImages.profileScreen.closeLineIcon} />
                        <Typography title="Delete all of your account information" type="subheading" />
                    </View>
                    <View style={styles.deleteItemContainer}>
                        <Image style={styles.deleteImageStyle} source={ScreenImages.profileScreen.closeLineIcon} />
                        <Typography title="Log you out on all devices" type="subheading" />
                    </View>
                </View>
                <View style={[generalStyles.buttonContainer, styles.deleteAccountButtonContainer]}>
                    <Button title="Keep My Account" containerStyle={styles.keepAccountButton} />
                    <Button title="Delete My Account" containerStyle={styles.deleteAccountButton} />
                </View>
            </View>
        </MainLayout>
    )
}