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
