import React, {useState} from 'react';
import {View} from 'react-native';
import {MainLayout} from '../../../../components/Layout';
import {mainProfileCompletionStyles} from '../mainProfileCompletionStyles';
import {Typography, Button, Dropdown} from '../../../../components/Forms';
import AttestationModal from '../../../../components/Modal/AttestationModal';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

import {
  PrivateNavigatorParamList,
  ProfileStackParamList,
} from '../../../../navigation/types';
import {styles} from './styles';
import annualIcomeRanges from '@assets/json/annual_income_ranges.json';
import employmentTypes from '@assets/json/employment_types.json';
import occupations from '@assets/json/occupations.json';
import useSourceOfIncomeValidation from './validators';
import {useUpdateIncomeMutation} from '@store/apis/customerApi';
import useToast from '@hooks/useToast';
import {DEFAULT_ERROR_MESSAGE} from '@utils/Constants';

type SourceOfIncomeScreenProps = CompositeScreenProps<
  StackScreenProps<ProfileStackParamList, 'SourceOfIncome'>,
  StackScreenProps<PrivateNavigatorParamList, 'BottomTabs'>
>;

export default function SourceOfIncomeScreen({
  navigation: {navigate, goBack},
}: SourceOfIncomeScreenProps) {
  const {
    formData,
    formErrors,
    validateForm,
    setOccupation,
    setAnnualIncome,
    setEmploymentType,
  } = useSourceOfIncomeValidation();
  const [updateIncome, {isLoading}] = useUpdateIncomeMutation();
  const {showToast} = useToast();

  const [selectedOccupation, setSelectedOccupation] = useState<
    DefaultDropdownOption | undefined
  >(undefined);
  const [selectedEmploymentType, setSelectedEmploymentType] = useState<
    DefaultDropdownOption | undefined
  >(undefined);
  const [selectedAnnualIncome, setSelectedAnnualIncome] = useState<
    DefaultDropdownOption | undefined
  >(undefined);
  const [showAttestationModal, setShowAttestationModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const openAttestationModal = () => {
    setShowAttestationModal(true);
  };

  const closeAttestationModal = () => {
    setShowAttestationModal(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const submit = async () => {
    try {
      const {status, message} = await updateIncome({
        occupation: formData.occupation,
        annual_income: formData.annualIncome,
        employment_type: formData.employmentType,
      }).unwrap();
      if (status) {
        navigate('BottomTabs', {screen: 'Home', params: {screen: 'Dashboard'}});
      } else {
        showToast('danger', message);
      }
    } catch (error: ErrorResponse | any) {
      showToast(
        'danger',
        error.data?.message || error.message || DEFAULT_ERROR_MESSAGE,
      );
    }
  };

  return (
    <MainLayout
      backAction={() => navigate('ProfileCompletionIntro')}
      isLoading={isLoading}>
      <View style={mainProfileCompletionStyles.container}>
        <View style={mainProfileCompletionStyles.titleContainer}>
          <Typography type="heading4-sb" title="Source of Income" />
          <Typography
            type="body-r"
            title="Please fill out the following details about your financial background"
          />
        </View>
        <View style={styles.inputContainer}>
          {/* Occupation Dropdown */}
          <Dropdown
            label="Occupation"
            options={occupations.map(occupation => ({
              label: occupation,
              value: occupation,
            }))}
            selectedOption={selectedOccupation}
            onSelect={option => {
              setSelectedOccupation(option);
              setOccupation(option.value);
            }}
            error={formErrors.occupation}
          />

          {/* Employment type Dropdown */}
          <Dropdown
            label="Employment Type"
            options={employmentTypes.map(type => ({label: type, value: type}))}
            selectedOption={selectedEmploymentType}
            onSelect={option => {
              setSelectedEmploymentType(option);
              setEmploymentType(option.value);
            }}
            error={formErrors.employmentType}
          />

          {/* Annual income Dropdown */}
          <Dropdown
            label="Annual Income"
            options={annualIcomeRanges.map(income => ({
              label: income,
              value: income,
            }))}
            selectedOption={selectedAnnualIncome}
            onSelect={option => {
              setSelectedAnnualIncome(option);
              setAnnualIncome(option.value);
            }}
            error={formErrors.annualIncome}
          />

          <AttestationModal
            showModal={showAttestationModal}
            onClose={closeAttestationModal}
            isChecked={isChecked}
            onCheckboxChange={handleCheckboxChange}
            title="Attestation"
            description="I confirm that all the information provided in this form is accurate and true to the best of my knowledge. I understand that providing false information may result in legal consequences or the rejection of my account opening."
            agreement="I agree that the information provided is accurate and complete."
            onSubmit={submit}
          />
        </View>
        <View style={mainProfileCompletionStyles.buttonContainer}>
          <Button
            title="Save"
            onPress={() => validateForm(openAttestationModal)}
          />
        </View>
      </View>
    </MainLayout>
  );
}
