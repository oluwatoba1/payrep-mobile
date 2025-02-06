import React from "react";
import { FlatList, Image, ImageProps, Pressable, View } from "react-native";
import { Typography } from "../Forms";
import { getDynamicStyles, styles } from "./styles";

export interface INetworkTypeProps {
  code: string;
  icon: ImageProps;
  name: string;
}

interface NetworkTypesProps {
  title: string;
  items: INetworkTypeProps[];
  onSelect: (code: string) => void; 
}

const NetworkTypes: React.FC<NetworkTypesProps> = ({ title, items, onSelect }) => {
  const renderItem = ({ item }: { item: INetworkTypeProps }) => (
    <Pressable
      style={[styles.itemContainer, getDynamicStyles(item.name).itemContainer]}
      onPress={() => onSelect(item.name)} 
    >
      <Image source={item.icon} style={styles.icon} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Typography title={title} type="body-sb" />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default NetworkTypes;
