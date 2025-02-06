import {useState, useEffect} from 'react';
import {View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MainLayout} from '@components/Layout';
import {Button, Dropdown, TextInput, Typography} from '@components/Forms';
import {mainProfileCompletionStyles} from '../mainProfileCompletionStyles';
import {useUpdateLocationMutation} from '@store/apis/customerApi';
import {
  useFetchStatesQuery,
  useFetchLgasMutation,
  useFetchCountriesQuery,
} from '@store/apis/generalApi';
import Pad from '@components/Pad';
import useLocationValidation from './validators';
import {ProfileStackParamList} from '@navigation/types';
import useToast from '@hooks/useToast';
import { DEFAULT_ERROR_MESSAGE } from '@utils/Constants';

interface Option {
  label: string;
  value: string;
}

type LocationDetailsProps = StackScreenProps<
  ProfileStackParamList,
  'LocationDetails'
>;

export default function LocationDetails({
  navigation: {navigate},
}: LocationDetailsProps) {
  const {
    formData,
    formErrors,
    validateForm,
    setCountry,
    setState,
    setLga,
    setResidentialAddress,
  } = useLocationValidation();
  const {showToast} = useToast()

  const [updateLocation, {isLoading}] = useUpdateLocationMutation();

  // Fetch states and countries
  const {data: statesData, isLoading: statesLoading} = useFetchStatesQuery();
  const {data: countriesData, isLoading: countriesLoading} =
    useFetchCountriesQuery();

  // Fetch LGAs dynamically
  const [fetchLgas, {data: lgasData, isLoading: lgasLoading}] =
    useFetchLgasMutation();

  // Local states for dropdown selections
  const [selectedState, setSelectedState] = useState<Option | undefined>(
    undefined,
  );
  const [selectedCountry, setSelectedCountry] = useState<Option | undefined>(
    undefined,
  );
  const [selectedLga, setSelectedLga] = useState<Option | undefined>(undefined);

  const submit = async () => {
      try {
        const {status, message} = await updateLocation({
          state: formData.state,
          country: formData.country,
          lga: formData.lga,
          residential_address: formData.residentialAddress,
        }).unwrap();
        if (status) {
          navigate('Pep');
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

  // Update LGAs when state changes
  useEffect(() => {
    if (selectedState) {
      fetchLgas({state: selectedState.value});
    }
  }, [selectedState]);

  return (
    <MainLayout backAction={() => navigate("ProfileCompletionIntro")} isLoading={isLoading}>
      <View style={mainProfileCompletionStyles.container}>
        <View style={mainProfileCompletionStyles.titleContainer}>
          <Typography title="Location details" type="heading4-sb" />
          <Typography
            type="body-r"
            title="Please provide your full address and nationality"
          />
        </View>

        <TextInput
          label="Residential Address"
          placeholder="Enter your address"
          onChangeText={setResidentialAddress}
          value={formData.residentialAddress}
          error={formErrors.residentialAddress}
        />

        <Pad />

        {/* Country Dropdown */}
        <Dropdown
          label="Country"
          options={countriesData?.data || []}
          selectedOption={selectedCountry}
          onSelect={option => {
            setSelectedCountry(option);
            setCountry(option.value);
          }}
          isLoading={countriesLoading}
        />

        <Pad />

        {/* State Dropdown */}
        <Dropdown
          label="State"
          options={statesData?.data || []}
          selectedOption={selectedState}
          onSelect={option => {
            setSelectedState(option);
            setState(option.value);
            setSelectedLga(undefined); // Reset LGA when state changes
          }}
          isLoading={statesLoading}
        />

        <Pad />

        {/* LGA Dropdown */}
        <Dropdown
          label="LGA"
          options={lgasData?.data || []}
          selectedOption={selectedLga}
          onSelect={option => {
            setSelectedLga(option);
            setLga(option.value);
          }}
          isLoading={lgasLoading}
        />

        <View style={mainProfileCompletionStyles.buttonContainer}>
          <Button title="Save" onPress={() => validateForm(submit)} />
        </View>
      </View>
    </MainLayout>
  );
}
