import API_CONFIG, { ResponseDTO } from "@/lib/api";
import { handleError, handleResponse, handleResult } from "./main";

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
