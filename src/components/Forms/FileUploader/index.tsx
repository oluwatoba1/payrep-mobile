import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {launchImageLibrary, Asset} from 'react-native-image-picker';
import {
  DocumentPickerResponse,
  pick,
  types,
} from '@react-native-documents/picker';
import {Typography} from '..';
import ScreenImages from '../../../../assets/images/screens';
import {styles} from './styles';

interface FileUploaderProps {
  file: DocumentPickerResponse | null;
  title?: string;
  subtitle?: string;
  allowMultiSelection?: boolean;
  type?: string[];
  onChoose: (file: DocumentPickerResponse[]) => void;
  notifier: (suffix: string) => void;
}

export default function FileUploader({
  file,
  allowMultiSelection = false,
  type = [types.images, types.pdf],
  onChoose,
  title = '',
  subtitle = '',
  notifier,
}: FileUploaderProps) {
  const selectFile = async () => {
    const result = await pick({allowMultiSelection, type});
    const areAcceptedTypes = result.every(file => file.hasRequestedType);
    if (!areAcceptedTypes) {
      notifier(type.join(', '));
      return;
    }
    onChoose(result);
  };

  return (
    <View style={styles.imagePickerContainer}>
      <Typography title={title} type="body-sb" />
      <Typography title={subtitle} type="body-r" />
      {file && <Image source={{uri: file.uri}} style={styles.imagePreview} />}
      <Pressable style={styles.imageButton} onPress={selectFile}>
        <Image
          source={ScreenImages.MoreScreen.image}
          style={styles.imageIcon}
        />
        <Typography
          title={file ? 'Change image' : 'Select image upload'}
          style={styles.imageText}
        />
      </Pressable>
    </View>
  );
}
