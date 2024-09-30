import API_CONFIG, { ResponseDTO } from "../../api";
import fetchInstance, { FetchInstanceError } from "../../fetch";

export const getCurrentUser = async () => {
  return {
    email: "Sahan@gmail.com",
    password: "password",
    username: "Sahan",
  };
};

export const signup = async ({ username, email, password }) => {
  try {
    const response: ResponseDTO = await fetchInstance("/auth/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.success) {
      return response.message;
    }

    const user = response.data;

    return user;
  } catch (error) {
    console.log(error);
    if (error instanceof FetchInstanceError) {
      console.log(await error.response.text());
    }
  }
};
