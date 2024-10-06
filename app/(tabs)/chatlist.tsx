import { View, KeyboardAvoidingView, Alert } from "react-native";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import ChatItem, { MessageStatus } from "@/components/chat/ChatListItem";
import { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { router, Href } from "expo-router";
import ChatListHeader from "@/components/chat/ChatListHeader";
import ChatListItem from "@/components/chat/ChatListItem";

const Chat = () => {
  const [chatList, setChatList] = useState([]);

  const loadChatList = async (list) => {
    setChatList(list);
  };

  useEffect(() => {
    const list = [
      {
        id: 1,
        user: "Shashi",
        message: "Sahi, I'm looking forward to see you",
        time: new Date().toLocaleString(),
        isActive: true,
        status: MessageStatus.sent,
      },
      {
        id: 2,
        user: "Amandi",
        message: "Hello Sahan, I'm looking forward to see you",
        time: new Date().toLocaleString(),
        isActive: true,
        status: MessageStatus.sent,
      },
    ];
    loadChatList(list);
  }, []);

  const openChat = (user) => {
    // Alert.alert("Chat", user);
    const route = `/chat/${user}`;
    router.push(route as Href<string>);
  };

  return (
    <DefaultBackgroundWrapper isScroll={false}>
      <View className="flex-1 h-full justify-between px-4 py-3">
        <ChatListHeader />

        <KeyboardAvoidingView className="flex-1 space-y-4 py-4">
          <FlashList
            data={chatList}
            // keyExtractor={({item}) => item.$id}
            renderItem={(chat) => (
              <ChatListItem
                key={chat.item.id}
                user={chat.item.user}
                message={chat.item.message}
                time={chat.item.time}
                isActive={chat.item.isActive}
                status={chat.item.status}
                containerStyle={"px-2 mt-1 border-b border-gray-800"}
                handleChat={() => {
                  openChat(chat.item.user);
                }}
                handleAvatar={() => {
                  Alert.alert("Avatar", chat.item.user);
                }}
              />
            )}
            estimatedItemSize={chatList.length}
          />
        </KeyboardAvoidingView>
      </View>
    </DefaultBackgroundWrapper>
  );
};

export default Chat;
