import React, {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {Typography} from '..';
import ScreenImages from '../../../../assets/images/screens';
import {styles} from './styles';

interface ImagePickerProps {
  onImageSelected: (imageUri: string | null) => void;
  title?: string;
  subtitle?: string;
}

export const ImagePicker: React.FC<ImagePickerProps> = ({
  onImageSelected,
  title = '',
  subtitle = '',
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      quality: 1,
    });

    if (response.didCancel) {
      console.log('User cancelled image upload');
    } else if (response.errorCode) {
      console.log('Image upload error:', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      const imageUri = response.assets[0].uri || null;
      setSelectedImage(imageUri);
      onImageSelected(imageUri);
    }
  };

  return (
    <View style={styles.imagePickerContainer}>
      <Typography title={title} type="body-sb" />
      <Typography title={subtitle} type="body-r" />
      {selectedImage && (
        <Image source={{uri: selectedImage}} style={styles.imagePreview} />
      )}
      <Pressable style={styles.imageButton} onPress={pickImage}>
        <Image
          source={ScreenImages.MoreScreen.image}
          style={styles.imageIcon}
        />
        <Typography
          title={selectedImage ? 'Change image' : 'Select image upload'}
          style={styles.imageText}
        />
      </Pressable>
    </View>
  );
};
