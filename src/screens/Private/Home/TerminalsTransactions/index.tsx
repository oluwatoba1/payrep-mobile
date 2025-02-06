import { Image, TouchableOpacity, View } from "react-native";
import { Typography } from "../../../../components/Forms";
import { MainLayout } from "../../../../components/Layout";
import Pad from "../../../../components/Pad";
import styles from "../../More/AccountManagement/Terminals/styles";
import SearchBar from "../../../../components/Forms/SearchBar";
import IconImages from "../../../../../assets/images/appIcons";
import Colors from "../../../../theme/Colors";
import { scale } from "../../../../utils/Helpers";
import { useState } from "react";

let User = {
    walletBalance: '1,000,000',
    terminals: 2,
}

let transactions= [
    {
        tid: '2033RXR5',
        serialNo: 'P260300466206',
        amount: '50000',
        charges: '50.00'
    },
]

export default function TerminalsTransactions() {
    const [isFilterHidden, setIsFilterHidden] = useState(true);

    const toggleFilterVisibility = () => {
        setIsFilterHidden(!isFilterHidden);
        console.log(isFilterHidden);

    };
    return(
        <MainLayout backAction={() => {}}>
            <View style={styles.container}>
                <Typography title="Today’s Transactions" type="heading4-sb"/>
                <Pad size={16}/>
                {/* <TerminalsBalanceCard user={User}/> */}
                <Pad size={24}/>
                <View style={styles.filterArea}>
                    <View style={{width: '75%'}}>
                        <SearchBar title="Search transactions" />
                    </View>
                    <View style={styles.filterContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row', gap: scale(4), alignItems: 'center' }} onPress={toggleFilterVisibility}>
                            <Image source={IconImages.icon.filter} style={styles.filterIcon} />
                            <Typography title='Filter' type='body-b' color={Colors.gray[600]} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Pad size={24} />
                {/* <TerminalTransactionsCard transactions={transactions} viewMore={false} title="Today's Transactions"/> */}
            </View>
            
        </MainLayout>
    );
}