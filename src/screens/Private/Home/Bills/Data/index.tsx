import React, { useState } from "react";
import { Image, Pressable, View } from "react-native";
import styles from "../Airtime/styles";
import ComponentImages from "../../../../../../assets/images/components";
import { ContactBeneficiaryModal, ContactModal } from "../../../../../components";
import { AccountDetailsCard } from "../../../../../components/Cards";
import { Button, TextInput, Typography } from "../../../../../components/Forms";
import { MainLayout } from "../../../../../components/Layout";
import ProductModal from "../../../../../components/Modal/ProductModal/indext";
import NetworkTypes, { INetworkTypeProps } from "../../../../../components/Networks";
import { mainWalletStyles } from "../../../Wallet/mainWalletStyles";
import { WalletStackParamList } from "../../../../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import DropDown from "../../../../../components/Forms/Dropdown";
import { TabsNavigation } from "../../../../../components/Miscellaneous";

type DataScreenNavigationProp = StackNavigationProp<WalletStackParamList>;
interface IDataScreenNavigationProp {
    navigation: DataScreenNavigationProp;
}

interface IDropdownDataItem {
    name: string;
    code: string;
    amount: string;
}

export default function DataBills({ navigation }: IDataScreenNavigationProp) {
    const [selectedPlan, setSelectedPlan] = useState<string | null>("Data");
    const [showProductModal, setShowProductModal] = useState<boolean>(false);
    const [selectedData, setSelectedData] = useState<IDropdownDataItem>({ name: '', code: '', amount: '' });
    const [selectedNetworkType, setSelectedNetworkType] = useState<string | null>(null);
    const [showContactModal, setShowContactModal] = useState<boolean>(false);
    const [selectedContact, setSelectedContact] = useState<IDropdownDataItem>({ name: '', code: '', amount: '' });
    const [selectedBeneficiary, setSelectedBeneficiary] = useState({ name: '', code: '', phoneNumber: '' });
    const [showContactBeneficiaryModal, setShowContactBeneficiaryModal] = useState<boolean>(false);
    const [showBeneficiaryCard, setShowBeneficiaryCard] = useState<boolean>(true);

    const User = {
        id: '101',
        name: 'Muhammad',
        acctNumber: '2260173542',
        phone: '08174895256',
        walletBalance: '570,000.96',
        earnings: {
            commission: 'N100,000',
            terminals: '50',
            bonus: 'N10,000',
        },
    };

    const NETWORKS: INetworkTypeProps[] = [
        { code: '1', name: 'mtn', icon: ComponentImages.NetworkTypes.mtnIcon },
        { code: '2', name: 'glo', icon: ComponentImages.NetworkTypes.gloIcon },
        { code: '3', name: 'airtel', icon: ComponentImages.NetworkTypes.airtelIcon },
        { code: '4', name: '9mobile', icon: ComponentImages.NetworkTypes.nineMobileIcon },
    ];

    const plans: IDropdownDataItem[] = [
        { name: '25MB Opera (1 Day)', code: '1', amount: '9,900' },
        { name: '25MB 2Go (1 Day)', code: '2', amount: '1,200' },
        { name: '25MB 2Go (1 Day)', code: '3', amount: '1,200' },
    ];

    const beneficiaries = [
        { code: 1, name: "Abdullahi Musa", accountNumber: '1012123300' },
        { code: 2, name: "Abdullahi Musa", accountNumber: '1012123300' },
        { code: 3, name: "Abdullahi Omeiza Hakken", accountNumber: '1012123300' },
    ];

    const contacts = [
        { code: 1, name: "Abdullahi Musa", phoneNumber: '1012123300' },
        { code: 2, name: "Abdullahi Musa", phoneNumber: '1012123300' },
        { code: 3, name: "Abdullahi Omeiza Hakken", phoneNumber: '1012123300' },
    ];

    const handleSelectPlan = (name: string | null) => {
        setSelectedPlan(name);
    };

    const handleSelectNetworkType = (code: string) => {
        setSelectedNetworkType(code);
    };

    const handleContactModal = () => {
        setShowContactModal(!showContactModal);
    };

    const handleBeneficiaryModal = () => {
        setShowContactBeneficiaryModal(!showContactBeneficiaryModal);
    };

    const handleRechargeButton = () => {
        navigation.navigate('ConfirmTransactionScreen')
    }

    const forMyself = () =>{
        return(
            <TextInput placeholder="Phone Number" label={true} value={User.phone}/>
        )
    }

    const otherNumbers = () =>{
        return(
            <View style={mainWalletStyles.beneficiaryCardContainer}>
                <TextInput type="phone" placeholder="Phone number" />
                <Pressable style={[mainWalletStyles.validate, styles.contactButtonContainer]} onPress={handleContactModal}>
                    <Image source={ComponentImages.Wallet.teamLine} style={mainWalletStyles.doubleUserIcon} />
                    <Typography title="Contact" type="body-sb" />
                </Pressable>
                {/* <Pressable onPress={handleBeneficiaryModal} style={mainWalletStyles.doubleUserTeamContainer}>
                    <Image style={mainWalletStyles.doubleUserIcon} source={ComponentImages.Wallet.teamLine} />
                    <Typography title="Select Beneficiaries" type="body-sb" />
                </Pressable> */}
            </View>
        )
    }

    const tabs = [
        { title: 'For Myself', component: forMyself },
        { title: 'Other Numbers', component: otherNumbers },
    ];

    return (
        <MainLayout backAction={() => { }}>
            <ProductModal
                showModal={showProductModal}
                options={plans}
                onClose={() => setShowProductModal(false)}
                value={selectedData.code}
                onSelect={plan => setSelectedData(plan)}
                provider={selectedNetworkType}
            />

            <ContactBeneficiaryModal
                showModal={showContactBeneficiaryModal}
                onClose={() => setShowContactBeneficiaryModal(false)}
                onSelect={(beneficiary) => {
                    setSelectedBeneficiary(beneficiary);
                    setShowBeneficiaryCard(true);
                }}
                options={beneficiaries}
                value={selectedBeneficiary.code}
            />

            <ContactModal
                showModal={showContactModal}
                onClose={() => setShowContactModal(false)}
                onSelect={contact => setSelectedContact(contact)}
                options={contacts}
            />

            <View style={mainWalletStyles.container}>
                <Typography title="Data" />
                <View style={mainWalletStyles.cardContainer}>
                    <AccountDetailsCard
                        acctNumber={User.acctNumber}
                        walletBalance={User.walletBalance}
                        showDetails={false}
                    />
                </View>

                <View style={{ gap: 24 }}>
                    <TabsNavigation tabs={tabs}/>

                    <NetworkTypes
                        title="Select your network"
                        items={NETWORKS}
                        onSelect={handleSelectNetworkType}
                    />

                    <DropDown
                        label="Select Data Plan"
                        value={selectedData.name}
                        onTrigger={() => setShowProductModal(true)}

                    />

                    <TextInput placeholder="Narration" />

                </View>

                <View style={[mainWalletStyles.buttonContainer, styles.bottomButton]}>
                    <Button title="Recharge" onPress={handleRechargeButton} />
                </View>
            </View>
        </MainLayout>
    );
}
