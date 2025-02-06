import { View } from "react-native";
import { Typography } from "../../Forms";
import HorizontalProgressBar from "../../ProgressBars/HorizontalProgress";
import CustomCard from "../CustomCard";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeStackParamList } from "../../../navigation/types";

interface ProfileCompletionCardProps {
    title: string;
    body: string;
    progress: number,
    handleNavigation: () => void;
}

export default function ProfileCompletionCard({ title, body, progress, handleNavigation }: ProfileCompletionCardProps) {
    return (
        <CustomCard
            visible={true}
            customContainerStyle={styles.ProfileCompletionCardContainer}
            onPress={handleNavigation}
        >
            <View style={styles.itemContainer}>
                <View style={styles.textContainer}>
                    <Typography type="subheading-sb" title={title} style={styles.textColor} />
                    <Typography type="label-r" title={body} style={styles.textColor} />
                </View>
                {/* <ProgressBar  /> */}
                <HorizontalProgressBar progress={progress} text={`${progress}% complete profile`} textStyle={styles.textColor1} />
            </View>

        </CustomCard>
    )
}