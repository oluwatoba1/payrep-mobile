import { FlatList, Image, Pressable, View, StyleSheet } from "react-native";
import PayrepText from "../../Text/input";
import { styles } from "./styles";

interface ProfileCardItem {
  id: string;
  title: string;
  description?: string;
  profileIcon: any; 
  rightIcon?: any; 
}

interface ProfileCardProps {
  data: ProfileCardItem[];
  cardTitle: string;
}

export default function ProfileCard ({ data, cardTitle }: ProfileCardProps) {
  const renderItem = ({ item, index }: { item: ProfileCardItem, index: number }) => {
    const isLastItem = index === data.length - 1;
    return (
      <Pressable style={[styles.card, isLastItem && styles.lastCard]}>
        <View style={styles.cardContent}>
          <Image source={item.profileIcon} style={styles.icon} />
          <View style={styles.textContainer}>
            <PayrepText text={item.title} textStyle={styles.titleText} />
            {item.description && <PayrepText text={item.description} textStyle={styles.subText} />}
          </View>
        </View>
        {item.rightIcon && <Image source={item.rightIcon} style={styles.icon} />}
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <PayrepText text={cardTitle} textStyle={styles.header} />
     <View style={styles.profileContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
    </View>
  );
}


