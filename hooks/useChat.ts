import { useChatActions } from "@/hooks/useChatActions";
import { useImagePicker } from "@/hooks/useImagePicker";
import { useAppSelector } from "@/store/redux/hook";
import { getStyles } from "@/styles";
import { useTheme } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { useRef, useState } from "react";
import {
    TextInput
} from "react-native";

export default function useChat() {
  const { chatId } = useLocalSearchParams<{ chatId: string }>();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const chatInfo = useAppSelector((state) =>
    state.chats.chatList.find((c) => c.id === chatId)
  );
  const messages = useAppSelector((state) =>
    typeof chatId === "string" ? state.messages[chatId] || [] : []
  );
  const favorites = useAppSelector((state) => state.chats.favorites);
  const isFavorite = favorites.includes(chatId);
  const inputRef = useRef<TextInput>(null);
  const flatListRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const [showOptionsFor, setShowOptionsFor] = useState<string | null>(null);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { sendMessage, removeMessage, toggleChatFavorite } = useChatActions(
    chatId,
    flatListRef
  );
  const { pickImage } = useImagePicker(chatId, (imageUri) => {
    sendMessage("", null, imageUri);
  });

  return {
    inputText,
    selectedImage,
    sendMessage,
    editingMessageId,
    setInputText,
    setEditingMessageId,
    setSelectedImage,
    chatInfo,
    styles,
    isFavorite,
    toggleChatFavorite,
    messages,
    flatListRef,
    removeMessage,
    showOptionsFor,
    setShowOptionsFor,
    inputRef,
    pickImage
  };
}
