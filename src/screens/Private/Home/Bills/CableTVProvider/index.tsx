import { Image, Pressable, View } from "react-native";
import { MainLayout } from "../../../../../components/Layout";
import styles from "./styles";
import { Typography } from "../../../../../components/Forms";
import Pad from "../../../../../components/Pad";
import IconImages from "../../../../../../assets/images/appIcons";
import ComponentImages from "../../../../../../assets/images/components";
import Colors from "../../../../../theme/Colors";
import { BillsProviderCard } from "../../../../../components/Cards";
import { scale, scaleHeight } from "../../../../../utils/Helpers";
import { FlatList } from "react-native-gesture-handler";
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
    {
        name: 'Oluwatoba K',
        id: '2409678021'
    },
    {
        name: 'Oluwatoba K',
        id: '2409678021'
    },
    {
        name: 'Oluwatoba K',
        id: '2409678021'
    },
]
const trimmedRecents = recents.slice(0, 7)

const CableTV = [
    {
        provider: 'DSTV',
        type: 'cable',
        icon: ComponentImages.CableTV.dstv,
        colour: '#E0F5FF',
        arrow: IconImages.arrows.blueRight,
        iconHeight: 20,
        iconWidth: 107.7
    },
    {
        provider: 'GoTV',
        type: 'cable',
        icon: ComponentImages.CableTV.gotv,
        colour: '#E8F7F2',
        arrow: IconImages.arrows.greenRight,
        iconHeight: 20,
        iconWidth: 106
    },
    {
        provider: 'Startimes',
        type: 'cable',
        icon: ComponentImages.CableTV.startimes,
        colour: '#FCEDE3',
        arrow: IconImages.arrows.orangeRight,
        iconHeight: 69,
        iconWidth: 88
    },
    {
        provider: 'TSTV',
        type: 'cable',
        icon: ComponentImages.CableTV.tstv,
        colour: '#FDE2EE',
        arrow: IconImages.arrows.pinkRight,
        iconHeight: 40,
        iconWidth: 140
    },
]


export default function CableTVProvider(){
    return(
        <MainLayout backAction={()=> {}}>
            <View style={styles.container}>
                <Typography title="Cable TV" type="heading5-sb"/>
                <Pad size={12}/>
                <BillsRecents recents={trimmedRecents}/>
                <Pad size={24}/>
                <View style={styles.categoriesContainer}>
                    <Typography title="Select your preferred cable TV" color={Colors.gray['base']} type="body-r"/>
                    <View style={styles.categories}>
                        <BillsProviderCard cardDetails={CableTV[0]} />
                        
                        <BillsProviderCard cardDetails={CableTV[1]}  />
                        
                        <BillsProviderCard cardDetails={CableTV[2]}  />
                        
                        <BillsProviderCard cardDetails={CableTV[3]}  />
                    </View>
                </View>
            </View>
        </MainLayout>
    )
}