import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }: any) => {
  return (
    <View>
      <Image source={icon} resizeMode="contain" className="w-6 h-6" />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                name="Home"
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
