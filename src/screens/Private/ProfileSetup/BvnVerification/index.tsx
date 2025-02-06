import { Button, TextInput } from "@components/Forms";
import { MainLayout } from "@components/Layout";
import Pad from "@components/Pad";
import { ProfileStackParamList } from "@navigation/types";
import { StackScreenProps } from "@react-navigation/stack";
import useBvnVerificationValidation from "./validator";
import { useBvnLookupMutation } from "@store/apis/complianceApi";
import { useAppDispatch } from "@store/hooks";
import useToast from "@hooks/useToast";
import { useState } from "react";
import { DEFAULT_ERROR_MESSAGE } from "@utils/Constants";
import { IsThisYouModal } from "@components/Modal";
import { updateBvnData } from "@store/slices/complianceSlice";

interface IBVNData {
    customer: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    dob: string,
    bvn: string;
    phoneNumber: string;
    email: string;
    gender: string;
}

type BvnVerificationProps = StackScreenProps<ProfileStackParamList, "BvnVerification">

export default function BvnVerification({ navigation: { navigate, canGoBack, goBack } }: BvnVerificationProps) {
    const dispatch = useAppDispatch();
    const { showToast } = useToast();

    const { formData: { bvn }, setBvn, formErrors, validateForm } = useBvnVerificationValidation();
    const [bvnLookup, { isLoading }] = useBvnLookupMutation();
    const [bvnData, setBvnData] = useState<IBVNData>({
        customer: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        dob: '',
        bvn: '',
        gender: '',
        phoneNumber: '',
        email: ''
    });

    const [showIsThisYouModal, setShowIsThisYouModal] = useState<boolean>(false)

    const submit = async () => {
        try {
            const { status, message, data } = await bvnLookup({
                bvn
            }).unwrap();
            delete data.image
            if (status) {
                setBvnData({ ...data, bvn, phoneNumber: data.phone_number1 })
                setShowIsThisYouModal(true)
            } else {
                showToast('danger', message)
            }
        } catch (error: ErrorResponse | any) {
            showToast('danger', error.data?.message || error.message || DEFAULT_ERROR_MESSAGE);
        }
    }

    const proceed = () => {
        setShowIsThisYouModal(false);
        dispatch(updateBvnData({
            firstName: bvnData.first_name,
            lastName: bvnData.last_name,
            middleName: bvnData.middle_name,
            dob: bvnData.dob,
            bvn,
            gender: bvnData.gender,
            email: bvnData.email,
            phoneNumber: bvnData.phoneNumber
        }))
        navigate('FacialRecognition');
    }

    return (
        <MainLayout rightTitle="BVN Registration" isLoading={isLoading} backAction={() => canGoBack() && goBack()}>
            <IsThisYouModal
                title={(bvnData.first_name) + " " + bvnData.last_name}
                showModal={showIsThisYouModal}
                onClose={() => setShowIsThisYouModal(false)}
                onProceed={proceed}
            />
            <TextInput label="BVN" keyboardType="numeric" placeholder="Ex: 22222222222" maxLength={11} onChangeText={setBvn} value={bvn} error={formErrors.bvn} />

            <Pad size={100} />

            <Button title="Next" onPress={() => validateForm(submit)} />
        </MainLayout>
    )
}