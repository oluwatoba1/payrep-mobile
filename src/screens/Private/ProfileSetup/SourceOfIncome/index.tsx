import React, { useRef, useState } from "react";
import { View } from "react-native";
import { MainLayout } from "../../../../components/Layout";
import { mainProfileCompletionStyles } from "../mainProfileCompletionStyles";
import { TextInput, Typography, Button, Dropdown } from "../../../../components/Forms";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { setIncomeField } from "../../../../store/slices/profileCompletionSlice";
import AnnualIncomeModal from "../../../../components/Modal/AnnualIncomeModal";
import { styles } from "./styles";
import AttestationModal from "../../../../components/Modal/AttestationModal";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../../../../navigation/types";
import DashedProgressBar from "../../../../components/ProgressBars/DashedProgressBar";


type SourceOfIncomeScreenProps = StackScreenProps<HomeStackParamList, "ProfileCompletionSuccessMessageScreen">

export default function SourceOfIncomeScreen({ navigation: { navigate, goBack } }: SourceOfIncomeScreenProps) {
    const dispatch = useAppDispatch();
    const { income } = useAppSelector(state => state.profileCompletion);

    const [showIncomeModal, setShowIncomeModal] = useState(false);
    const [showAttestationModal, setShowAttestationModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const INCOMES = [
        { code: "1", name: "Less than N200,000" },
        { code: "2", name: "N200,000 - N500,000" },
        { code: "3", name: "N500,001 - N1,000,000" },
        { code: "4", name: "N1,000,001 - N5,000,000" },
        { code: "5", name: "N5,000,001 - N10,000,000" },
        { code: "6", name: "N10,000,001 - N20,000,000" },
        { code: "7", name: "N20,000,001 - N50,000,000" },
        { code: "8", name: "N50,000,001 - N100,000,000" },
        { code: "9", name: "Above N100,000,000" }
    ];

    const setSelectedIncome = (selectedIncome: string) => {
        dispatch(setIncomeField({ key: 'annualIncome', value: selectedIncome }));
        setShowIncomeModal(false);
    };


    const openAttestationModal = () => {
        setShowAttestationModal(true);
    };

    const closeAttestationModal = () => {
        setShowAttestationModal(false);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleNavigate = () => {
        navigate('ProfileCompletionSuccessMessageScreen', {
            title: "CONGRATULATIONS",
            subTitle: "You have successfully completed your profile. Proceed to begin a transaction."
        })
    }


    return (
        <MainLayout backAction={() => goBack()}>
            <View style={mainProfileCompletionStyles.container}>
                <View style={mainProfileCompletionStyles.titleContainer}>
                    <Typography type="heading4-sb" title="Source of Income" />
                    <DashedProgressBar progress={7} />
                    <Typography type="body-r" title="Please fill out the following details about your financial background" />
                </View>
                <View style={styles.inputContainer}>
                    {/* occupation should be a dropdown */}
                    <TextInput
                        type='text'
                        placeholder='Occupation'
                        value={income.occupation}
                        onChangeText={(text) => dispatch(setIncomeField({ key: 'occupation', value: text }))}
                    />

                    <Dropdown
                        label="Annual Income"
                        value={income.annualIncome}
                        onTrigger={() => setShowIncomeModal(true)}
                    />

                    <TextInput
                        type='text'
                        placeholder='Additional Source of Income'
                        value={income.additionalSourceOfIncome}
                        onChangeText={(text) => dispatch(setIncomeField({ key: 'additionalSourceOfIncome', value: text }))}
                    />

                    <AnnualIncomeModal
                        showModal={showIncomeModal}
                        options={INCOMES}
                        onSelect={income => setSelectedIncome(income.name)}
                        onClose={() => setShowIncomeModal(false)}
                    />
                    <AttestationModal
                        showModal={showAttestationModal}
                        onClose={closeAttestationModal}
                        isChecked={isChecked}
                        onCheckboxChange={handleCheckboxChange}
                        title="Attestation"
                        description="I confirm that all the information provided in this form is accurate and true to the best of my knowledge. I understand that providing false information may result in legal consequences or the rejection of my account opening."
                        agreement="I agree that the information provided is accurate and complete."
                        onPressSubmit={handleNavigate}
                    />
                </View>
                <View style={mainProfileCompletionStyles.buttonContainer} >
                    <Button title="Save" onPress={openAttestationModal} />
                </View>
            </View>
        </MainLayout>
    )
}
