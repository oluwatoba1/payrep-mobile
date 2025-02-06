import { Image,  TouchableOpacity, View } from "react-native";
import IconImages from "../../../assets/images/appIcons";
import styles from "./styles";
import { Button, Typography } from "../Forms";
import Colors from "../../theme/Colors";
import { useState } from "react";
import CustomModal from "../Modal";
import DisputesModal from "../Modal/DisputesModal";

interface ITransactionResponseData {
    id: string;
    type: string;
    source: string;
    destination: string;
    date: string;
    status: STATUSES;
    amount: string;
    narration?: string;
}


interface ITransaction {
    id: string;
}

const transactionData:ITransactionResponseData[] = [
    {
      id: '012883778272993939393930090',
      type: 'credit',
      source: 'Bank A',
      destination: 'User Account',
      date: '18/12/2023',
      status: 'successful',
      amount: '22,000',
      narration: 'the new narration'
    },
    {
      id: '012883778272993939393930091',
      type: 'debit',
      source: 'User Account',
      destination: 'Electricity Bill',
      date: '19/12/2023',
      status: 'successful',
      amount: '5,500',
    },
    {
      id: '012883778272993939393930092',
      type: 'credit',
      source: 'Salary',
      destination: 'User Account',
      date: '20/12/2023',
      status: 'successful',
      amount: '50,000',
    },
    {
      id: '012883778272993939393930093',
      type: 'debit',
      source: 'User Account',
      destination: 'Groceries',
      date: '21/12/2023',
      status: 'successful',
      amount: '3,200',
    },
    {
      id: '012883778272993939393930094',
      type: 'credit',
      source: 'Freelance Project',
      destination: 'User Account',
      date: '22/12/2023',
      status: 'pending',
      amount: '15,000',
    },
    {
      id: '012883778272993939393930095',
      type: 'debit',
      source: 'User Account',
      destination: 'Gym Membership',
      date: '23/12/2023',
      status: 'failed',
      amount: '2,800',
    },
    {
      id: '012883778272993939393930096',
      type: 'credit',
      source: 'Investment Return',
      destination: 'User Account',
      date: '24/12/2023',
      status: 'successful',
      amount: '8,750',
    },
    {
      id: '012883778272993939393930097',
      type: 'debit',
      source: 'User Account',
      destination: 'Internet Subscription',
      date: '25/12/2023',
      status: 'successful',
      amount: '1,200',
    },
    {
      id: '012883778272993939393930098',
      type: 'credit',
      source: 'Gift',
      destination: 'User Account',
      date: '26/12/2023',
      status: 'successful',
      amount: '10,000',
    },
    {
      id: '012883778272993939393930099',
      type: 'debit',
      source: 'User Account',
      destination: 'Restaurant',
      date: '27/12/2023',
      status: 'successful',
      amount: '4,500',
    },
  ];
  



export default function Transaction({
    id
}:ITransaction) {
    let sender = '';
    let receiver = '';
    const User = {
        name: "John Doe",
        account: '2409678023',
    };
    const transaction = transactionData.find(t => t.id === id);


    const [modalVisible, setModalVisible] = useState(false);
    const handleSharePDF = () => {
        setModalVisible(false);
    };

    const handleShareImage = () => {
        setModalVisible(false);
    };

    const handleNavigateToHome = () => {

    }

    if (!transaction) {
        return (
            <View style={styles.container}>
                <Typography title="Transaction not found." type="heading5-sb" color={Colors.danger['base']} />
            </View>
        );
    }

    
    const { type, source, destination, date, status, amount, narration } = transaction;

    
    sender = type === "debit" ? source : "N/A";
    receiver = type === "credit" ? destination : "N/A";

    const [isDisputeModalHidden, setIsDisputeModalHidden] = useState(true);
    const toggleDisputeModalVisibility = () => {
        setIsDisputeModalHidden(!isDisputeModalHidden);
        console.log(isDisputeModalHidden);
        
    };

    return (
            <View style={styles.container}>
            <DisputesModal onClose={toggleDisputeModalVisibility} showModal={isDisputeModalHidden} title="Transaction Dispute"/>
                <View style={styles.receiptContainer}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.topDetailsContainer}>
                            <View style={styles.receiptHeader}>
                                <View style={{width: "100%", flexDirection:'row', justifyContent:"space-between", alignItems:'center'}}>
                                    <Typography title={`Generated on ${date}`} type="label-r" color={Colors.gray['base']} />
                                    <Typography title={`18:00`} type="label-r" color={Colors.gray['base']} />
                                </View>
                                <Typography title="Transaction Receipt" type="heading5-sb" />
                            </View>
                            <Image source={IconImages.icon.checkmark} style={styles.checkmarkIcon} />
                        </View>
                        <View style={styles.bottomDetailsContainer}>
                            <View style={styles.amountContainer}>
                                <Typography title={`N${amount.toLocaleString()}`} type="heading4-sb" />
                                <Typography title="Transaction Amount" type="label-sb" color={Colors.gray['base']} />
                            </View>
                            <View>
                                <View style={styles.details}>
                                    <Typography title="Sender" type="label-sb" />
                                    <Typography title={sender} type="label-r" />
                                </View>
                                <View style={styles.details}>
                                    <Typography title="Receiver" type="label-sb" />
                                    <Typography title={`${receiver} | ${User.account} | VFD`} type="label-r" />
                                </View>
                                <View style={styles.details}>
                                    <Typography title="Transaction Date" type="label-sb" />
                                    <Typography title={date} type="label-r" />
                                </View>
                                <View style={styles.details}>
                                    <Typography title="Reference" type="label-sb" />
                                    <Typography title={id} type="label-r" />
                                </View>
                                <View style={styles.details}>
                                    <Typography title="Narration" type="label-sb" />
                                    <Typography title={narration || ""} type="label-r" />
                                </View>
                                <View style={{ ...styles.details, borderBottomWidth: 0 }}>
                                    <Typography title="Transaction Status" type="label-sb" />
                                    <Typography title={status} type="label-r" />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.backgroundLogoContainer}>
                        <Image source={IconImages.logo.payrepBlackWithText} style={styles.backgroundLogo} />
                    </View>
                </View>
            <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Typography title="Share Receipt" type="heading5-sb" />
                        <TouchableOpacity onPress={handleSharePDF}>
                            <Typography title="Share as PDF" type="label-sb" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleShareImage}>
                            <Typography title="Share as Image" type="label-sb" />
                        </TouchableOpacity>
                        <Button title="Cancel" containerStyle={styles.modalButton} onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </CustomModal>
                <View style={styles.buttons}>
                    <Button title="Share Receipt" containerStyle={styles.button} onPress={() => setModalVisible(true)}  />
                    {status == "successful" ? (
                        <Button title="Done" onPress={handleNavigateToHome} containerStyle={{ backgroundColor: 'rgba(254, 184, 0, 0.15)', ...styles.button }} textStyle={{ color: Colors.primary['base'] }} />
                    ): (
                        <Button onPress={() => toggleDisputeModalVisibility} title="Initiate Dispute" containerStyle={{ backgroundColor: 'rgba(254, 184, 0, 0.15)', ...styles.button }} textStyle={{ color: Colors.primary['base'] }}/>
                    )}
                </View>
            </View>
    );
}
