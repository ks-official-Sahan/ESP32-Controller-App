import { useEffect } from "react";

import "react-native-reanimated";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SplashScreen, Stack } from "expo-router";

import GlobalProvider from "@/context/GlobalProvider";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import ROUTES from "@/constants/routes";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) console.log(error);
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
      <GestureHandlerRootView>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ROUTES.TABS} />
          <Stack.Screen name={ROUTES.INDEX} />
          <Stack.Screen name={ROUTES.NOT_FOUND} />
        </Stack>
        <StatusBar style="light" backgroundColor="#161622" />
      </GestureHandlerRootView>
    </GlobalProvider>
  );
};

export default RootLayout;
