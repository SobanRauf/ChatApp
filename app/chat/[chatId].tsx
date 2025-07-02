import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessages";
import useChat from "@/hooks/useChat";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
} from "react-native";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import ToastManager from "toastify-react-native/components/ToastManager";

export default function ChatScreen() {
  const {
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
    pickImage,
  } = useChat();
  const { colors } = useTheme();
  const handleSend = () => {
    if (inputText.trim().length === 0 && !selectedImage) return;
    sendMessage(inputText, editingMessageId, selectedImage);
    setInputText("");
    setEditingMessageId(null);
    setSelectedImage(null);
  };

  if (!chatInfo) {
    return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.text}>Chat not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ToastManager textStyle={{ fontSize: 16 }} style={{ width: "90%" }} />
      <Stack.Screen
        options={{
          title: chatInfo.name,
          headerTitleStyle: { color: colors.text },
          headerTintColor: colors.text,
          headerBackTitle: "Back",
          headerRight: () => (
            <Ionicons
              name={isFavorite ? "star" : "star-outline"}
              size={responsiveFontSize(3)}
              color={isFavorite ? "#793DED" : "#793DED"}
              style={{ marginRight: responsiveWidth(4) }}
              onPress={toggleChatFavorite}
            />
          ),
        }}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <ChatMessages
          messages={messages}
          flatListRef={flatListRef}
          onDelete={removeMessage}
          onEdit={() => {}}
          showOptionsFor={showOptionsFor}
          setShowOptionsFor={setShowOptionsFor}
          inputRef={inputRef}
          styles={styles}
          setInputText={setInputText}
          setEditingMessageId={setEditingMessageId}
        />
        <ChatInput
          inputRef={inputRef}
          inputText={inputText}
          setInputText={setInputText}
          onSend={handleSend}
          onPickImage={pickImage}
          styles={styles}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
