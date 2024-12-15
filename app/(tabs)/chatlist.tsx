import { View, KeyboardAvoidingView, Alert } from "react-native";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { router, Href } from "expo-router";
import ChatListHeader from "@/components/chat/ChatListHeader";
import ChatListItem from "@/components/chat/ChatListItem";
import { RESULT } from "@/lib/api";
import { getCurrentUser } from "@/lib/actions/fetch/auth";
import { loadChatList } from "@/lib/actions/fetch/chat";
import { chatListData } from "@/constants";
import EmptyState from "@/components/EmptyState";

const Chat = () => {
  const [chatList, setChatList] = useState([]);

  const fetchChatList = async () => {
    const user = await getCurrentUser();
    if (!user) return router.replace("/sign-in");

    const result = await loadChatList(user.id);

    if (result.status === RESULT.data) {
      setChatList([...result.data]);
    }
  };

  useEffect(() => {
    fetchChatList();
  }, []);

  const openChat = ({ user, id }) => {
    // Alert.alert("Chat", user);
    const route = `/chat/${user}?id=${id}`;
    router.push(route as Href<string>);
  };

  return (
    <DefaultBackgroundWrapper isScroll={false}>
      <View className="flex-1 h-full justify-between px-4 py-3">
        <ChatListHeader />

        <KeyboardAvoidingView className="flex-1 space-y-4 py-4">
          <FlashList
            data={chatList}
            // keyExtractor={({ item }) => item.$id}
            renderItem={(chat) => (
              <ChatListItem
                key={chat.item.id}
                keyId={chat.item.id}
                user={chat.item.user}
                message={chat.item.message}
                time={chat.item.time}
                isActive={chat.item.isActive}
                status={chat.item.status}
                isFromUser={chat.item.isFromUser}
                isAvatar={chat.item.isAvatar}
                avatar={chat.item.avatar}
                avatarLetters={chat.item.avatarLetters}
                containerStyle={"px-2 mt-1 border-b border-gray-800"}
                handleChat={() => {
                  openChat({ user: chat.item.user, id: chat.item.id });
                }}
                handleAvatar={() => {
                  Alert.alert("Avatar", chat.item.user);
                }}
              />
            )}
            ListEmptyComponent={() => {
              return (
                <EmptyState
                  title={"Loading Chats"}
                  subtitle={"Please wait until chats being loaded"}
                  handlePress={() => {
                    fetchChatList();
                  }}
                  buttonText={"Try Again"}
                />
              );
            }}
            // estimatedItemSize={chatList.length}
            estimatedItemSize={100}
          />
        </KeyboardAvoidingView>
      </View>
    </DefaultBackgroundWrapper>
  );
};

export default Chat;
