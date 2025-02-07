import {useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {MainLayout} from '../../../../../../../../components/Layout';
import {mainAccountLimitStyles} from '../../../styles';
import {
  Button,
  Dropdown,
  TextInput,
  Typography,
  IconButton,
} from '../../../../../../../../components/Forms';
import {styles} from './styles';
import {
  IndemnityModal,
  ProofAddressModal,
} from '../../../../../../../../components';
import ScreenImages from '../../../../../../../../../assets/images/screens';
import {StackScreenProps} from '@react-navigation/stack';
import {MoreStackParamList} from '../../../../../../../../navigation/types';
import {ImagePicker} from '../../../../../../../../components/Forms/FileUploader';

type AddressScreenProps = StackScreenProps<MoreStackParamList>;

export default function Address({
  navigation: {navigate, goBack},
}: AddressScreenProps) {
  const [showProofAddressModal, setShowProofAddressModal] =
    useState<boolean>(false);
  const [showIndemnityModal, setShowIndemnityModal] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<string>('');

  const handleSelectedAddress = (selectedAddress: string) => {
    setSelectedAddress(selectedAddress);
    setShowProofAddressModal(false);
  };

  const handleEditScreenNavigate = () => {
    navigate('EditAddressScreen');
  };

  const handleSuccessMessage = () => {
    navigate('MoreSuccessMessageScreen', {
      title: 'Account Upgrade',
      subTitle:
        'Congratulations!!!You’ve successfully upgraded your account to TIER 3',
      logo: ScreenImages.MoreScreen.successTierThreeIcon,
    });
    setShowIndemnityModal(false);
  };

  const handleIndemnityModal = () => {
    setShowIndemnityModal(prev => !prev);
  };

  const indemnityText = [
    'To hold XBS harmless or blameless and free of any liability whatsoever in the event of any loss we may suffer or incur resulting from XBS’s grant of our Request to increase the daily transaction limits on any of its platforms.',
    'And further, we undertake to be held liable for any losses and expenses as a result of fraud or negligence suffered in consequence of this limit increase, thereof or arising therefrom which are not caused by the negligence or fraud from XBS.',
    'Consequently, XBS may, in its sole discretion, revoke or modify this limit increase authorization upon reasonable notification, and we will not hold XBS liable for any actions we may take/have taken pursuant to this authorization.',
    'This Indemnity shall be a continuing obligation in respect of any and all matters connected to or arising from XBS’s grant of the request therein.',
    'This Indemnity shall be a continuing obligation in respect of any and all matters connected to or arising from XBS’s grant of the request therein.',
    'This Indemnity shall be a continuing obligation in respect of any and all matters connected to or arising from XBS’s grant of the request therein.',
    'This Indemnity shall be a continuing obligation in respect of any and all matters connected to or arising from XBS’s grant of the request therein.',
    'This Indemnity shall be a continuing obligation in respect of any and all matters connected to or arising from XBS’s grant of the request therein.',
    'This Indemnity shall be a continuing obligation in respect of any and all matters connected to or arising from XBS’s grant of the request therein.',
    'This indemnity shall be construed in accordance with the...',
  ];

  const ADDRESSES = [
    {code: '1', name: 'Utility Bill'},
    {code: '2', name: "Driver's License"},
    {code: '3', name: "Solicitor's Letter"},
    {code: '4', name: "Voter's Card"},
    {code: '5', name: 'Tenancy Agreement'},
  ];

  const handleImageSelected = (imageUri: string | null) => {
    console.log('Selected image URI:', imageUri);
  };

  return (
    <MainLayout backAction={() => goBack()}>
      <View style={mainAccountLimitStyles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={mainAccountLimitStyles.heading}>
            <Typography title="Upgrade to Tier 3" type="heading4-sb" />
            <Typography
              title="Please ensure this is your current residential address and upload a proof address"
              type="body-r"
            />
          </View>
          <View style={{gap: 24}}>
            <View style={styles.residentialAddressInputContainer}>
              <TextInput
                multiline
                customInputContainerStyle={styles.inputContainer}
                placeholder="Residential Address"
              />
              <IconButton
                onPress={handleEditScreenNavigate}
                containerStyle={styles.updateIconButtonContainer}>
                <Image
                  source={ScreenImages.MoreScreen.mapPinIcon}
                  style={styles.updateIcon}
                />
                <Typography title="Update" type="body-sb" />
              </IconButton>
            </View>
            <View>
              <Dropdown
                label="Proof of Address"
                value={selectedAddress}
                onTrigger={() => setShowProofAddressModal(true)}
              />
            </View>
            <ImagePicker
              title="Upload Proof of Address"
              subtitle="Please provide your selected proof of address"
              onImageSelected={handleImageSelected}
            />
          </View>
        </ScrollView>
        <View style={mainAccountLimitStyles.buttonContainer}>
          <Button title="Next" onPress={handleIndemnityModal} />
        </View>
      </View>
      <ProofAddressModal
        showModal={showProofAddressModal}
        options={ADDRESSES}
        onSelect={selectedAddress =>
          handleSelectedAddress(selectedAddress.name)
        }
        onClose={() => setShowProofAddressModal(false)}
      />
      <IndemnityModal
        showModal={showIndemnityModal}
        onClose={() => setShowIndemnityModal(false)}
        title="Indemnity for Increase in Transfer Limit"
        description="Upon Xchange Box Solutions Ltd (referred to as “XBS”) grant of our Request to increase my transaction limit and in line with the provisions of the Central Bank of Nigeria (CBN), I agree to issue
                                this Indemnity to the XBS, and we hereby irrevocably and unconditionally undertake: "
        listItems={indemnityText}
        onSubmit={handleSuccessMessage}
      />
    </MainLayout>
  );
}
