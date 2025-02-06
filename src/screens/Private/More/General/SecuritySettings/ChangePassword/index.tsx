import { View } from "react-native";
import { MainLayout } from "../../../../../../components/Layout";
import { Button, TextInput, Typography } from "../../../../../../components/Forms";
import { generalStyles } from "../../../styles";
import { StackScreenProps } from "@react-navigation/stack";
import { MoreStackParamList } from "../../../../../../navigation/types";

type ChangePasswordScreenProps = StackScreenProps<MoreStackParamList>


export default function ChangePassword({navigation: {navigate, goBack}}:ChangePasswordScreenProps) {

    const handleNavigation = () => {
        navigate('MoreSuccessMessageScreen', {
            title: 'New Password',
            subTitle: 'Congratulations! Youve successfully changed your old password',
        })
    }

    return(
        <MainLayout backAction={() => {}}>
            <View style={generalStyles.container}>
                <Typography title="Change Password" type="heading4-sb" />
                <Typography title="Password must be at least 6 characters long and must contain at least an uppercase letter, a number & a symbol." type="subheading" />

                <View>
                    <TextInput type="password" placeholder="Old Password"  />
                    <TextInput type="password" placeholder="New Password"  />
                    <TextInput type="password" placeholder="confirm New Password"  />
                </View>

                <View style={generalStyles.buttonContainer}>
                    <Button title="Update Password" onPress={handleNavigation} />
                </View>
            </View>

        </MainLayout>
    )
}