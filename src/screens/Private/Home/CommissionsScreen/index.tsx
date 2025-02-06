import { Pressable, View } from "react-native";
import { CommissionsBalanceCard } from "../../../../components/Cards";
import { Button, TextInput, Typography } from "../../../../components/Forms";
import { MainLayout } from "../../../../components/Layout";
import Pad from "../../../../components/Pad";
import { scaleHeight } from "../../../../utils/Helpers";
import Colors from "../../../../theme/Colors";
import styles from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "../../../../navigation/types";
import { useState } from "react";

let User = {
    id: '',
    commissionsBalance: '50,000',
    bonusBalance: '95,000'
}


type CommissionsScreenNavigationProps = StackNavigationProp<HomeStackParamList>
interface CommissionsScreenProps {
    navigation: CommissionsScreenNavigationProps
}

export default function Commissions({navigation}: CommissionsScreenProps){
    const [withdrawalAmount, setWithdrawalAmount] = useState<String | null>(null);

    const handleSetMaxAmount = () => {
        setWithdrawalAmount(User.commissionsBalance);
    };

    const handleTransactionConfirmation = () => {
        navigation.navigate('ConfirmTransactionScreen')
    }
    return(
        <MainLayout backAction={() => null}>
            <View style={styles.container}>
                <Typography title="Commission" type="heading4-sb"/>
                <Pad size={16}/>
                <CommissionsBalanceCard />
                <Pad size={24} />
                <View style={{ gap: scaleHeight(12) }}>
                    <Typography title="Withdraw commission to wallet" type="body-sb" color={Colors.gray['base']} />
                    <View style={{ gap: scaleHeight(24) }}>
                        <View>
                            <TextInput placeholder="Enter Amount" icon="₦" value={withdrawalAmount?.toString() || ''} onChangeText={(text) => setWithdrawalAmount(text)} />
                            <Pressable><Typography title="Tap to withdraw total commission" type="label-sb" onPress={handleSetMaxAmount} /></Pressable>
                        </View>
                        
                        <TextInput placeholder="Narration" />
                    </View>
                </View>
                <View style={styles.btn}>
                    <Button title="Cashout" onPress={handleTransactionConfirmation}/>
                </View>
            </View>
        </MainLayout>
    )
    
}