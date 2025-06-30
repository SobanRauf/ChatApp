// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistReducer, persistStore } from 'redux-persist';
// import chatsReducer from '../slices/chatSlice';
// import messagesReducer from '../slices/messageSlice';
// const rootReducer = combineReducers({
//   chats: chatsReducer,
//   messages: messagesReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['chats', 'messages'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import chatsReducer from '../slices/chatSlice';
import messagesReducer from '../slices/messageSlice';

const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['chats', 'messages'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// ✅ TypeScript: RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
