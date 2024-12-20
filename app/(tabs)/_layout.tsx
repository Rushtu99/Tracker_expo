import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import tailwindConfig from "@/tailwind.config";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const colors = tailwindConfig.theme.extend.colors;
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors["primary"],
                tabBarInactiveTintColor: colors["text"],
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: "absolute",
                    },
                    default: {
                        backgroundColor: colors["bgsec"],
                        borderTopWidth: 1,
                        borderTopColor: "#faaa00",
                    },
                }),

                headerShown: false,
                // tabBarShowLabel: false,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
            }}
        >
            <Tabs.Screen
                name="details"
                options={{
                    title: "Details",
                    tabBarIcon: ({ color }) => <IconSymbol type="FontAwesome" size={28} name="list" color={color} />,
                }}
            />
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <IconSymbol size={28} name="dashboard" color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color }) => <IconSymbol type="Ionicons" name="settings-sharp" color={color} />,
                }}
            />
        </Tabs>
    );
}
