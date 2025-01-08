import AsyncStorage from "@react-native-async-storage/async-storage";

export const APP_NAME = "ESP_APP";
export const SERVER_URL = "https://f20b-103-21-165-128.ngrok-free.app";

const API_CONFIG = {
  baseURL: `${SERVER_URL}/${APP_NAME}`,
  wsURL: `${SERVER_URL.replace("http", "ws")}/${APP_NAME}`,
  headers: {
    "Content-Type": "application/json",
  },
};

export default API_CONFIG;

interface ActionDTO {
  isTypeA?: boolean;
  actionName?: string;
  data?: any;
  dataList?: Array<any>;
  actionCode?: string;
  action?: number;
}

export type { ActionDTO };

interface ResponseDTO {
  status?: boolean;
  message?: string;
  data?: any;
  url?: string;
  dataList?: Array<any>;
  code?: string;
  target?: string;
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

export type ReturnData = {
  status: RESULT;
  data?: any;
  target?: string | undefined;
  message?: string | undefined;
};

/* 
 Handle User Data Storage
*/

export type KEYS = "user" | "admin" | "session" | "data";

export const saveData = async (key: KEYS = "user", data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (key: KEYS = "user") => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const removeData = async (key: KEYS = "user") => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
