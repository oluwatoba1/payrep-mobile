import { Image, Pressable, Text, View, ScrollView } from "react-native";
import { MainLayout } from "../../../../../components/Layout";
import ComponentImages from "../../../../../../assets/images/components";
import { useState } from "react";
import { AccountCard } from "../../../../../components/Cards";
import { styles } from "./styles";
import { Typography } from "../../../../../components/Forms";

export default function AccountScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('Basic Information');

  const AccountItems = ['Basic Information'];

  const personalInfo = {
    firstName: "Musa",
    middleName: 'Abdullahi',
    lastName: 'Ome',
    dateOfBirth: '09/10/1994',
    emailAddress: 'mossa@gmail.com',
    phoneNumber: '09035914448',
    bvn: '2222222222222',
    nin: '2222222222222',
  };

  const addressInfo = {
    homeAddress: "House 40, Agege",
    stateOfOrigin: 'ONDO',
    lga: 'Omeioo',
    country: 'Brazil',
    
  };

  const settlementBank = {
    accountName: 'Musa Abdullahi Omeiza',
    accountNumber: '20234545656',
    bank: 'Gurus bank plc'
  }

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <MainLayout backAction={() => null}>
      <View style={styles.profileContainerStyle}>
        <View style={{marginBottom: 24}}>
          <Typography title="My Profile" type="heading4-sb" />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{borderWidth:1, borderRadius:100, padding:16}}>
            <Image
              style={styles.profileImageStyle}
              source={ComponentImages.BottomNav.ProfileIcon}
            />
          </View>
        </View>
        <View style={styles.tabContainer}>
          {AccountItems.map((item) => (
            <Pressable
              key={item}
              onPress={() => handleTabPress(item)}
              style={[
                styles.tabItem,
                selectedTab === item ? styles.activeTab : styles.inactiveTab
              ]}
            >
              <View style={styles.tabIconContainer}>
                <Typography style={styles.tabIcon} title={`${AccountItems.indexOf(item) + 1}`} />
              </View>
              <Text style={styles.tabText}>{item}</Text>
            </Pressable>
          ))}
        </View>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {selectedTab === 'Basic Information' && (
            <>
              <AccountCard accountInfo={personalInfo} title="Personal Info" />
              <AccountCard accountInfo={addressInfo} title="Address" />
              <AccountCard accountInfo={personalInfo} title="Business Information" />
              <AccountCard accountInfo={personalInfo} title="Next of Kin Details" />
            </>
          )}
          {selectedTab === 'Settlement Bank' && (
            <AccountCard accountInfo={settlementBank} title="Settlement Bank" />
          )}
        </ScrollView>
      </View>
    </MainLayout>
  );
}





