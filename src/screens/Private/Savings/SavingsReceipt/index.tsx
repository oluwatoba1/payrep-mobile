import { View } from "react-native";
import { TransactionReceipt } from "../../../../components";
import { StackNavigationProp } from "@react-navigation/stack";
import { SavingsStackParamList } from "../../../../navigation/types";
import { RouteProp } from "@react-navigation/native";
import { MainLayout } from "../../../../components/Layout";


type TransactionReceiptScreenNavigationProp = StackNavigationProp<SavingsStackParamList>;

type TransactionReceiptScreenRouteProp = RouteProp<SavingsStackParamList, "SavingsReceiptScreen">;

interface TransactionReceiptScreenProps {
  navigation: TransactionReceiptScreenNavigationProp;
  route: TransactionReceiptScreenRouteProp;
}


export default function SavingsReceipt({navigation:{navigate}, route:{params}}:TransactionReceiptScreenProps) {
    const {id, source, destination, date, status, type, amount} = params

    
    return (
        <MainLayout backAction={() => {}} showHeader={false}>
            <TransactionReceipt id={id} source={source} destination={destination} date={date} status={status} type={type} amount={amount} />
        </MainLayout>
    )
}