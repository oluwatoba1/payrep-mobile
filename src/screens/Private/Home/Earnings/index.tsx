import { Image, View } from "react-native";
import { EarningsCard } from "../../../../components/Cards";
import { Typography } from "../../../../components/Forms";
import { MainLayout } from "../../../../components/Layout";
import Pad from "../../../../components/Pad";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconImages from "../../../../../assets/images/appIcons";
import { scale } from "../../../../utils/Helpers";
import { useState } from "react";
import Colors from "../../../../theme/Colors";
import { EarninsHistory, Transactions } from "../../../../components/TransactionHistory";
import FilterModal from "../../../../components/Modal/FilterModal";

let User = {
    id: '',
    commissionsBalance: '95,000',
    earnings: {
        commission: 'N100,000',
        bonus: 'N10,000',
    },
}

const earningsData: IEarningsData[] = [
    {
        id: 'commission',
        title: 'Commission',
        cardType: 'commission',
        action: () => {},
    },
    {
        id: 'bonus',
        title: 'Bonus',
        cardType: 'bonus',
        action: () => { },
    },
];

interface ITransaction {
    id: string;
    type: string;
    source: string;
    date: string;
    status: STATUSES;
    amount: string;
}

let transactions : ITransaction[]=[
    {
        type: 'earnings',
        id: '260300466206',
        amount: '50000',
        source: 'commission',
        date: '18/01/1995',
        status: 'successful'
    },
]

export default function Earnings(){
    const [isFilterHidden, setIsFilterHidden] = useState(false);

    const toggleFilterVisibility = () => {
        setIsFilterHidden(!isFilterHidden);
        console.log(isFilterHidden);

    };
    return(
        <MainLayout backAction={() => null}>
            <FilterModal 
                showModal={isFilterHidden}
                onClose={() => setIsFilterHidden(false)}
                title="Filter Transaction"
            />
            <View style={styles.container}>
                
                <Typography title="Earnings"/>
                <Pad size={16}/>
                <EarningsCard earnings={User.earnings} earningsData={earningsData}/>
                <Pad size={24} />
                <View style={styles.filterArea}>
                    <Typography title="My Withdrawals" type="subheading-sb"/>

                    <View style={styles.filterContainer}>
                        <TouchableOpacity style={{ flexDirection: 'row', gap: scale(4), alignItems: 'center' }} onPress={toggleFilterVisibility}>
                            <Image source={IconImages.icon.filter} style={styles.filterIcon} />
                            <Typography title='Filter' type='body-b' color={Colors.gray['600']} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Pad size={12}/>
                {/* <Transactions transactions={transactions} earnings/> */}
                <EarninsHistory transactions={transactions}/>

            </View>
        </MainLayout>
    )
    
}