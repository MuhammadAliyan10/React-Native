import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/CustomButton";

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            resizeMode="contain"
            source={images.cards}
            className="w-full max-w-[380px] h-[300px]"
          />
          <View className="relative mt-5">
            <Text className="text-4xl font-bold text-white text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[130px] h-[15px] absolute -bottom-2 -right-7"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where creativity meets innovation:embark on journey of limitless
            exploration with Aora
          </Text>
          <CustomButton
            title={"Continue with Email"}
            handlePress={() => router.push("/sign-in")}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor={"#161122"} style={"light"} />
    </SafeAreaView>
  );
};

export default index;
