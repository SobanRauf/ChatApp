import MessageBubble from '@/components/ui/MessageBubble';
import { useTheme } from '@/context/themeContext';
import { toggleFavorite, updateLastMessage } from '@/store/slices/chatSlice';
import { addMessage } from '@/store/slices/messageSlice';
import { getStyles } from '@/styles';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, KeyboardAvoidingView, LayoutAnimation, Platform, SafeAreaView, TextInput, TouchableOpacity, UIManager, View } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function ChatScreen({ route, navigation }) {
  const { chatId, chatName } = route.params;
  const { theme } = useTheme();
  const dispatch = useDispatch();
  
  const messages = useSelector(state => state.messages[chatId] || []);
  const favorites = useSelector(state => state.chats.favorites);
  const isFavorite = favorites.includes(chatId);

  const [inputText, setInputText] = useState('');
  const flatListRef = useRef(null);
  const styles = getStyles(theme);
  
  const handleSend = () => {
    if (inputText.trim().length === 0) return;
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessage = {
      id: `msg${Date.now()}`,
      text: inputText.trim(),
      sender: 'me',
      timestamp,
    };
    
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    dispatch(addMessage({ chatId, message: newMessage }));
    dispatch(updateLastMessage({ chatId, message: inputText.trim(), timestamp }));
    setInputText('');
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(chatId));
  };
  
  useEffect(() => {
    navigation.setOptions({
      title: chatName,
      headerRight: () => (
        <TouchableOpacity onPress={handleToggleFavorite} style={{ marginRight: responsiveWidth(4) }}>
          <Icon name={isFavorite ? 'star' : 'star-outline'} size={responsiveFontSize(3)} color={isFavorite ? '#FFD700' : theme.primary} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isFavorite, theme]);

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? responsiveHeight(10) : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <MessageBubble message={item} />}
          style={styles.messagesList}
          contentContainerStyle={{ paddingVertical: responsiveHeight(1) }}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type a message..."
            placeholderTextColor={theme.inactiveTab}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Icon name="send" size={responsiveFontSize(3)} color={theme.background} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default ChatScreen;