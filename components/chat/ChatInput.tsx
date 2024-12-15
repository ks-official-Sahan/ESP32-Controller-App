import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { MessageStatus } from "./ChatListItem";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import CustomIconButton from "../CustomIconButton";

const ChatInput = ({
  inputText,
  setInputText,
  handleEmojiSelect,
  handleSend,
  inputRef,
}) => {
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false); // Toggle emoji picker visibility
  const [inputHeight, setInputHeight] = useState(26);
  const maxLines = 6;
  const lineHeight = 20;

  const handleEmojiPickerToggle = () => {
    setEmojiPickerVisible(!isEmojiPickerVisible);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      className="w-full py-2"
    >
      <View className="flex-row bg-gray-800 rounded-3xl py-2 px-4 mx-3 items-end justify-between">
        {/* Emoji Toggle Button */}
        <CustomIconButton
          handlePress={handleEmojiPickerToggle}
          icon="happy-outline"
          iconType="ion"
          containerStyle="mr-2"
          size={24}
        />

        {/* Text Input */}
        <TextInput
          className="flex-1 text-base text-gray-200 px-2 max-h-[120px]"
          placeholder="Type a message..."
          placeholderTextColor="#bcbcbc"
          value={inputText}
          onChangeText={setInputText}
          multiline={true}
          ref={inputRef}
          // numberOfLines={maxLines}
          onContentSizeChange={(event) => {
            const contentHeight = event.nativeEvent.contentSize.height;
            const newHeight = Math.min(contentHeight, maxLines * lineHeight);
            setInputHeight(newHeight);
          }}
          style={[{ height: Math.max(26, inputHeight) }]}
          scrollEnabled={inputHeight >= maxLines * lineHeight}
        />

        {/* Send Button */}
        <TouchableOpacity
          className="ml-2"
          activeOpacity={0.7}
          onPress={handleSend}
        >
          <Ionicons name="send" size={24} color="green" />
        </TouchableOpacity>
      </View>

      {/* EmojiSelector */}
      {isEmojiPickerVisible && (
        <View className="w-full h-[250px] bg-gray-900 mt-2 rounded-lg">
          <EmojiSelector
            onEmojiSelected={handleEmojiSelect}
            category={Categories.all} // Show all categories
            showSearchBar={false}
            columns={9}
          />
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export default ChatInput;
