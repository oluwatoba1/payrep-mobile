import {useState} from 'react';
import {View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {Button, Typography} from '../../../../components/Forms';
import {MainLayout, Row} from '../../../../components/Layout';
import {mainProfileCompletionStyles} from '../mainProfileCompletionStyles';
import {ProfileStackParamList} from '../../../../navigation/types';
import DashedProgressBar from '../../../../components/ProgressBars/DashedProgressBar';
import {CustomSwitch} from '@components/Forms';
import {useUpdatePepMutation} from '@store/apis/customerApi';
import useToast from '@hooks/useToast';
import {DEFAULT_ERROR_MESSAGE} from '@utils/Constants';
import Pad from '@components/Pad';

type PepProps = StackScreenProps<ProfileStackParamList, 'Pep'>;

export default function Pep({navigation: {navigate}}: PepProps) {
  const {showToast} = useToast();

  const [updatePep, {isLoading}] = useUpdatePepMutation();

  const [value, setValue] = useState<boolean>(false);

  console.log('-------', value);

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
          <Typography title="PEP Status" type="heading4-sb" />

          <Pad size={20} />
          <Row justifyContent="flex-start">
            <Typography type="text" title="I am a politically exposed person" />
            <CustomSwitch value={value} onValueChange={setValue} />
          </Row>
        </View>
        <View style={mainProfileCompletionStyles.buttonContainer}>
          <Button title="Save" onPress={submit} />
        </View>
      </View>
    </MainLayout>
  );
}
