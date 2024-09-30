import { useEffect } from "react";

import "react-native-reanimated";

import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SplashScreen, Stack } from "expo-router";

import GlobalProvider from "@/context/GlobalProvider";

import ROUTES from "@/constants/routes";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // useFont is a hook. useFonts(map: string | Record<string, FontSource>): [boolean, Error | null]
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

  // useEffect allows us to perform some actions while the page, or the screen, is loading.
  /*
    useEffect hook: provide a callback function and the dependency array. 
    And the dependency array, meaning recall this function whenever dependency change. 
    Empty dependency array means it only calls useEffect on loading.
  */
  useEffect(() => {
    // if error occurred on font loading
    if (error) console.log(error);
    if (error) throw error;

    // when completely loaded hide native splash screen immediately
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  // if something else happens show nothing
  if (!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ROUTES.TABS} />
        <Stack.Screen name={ROUTES.AUTH} />
        <Stack.Screen name={ROUTES.INDEX} />
        <Stack.Screen name={ROUTES.SEARCH} />
        <Stack.Screen name={ROUTES.NOT_FOUND} />
        {/* <Stack.Screen name={ROUTES.TABS} options={{ headerShown: false }} /> */}
      </Stack>
      <StatusBar style="light" backgroundColor="#161622" />
    </GlobalProvider>
  );
};

export default RootLayout;
