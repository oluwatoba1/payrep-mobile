import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { MainLayout } from "../../../../components/Layout";
import { TransactionReceipt } from "../../../../components";
import { HomeStackParamList } from "../../../../navigation/types";


type TransactionReceiptScreenNavigationProp = StackNavigationProp<HomeStackParamList>;

type TransactionReceiptScreenRouteProp = RouteProp<HomeStackParamList, "TransactionReceiptScreen">;

interface TransactionReceiptScreenProps {
  navigation: TransactionReceiptScreenNavigationProp;
  route: TransactionReceiptScreenRouteProp;
}


export default function TransactionReceiptScreen({navigation:{navigate}, route:{params}}:TransactionReceiptScreenProps) {
    const {id, source, destination, date, status, type, amount} = params

    
    return (
        <MainLayout backAction={() => {}} showHeader={false}>
            <TransactionReceipt id={id} source={source} destination={destination} date={date} status={status} type={type} amount={amount} />
        </MainLayout>
    )
}