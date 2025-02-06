import React from "react";
import { Image, ImageProps, TextStyle, View, ViewStyle } from "react-native";
import CustomCard from "../CustomCard";
import { Typography } from "../../Forms";
import { styles } from "./styles";

type AccountTierCardProps = {
    tierImage: ImageProps;
    name: string;
    accountNumber: string;
    dailyLimit: string;
    balanceLimit: string;
    customContainerStyle?: ViewStyle;
    limitCustomStyle?: ViewStyle;
    textColor?: TextStyle;
    isCurrentTier?: boolean;
    onNavigate?: () => void;
    tier: string
};

const AccountTierCard: React.FC<AccountTierCardProps> = ({
    tierImage,
    name,
    accountNumber,
    dailyLimit,
    balanceLimit,
    customContainerStyle = { backgroundColor: "#161A1D" },
    textColor = {},
    limitCustomStyle = {},
    isCurrentTier,
    tier = "1",
    onNavigate
}) => {
    return (
        <CustomCard visible={true} customContainerStyle={customContainerStyle} onPress={onNavigate}>
            <View style={{ flexDirection: "row", gap: 4 }}>
                <Typography title="Tier" type="body-b" style={[styles.labelStyle, textColor]} />
                <Image source={tierImage} style={styles.tierLogo} />
                {!isCurrentTier &&  <Typography title={`(Upgrade to Tier ${tier})`} type="body-b" style={styles.upgradeTierColor} />}
            </View>
            <View style={{ gap: 16 }}>
                { isCurrentTier ? 
                    (<Typography type="body-r" title={`${name} (${accountNumber})`} style={[styles.labelStyle, textColor]} />) 
                    : (
                        <View>
                            <Typography type="body-sb" title='Required documents' style={[styles.labelStyle, textColor]} />
                        </View>
                    )}
                <View style={[styles.limitContainer, limitCustomStyle]}>
                    <Typography type="label-sb" title="Daily Limit:" style={[styles.labelStyle]} />
                    <Typography type="label-sb" title={dailyLimit} style={[styles.labelStyle]} />
                </View>
                <View style={[styles.limitContainer, limitCustomStyle]}>
                    <Typography type="label-sb" title="Balance Limit:" style={[styles.labelStyle]} />
                    <Typography type="label-sb" title={balanceLimit} style={[styles.labelStyle]} />
                </View>
            </View>
        </CustomCard>
    );
};

export default AccountTierCard;
