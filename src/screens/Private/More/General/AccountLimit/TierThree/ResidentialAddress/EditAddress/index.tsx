import { View } from "react-native";
import { MainLayout } from "../../../../../../../../components/Layout";
import { mainAccountLimitStyles } from "../../../styles";
import { Button, TextInput, Typography } from "../../../../../../../../components/Forms";

export default function EditAddress() {
    return (
        <MainLayout backAction={() => {}}>
            <View style={mainAccountLimitStyles.container}>
                <View style={mainAccountLimitStyles.heading}>
                    <Typography title="Edit Residential Address" type="heading4-sb" />
                    <Typography title="Please provide your recent full address of your residence." type="body-r" />
                </View>
                <View style={{}}>
                    <TextInput placeholder="House Number" />
                    <TextInput placeholder="Street name" />
                    <TextInput placeholder="City" />
                    <TextInput placeholder="State" />
                    <TextInput placeholder="L.G.A" />
                </View>
                <View style={mainAccountLimitStyles.buttonContainer}>
                    <Button title="Update" />
                </View>
            </View>
        </MainLayout>
    )
}