import { Alert } from "react-native";
import API_CONFIG, { getUser, ResponseDTO, RESULT, saveUser } from "../../api";
import { handleError, handleResponse } from "./main";

export const getCurrentUser = async () => {
  const user = await getUser();
  if (user) return user;
  return Alert.alert("Please Login");
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

    if (!responseDto.success) {
      // if (responseDto.error) throw new Error(responseDto.error);
      Alert.alert(responseDto.message);
      return { status: RESULT.message, target: responseDto.target };
    }

    // if user data received save and return user
    if (responseDto.data) {
      const user = responseDto.data;
      await saveUser(user);

      return { status: RESULT.data };
    }

    return { status: RESULT.success };
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

    if (!responseDto.success) {
      Alert.alert(responseDto.message);
      return { status: RESULT.message, target: responseDto.target };
    }

    const user = responseDto.data;

    await saveUser(user);
    return { status: RESULT.data };
  } catch (error) {
    handleError(error);
  }
};
