import { MessageStatus } from "@/components/chat/ChatListItem";

export const chatListEmptyData = [];

export const chatListData = [
  {
    id: 1,
    user: "Shashi",
    message: "Sahi, I'm looking forward to see you",
    time: new Date().toLocaleString(),
    isActive: true,
    status: MessageStatus.sent,
    isFromUser: true,
    isAvatar: false,
    avatar: "",
    avatarLetters: "SH",
  },
  {
    id: 2,
    user: "Chathura",
    message: "Hello Sahan, I'm looking forward to see you",
    time: new Date().toLocaleString(),
    isActive: true,
    status: MessageStatus.sent,
    isFromUser: true,
    isAvatar: false,
    avatar: "",
    avatarLetters: "CH",
  },
];

export const messageListData = [
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
