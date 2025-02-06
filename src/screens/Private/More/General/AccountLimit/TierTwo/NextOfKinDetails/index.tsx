import { View } from "react-native";
import { MainLayout } from "../../../../../../../components/Layout";
import { Button, TextInput, Typography } from "../../../../../../../components/Forms";
import { mainAccountLimitStyles } from "../../styles";
import { StackScreenProps } from "@react-navigation/stack";
import { MoreStackParamList } from "../../../../../../../navigation/types";
import ScreenImages from "../../../../../../../../assets/images/screens";



type  NextOfKinDetailScreenProps = StackScreenProps<MoreStackParamList>

export default function NextOfKinDetail({navigation:{navigate, goBack}}:NextOfKinDetailScreenProps) {
    const handleSuccessMessage = () => {
        navigate('MoreSuccessMessageScreen', {
            title: 'Account Upgrade',
            subTitle: 'Congratulations! Youve successfully updgraded your account to Tier 2',
            logo: ScreenImages.MoreScreen.successTierTwoIcon
        })
    }
    return (
        <MainLayout backAction={() => goBack()}>
            <View style={[mainAccountLimitStyles.container, {flex:1}]}>
                <View>
                    <Typography type="heading4-sb" title="Upgrade to Tier 2" style={{marginBottom:16}} />
                      <Typography type="body-r" title="Please provide your next of kin details" />
                </View>
                <View style={{flex:1}}>
                    <TextInput placeholder="First Name" />
                    <TextInput placeholder="Last Name" />
                    <TextInput placeholder="Relationship" />
                    <TextInput placeholder="Phone Number" type="phone" />
                </View>
                <View>
                    <Button title="Save" onPress={handleSuccessMessage} />
                </View>
            </View>
        </MainLayout>
    )
}