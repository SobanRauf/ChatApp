// import { getStyles } from '@/styles';
// import { useTheme } from '@react-navigation/native';
// import React from 'react';
// import { Text, View } from 'react-native';

// const MessageBubble = ({ message }) => {
//   const { colors } = useTheme();
//   const isMyMessage = message.sender === 'me';
//   const styles = getStyles(colors);

//   // Determine text color based on bubble type for better contrast
//   const myMessageTextColor = isMyMessage ? '#1E1E1E' : "#1E1E1E";
//   if(colors.sentBubble === '#E1F5FE') { // A simple check for the light theme custom bubble
//       myMessageTextColor = '#000000'
//   }

//   return (
//     <View style={[styles.messageBubble, isMyMessage ? styles.myMessage : styles.otherMessage ]}>
//       <Text style={[styles.messageText, { color: myMessageTextColor }]}>{message.text}</Text>
//       <Text style={[styles.messageTime, { color: myMessageTextColor, opacity: 0.7 }]}>{message.timestamp}</Text>
//     </View>
//   );
// };

// export default MessageBubble;
import { getStyles } from "@/styles";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Message {
  id: string;
  text?: string;
  image?: string;
  sender: string;
  timestamp: string;
}

interface MessageBubbleProps {
  message: Message;
  onLongPress: () => void;
  onEdit: () => void;
  onDelete: () => void;
  showOptions: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  onLongPress,
  onEdit,
  onDelete,
  showOptions,
}) => {
  const { colors } = useTheme();
  const isMyMessage = message.sender === "me";
  const styles = getStyles(colors);
  console.log(message, "lkj");
  return (
    <View style={{ position: "relative", marginVertical: 4 }}>
      {showOptions && isMyMessage && (
        <View
          style={[
            dropdownStyles.dropdown,
            {
              backgroundColor: colors.card,
              shadowColor: colors.text,
            },
          ]}
        >
          <TouchableOpacity onPress={onEdit}>
            <Text style={[dropdownStyles.option, { color: colors.primary }]}>
              ✏️ Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDelete}>
            <Text style={[dropdownStyles.option, { color: "red" }]}>
              🗑 Delete
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity onLongPress={onLongPress} activeOpacity={0.7}>
        <View
          style={[
            styles.messageBubble,
            isMyMessage ? styles.myMessage : styles.otherMessage,
          ]}
        >
          {message.text && (
            <Text style={[styles.messageText]}>{message.text}</Text>
          )}

          {message.image && (
            <Image
              source={{ uri: message.image }}
              style={{
                width: 200,
                height: 200,
                borderRadius: 12,
                marginTop: message.text ? 8 : 0,
              }}
              resizeMode="cover"
            />
          )}

          <Text style={[styles.messageTime]}>{message.timestamp}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const dropdownStyles = StyleSheet.create({
  dropdown: {
    position: "absolute",
    top: -60,
    right: 0,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    zIndex: 9999,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
    minWidth: 100,
  },
  option: {
    paddingVertical: 6,
    fontSize: 15,
  },
});

export default MessageBubble;
