import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SummaryContainer from "@/components/custom/SummaryContainer";
import AddNewEntry from "@/components/custom/AddNewEntry";
import FullViewContainer from "@/components/FullViewContainer";
import GanttChartWithTriggers from "@/components/custom/GanttChart";
import { useSelector, UseSelector } from "react-redux";
export default function HomeScreen() {
    const user  = useSelector((state)=>state.auth.user);
    const name = user?user.name:'BOB';;
    return (
        <FullViewContainer>
            <View className="bg-bgsec p-4 rounded-lg">
                <Text className="text-xl font-bold text-secondary text-center">Welcome {name}</Text>
            </View>
            <View className="md:container md:mx-auto gap-3">
                <SummaryContainer />
                <GanttChartWithTriggers />
                <AddNewEntry />
            </View>
        </FullViewContainer>
    );
}
