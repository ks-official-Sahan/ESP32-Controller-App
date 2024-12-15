import AsyncStorage from "@react-native-async-storage/async-storage";

export const APP_NAME = "Aura";
export const SERVER_URL = "https://9e7d-45-121-91-37.ngrok-free.app";

const API_CONFIG = {
  baseURL: `${SERVER_URL}/${APP_NAME}`,
  headers: {
    "Content-Type": "application/json",
  },
};

export default API_CONFIG;

interface ResponseDTO {
  success?: boolean;
  target?: string;
  message?: string;
  data?: any;
  error?: any;
}

export type { ResponseDTO };

export enum RESULT {
  success = "success",
  data = "data",
  target = "target",
  message = "message",
  error = "error",
}

/* 
 Handle User Data Storage
*/

export const saveUser = async (user: any) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
};
