import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { Image } from "expo-image";
import { images } from "@/constants";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatItem, { MessageStatus } from "@/components/chat/ChatItem";
import { useEffect, useState } from "react";

const Chat = () => {
  const [chatList, setChatList] = useState([]);

  const loadChatList = async (list) => {
    setChatList(list);
  };

  useEffect(() => {
    const list = [
      {
        id: 1,
        user: "Chathura",
        message: "Hello Sahan, I'm looking forward to see you",
        time: new Date().toLocaleString(),
        isActive: true,
        status: MessageStatus.sent,
      },
      {
        id: 2,
        user: "Chathura",
        message: "Hello Sahan, I'm looking forward to see you",
        time: new Date().toLocaleString(),
        isActive: true,
        status: MessageStatus.sent,
      },
    ];
    loadChatList(list);
  }, [chatList]);

  return (
    <DefaultBackgroundWrapper isScroll={false}>
      <View className="flex-1 h-full justify-between px-4 py-3">
        <ChatHeader />

        <ScrollView className="flex-1 space-y-4 py-4">
          <FlatList
            data={chatList}
            // keyExtractor={({item}) => item.$id}
            renderItem={(chat) => (
              <ChatItem
                user={chat.item.user}
                message={chat.item.message}
                time={chat.item.time}
                isActive={chat.item.isActive}
                status={chat.item.status}
              />
            )}
          />
        </ScrollView>
      </View>
    </DefaultBackgroundWrapper>
  );
};

export default Chat;
