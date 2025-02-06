import {useState} from 'react';
import {View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {Button, Typography} from '../../../../components/Forms';
import {MainLayout} from '../../../../components/Layout';
import {mainProfileCompletionStyles} from '../mainProfileCompletionStyles';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {
  HomeStackParamList,
  ProfileStackParamList,
} from '../../../../navigation/types';
import DashedProgressBar from '../../../../components/ProgressBars/DashedProgressBar';
import {CustomSwitch} from '@components/Forms';
import {useUpdatePepMutation} from '@store/apis/customerApi';
import useToast from '@hooks/useToast';
import {DEFAULT_ERROR_MESSAGE} from '@utils/Constants';

type PepProps = StackScreenProps<ProfileStackParamList, 'Pep'>;

export default function Pep({navigation: {navigate}}: PepProps) {
  const {showToast} = useToast();

  const [updatePep, {isLoading}] = useUpdatePepMutation();

  const [value, setValue] = useState<boolean>(false);

  const submit = async () => {
    try {
      const {status, message} = await updatePep({
        pep: value,
      }).unwrap();
      if (status) {
        navigate('SourceOfIncome');
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
        <View>
          <View style={mainProfileCompletionStyles.titleContainer}>
            <Typography title="PEP Status" type="heading4-sb" />
            <DashedProgressBar progress={6} />
            <Typography
              type="body-r"
              title="Are you politically exposed? Toggle switch on or off for yes or no respectively."
            />
          </View>

          <CustomSwitch value={value} onValueChange={setValue} />
        </View>
        <View style={mainProfileCompletionStyles.buttonContainer}>
          <Button title="Save" onPress={submit} />
        </View>
      </View>
    </MainLayout>
  );
}
