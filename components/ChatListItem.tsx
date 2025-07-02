import { useAppSelector } from "@/store/redux/hook";
import { getStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const ChatListItem = ({ item, onPress }: any) => {
  const { colors } = useTheme();
  const favorites = useAppSelector((state) => state.chats.favorites);
  const isFavorite = favorites.includes(item.id);
  const styles = getStyles(colors);

  return (
    <TouchableOpacity onPress={onPress} style={styles.chatItemContainer}>
      <View style={styles.chatItemContent}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={[styles.avatar]}>
            <Image
              style={styles.image}
              source={require("../assets/images/pic2.png")}
            />
          </View>
          <View style={styles.chatItemTextContainer}>
            <Text style={styles.chatItemName}>{item.name}</Text>
            <Text style={styles.chatItemMessage} numberOfLines={1}>
              {item.lastMessage}
            </Text>
          </View>
        </View>
        <View style={styles.chatItemMeta}>
          <Text style={styles.chatItemTime}>{item.timestamp}</Text>
          {isFavorite && (
            <Ionicons
              name="star"
              size={responsiveFontSize(2)}
              color="#793DED"
              style={{ marginTop: 5 }}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
