import API_CONFIG, { ResponseDTO } from "@/lib/api";
import { handleError, handleResponse, handleResult } from "./main";
import { LOAD_CHAT_DATA, LOAD_CHAT_LIST, SEND_MESSAGE } from "@/lib/endpoints";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadChatList = async (uid) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}${LOAD_CHAT_LIST}?uid=${uid}`,
      {
        method: "GET",
        headers: API_CONFIG.headers,
      }
    );

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      // alert(JSON.stringify(result.data));
      // console.log("Chat List Result Data")
    }

    return result;
  } catch (error) {
    handleError(error);
  }
};

export const loadChatData = async (uid, cid) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}${LOAD_CHAT_DATA}?uid=${uid}&cid=${cid}`,
      {
        method: "GET",
        headers: API_CONFIG.headers,
      }
    );

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      // console.log("Chat Result Data");
      // alert(JSON.stringify(result.data));
    }

    return result;
  } catch (error) {
    handleError(error);
  }
};

export const sendMessage = async (uid, cid, message) => {
  try {
    const response = await fetch(API_CONFIG.baseURL + SEND_MESSAGE, {
      method: "POST",
      headers: API_CONFIG.headers,
      body: JSON.stringify({ uid, cid, message }),
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      // console.log("Message Send Result Data");
      // console.log(JSON.stringify(result.data));
      // alert(JSON.stringify(result.data));
    }

    return result;
  } catch (error) {
    handleError(error);
  }
};

const saveChatData = async (chat, chatData) => {
  try {
    await AsyncStorage.setItem(`chat_backup_${chat}`, JSON.stringify(chatData));
  } catch (error) {
    console.log(error);
  }
};

const getChatData = async (chat) => {
  try {
    const chatData = await AsyncStorage.getItem(`chat_backup_${chat}`);
    return chatData ? JSON.parse(chatData) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const removeChatData = async (chat) => {
  try {
    await AsyncStorage.removeItem(`chat_backup_${chat}`);
  } catch (error) {
    console.log(error);
  }
};

export { saveChatData, getChatData, removeChatData };
