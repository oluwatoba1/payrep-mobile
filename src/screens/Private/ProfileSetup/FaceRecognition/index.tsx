import React from 'react';
import { FlatList, Image, View, StyleSheet, Text, ListRenderItem } from "react-native";
import { MainLayout } from "../../../../components/Layout";
import { mainProfileCompletionStyles } from "../mainProfileCompletionStyles";
import { Button, Typography } from "../../../../components/Forms";
import CustomCard from "../../../../components/Cards/CustomCard";
import { styles } from "../FacialRecognition/styles";
import IconImages from "../../../../../assets/images/appIcons";
import DashedProgressBar from '../../../../components/ProgressBars/DashedProgressBar';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../../../../navigation/types';

type FaceRecognitionScreenProps = StackScreenProps<HomeStackParamList>

const tips = [
  "Make sure your face is clearly and entirely visible.",
  "Ensure your environment is bright enough for a clear photo.",
  "Remove any hats, sunglasses, or masks that may obscure your face.",
  "Keep your camera steady to avoid blurry images.",
  "Position your face within the frame and look directly at the camera.",
  "Avoid harsh shadows by standing in a well-lit area.",
];

const renderTip: ListRenderItem<string> = ({ item }) => (
  <View style={styles.tipContainer}>
    <Typography title='•' type='body-r' />
    <Typography type='label-r' title={item} />

  </View>
);



export default function FaceRecognition({ navigation: { navigate, goBack } }: FaceRecognitionScreenProps) {
  const handleNavigate = () => {
    navigate('ResidentialAddressScreen')
  }
  return (
    <MainLayout backAction={() => goBack()}>
      <View style={mainProfileCompletionStyles.container}>
        <View style={mainProfileCompletionStyles.titleContainer}>
          <Typography type="heading4-sb" title="Face Recognition" />
          <DashedProgressBar progress={4} />
          <Typography type="body-r" title="Please capture a photo of yourself. This will be used to confirm that your face matches the image on your identity card." />
        </View>

        <View style={styles.cardContainer}>
          <CustomCard
            visible={true}
            customContainerStyle={styles.container}
          >
            <View style={{ gap: 14, alignItems: 'center' }}>
              <Typography title="Face Recognition Tips" />

              <View style={{ alignSelf: 'center' }}>
                <Image source={IconImages.popup.faceRecognition} style={{ width: 48, height: 48 }} />
              </View>

              <FlatList
                data={tips}
                renderItem={renderTip}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.flatListContent}
              />
            </View>
          </CustomCard>
        </View>

        <View style={mainProfileCompletionStyles.buttonContainer}>
          <Button title="Take the Capture" onPress={handleNavigate} />
        </View>
      </View>
    </MainLayout>
  );
}
