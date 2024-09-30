import AsyncStorage from "@react-native-async-storage/async-storage";

const API_CONFIG = {
  baseURL: "https://a552-45-121-91-16.ngrok-free.app/SmartTrade",
  headers: {
    "Content-Type": "application/json",
  },
};

export default API_CONFIG;

interface ResponseDTO {
  success?: boolean;
  message?: string;
  data?: any;
  error?: any;
}

export type { ResponseDTO };

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
