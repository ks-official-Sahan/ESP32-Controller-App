import { Tabs, Redirect } from "expo-router";
import { Text, View } from "react-native";

import icons from "../../constants/icons";
import { Image } from "expo-image";
import ROUTES from "@/constants/routes";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        contentFit="contain"
        tintColor={color}
        transition={1000}
        className="w-6 h-6"
      />
      <Text
        className={`${
          focused ? "font-psemibold" : "font-pregular"
        } text-xs w-full`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

export const TabIonIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Ionicons name={icon} size={24} color="white" />
      <Text
        className={`${
          focused ? "font-psemibold" : "font-pregular"
        } text-xs w-full`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            height: 60,
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
          },
        }}
      >
        <Tabs.Screen
          name={ROUTES.HOME}
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.home}
                  name={"Home"}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name={ROUTES.BOOKMARK}
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.bookmark}
                  name={"Bookmark"}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name={ROUTES.CREATE}
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.plus}
                  name={"Create"}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name={ROUTES.CHAT}
          options={{
            title: "Message",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                // <TabIcon
                //   icon={icons.menu}
                //   name={"Message"}
                //   color={color}
                //   focused={focused}
                // />
                <TabIonIcon
                  icon={"chatbubble-outline"}
                  name={"Message"}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name={ROUTES.PROFILE}
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => {
              return (
                <TabIcon
                  icon={icons.profile}
                  name={"Profile"}
                  color={color}
                  focused={focused}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
