import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { responsiveFontSize } from "react-native-responsive-dimensions";
interface ChatInputProps {
  inputRef: any;
  inputText: string;
  setInputText: (text: string) => void;
  onSend: () => void;
  onPickImage: () => void;
  styles: any;
}
const ChatInput = ({
  inputRef,
  inputText,
  setInputText,
  onSend,
  onPickImage,
  styles,
}: ChatInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TouchableOpacity onPress={onPickImage} style={{ marginRight: 10 }}>
        <Ionicons name="image" size={responsiveFontSize(4)} color={"#793DED"} />
      </TouchableOpacity>

      <TextInput
        ref={inputRef}
        style={styles.textInput}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Type a message..."
        placeholderTextColor={"gray"}
      />

      <TouchableOpacity style={styles.sendButton} onPress={onSend}>
        <Ionicons name="send" size={responsiveFontSize(3)} color={"#FFFFFF"} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;
