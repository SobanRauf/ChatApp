import { initialChats } from "@/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
}

interface ChatsState {
  chatList: Chat[];
  favorites: string[];
}

const initialState: ChatsState = {
  chatList: initialChats,
  favorites: [],
};

const chatsSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    updateLastMessage: (
      state,
      action: PayloadAction<{
        chatId: string;
        message: string;
        timestamp: string;
      }>
    ) => {
      const { chatId, message, timestamp } = action.payload;
      const chatIndex = state.chatList.findIndex((c) => c.id === chatId);
      if (chatIndex !== -1) {
        state.chatList[chatIndex].lastMessage = message;
        state.chatList[chatIndex].timestamp = timestamp;
      }
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const chatId = action.payload;
      const isFavorite = state.favorites.includes(chatId);
      if (isFavorite) {
        state.favorites = state.favorites.filter((id) => id !== chatId);
      } else {
        state.favorites.push(chatId);
      }
    },
  },
});

export const { updateLastMessage, toggleFavorite } = chatsSlice.actions;
export default chatsSlice.reducer;
