import MessageBubble from "@/components/ui/MessageBubble";
import { Message } from "@/data";
import React from "react";
import {
  FlatList,
  Keyboard,
  LayoutAnimation,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface ChatMessagesProps {
  messages: Message[];
  flatListRef: any;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  showOptionsFor: string | null;
  setShowOptionsFor: (id: string | null) => void;
  inputRef: any;
  styles: any;
  setInputText: (text: string) => void;
  setEditingMessageId: (id: string | null) => void;
}
const ChatMessages = ({
  messages,
  flatListRef,
  onDelete,
  showOptionsFor,
  setShowOptionsFor,
  inputRef,
  styles,
  setInputText,
  setEditingMessageId,
}: ChatMessagesProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setShowOptionsFor(null);
        Keyboard.dismiss();
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
                setShowOptionsFor(item.id === showOptionsFor ? null : item.id);
              }}
              onDelete={() => {
                onDelete(item.id);
                setShowOptionsFor(null);
              }}
              onEdit={() => {
                setEditingMessageId(item.id);
                setInputText(item.text);
                setShowOptionsFor(null);
                inputRef.current?.focus();
              }}
              showOptions={showOptionsFor === item.id}
            />
          )}
          style={styles.messagesList}
          contentContainerStyle={{ paddingVertical: 10 }}
          onContentSizeChange={() =>
            flatListRef.current?.scrollToEnd({ animated: true })
          }
          onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatMessages;
