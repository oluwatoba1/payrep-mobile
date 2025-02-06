import { View } from "react-native";
import { MainLayout } from "../../../../components/Layout";
import { Button, TextInput, Typography } from "../../../../components/Forms";
import { mainProfileCompletionStyles } from "../mainProfileCompletionStyles";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setBusinessField, setProfileField } from "../../../../store/slices/profileCompletionSlice";


export default function BusinessDetail() {
    const dispatch = useAppDispatch()
    const { business } = useAppSelector(state => state.profileCompletion)

    return (
        <MainLayout backAction={() => { }}>
            <View style={mainProfileCompletionStyles.container}>
                <View style={mainProfileCompletionStyles.titleContainer}>
                    <Typography title="Business Details" />
                    <Typography type="subheading-sb" title="Please fill your business Detail" />
                </View>

                <View>
                    <TextInput type='text' placeholder='Business Name'
                        value={business.businessName}
                        onChangeText={(text) => dispatch(setBusinessField({ key: 'businessName', value: text }))}
                    />
                    <TextInput type='text' placeholder='Rc Number'
                        value={business.rcNumber}
                        onChangeText={(text) => dispatch(setBusinessField({ key: 'rcNumber', value: text }))}
                    />
                </View>
                <View style={mainProfileCompletionStyles.buttonContainer}>
                    <Button title="Save" />
                </View>
            </View>
        </MainLayout>
    )
}