import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { ActivityIndicator, Image, Pressable, View } from "react-native";
import ComponentImages from "../../../../../../assets/images/components";
import { TransferBeneficiaryModal } from "../../../../../components";
import { AccountDetailsCard, BeneficiaryCard } from "../../../../../components/Cards";
import { Button, TextInput, Typography } from "../../../../../components/Forms";
import DropDown from "../../../../../components/Forms/Dropdown";
import { MainLayout } from "../../../../../components/Layout";
import ProductModal from "../../../../../components/Modal/ProductModal/indext";
import { WalletStackParamList } from "../../../../../navigation/types";
import { mainWalletStyles } from "../../../Wallet/mainWalletStyles";
import { RouteProp } from "@react-navigation/native";

type WaterBillSubscriptionScreenNavigationProp = StackNavigationProp<WalletStackParamList, 'ConfirmTransactionScreen'>;

interface IWaterBillPlan {
    name: string;
    code: string;
    amount: string;
}

interface IWaterBillSubscriptionProps {
    navigation: WaterBillSubscriptionScreenNavigationProp;
    route: RouteProp<WalletStackParamList, 'WaterBillSubscriptionScreen'>;
}

interface IPlansMap {
    DSTV: IWaterBillPlan[];
    GoTV: IWaterBillPlan[];
    Startimes: IWaterBillPlan[];
    TSTV: IWaterBillPlan[];
}

const plans: IWaterBillPlan[] = [
    {
        name: 'Asia Add-on Bank Plc',
        code: '1',
        amount: '9,900',
    },
    {
        name: 'WaterBill Confam Streaming Subscription',
        code: '2',
        amount: '1,200'
    }
]

const DSTVPlans: IWaterBillPlan[] = [
    {
        name: 'DSTV Add-on Bank Plc',
        code: '1',
        amount: '9,900',
    },
    {
        name: 'DSTV Confam Streaming Subscription',
        code: '2',
        amount: '1,200'
    }
]

const GoTVPlans: IWaterBillPlan[] = [
    {
        name: 'GOTV Add-on Bank Plc',
        code: '1',
        amount: '9,900',
    },
    {
        name: 'GOTV Confam Streaming Subscription',
        code: '2',
        amount: '1,200'
    }
]

const StartimesPlans: IWaterBillPlan[] = [
    {
        name: 'Startimes Add-on Bank Plc',
        code: '1',
        amount: '9,900',
    },
    {
        name: 'Startimes Confam Streaming Subscription',
        code: '2',
        amount: '1,200'
    }
]

const TSTV: IWaterBillPlan[] = [
    {
        name: 'TSTV Add-on Bank Plc',
        code: '1',
        amount: '9,900',
    },
    {
        name: 'TSTV Confam Streaming Subscription',
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

export default function WaterBillsSubscription({ navigation, route }: IWaterBillSubscriptionProps) {
    const [showProductModal, setShowProductModal] = useState<boolean>(false);
    const [selectedPlan, setSelectedPlan] = useState<IWaterBillPlan>({ name: '', code: '', amount: '' })
    const [showBeneficiaryCard, setShowBeneficiaryCard] = useState(false);
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
        navigation.navigate('ConfirmTransactionScreen')
    }

    let { billProvider } = route.params

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
    const plansMap = {
        'DSTV': DSTVPlans,
        'GoTV': GoTVPlans,
        'Startimes': StartimesPlans,
        'TSTV': TSTV,
    };
    const _plan = plansMap[billProvider as keyof IPlansMap];

    return (
        <MainLayout backAction={() => { }}>
            <ProductModal
                showModal={showProductModal}
                options={_plan || []}
                onClose={() => setShowProductModal(false)}
                value={selectedPlan.code}
                onSelect={plan => setSelectedPlan(plan)}
                provider={billProvider}
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
                <Typography title={`${billProvider} Subscription`} type="heading5-sb" />
                <View style={mainWalletStyles.cardContainer}>
                    <AccountDetailsCard
                        acctNumber={User.acctNumber}
                        walletBalance={User.walletBalance}
                        showDetails={false}
                    />
                </View>
                <View style={mainWalletStyles.inputGroup}>
                    {!showBeneficiaryCard && (
                        <View style={mainWalletStyles.beneficiaryCardContainer}>
                            <TextInput placeholder={`${billProvider} Meter Number`} />
                            <Pressable onPress={handleBeneficiary} style={mainWalletStyles.doubleUserTeamContainer}>
                                <Image style={mainWalletStyles.doubleUserIcon} source={ComponentImages.Wallet.teamLine} />
                                <Typography title="Select Beneficiaries" type="body-sb" />
                            </Pressable>
                        </View>
                    )}
                    {isLoading && <ActivityIndicator size="small" color="#0000ff" />}
                    {showBeneficiaryCard && !isLoading && (
                        <View style={mainWalletStyles.beneficiaryCardContainer}>
                            <TextInput placeholder={`${billProvider} Smart Card Number`} value={selectedBeneficiary.accountNumber} />
                            <BeneficiaryCard
                                accountName={selectedBeneficiary.name}
                                accountNumber={selectedBeneficiary.accountNumber}
                                showCard={showBeneficiaryCard}
                                onClose={handleClose}
                            />
                        </View>
                    )}

                    {/* something is fundamentally wrong in the styling of this, needs to be looked at */}
                    <DropDown label="Select Product" value={selectedPlan.name} onTrigger={() => setShowProductModal(true)} />

                    <TextInput
                        placeholder="Amount"
                        type="text"
                    />

                    <TextInput
                        placeholder="Customer Phone number"
                    // type="phone"
                    />

                    <TextInput
                        placeholder="Narration"
                    />

                </View>

                <View style={mainWalletStyles.btn}>
                    <Button title='Confirm Transaction' onPress={handleScreenNavigation} />
                </View>
                {/* <View style={mainWalletStyles.buttonContainer}>
                    <Button title="Confirm Transaction" onPress={handleScreenNavigation} />
                </View> */}

            </View>
        </MainLayout>
    )
}