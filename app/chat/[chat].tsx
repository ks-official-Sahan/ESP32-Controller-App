import ChatHeader from "@/components/chat/ChatHeader";
import ChatInput from "@/components/chat/ChatInput";
import { MessageStatus } from "@/components/chat/ChatListItem";
import ChatMessage from "@/components/chat/ChatMessage";
import EmptyState from "@/components/EmptyState";
import DefaultBackgroundWrapper from "@/components/wrappers/DefaultBackgroundWrapper";
import { messageListData } from "@/constants";
import { getCurrentUser } from "@/lib/actions/fetch/auth";
import {
  loadChatData,
  saveChatData,
  sendMessage,
} from "@/lib/actions/fetch/chat";
import { FlashList } from "@shopify/flash-list";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";

const Chat = () => {
  /* get params from dynamic route */
  let { chat, id } = useLocalSearchParams();
  chat = chat as string;
  id = id as string;

  /* useRef for focusing */
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  /* States for the Chat */
  const [isActive, setIsActive] = useState(true);
  const [inputText, setInputText] = useState(""); // State for input text

  const fetchMessages = async () => {
    const user = await getCurrentUser();
    if (!user) return router.replace("/sign-in");

    const result = await loadChatData(user.id, id);

    if (result.data) {
      // console.log(result.data);
      setMessages([...result.data]);
    }
    // let messages = [...messageListData];
    // setMessages(messages);
  };

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSend = async () => {
    // Alert.alert("Send", inputText);
    const message = {
      id: 0,
      user: "Me",
      message: inputText,
      time: new Date().toLocaleTimeString(),
      status: MessageStatus.sending,
    };

    const user = await getCurrentUser();
    if (!user) return router.replace("/sign-in");

    const result = await sendMessage(user.id, id, inputText);

    if (result.data) {
      const list = [...messages, JSON.parse(result.data)];
      setMessages(list);
      return setInputText("");
    }
    setMessages([...messages, message]);
    await saveChatData(chat, messages);
    setInputText("");
  };

  // Append selected emoji to the input field
  const handleEmojiSelect = (emoji) => {
    setInputText((prevText) => prevText + emoji);
  };

  return (
    <DefaultBackgroundWrapper isScroll={false}>
      {/* FlashList for messages */}
      <ChatHeader chat={chat} isActive={isActive} />

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
          //return <ChatHeader chat={chat} isActive={isActive} />;
          return <></>;
        }}
        ListEmptyComponent={() => (
          <EmptyState
            title={"No Messages"}
            subtitle={"Start your conversation now!"}
            buttonText={"+ Start Conversation"}
            handlePress={handleFocus}
          />
        )}
        scrollToOverflowEnabled={true}
      />

      <ChatInput
        handleEmojiSelect={handleEmojiSelect}
        inputText={inputText}
        setInputText={setInputText}
        handleSend={handleSend}
        inputRef={inputRef}
      />
    </DefaultBackgroundWrapper>
  );
};

export default Chat;
