import React, { useState } from "react";
import { FlatList, Image, ImageProps, Pressable, StyleSheet, View } from "react-native";
import { Typography } from "../Forms";
import { scale } from "../../utils/Helpers";
import { styles } from "./styles";

export interface IPlanType {
  name: string;
}

interface PlanTypesProps {
  options: IPlanType[];
  checked: ImageProps;
  unchecked: ImageProps;
  onSelect: (name: string | null) => void;
  onClose: () => void;
}

const NetworkPlanTypes: React.FC<PlanTypesProps> = ({ options, checked, unchecked, onSelect, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const toggleSelection = (name: string) => {
    const newSelectedPlan = selectedPlan === name ? null : name;
    setSelectedPlan(newSelectedPlan);
    onSelect(newSelectedPlan);
    onClose()
  };

  const renderItem = ({ item }: { item: IPlanType }) => (
    <Pressable
      style={styles.itemContainer}
      onPress={() => toggleSelection(item.name)}
    >
      <Image source={item.name === selectedPlan ? checked : unchecked} style={styles.icon} />
      <Typography title={item.name} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};


export default NetworkPlanTypes;
