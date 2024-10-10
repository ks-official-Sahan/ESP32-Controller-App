import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import { MessageStatus } from "@/components/chat/ChatListItem";
import ChatMessage from "@/components/chat/ChatMessage";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import EmojiSelector, { Categories } from "react-native-emoji-selector"; // Import EmojiSelector

const Chat = () => {
  let { chat } = useLocalSearchParams();
  chat = chat as string;

  const [isActive, setIsActive] = useState(true);
  const [inputText, setInputText] = useState(""); // State for input text

  const loadMessages = async (messages) => {
    setMessages(messages);
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let messages = [
      {
        id: 1,
        user: "Amandi",
        message:
          "Hello Sahan, I'm looking forward to see you! Are you free these days?",
        time: new Date().toLocaleTimeString(),
        status: MessageStatus.sent,
      },
      {
        id: 2,
        user: "Me",
        message: "Hey",
        time: new Date().toLocaleTimeString(),
        status: MessageStatus.sent,
      },
      {
        id: 3,
        user: "Me",
        message: "I'm looking forward to see you too",
        time: new Date().toLocaleTimeString(),
        status: MessageStatus.sent,
      },
    ];

    loadMessages(messages);
  }, []);

  const handleSend = () => {
    // Alert.alert("Send", inputText);
    const message = {
      id: 4,
      user: "Me",
      message: inputText,
      time: new Date().toLocaleTimeString(),
      status: MessageStatus.sending,
    };
    setMessages([...messages, message]);
    setInputText("");
  };

  // Append selected emoji to the input field
  const handleEmojiSelect = (emoji) => {
    setInputText((prevText) => prevText + emoji);
  };

  return (
    <DefaultBackgroundWrapper isScroll={false}>
      {/* FlashList for messages */}
      <FlashList
        data={messages}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <ChatMessage
            key={item.id}
            message={item.message}
            time={item.time}
            status={item.status}
            isMe={item.user === "Me"}
          />
        )}
        ListHeaderComponent={() => {
          return <ChatHeader chat={chat} isActive={isActive} />;
        }}
      />

      <ChatInput
        handleEmojiSelect={handleEmojiSelect}
        inputText={inputText}
        setInputText={setInputText}
        handleSend={handleSend}
      />
    </DefaultBackgroundWrapper>
  );
};

export default Chat;
