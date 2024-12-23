import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { Slot } from "expo-router";

import SessionProvider from "@/store/SessionProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// Prevent the splash screen from auto-hiding before asset loading is complete.

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    console.log("HEREE")
    return (
        <SessionProvider>
            <GestureHandlerRootView>
                <Slot />
            </GestureHandlerRootView>
        </SessionProvider>
    );
}
