import { ActivityIndicator, Image, Pressable, View } from "react-native";
import { Button, TextInput, Typography } from "../../../../../components/Forms";
import { MainLayout } from "../../../../../components/Layout";
import { AccountDetailsCard } from "../../../../../components/Cards";
import ProductModal from "../../../../../components/Modal/ProductModal/indext";
import { useState } from "react";
import DropDown from "../../../../../components/Forms/Dropdown";
import { mainWalletStyles } from "../../../Wallet/mainWalletStyles";
import ComponentImages from "../../../../../../assets/images/components";
import { StackNavigationProp } from "@react-navigation/stack";
import { WalletStackParamList } from "../../../../../navigation/types";
import TransferBeneficiaryModal from "../../../../../components/Modal/TransferBeneficiaryModal";
import BeneficiaryCard from "../../../../../components/Cards/BeneficiaryCard";

type DSTVSubscriptionScreenNavigationProp = StackNavigationProp<WalletStackParamList, 'ConfirmTransactionScreen'>;


interface IDstvPlan {
    name: string;
    code: string;
    amount: string;
}

interface IDSTVSubscriptionProps {
    navigation: DSTVSubscriptionScreenNavigationProp;
}

const plans:IDstvPlan[] = [
    {
        name: 'Asia Add-on Bank Plc',
        code: '1',
        amount: '9,900',
    },
    {
        name: 'DSTV Confam Streaming Subscription',
        code: '2',
        amount: '1,200'
    }
]


const beneficiaries = [
    {
        code: 1,
        name: "Abdullahi Musa",
        accountNumber: '1012123300'
    },
    {
        code: 2,
        name: "Abdullahi Musa",
        accountNumber: '1012123300'
    },
    {
        code: 3,
        name: "Abdullahi Omeiza Hakken",
        accountNumber: '1012123300'
    },
    {
        code: 4,
        name: "Abdullahi Musa",
        accountNumber: '1012123300'
    },
    {
        code: 5,
        name: "Abdullahi Musa",
        accountNumber: '1012123300'
    }
]


export default function DSTVSubcription({navigation}:IDSTVSubscriptionProps) {
  const [showProductModal, setShowProductModal] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<IDstvPlan>({name: '', code: '', amount:''})
  const [showBeneficiaryCard, setShowBeneficiaryCard] = useState(true);
  const [showTransferBeneficiaryModal, setShowTransferBeneficiaryModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState({
      name: '',
      code: '',
      accountNumber: ''
  });

  const handleClose = () => {
      setShowBeneficiaryCard(false);
  };

  const handleBeneficiary = () => {
      setShowTransferBeneficiaryModal(!showTransferBeneficiaryModal);
  }

  const handleScreenNavigation = () => {
    console.log('hey');
    
    navigation.navigate('ConfirmTransactionScreen')
}

    const User = {
        id: '101',
        name: 'Muhammad',
        acctNumber: '2260173542',
        walletBalance: '570,000.96',
        earnings: {
            commission: 'N100,000',
            terminals: '50',
            bonus: 'N10,000',
        },
    };
    return (
        <MainLayout backAction={() => {}}>
            <ProductModal 
                showModal={showProductModal}
                options={plans}
                onClose={() => setShowProductModal(false)}
                value={selectedPlan.code}
                onSelect={plan => setSelectedPlan(plan)}
            />
            <TransferBeneficiaryModal
                showModal={showTransferBeneficiaryModal}
                onClose={() => setShowTransferBeneficiaryModal(false)}
                onSelect={(beneficiary) => {
                    setSelectedBeneficiary(beneficiary);
                    setShowBeneficiaryCard(true);
                    setShowTransferBeneficiaryModal(false)
                }}
                options={beneficiaries}
                value={selectedBeneficiary.code}
            />
            <View style={mainWalletStyles.container}>
                <Typography title="DSTV Subscription" />
                <View style={mainWalletStyles.cardContainer}>
                    <AccountDetailsCard
                        acctNumber={User.acctNumber}
                        walletBalance={User.walletBalance}
                        showDetails={false}
                    />
                </View>
                <View>
                    <DropDown
                        label="Select Product"
                        value={selectedPlan.name}
                        onTrigger={() => setShowProductModal(true)}
                    />
                    <TextInput
                        placeholder="Enter Amount"
                        type="text"
                    />
                    {!showBeneficiaryCard && (
                        <View style={mainWalletStyles.beneficiaryCardContainer}>
                            <TextInput
                                placeholder="Dstv Smart Card Number"
                                type="text"
                            />  
                            <Pressable style={mainWalletStyles.validate}>
                                <Typography title="Validate" type="body-sb" />
                            </Pressable>
                            <Pressable onPress={handleBeneficiary} style={mainWalletStyles.doubleUserTeamContainer}>
                                <Image style={mainWalletStyles.doubleUserIcon} source={ComponentImages.Wallet.teamLine} />
                                <Typography title="Select Beneficiaries" type="body-sb" />
                            </Pressable>
                        </View>
                    )}
                    {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
                    {showBeneficiaryCard && !isLoading && (
                        <BeneficiaryCard
                            accountName={selectedBeneficiary.name}
                            accountNumber={selectedBeneficiary.accountNumber}
                            showCard={showBeneficiaryCard}
                            onClose={handleClose}
                        />
                    )}
                    <TextInput
                        placeholder="Customer Phone number"
                    />
                    <TextInput
                        placeholder="Narration"
                    />

                    <View>
                        <Typography title="Add Beneficiries" />
                    </View>
                </View>

                <View style={mainWalletStyles.buttonContainer}>
                    <Button title="Confirm Transaction" onPress={handleScreenNavigation} />
                </View>

            </View>
        </MainLayout>
    )
}