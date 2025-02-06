import {useState, useEffect} from 'react';
import {View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {MainLayout} from '@components/Layout';
import {Button, Dropdown, TextInput, Typography} from '@components/Forms';
import {mainProfileCompletionStyles} from '../mainProfileCompletionStyles';
import {useUpdateLocationMutation} from '@store/apis/complianceApi';
import {
  useFetchStatesQuery,
  useFetchLgasMutation,
  useFetchCountriesQuery,
} from '@store/apis/generalApi';
import useLocationValidation from './validators';
import Pad from '@components/Pad';

type ResidenceAddressScreenProps = StackScreenProps<
  KYCStackParamList,
  'LocationDetails'
>;

export default function ResidentialAddress({
  navigation: {navigate},
}: ResidenceAddressScreenProps) {
  const {
    formData,
    formErrors,
    validateForm,
    setCountry,
    setState,
    setLga,
    setResidentialAddress,
  } = useLocationValidation();

  // Fetch states and countries
  const {data: statesData, isLoading: statesLoading} = useFetchStatesQuery();
  const {data: countriesData, isLoading: countriesLoading} =
    useFetchCountriesQuery();

  // Fetch LGAs dynamically
  const [fetchLgas, {data: lgasData, isLoading: lgasLoading}] =
    useFetchLgasMutation();

  // Local states for dropdown selections
  const [selectedState, setSelectedState] = useState<string | undefined>(
    undefined,
  );
  const [selectedCountry, setSelectedCountry] = useState<string | undefined>(
    undefined,
  );
  const [selectedLga, setSelectedLga] = useState<string | undefined>(undefined);

  // Update LGAs when state changes
  useEffect(() => {
    if (selectedState) {
      fetchLgas({state: selectedState});
    }
  }, [selectedState]);

  const handleNavigate = () => {
    navigate('PepStatusScreen');
  };

  return (
    <MainLayout backAction={() => {}}>
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
            setCountry(option);
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
            setState(option);
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
            setLga(option);
          }}
          isLoading={lgasLoading}
        />

        <View style={mainProfileCompletionStyles.buttonContainer}>
          <Button title="Save" onPress={handleNavigate} />
        </View>
      </View>
    </MainLayout>
  );
}
