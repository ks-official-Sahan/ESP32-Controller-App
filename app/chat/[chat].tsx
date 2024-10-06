import ChatHeader from "@/components/chat/ChatHeader";
import { MessageStatus } from "@/components/chat/ChatListItem";
import ChatMessage from "@/components/chat/ChatMessage";
import CustomIconButton from "@/components/CustomIconButton";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

const Chat = () => {
  let { chat } = useLocalSearchParams();
  chat = chat as string;

  const [isActive, setIsActive] = useState(true);

  const [messages, setmessages] = useState([
    {
      id: 1,
      user: "Amandi",
      message:
        "Hello Sahan, I'm looking forward to see you! Are you free these days?",
      time: new Date().toLocaleTimeString(),
      isActive: true,
      status: MessageStatus.sent,
    },
    {
      id: 2,
      user: "Me",
      message: "Hey",
      time: new Date().toLocaleTimeString(),
      isActive: true,
      status: MessageStatus.sent,
    },
    {
      id: 3,
      user: "Me",
      message: "I'm looking forward to see you too",
      time: new Date().toLocaleTimeString(),
      isActive: true,
      status: MessageStatus.sent,
    },
  ]);

  return (
    <DefaultBackgroundWrapper>
      <FlashList
        data={messages}
        estimatedItemSize={100}
        renderItem={({ item }) => (
          <ChatMessage
            key={item.id}
            message={item.message}
            time={item.time}
            {...(item.user === "Me" && { isMe: true })}
          />
        )}
        ListHeaderComponent={() => {
          return <ChatHeader chat={chat} isActive={isActive} />;
        }}
      />
    </DefaultBackgroundWrapper>
  );
};

export default Chat;
