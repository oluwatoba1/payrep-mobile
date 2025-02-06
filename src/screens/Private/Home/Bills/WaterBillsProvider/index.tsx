import { Image, Pressable, View } from "react-native";
import { MainLayout } from "../../../../../components/Layout";
import styles from "./styles";
import { Typography } from "../../../../../components/Forms";
import Pad from "../../../../../components/Pad";
import IconImages from "../../../../../../assets/images/appIcons";
import ComponentImages from "../../../../../../assets/images/components";
import Colors from "../../../../../theme/Colors";
import { BillsProviderCard } from "../../../../../components/Cards";
import { BillsRecents } from "../../../../../components";

interface IRecents {
    name: string;
    id: string;
}
const recents : IRecents[] = [
    {
        name: 'Oluwatoba F',
        id: '2409678023'
    },
    {
        name: 'Oluwatoba L',
        id: '2409678029'
    },
    {
        name: 'Oluwatoba S',
        id: '2409678027'
    },
    {
        name: 'Oluwatoba F',
        id: '2409678025'
    },
    {
        name: 'Oluwatoba K',
        id: '2409678021'
    },
]
const trimmedRecents = recents.slice(0, 4)

const WaterBill = [
    {
        provider: 'Water Provider',
        type: 'water',
        icon: ComponentImages.WaterBills.aedc,
        colour: '#E0F5FF',
        arrow: IconImages.arrows.blueRight,
        iconHeight: 40,
        iconWidth: 107.7
    },
    {
        provider: 'Water Provider',
        type: 'water',
        icon: ComponentImages.WaterBills.aedc,
        colour: '#E0F5FF',
        arrow: IconImages.arrows.blueRight,
        iconHeight: 40,
        iconWidth: 107.7
    },
    {
        provider: 'Water Provider',
        type: 'water',
        icon: ComponentImages.WaterBills.aedc,
        colour: '#E0F5FF',
        arrow: IconImages.arrows.blueRight,
        iconHeight: 40,
        iconWidth: 107.7
    },
]

export default function WaterBillProvider(){
    return(
        <MainLayout backAction={()=> {}}>
            <View style={styles.container}>
                <Typography title="Water" type="heading5-sb"/>
                <Pad size={12}/>
                <BillsRecents recents={trimmedRecents}/>
                <Pad size={24}/>
                <View style={styles.categoriesContainer}>
                    <Typography title="Select Your Preferred Water Provider" color={Colors.gray['base']}/>
                    <View style={styles.categories}>
                        <BillsProviderCard cardDetails={WaterBill[0]} />
                        
                        <BillsProviderCard cardDetails={WaterBill[1]}  />
                        
                        <BillsProviderCard cardDetails={WaterBill[2]}  />
                    </View>
                </View>
            </View>
        </MainLayout>
    )
}