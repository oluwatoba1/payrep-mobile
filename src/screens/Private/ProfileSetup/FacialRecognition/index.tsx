import React from 'react';
import { Image, View, Platform } from "react-native";
import { useQoreIdSdk, OnResult } from '@qore-id/react-native-qoreid-sdk';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

import { MainLayout } from "@components/Layout";
import { mainProfileCompletionStyles } from "../mainProfileCompletionStyles";
import { Button, Typography } from "@components/Forms";
import CustomCard from "@components/Cards/CustomCard";
import { styles } from "./styles";
import IconImages from "@assets/images/appIcons";
import { StackScreenProps } from '@react-navigation/stack';
import { ProfileStackParamList } from '@navigation/types';
import { useAppSelector } from '@store/hooks';
import useToast from '@hooks/useToast';
import { APP_MODE, QOREID_SANDBOX_CLIENT_ID, QOREID_PROD_CLIENT_ID } from '@env'
import { useVerificationCheckMutation } from '@store/apis/complianceApi';
import { DEFAULT_ERROR_MESSAGE } from '@utils/Constants';

interface VerifyBvnProps {
    startTime: number;
    startDate: Date;
    timeout: number;
    verificationId: string
}

type FacialRecognitionScreenProps = StackScreenProps<ProfileStackParamList, "FacialRecognition">

const tips = [
    "Make sure your face is clearly and entirely visible.",
    "Ensure your environment is bright enough for a clear photo.",
    "Remove any hats, sunglasses, or masks that may obscure your face.",
    "Keep your camera steady to avoid blurry images.",
    "Position your face within the frame and look directly at the camera.",
    "Avoid harsh shadows by standing in a well-lit area.",
];


export default function FacialRecognition({ navigation: { navigate, goBack } }: FacialRecognitionScreenProps) {

    const { showToast } = useToast();
    const bvnData = useAppSelector(state => state.compliance.bvnData)
    const userId = useAppSelector(state => state.auth.customer?.id)


    const [verificationCheck, { isLoading }] = useVerificationCheckMutation()

    const timeoutAction = (args: VerifyBvnProps) => {
        if (Date.now() - args.startTime < args.timeout) {
            verifyBvnVerification(args)
        } else {
            showToast('danger', 'Verification pending, check back later')
            navigate('ProfileCompletionIntro')
        }
    }

    const verifyBvnVerification = async (args: VerifyBvnProps) => {
        try {
            const { status, data } = await verificationCheck({
                verification: args.verificationId
            }).unwrap();
            if (status) {
                if (!data.length) {
                    timeoutAction(args)
                    return;
                }
                data[0].status ? navigate('ResidentialAddressRegistration') : showToast('danger', 'BVN verification failed')

            } else {
                timeoutAction(args)
            }
        } catch (error: ErrorResponse | any) {
            showToast('danger', error.data?.message || error.message || DEFAULT_ERROR_MESSAGE);
        }
    }

    const initiatePoll = (verificationId: string, timeout: number = 30000) => {
        const startTime = Date.now()
        const startDate = new Date()

        verifyBvnVerification({ startTime, startDate, timeout, verificationId })

    }

    const callback = (data: OnResult) => {
        initiatePoll(data.data.verification.id)
    };

    const { launchQoreId } = useQoreIdSdk({
        onResult: callback,
    });

    const onSubmit = async () => {
        const cameraPermission = await request(
            Platform.OS === 'ios'
                ? PERMISSIONS.IOS.CAMERA
                : PERMISSIONS.ANDROID.CAMERA,
        );
        if (cameraPermission === RESULTS.GRANTED) {
            const formData = {
                flowId: 0, /* Required for workflow */
                clientId: APP_MODE === "development" ? QOREID_SANDBOX_CLIENT_ID : QOREID_PROD_CLIENT_ID, /* Required */
                productCode: "liveness_bvn", /* Required for collection */
                customerReference: userId, /* Required */
                applicantData: {
                    firstName: bvnData.firstName,
                    middleName: bvnData.middleName,
                    lastName: bvnData.lastName,
                    gender: bvnData.gender,
                    phoneNumber: bvnData.phoneNumber,
                    email: bvnData.email,
                },
                identityData: {
                    idType: "bvn",
                    idNumber: bvnData.bvn,
                },
                addressData: {
                    address: "",
                    city: "",
                    lga: "",
                },
                ocrAcceptedDocuments:
                    [],
            };

            launchQoreId(formData);
        } else {
            showToast('danger', "Camera permission denied");
        }
    }

    return (
        <MainLayout backAction={() => goBack()} isLoading={isLoading} loadingTitle='Validating BVN'>
            <View style={mainProfileCompletionStyles.container}>
                <View style={mainProfileCompletionStyles.titleContainer}>
                    <Typography type="heading4-sb" title="Face Recognition" />
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

                            {tips.map((tip, index) => (
                                <View key={index} style={styles.tipContainer}>
                                    <Typography title='•' type='body-r' />
                                    <Typography type='label-r' title={tip} />

                                </View>
                            ))}

                        </View>
                    </CustomCard>
                </View>

                <View style={mainProfileCompletionStyles.buttonContainer}>
                    <Button title="Capture" onPress={onSubmit} />
                </View>
            </View>
        </MainLayout>
    );
}
