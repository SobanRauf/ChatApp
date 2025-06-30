import MessageBubble from "@/components/ui/MessageBubble";
import { Message } from "@/data";
import { useAppSelector } from "@/store/redux/hook";
import { toggleFavorite, updateLastMessage } from "@/store/slices/chatSlice";
import {
  addMessage,
  deleteMessage,
  editMessage,
} from "@/store/slices/messageSlice";
import { getStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  UIManager,
  View,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useDispatch, useSelector } from "react-redux";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function ChatScreen() {
  const { chatId } = useLocalSearchParams();
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const chatInfo = useAppSelector((state) =>
    state.chats.chatList.find((c) => c.id === chatId)
  );
  const messages = useSelector((state) => state.messages[chatId] || []);
  const favorites = useSelector((state) => state.chats.favorites);
  const isFavorite = favorites.includes(chatId);

  const [inputText, setInputText] = useState("");
  const flatListRef = useRef<FlatList<Message>>(null);
  const styles = getStyles(colors);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [showOptionsFor, setShowOptionsFor] = useState(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     quality: 0.7,
  //   });

  //   if (!result.canceled) {
  //     setSelectedImage(result.assets[0].uri); // ✅ this works now
  //   }
  // };
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;

      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const newMessage = {
        id: `msg${Date.now()}`,
        text: "",
        sender: "me",
        timestamp,
        image: imageUri,
      };

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      dispatch(addMessage({ chatId, message: newMessage }));
      dispatch(
        updateLastMessage({
          chatId,
          message: "📷 Photo",
          timestamp,
        })
      );

      flatListRef.current?.scrollToEnd({ animated: true });
    }
  };

  const handleSend = () => {
    if (inputText.trim().length === 0 && !selectedImage) return;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    if (editingMessageId) {
      dispatch(
        editMessage({
          chatId,
          messageId: editingMessageId,
          newText: inputText.trim(),
        })
      );
      setEditingMessageId(null);
      setShowOptionsFor(null);
    } else {
      const newMessage = {
        id: `msg${Date.now()}`,
        text: inputText.trim(),
        sender: "me",
        timestamp,
        image: selectedImage || null,
      };

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      dispatch(addMessage({ chatId, message: newMessage }));
      dispatch(
        updateLastMessage({
          chatId,
          message: inputText.trim() || "📷 Photo",
          timestamp,
        })
      );
    }

    setInputText("");
    setSelectedImage(null);
  };

  const handleToggleFavorite = () => dispatch(toggleFavorite(chatId));

  if (!chatInfo) {
    return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.text}>Chat not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Stack.Screen
        options={{
          title: chatInfo.name,
          headerRight: () => (
            <TouchableOpacity
              onPress={handleToggleFavorite}
              style={{ marginRight: responsiveWidth(4) }}
            >
              <Ionicons
                name={isFavorite ? "star" : "star-outline"}
                size={responsiveFontSize(3)}
                color={isFavorite ? "#793DED" : colors.primary}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setShowOptionsFor(null); // dismiss dropdown
            Keyboard.dismiss(); // also dismiss keyboard if open
          }}
        >
          <View style={{ flex: 1 }}>
            <FlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <MessageBubble
                  message={item}
                  onLongPress={() => {
                    LayoutAnimation.configureNext(
                      LayoutAnimation.Presets.easeInEaseOut
                    );
                    setShowOptionsFor(
                      item.id === showOptionsFor ? null : item.id
                    );
                  }}
                  onDelete={() => {
                    dispatch(deleteMessage({ chatId, messageId: item.id }));
                    setShowOptionsFor(null);
                  }}
                  onEdit={() => {
                    setEditingMessageId(item.id);
                    setInputText(item.text);
                    setShowOptionsFor(null);
                  }}
                  showOptions={showOptionsFor === item.id}
                />
              )}
              style={styles.messagesList}
              contentContainerStyle={{ paddingVertical: responsiveHeight(1) }}
              onContentSizeChange={() =>
                flatListRef.current?.scrollToEnd({ animated: true })
              }
              onLayout={() =>
                flatListRef.current?.scrollToEnd({ animated: true })
              }
            />
          </View>
        </TouchableWithoutFeedback>
        {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message..."
            placeholderTextColor={"gray"}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Ionicons
              name="send"
              size={responsiveFontSize(3)}
              color={"#FFFFFF"}
            />
          </TouchableOpacity>
        </View> */}
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={pickImage} style={{ marginRight: 10 }}>
            <Ionicons
              name="image"
              size={responsiveFontSize(4)}
              color={"#793DED"}
            />
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message..."
            placeholderTextColor={"gray"}
          />

          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Ionicons
              name="send"
              size={responsiveFontSize(3)}
              color={"#FFFFFF"}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
