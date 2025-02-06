import { View } from "react-native";
import { BonusBalanceCard } from "../../../../components/Cards";
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
    commissionsBalance: '95,000',
    bonusBalance: '95,000',
}

type BonusScreenNavigationProps = StackNavigationProp<HomeStackParamList>
interface BonusScreenProps {
    navigation: BonusScreenNavigationProps
}

export default function Bonus({navigation}: BonusScreenProps){
    const [withdrawalAmount, setWithdrawalAmount] = useState<String | null>(null);

    const handleSetMaxAmount = () => {
        setWithdrawalAmount(User.bonusBalance);
    };
    const handleTransactionConfirmation = () => {
        navigation.navigate('ConfirmTransactionScreen')
    }
    return(
        <MainLayout backAction={() => null}>
            <View style={styles.container}>
                <Typography title="Bonus" type="heading4-sb"/>
                <Pad size={16}/>
                <BonusBalanceCard />
                <Pad size={24} />
                <View style={{ gap: scaleHeight(12) }}>
                    <Typography title="Withdraw bonus to wallet" type="body-sb" color={Colors.gray['base']} />
                    <View style={{ gap: scaleHeight(24) }}>
                        <View>
                            <TextInput placeholder="Enter Amount" icon="₦" value={withdrawalAmount?.toString() || ''} onChangeText={(text) => setWithdrawalAmount(text)} />
                            <Typography title="Tap to withdraw total bonus" type="label-sb" onPress={handleSetMaxAmount}/>
                        </View>
                        
                        <TextInput placeholder="Narration" />
                    </View>
                </View>
                <View style={styles.btn}>
                    <Button title="Cashout"  onPress={handleTransactionConfirmation}/>
                </View>
            </View>
        </MainLayout>
    )
    
}