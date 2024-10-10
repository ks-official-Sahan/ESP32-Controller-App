import { Alert } from "react-native";
import API_CONFIG, { getUser, ResponseDTO, RESULT, saveUser } from "../../api";
import { handleError, handleResponse, handleResult } from "./main";
import { router } from "expo-router";

export const getCurrentUser = async () => {
  const user = await getUser();
  if (user) return user;
  // return Alert.alert("Please Login");
  // return router.push("/sign-in");
  return router.replace("/");
};

/* Sign Up */
export const signup = async ({ username, email, password }) => {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/auth/SignUp`, {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: API_CONFIG.headers,
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    const result = handleResult(responseDto);

    if (result.data) {
      await saveUser(result.data);
    }

    return result;
  } catch (error) {
    handleError(error);
  }
};

export const signin = async ({ email, password }) => {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/auth/SignIn`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: API_CONFIG.headers,
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    // if (!responseDto.success) {
    //   Alert.alert(responseDto.message);
    //   return { status: RESULT.message, target: responseDto.target };
    // }

    // const user = responseDto.data;

    // await saveUser(user);
    // return { status: RESULT.data };

    const result = handleResult(responseDto);

    await saveUser(result.data);

    return result;
  } catch (error) {
    handleError(error);
  }
};
