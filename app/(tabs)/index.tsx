import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SummaryContainer from "@/components/custom/SummaryContainer";
import AddNewEntry from "@/components/custom/AddNewEntry";
export default function HomeScreen() {
    let data = {
        name: "bob",
    };
    return (
        <>
            <SafeAreaView>
                <ScrollView className="">
                    <View className="text-lg text-blue-950 text-center font-semibold p-4 rounded-lg">
                        Welcome {data.name}
                    </View>
                    <View className="md:container md:mx-auto gap-3">
                        <SummaryContainer />
                        <AddNewEntry />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
