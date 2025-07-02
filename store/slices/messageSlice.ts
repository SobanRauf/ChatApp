import { initialMessages } from "@/data";
import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "toastify-react-native";
const messagesSlice = createSlice({
  name: "messages",
  initialState: initialMessages,
  reducers: {
    addMessage: (state, action) => {
      const { chatId, message } = action.payload;
      if (state[chatId]) {
        state[chatId].push(message);
      } else {
        state[chatId] = [message];
      }
    },
    deleteMessage: (state, action) => {
      const { chatId, messageId } = action.payload;
      if (state[chatId]) {
        state[chatId] = state[chatId].filter((m) => m.id !== messageId);
        Toast.success("Message Deleted");
      }
    },
    editMessage: (state, action) => {
      const { chatId, messageId, newText } = action.payload;
      const msg = state[chatId]?.find((m) => m.id === messageId);
      if (msg) {
        msg.text = newText;
      }
    },
  },
});

export const { addMessage, deleteMessage, editMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
