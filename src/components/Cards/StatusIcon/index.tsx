import React from 'react';
import { View, Image } from 'react-native';
import IconImages from "../../../../assets/images/appIcons";
import styles from "./styles";

interface StatusIconProps {
  status: STATUSES; 
  type?: "credit" | "debit"; 
}

export default function StatusIcon({ status, type = "credit" }: StatusIconProps) {
  const isCredit = type === "credit";

  return (
    <View style={isCredit ? styles.success : styles.error}>
      <Image
        source={isCredit ? IconImages.arrows.debitSuccess : IconImages.arrows.creditFailed}
        style={styles.icon}
      />
    </View>
  );
}
