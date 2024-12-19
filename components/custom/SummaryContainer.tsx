import { View, Text } from "react-native";
import React from "react";
import Barchart from "./BarChart";
import Piechart from "./PieChart";
import QuickSummary from "./QuickSummary";
const SummaryContainer = () => {
    return (
        <View className="bg-bgsec space-y-2 rounded border-border border p-2 my-4">
            <Text className="font-semibold text-primary text-xl m-2">Quick Summary</Text>
            <QuickSummary />
        </View>
    );
};

export default SummaryContainer;
