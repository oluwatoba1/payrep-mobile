import { FlatList, Image, View } from "react-native";
import { MainLayout } from "../../../../../components/Layout";
import { Typography } from "../../../../../components/Forms";
import { StackNavigationProp } from "@react-navigation/stack";
import { WalletStackParamList } from "../../../../../navigation/types";
import SearchInput from "../../../../../components/Forms/SearchInput";
import { useState } from "react";
import { mainWalletStyles } from "../../../Wallet/mainWalletStyles";
import ComponentImages from "../../../../../../assets/images/components";
import { styles } from "./styles";
import BillPaymentCard from "../../../../../components/Cards/BillPaymentCard";
import { BOTTOM_TAB_CONTAINER_HEIGHT } from "../../../../../utils/Constants";
import Colors from "../../../../../theme/Colors";
import Pad from "../../../../../components/Pad";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { scale, scaleHeight } from "../../../../../utils/Helpers";

type BillPaymentScreenNavigationProp = StackNavigationProp<WalletStackParamList, 'BillPaymentScreen'>;


interface IBillsPaymentProps {
    navigation: BillPaymentScreenNavigationProp;
}

export default function BillPayment({navigation}:IBillsPaymentProps) {
    const [searchText, setSearchText] = useState<string>('');

    const handleSearch = (text: string) => {
        setSearchText(text);
    };

    const handleAirtimePress = () => {
        navigation.navigate('AirtimeScreen')
    }
    const handleDataPress = () => {
        navigation.navigate('DataScreen')
    }
    const handleCablePress = () => {
        navigation.navigate('CableTVProviderScreen')
    }
    const handleElectricityPress = () => {
        navigation.navigate('ElectricityProviderScreen')
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
    
    const BILLS = [
        {
            'code': 'cable',
            'name': 'Cable TV',
            'icon': ComponentImages.BillPaymentCards.cable,
            'description': 'Subscribe to your cable TV and share with family to keep everyone entertained',
        },
        {
            'code': 'electricity',
            'name': 'Electricity Bills',
            'icon': ComponentImages.BillPaymentCards.utility,
            'description': 'Easily manage and pay your electricity bills with our secure billing service',
        },
        {
            'code': 'airtime',
            'name': 'Airtime',
            'icon': ComponentImages.BillPaymentCards.airtime,
            'description': 'Instantly top-up airtime and stay connected with loved ones',
        },
        {
            'code': 'data',
            'name': 'Data',
            'icon': ComponentImages.BillPaymentCards.data,
            'description': 'Buy data effortlessly. Stay connected and share with loved ones with ease',
        },
        {
            'code': 'water',
            'name': 'Water Bills',
            'icon': ComponentImages.BillPaymentCards.water,
            'description': 'Easily manage and pay your utility bills with our secure billing service',
        },
    ]

    

    return (
        <MainLayout backAction={() => {}}>
            <View style={mainWalletStyles.container}>
                <Typography title="Bills" />
                <View style={{height: '100%'}}>
                    <View style={styles.searchContainer}>
                        <SearchInput
                            searchPlaceholder="Search bills"
                            searchText={searchText}
                            onSearch={handleSearch}
                        />
                    </View>
                    
                    <Typography title='Select Category' type='subheading-sb' color={Colors.gray['base']} />
                    <Pad size={12} />
                    <View style={styles.container}>
                        <ScrollView contentContainerStyle={styles.categories}>
                            
                            <TouchableOpacity style={styles.category} onPress={handleCablePress}>
                                <Typography title={BILLS[0].name} type='body-b' />
                                <Image source={BILLS[0].icon} style={styles.categoryIcon} />
                                <Typography title={BILLS[0].description} type='body-r' style={{ textAlign: 'center' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.category} onPress={handleElectricityPress}>
                                <Typography title={BILLS[1].name} type='body-b' />
                                <Image source={BILLS[1].icon} style={{ width: scale(17.58), height: scaleHeight(24), }} />
                                <Typography title={BILLS[1].description} type='body-r' style={{ textAlign: 'center' }} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.category} onPress={handleAirtimePress}>
                                <Typography title={BILLS[2].name} type='body-b' />
                                <Image source={BILLS[2].icon} style={styles.categoryIcon} />
                                <Typography title={BILLS[2].description} type='body-r' style={{ textAlign: 'center' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.category} onPress={handleDataPress}>
                                <Typography title={BILLS[3].name} type='body-b' />
                                <Image source={BILLS[3].icon} style={styles.categoryIcon} />
                                <Typography title={BILLS[3].description} type='body-r' style={{ textAlign: 'center' }} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.category} onPress={handleElectricityPress}>
                                <Typography title={BILLS[4].name} type='body-b' />
                                <Image source={BILLS[4].icon} style={styles.categoryIcon} />
                                <Typography title={BILLS[4].description} type='body-r' style={{ textAlign: 'center' }} />
                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                </View>
           </View>
        </MainLayout>
    )
}