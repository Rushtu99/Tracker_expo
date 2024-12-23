import { Redirect, Tabs } from "expo-router";
import React from "react";
import { Platform, Text } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import tailwindConfig from "@/tailwind.config";
import { useAppSelector } from "@/store/hooks";

function TabLayout() {
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
                    title: "Analytics",
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

const AppLayout = ()=> {
    const authState = useAppSelector((state) => state.auth);
    if (authState.isLoading) {
        return (
            <>
                <Text className="text-text text-lg">LOADING...</Text>
            </>
        );
    }
    if (!authState.user) {
        return <Redirect href="sign-in" />;
    }

    return <TabLayout />;
}

export default AppLayout
