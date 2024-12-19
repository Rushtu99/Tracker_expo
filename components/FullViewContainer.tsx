import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const FullViewContainer = ({ children }) => {
    return (
        <SafeAreaView className="h-full bg-bg">
            <ScrollView>{children}</ScrollView>
        </SafeAreaView>
    );
};

export default FullViewContainer;
