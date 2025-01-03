import API_CONFIG, { ActionDTO, ResponseDTO } from "@/lib/api";
import { ACTION } from "@/lib/endpoints";
import { handleError, handleResponse, handleResult } from "./main";

export const doActionPost = async ({
  action,
  actionCode,
  data,
  isTypeA,
  actionName,
}: ActionDTO) => {
  try {
    const response = await fetch(API_CONFIG.baseURL + ACTION, {
      method: "POST",
      body: JSON.stringify({ action }),
      headers: API_CONFIG.headers,
    });

    const responseDto: ResponseDTO = await handleResponse(response);
    console.log(responseDto);

    const result = handleResult(responseDto);
    console.log(result);

    // await saveData("data", result.data);

    return result;
  } catch (error) {
    handleError(error);
  }
};

export const doActionGet = async ({
  action,
  actionCode,
  data,
  isTypeA,
  actionName,
}: ActionDTO) => {
  try {
    const url = new URL(`${API_CONFIG.baseURL}${ACTION}?action=${action}`);
    //url.searchParams.append("action", action);

    const response = await fetch(url, {
      method: "GET",
      headers: API_CONFIG.headers,
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    // await saveData("data", result.data);

    return result;
  } catch (error) {
    handleError(error);
  }
};
