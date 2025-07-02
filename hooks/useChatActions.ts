import { toggleFavorite, updateLastMessage } from "@/store/slices/chatSlice";
import {
  addMessage,
  deleteMessage,
  editMessage,
} from "@/store/slices/messageSlice";
import { LayoutAnimation } from "react-native";
import { useDispatch } from "react-redux";

export function useChatActions(chatId: string, flatListRef: any) {
  const dispatch = useDispatch();

  const sendMessage = (
    inputText: string,
    editingMessageId: string | null,
    selectedImage: string | null
  ) => {
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
      return;
    }

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

    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const removeMessage = (messageId: string) => {
    dispatch(deleteMessage({ chatId, messageId }));
  };

  const toggleChatFavorite = () => {
    dispatch(toggleFavorite(chatId));
  };

  return { sendMessage, removeMessage, toggleChatFavorite };
}
