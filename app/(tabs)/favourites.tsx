import ChatListItem from "@/components/ChatListItem";
import { useAppSelector } from "@/store/redux/hook";
import { getStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
    FlatList,
    SafeAreaView,
    Text,
    TextInput,
    View
} from "react-native";

export default function FavoritesScreen() {
  const { colors } = useTheme();
  const chats = useAppSelector((state) => state.chats.chatList);
  const favorites = useAppSelector((state) => state.chats.favorites);
  const styles = getStyles(colors);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = useMemo(() => {
    return chats
      .filter((chat) =>
        favorites.includes(chat?.id) &&
        chat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => b.timestamp.localeCompare(a.timestamp));
  }, [chats, favorites, searchQuery]);

  return (
    <SafeAreaView style={[styles.screen, { flex: 1 }]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorite Chats</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search favorites"
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
