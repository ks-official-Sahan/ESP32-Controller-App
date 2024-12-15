import AsyncStorage from "@react-native-async-storage/async-storage";

const tempFunc = async () => {
  try {
    const user = {
      mobile: "0768701148",
      name: "Sahan",
    };

    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error.message);
  }
};
