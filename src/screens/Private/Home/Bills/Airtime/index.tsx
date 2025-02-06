import React, { useState } from "react";
import { Image, Pressable, View } from "react-native";
import styles from "./styles";
import ComponentImages from "../../../../../../assets/images/components";
import { ContactBeneficiaryModal, ContactModal } from "../../../../../components";
import { AccountDetailsCard } from "../../../../../components/Cards";
import { Button, TextInput, Typography } from "../../../../../components/Forms";
import { MainLayout } from "../../../../../components/Layout";
import ProductModal from "../../../../../components/Modal/ProductModal/indext";
import { IPlanType } from "../../../../../components/NetworkPlanTypes";
import NetworkTypes, { INetworkTypeProps } from "../../../../../components/Networks";
import { mainWalletStyles } from "../../../Wallet/mainWalletStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WalletStackParamList } from "../../../../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { TabsNavigation } from "../../../../../components/Miscellaneous";
import Pad from "../../../../../components/Pad";

type AirtimeScreenNavigationProp = StackNavigationProp<WalletStackParamList>;
interface IAirtimeScreenNavigationProp {
  navigation: AirtimeScreenNavigationProp;
}

interface IDropdownDataItem {
  name: string;
  code: string;
  amount: string;
}

export default function AirTime({navigation}: IAirtimeScreenNavigationProp) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>("Airtime");
  const [showProductModal, setShowProductModal] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<IDropdownDataItem>({ name: '', code: '', amount: '' });
  const [selectedNetworkType, setSelectedNetworkType] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<IDropdownDataItem>({ name: '', code: '', amount: '' });
  const [selectedBeneficiary, setSelectedBeneficiary] = useState({ name: '', code: '', phoneNumber: '' });
  const [showContactBeneficiaryModal, setShowContactBeneficiaryModal] = useState<boolean>(false);
  const [showBeneficiaryCard, setShowBeneficiaryCard] = useState<boolean>(true);
  const [rechargeAmount, setRechargeAmount] = useState<Number | null>(null);

  const User = {
    id: '101',
    name: 'Muhammad',
    acctNumber: '2260173542',
    walletBalance: '570,000.96',
    phone: '08174895256',

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

  const planOptions: IPlanType[] = [
    { name: 'Airtime' },
    { name: 'Data' },
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

  const setRechargeValue = (amount: Number) => {

    setRechargeAmount(amount);
    console.log(amount);
    
  }

  const forMyself = () => {
    return (
      <View>
        <TextInput placeholder="Phone Number" label={false} value={User.phone} />
        <TextInput placeholder="How much would you like to recharge" value={rechargeAmount?.toString() || ''} />

        <View style={mainWalletStyles.rechargeAmountContainer}>
          <TouchableOpacity style={mainWalletStyles.rechargeAmount} onPress={()=>setRechargeValue(100)}><Typography title="N100.00" type="label-r" /></TouchableOpacity>
          <TouchableOpacity style={mainWalletStyles.rechargeAmount} onPress={()=>setRechargeValue(200)}><Typography title="N200.00" type="label-r" /></TouchableOpacity>
          <TouchableOpacity style={mainWalletStyles.rechargeAmount} onPress={()=>setRechargeValue(500)}><Typography title="N500.00" type="label-r" /></TouchableOpacity>
          <TouchableOpacity style={mainWalletStyles.rechargeAmount} onPress={()=>setRechargeValue(1000)}><Typography title="N1,000.00" type="label-r" /></TouchableOpacity>
        </View>

        <NetworkTypes
          title="Select your network"
          items={NETWORKS}
          onSelect={handleSelectNetworkType}
        />

        <TextInput placeholder="Narration" />
      </View>
    )
  }

  const otherNumbers = () => {
    return(
      <View>
        <View style={mainWalletStyles.beneficiaryCardContainer}>
          <TextInput type="phone" placeholder="Phone number" />
          <Pressable style={[mainWalletStyles.validate, styles.contactButtonContainer]} onPress={handleContactModal}>
            <Image source={ComponentImages.Wallet.teamLine} style={mainWalletStyles.doubleUserIcon} />
            <Typography title="Contact" type="body-sb" />
          </Pressable>
          <TextInput placeholder="How much would you like to recharge" value={rechargeAmount?.toString() || ''} />

          {/* no beneficiaries in the new design */}
          {/* <Pressable onPress={handleBeneficiaryModal} style={mainWalletStyles.doubleUserTeamContainer}>
            <Image style={mainWalletStyles.doubleUserIcon} source={ComponentImages.Wallet.teamLine} />
            <Typography title="Select Beneficiaries" type="body-sb" />
          </Pressable> */}
        </View>
        <View style={mainWalletStyles.rechargeAmountContainer}>
          <TouchableOpacity style={mainWalletStyles.rechargeAmount} onPress={()=>setRechargeValue(100)}><Typography title="N100.00" type="label-r" /></TouchableOpacity>
          <TouchableOpacity style={mainWalletStyles.rechargeAmount} onPress={() => setRechargeValue(200)}><Typography title="N200.00" type="label-r" /></TouchableOpacity>
          <TouchableOpacity style={mainWalletStyles.rechargeAmount} onPress={() => setRechargeValue(500)}><Typography title="N500.00" type="label-r" /></TouchableOpacity>
          <TouchableOpacity style={mainWalletStyles.rechargeAmount} onPress={() => setRechargeValue(1000)}><Typography title="N1,000.00" type="label-r" /></TouchableOpacity>
        </View>
        <NetworkTypes
          title="Select your network"
          items={NETWORKS}
          onSelect={handleSelectNetworkType}
        />

        <TextInput placeholder="Narration" />
      </View>
    )
  }
  const tabs = [
    { title: 'For Myself', component: forMyself },
    { title: 'Other Numbers', component: otherNumbers },
  ];

  return (
    <MainLayout backAction={() => {}}>
      <ProductModal
        showModal={showProductModal}
        options={plans}
        onClose={() => setShowProductModal(false)}
        value={selectedData.code}
        onSelect={plan => setSelectedData(plan)}
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
        <Typography title="Airtime" />
        <View style={mainWalletStyles.cardContainer}>
          <AccountDetailsCard
            acctNumber={User.acctNumber}
            walletBalance={User.walletBalance}
            showDetails={false}
          />
        </View>

        <TabsNavigation tabs={tabs}/>
        
        <View style={[mainWalletStyles.buttonContainer, styles.bottomButton]}>
          <Button title="Recharge" onPress={handleRechargeButton}/>
        </View>
      </View>
    </MainLayout>
  );
}
