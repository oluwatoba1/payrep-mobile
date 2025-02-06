import { Image, Pressable, View } from "react-native";
import ScreenImages from "../../../../assets/images/screens";
import { MainLayout } from "../../../components/Layout";
import { generalStyles } from "../More/styles";
import { styles } from "./styles";
import { Typography } from "../../../components/Forms";
import CustomCard from "../../../components/Cards/CustomCard";


export default function SupportScreen() {

    const IMAGES = [
        ScreenImages.profileScreen.instaIcon,
        ScreenImages.profileScreen.twitterIcon,
        ScreenImages.profileScreen.facebookIcon,
        ScreenImages.profileScreen.linkedInIcon,
        ScreenImages.profileScreen.youtubeIcon,

    ]
    return (
        <MainLayout backAction={() => {}}>
            <View style={generalStyles.container}>
                <View style={styles.supportSection}>
                    <Typography title="Support" />
                    <Typography title="We are available 24/7. Contact us via our different communication channels." type="subheading" />
                </View>

                <CustomCard visible={true} customContainerStyle={{height:262, backgroundColor:'#E9EBEC', flex:0.5, paddingVertical:32, paddingHorizontal:16}}>
                    <View style={styles.supportSection}>
                        <View style={styles.itemContainer}>
                            <Image source={ScreenImages.profileScreen.mailLineIcon} style={generalStyles.icon} />
                            <View>
                                <Typography title="Send us an email to " type="body-r" />
                                <Typography title="Payrepsupport@gmail.com" type="body-r" />
                            </View>
                        </View>
                        <View>
                            <Typography title="Reach our customer representative on" type="body-sb" style={[styles.supportContact, {textAlign:'center'}]} />
                            <View style={styles.itemContainer}>
                                <Image source={ScreenImages.profileScreen.phoneLineIcon} style={generalStyles.icon} />
                                <Typography title="+2348190457823 or start a chat on whatsapp +2348067345123" type="body-sb"  />
                            </View>
                        </View>
                    </View>

                    <View style={{justifyContent:'center', alignItems:'center', gap:4, marginTop: 16}}>
                        <Typography title="Connect with us on our Social Media Platform" type="body-r" />
                        <View style={styles.itemContainer}>
                            {IMAGES.map((image, index) => (
                                <Pressable key={index}>
                                    <Image source={image} style={generalStyles.icon} />
                                </Pressable>
                            ))}
                        </View>
                    </View>
                </CustomCard>
            </View>
        </MainLayout>
    )
}