import API_CONFIG, { ResponseDTO, RESULT } from "@/lib/api";
import { handleError, handleResponse } from "./main";
import { Alert } from "react-native";

export const loadChatList = async (uid) => {
  try {
    const response = await fetch(
      `${API_CONFIG.baseURL}/api/LoadChatData?uid=${uid}`,
      {
        method: "GET",
        headers: API_CONFIG.headers,
      }
    );

    const responseDto: ResponseDTO = await handleResponse(response);

    if (!responseDto.success) {
      Alert.alert(responseDto.message);
      return { status: RESULT.message, target: responseDto.target };
    }

    if (responseDto.data) {
      return { status: RESULT.data, data: responseDto.data };
    }

    return { status: RESULT.success };
  } catch (error) {
    handleError(error);
  }
};
