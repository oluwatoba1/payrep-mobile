import { View,  ScrollView } from "react-native";
import { Button, Typography } from "../../../../../../components/Forms";
import ComponentImages from "../../../../../../../assets/images/components";
import { MainLayout } from "../../../../../../components/Layout";
import { BankCard } from "../../../../../../components/Cards";
import { styles } from "./styles";
import { generalStyles } from "../../../styles";
// import { StackScreenProps } from "@react-navigation/stack";
import { MoreStackParamList } from "../../../../../../navigation/types";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";

type LinkPaymentMethodScreenProps = NativeStackScreenProps<MoreStackParamList>



export default function ListBankCardScreen({navigation: {navigate}, route}:LinkPaymentMethodScreenProps) {

  const handleCardPress = () => {
    
    navigate("ViewBankCardScreen");
  };

  const CARDS : { cardType: "MASTERCARD" | "VERVE" | "VISA"; cardHolderName: string; cardHolderNumber: string; }[] = [
    {
        cardType: "MASTERCARD",
        cardHolderName: "Musa Abdullahi Omeiza",
        cardHolderNumber: "**** **** **** 1234",
    },
    {
        cardType: "MASTERCARD",
        cardHolderName: "Musa Abdullahi Omeiza",
        cardHolderNumber: "**** **** **** 1234",
    },
    {
        cardType: "MASTERCARD",
        cardHolderName: "Musa Abdullahi Omeiza",
        cardHolderNumber: "**** **** **** 1234",
    },
    {
        cardType: "MASTERCARD",
        cardHolderName: "Musa Abdullahi Omeiza",
        cardHolderNumber: "**** **** **** 1234",
    },
    {
        cardType: "MASTERCARD",
        cardHolderName: "Musa Abdullahi Omeiza",
        cardHolderNumber: "**** **** **** 1234",
    },
    {
        cardType: "MASTERCARD",
        cardHolderName: "Musa Abdullahi Omeiza",
        cardHolderNumber: "**** **** **** 1234",
    },
    {
        cardType: "VERVE",
        cardHolderName: "Musa Abdullahi Omeiza",
        cardHolderNumber: "**** **** **** 1234",
    }
  ]

  const handleScreenNav = () => {
    navigate('LinkPaymentMethodScreen')
  }

  return (
    <MainLayout backAction={() => null}>
      <View style={generalStyles.container}>
        <Typography title="Bank Cards" type="heading" />
        <Typography title="Manage all your cards connected to PayRep. Click on the card to view details." type="subheading" />

        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
            
        >
        {CARDS.map((item, index) => (
            <BankCard 
                key={index}
                index={index}
                // handleCardPress={handleCardPress}
                cardType={item.cardType}
                cardHolderName={item.cardHolderName}
                cardHolderNumber={item.cardHolderNumber}
            />
        ))}        
        </ScrollView>
        <View style={generalStyles.buttonContainer}>
          <Button title="Add Card" onPress={handleScreenNav}  />
        </View>
      </View>
    </MainLayout>
  );
}

