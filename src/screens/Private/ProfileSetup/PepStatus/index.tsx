import { View } from "react-native";
import { Button, TextInput, Typography } from "../../../../components/Forms";
import { MainLayout } from "../../../../components/Layout";
import { mainProfileCompletionStyles } from "../mainProfileCompletionStyles";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../../../../navigation/types";
import { setProfileField } from "../../../../store/slices/profileCompletionSlice";
import DashedProgressBar from "../../../../components/ProgressBars/DashedProgressBar";


type PepStatusScreenNavigationProps = StackScreenProps<HomeStackParamList>

export default function PepStatusScreen({ navigation }: PepStatusScreenNavigationProps) {
    const dispatch = useAppDispatch();
    const { pepStatus } = useAppSelector((state) => state.profileCompletion);

    const handleNavigation = () => {
        navigation.navigate('SourceOfIncomeScreen')
    }
    return (
        <MainLayout backAction={() => { }}>
            <View style={mainProfileCompletionStyles.container}>
                <View>
                    <View style={mainProfileCompletionStyles.titleContainer}>
                        <Typography title="PEP Status" type="heading4-sb" />
                        <DashedProgressBar progress={6} />
                        <Typography type="body-r" title="Are you politically exposed? Please respond with either yes or no." />
                    </View>

                    {/* should be either yes or no radio button */}
                    <TextInput type='text' placeholder='PEP Status'
                        value={pepStatus}
                        onChangeText={(text) => dispatch(setProfileField({ key: 'pepStatus', value: text }))}
                    />
                </View>
                <View style={mainProfileCompletionStyles.buttonContainer} >
                    <Button title="Save" onPress={handleNavigation} />
                </View>
            </View>
        </MainLayout>
    )
}