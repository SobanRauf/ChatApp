import { initialChats } from '@/data';
import { createSlice } from '@reduxjs/toolkit';

const chatsSlice = createSlice({
  name: 'chats',
  initialState: {
    chatList: initialChats,
    favorites: [],
  },
  reducers: {
    updateLastMessage: (state, action) => {
      const { chatId, message, timestamp } = action.payload;
      const chatIndex = state.chatList.findIndex(c => c.id === chatId);
      if (chatIndex !== -1) {
        state.chatList[chatIndex].lastMessage = message;
        state.chatList[chatIndex].timestamp = timestamp;
      }
    },
    toggleFavorite: (state, action) => {
      const chatId = action.payload;
      const isFavorite = state.favorites.includes(chatId);
      if (isFavorite) {
        state.favorites = state.favorites.filter(id => id !== chatId);
      } else {
        state.favorites.push(chatId);
      }
    },
  },
});

export const { updateLastMessage, toggleFavorite } = chatsSlice.actions;
export default chatsSlice.reducer;