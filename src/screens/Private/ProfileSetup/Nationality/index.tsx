import { View } from "react-native";
import { Button, TextInput, Typography } from "../../../../components/Forms";
import { MainLayout } from "../../../../components/Layout";
import { mainProfileCompletionStyles } from "../mainProfileCompletionStyles";
import { useAppDispatch } from "../../../../store/hooks";
import { styles } from "./styles";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../../../navigation/types";
import { setProfileField } from "../../../../store/slices/profileCompletionSlice";
import DashedProgressBar from "../../../../components/ProgressBars/DashedProgressBar";

type NationalityScreenNavigationProps = StackScreenProps<ProfileStackParamList>

export default function NationalityScreen({ navigation: { navigate } }: NationalityScreenNavigationProps) {
    const dispatch = useAppDispatch();

    const handleNavigation = () => {
        navigation.navigate('MeansOfIdentificationScreen')
    }
    return (
        <MainLayout backAction={() => { }}>
            <View style={mainProfileCompletionStyles.container}>
                <View style={mainProfileCompletionStyles.titleContainer}>
                    <Typography title="Nationality" type="heading4-sb" />
                    <DashedProgressBar progress={2} />
                    <Typography type="body-r" title="Please provide your country name" />

                </View>
                <View style={styles.container}>

                    {/* a dropdown with default being nigeria */}
                    <TextInput type='text' placeholder='Nationality'
                        value={country}
                        onChangeText={(text) => dispatch(setProfileField({ key: 'country', value: text }))}
                    />
                </View>
                <View style={mainProfileCompletionStyles.buttonContainer} >
                    <Button title="Save" onPress={handleNavigation} />
                </View>
            </View>
        </MainLayout>
    )
}