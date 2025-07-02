import ChatListItem from "@/components/ChatListItem";
import { useAppSelector } from "@/store/redux/hook";
import { getStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, SafeAreaView, Text, TextInput, View } from "react-native";

export default function ChatsScreen() {
  const { colors } = useTheme();
  const chats = useAppSelector((state) => state.chats.chatList);
  const styles = getStyles(colors);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(chats)
  // const filteredChats = useMemo(() => {
  //   return chats
  //     .filter((chat) =>
  //       chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  //     )
  //     .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  // }, [chats, searchQuery]);
  const parseTime = (timeStr: string) => {
    const today = new Date().toISOString().split('T')[0]; // e.g., "2025-06-30"
    return new Date(`${today} ${timeStr}`);
  };
  const filteredChats = useMemo(() => {
    const filteredChats = chats
      .filter((chat) =>
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      // .sort(
      //   (a, b) =>
      //     new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      // );
      .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
    // console.log(filteredChats);
    return filteredChats;
  }, [chats, searchQuery]);

  return (
    <SafeAreaView style={[styles.screen, { flex: 1 }]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Chats</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your conversations"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatListItem
            item={item}
            onPress={() => router.push(`/chat/${item.id}`)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}
