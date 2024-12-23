import { Text, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SummaryContainer from "@/components/custom/SummaryContainer";
import AddNewEntry from "@/components/custom/AddNewEntry";
import FullViewContainer from "@/components/FullViewContainer";
import GanttChartWithTriggers from "@/components/custom/GanttChart";
import { useSelector, UseSelector } from "react-redux";
import { CustomButton } from "@/components/custom/Formfield";
import { logout } from "@/firebase/library";
import { router } from "expo-router";
export default function HomeScreen() {
    const user = useSelector((state) => state.auth.user);
    const name = user ? user.email : "BOB";
    const handleClick = async()=>{
        try{
            await logout()
            router.replace('/sign-in')
        }
        catch(err){
            console.error(err)
        }
    }
    return (
        <FullViewContainer>
            <View className="bg-bgsec p-4 rounded-lg flex-row ">
                <Text className="text-xl font-bold text-secondary text-center">Welcome {name}</Text>
                <CustomButton handlePress = {handleClick} title="Logout" styles={`border-primary border w-1/6 py-0.5 p-0 text-text ml-auto`} />
            </View>
            <View className="md:container md:mx-auto gap-3">
                <SummaryContainer />
                <GanttChartWithTriggers />
                <AddNewEntry />
            </View>
        </FullViewContainer>
    );
}
