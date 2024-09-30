import { Alert } from "react-native";
import API_CONFIG, { ResponseDTO, saveUser } from "../../api";

export const getCurrentUser = async () => {
  return {
    email: "Sahan@gmail.com",
    password: "password",
    username: "Sahan",
  };
};

const handleResponse = async (response) => {
  try {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`, {
        cause: response,
        // cause: response.status,
        // response,
      });
    }

    return await response.json();
  } catch (error) {
    throw error; // re-throw the error for error handling
  }
};

const handleError = (error) => {
  console.error("Fetch error:", error);
  /* re-throw the error if needed */
  // throw error;
};

export const signup = async ({ username, email, password }) => {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: API_CONFIG.headers,
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    if (!responseDto.success) {
      return Alert.alert(responseDto.message);
    }
    // if (responseDto.error) throw new Error(responseDto.error);

    const user = responseDto.data;

    // return await saveUser(user);
    return user;
  } catch (error) {
    handleError(error);
  }
};

export const signin = async ({ email, password }) => {
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/auth/signin`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: API_CONFIG.headers,
    });

    const responseDto: ResponseDTO = await handleResponse(response);

    if (!responseDto.success) {
      return Alert.alert(responseDto.message);
    }

    const user = responseDto.data;

    // return await saveUser(user);
    return user;
  } catch (error) {
    handleError(error);
  }
};
