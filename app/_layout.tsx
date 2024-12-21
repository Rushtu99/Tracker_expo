import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "@/store";
// Prevent the splash screen from auto-hiding before asset loading is complete.

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    return (
        <Provider store={store}>
            <Stack
                options={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </Provider>
    );
}
