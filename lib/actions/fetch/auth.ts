import { Alert } from "react-native";
import API_CONFIG, { getData, ResponseDTO, RESULT, saveData } from "../../api";
import { handleError, handleResponse, handleResult } from "./main";
import { router } from "expo-router";
import { SIGN_IN, SIGN_UP } from "@/lib/endpoints";

export const getCurrentUser = async () => {
  const user = await getData();
  if (user) return user;
  // return Alert.alert("Please Login");
  // return router.push("/sign-in");
  return router.replace("/");
};

/* Sign Up */
export const signup = async ({ username, email, password }) => {
  try {
    const response = await fetch(API_CONFIG.baseURL + SIGN_UP, {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: API_CONFIG.headers,
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      await saveData("data", result.data);
    }

    return result;
  } catch (error) {
    handleError(error);
  }
};

export const signin = async ({ email, password }) => {
  try {
    const response = await fetch(API_CONFIG.baseURL + SIGN_IN, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: API_CONFIG.headers,
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    await saveData("data", result.data);

    return result;
  } catch (error) {
    handleError(error);
  }
};

/*
  * Exact Same Thing

    // if (!responseDto.success) {
    //   Alert.alert(responseDto.message);
    //   return { status: RESULT.message, target: responseDto.target };
    // }

    // const user = responseDto.data;

    // await saveData("data", user);
    // return { status: RESULT.data };

    ||

    const result = handleResult(responseDto);

    await saveData("data", result.data);

    return result;
*/
