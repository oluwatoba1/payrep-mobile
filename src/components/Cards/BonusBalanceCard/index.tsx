import { Image, ImageBackground, TouchableOpacity, View } from "react-native";
import ComponentImages from "../../../../assets/images/components";
import styles from "./styles";
import { useState } from "react";
import { Typography } from "../../Forms";
import IconImages from "../../../../assets/images/appIcons";
import Colors from "../../../theme/Colors";

export default function BonusBalanceCard() {
    let User = {
        walletBalance: '95,000'
    }

    const [isHidden, setIsHidden] = useState(true);

    const toggleBalanceVisibility = () => {
        setIsHidden(!isHidden);
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={ComponentImages.bonusCard.card} style={styles.card}>
                <View style={styles.details}>
                    <Typography title="Bonus" type="label-sb" color={Colors.gray['base']}/>
                    <View style={styles.walletBalance}>
                        <Typography title="₦" type="heading3-b" color={Colors.gray[600]} />
                        <Typography title={isHidden ? '**************' : User.walletBalance} type="heading4-b" color={Colors.gray[600]} />
                        <TouchableOpacity onPress={toggleBalanceVisibility}>
                            <Image source={IconImages.icon.eye} style={styles.viewIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )

}