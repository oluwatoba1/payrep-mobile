import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { MainLayout } from "../../../../components/Layout";
import { TransactionReceipt } from "../../../../components";
import { TransactionStackParamList } from "../../../../navigation/types";


type TransactionReceiptScreenNavigationProp = StackNavigationProp<TransactionStackParamList>;

type TransactionReceiptScreenRouteProp = RouteProp<TransactionStackParamList, "TransactionReceiptScreen">;

interface TransactionReceiptScreenProps {
  navigation: TransactionReceiptScreenNavigationProp;
  route: TransactionReceiptScreenRouteProp;
}
  


export default function TransactionReceiptScreen({navigation:{navigate}, route:{params}}:TransactionReceiptScreenProps) {
    const {id} = params

    
    return (
        <MainLayout backAction={() => {}} showHeader={false}>
            <TransactionReceipt id={id} />
        </MainLayout>
    )
}