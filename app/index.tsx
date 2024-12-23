import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import "../global.css";

const Index = () => {
    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
    const dispatch = useAppDispatch();
    console.log("aaaa",isAuthenticated)
    return (
        <View className="bg-bg h-full justify-center items-center gap-5">
            <Text className="text-text text-xl font-extrabold">ROOT</Text>
            <Text className="text-secondary text-xl font-bold">App in Progress.....</Text>
            <Link className="text-text text-lg" href="/(tabs)/dashboard">
                {" "}
                to homePage{" "}
            </Link>
        </View>
    );
};

export default Index;
