import { View } from "react-native";
import { MainLayout } from "../../../../components/Layout";
import styles from "./styles";
import { Button, Typography } from "../../../../components/Forms";
import Pad from "../../../../components/Pad";
import Colors from "../../../../theme/Colors";
import PinPad from "../../../../components/Forms/PinPad";

export default function BonusWithdrawalScreen(){
    
    let receiver = {
        name: 'OLUWATOBA FOLARIN JOHNSON',
        account: '2409678023',
        narration: 'Bonus Withdrawal',
        amount: '12,433,655.0'
    }

    return(
        <MainLayout backAction={() => null}>
            <View style={styles.container}>
                <Typography title="Transaction Confirmation" type="heading-sb" />
                <Pad size={16}/>
                <View style={styles.detailsContainer}>
                    <Typography title="Receiver (Wallet)" type="label-r" color={Colors.gray['base']}/>
                    <Typography title={`${receiver.name} - ${receiver.account}`} type="body-sb"/>
                </View>
                <View style={{...styles.detailsContainer, borderBottomWidth: 0.5, borderBottomColor: Colors.gray[200]}}>
                    <Typography title="Debit Account" type="label-r" color={Colors.gray['base']}/>
                    <Typography title="BONUS" type="body-sb"/>
                </View>
                <View style={styles.detailsContainer}>
                    <Typography title="Narration" type="label-r" color={Colors.gray['base']}/>
                    <Typography title={receiver.narration} type="body-sb"/>
                </View>
                <Pad size={16}/>
                <View style={styles.amountContainer}>
                    <View style={styles.withdrawalDetails}>
                        <Typography title="Sender" type="label-r"/>
                        <Typography title="Bonus" type="label-sb"/>
                    </View>
                    <View style={styles.withdrawalDetails}>
                        <Typography title="Amount" type="label-r"/>
                        <Typography title={receiver.amount} type="label-sb"/>
                    </View>
                </View>
                <Pad size={100}/>
                <View style={styles.pinArea}>
                    <Typography title="Enter your Four Digit PIN "/>
                    <PinPad pin="1111" onInput={()=>{}}/>
                </View>
                <View style={styles.btn}>
                    <Button title="Complete Transaction" />
                </View>
            </View>
        </MainLayout>
    )
}